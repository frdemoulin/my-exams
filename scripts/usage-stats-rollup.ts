import "dotenv/config";
import { PrismaClient, UsageDailyCategory, ErrorDailyCategory } from "@prisma/client";

const prisma = new PrismaClient();

const ALL_LABEL = "__all__";
const LOOKBACK_DAYS = Number(process.env.USAGE_STATS_LOOKBACK_DAYS ?? "3");
const USAGE_EVENT_RETENTION_DAYS = Number(process.env.USAGE_EVENT_RETENTION_DAYS ?? "180");
const ERROR_LOG_RETENTION_DAYS = Number(process.env.ERROR_LOG_RETENTION_DAYS ?? "180");
const DAILY_RETENTION_DAYS = Number(process.env.USAGE_DAILY_RETENTION_DAYS ?? "730");

const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const assertPositiveInt = (value: number, label: string) => {
  if (!Number.isFinite(value) || value <= 0) {
    console.error(`${label} doit etre un entier positif.`);
    process.exit(1);
  }
};

assertPositiveInt(LOOKBACK_DAYS, "USAGE_STATS_LOOKBACK_DAYS");
assertPositiveInt(USAGE_EVENT_RETENTION_DAYS, "USAGE_EVENT_RETENTION_DAYS");
assertPositiveInt(ERROR_LOG_RETENTION_DAYS, "ERROR_LOG_RETENTION_DAYS");
assertPositiveInt(DAILY_RETENTION_DAYS, "USAGE_DAILY_RETENTION_DAYS");

async function rollupUsageStatsForDay(dayStart: Date, dayEnd: Date) {
  const usageEvents = await prisma.usageEvent.findMany({
    where: {
      createdAt: { gte: dayStart, lt: dayEnd },
    },
  });

  const counts = new Map<string, number>();

  const addCount = (category: UsageDailyCategory, label: string, delta: number) => {
    const key = `${category}::${label}`;
    counts.set(key, (counts.get(key) ?? 0) + delta);
  };

  const totalSearches = usageEvents.length;
  const zeroSearches = usageEvents.filter((event) => event.resultsCount === 0).length;
  if (totalSearches > 0) {
    addCount(UsageDailyCategory.SEARCH_TOTAL, ALL_LABEL, totalSearches);
  }
  if (zeroSearches > 0) {
    addCount(UsageDailyCategory.SEARCH_ZERO, ALL_LABEL, zeroSearches);
  }

  usageEvents.forEach((event) => {
    if (event.searchTerm?.trim()) {
      addCount(UsageDailyCategory.SEARCH_TERM, event.searchTerm.trim().toLowerCase(), 1);
    }
    if (event.diploma) {
      addCount(UsageDailyCategory.SEARCH_DIPLOMA, event.diploma, 1);
    }
    if (event.subject) {
      addCount(UsageDailyCategory.SEARCH_SUBJECT, event.subject, 1);
    }
    if (event.sessionYear) {
      addCount(UsageDailyCategory.SEARCH_SESSION, String(event.sessionYear), 1);
    }
  });

  const tasks = Array.from(counts.entries()).map(([key, count]) => {
    const [category, ...labelParts] = key.split("::");
    const label = labelParts.join("::");
    return prisma.usageDailyStat.upsert({
      where: {
        date_category_label: {
          date: dayStart,
          category: category as UsageDailyCategory,
          label,
        },
      },
      update: { count },
      create: {
        date: dayStart,
        category: category as UsageDailyCategory,
        label,
        count,
      },
    });
  });

  await Promise.all(tasks);
}

async function rollupErrorStatsForDay(dayStart: Date, dayEnd: Date) {
  const logs = await prisma.errorLog.findMany({
    where: {
      createdAt: { gte: dayStart, lt: dayEnd },
    },
  });

  const counts = new Map<string, { count: number; totalDurationMs: number }>();

  const addCount = (
    category: ErrorDailyCategory,
    label: string,
    deltaCount: number,
    deltaDuration: number
  ) => {
    const key = `${category}::${label}`;
    const current = counts.get(key) ?? { count: 0, totalDurationMs: 0 };
    counts.set(key, {
      count: current.count + deltaCount,
      totalDurationMs: current.totalDurationMs + deltaDuration,
    });
  };

  const pdf404Logs = logs.filter((log) => log.type === "PDF_404");
  if (pdf404Logs.length > 0) {
    addCount(ErrorDailyCategory.PDF_404, ALL_LABEL, pdf404Logs.length, 0);
    pdf404Logs.forEach((log) => {
      if (log.path) {
        addCount(ErrorDailyCategory.PDF_404, log.path, 1, 0);
      }
    });
  }

  const slowLogs = logs.filter((log) => log.type === "API_SLOW");
  if (slowLogs.length > 0) {
    addCount(
      ErrorDailyCategory.API_SLOW,
      ALL_LABEL,
      slowLogs.length,
      slowLogs.reduce((acc, log) => acc + (log.durationMs ?? 0), 0)
    );
    slowLogs.forEach((log) => {
      if (log.path) {
        addCount(ErrorDailyCategory.API_SLOW, log.path, 1, log.durationMs ?? 0);
      }
    });
  }

  const tasks = Array.from(counts.entries()).map(([key, value]) => {
    const [category, ...labelParts] = key.split("::");
    const label = labelParts.join("::");
    return prisma.errorDailyStat.upsert({
      where: {
        date_category_label: {
          date: dayStart,
          category: category as ErrorDailyCategory,
          label,
        },
      },
      update: { count: value.count, totalDurationMs: value.totalDurationMs || null },
      create: {
        date: dayStart,
        category: category as ErrorDailyCategory,
        label,
        count: value.count,
        totalDurationMs: value.totalDurationMs || null,
      },
    });
  });

  await Promise.all(tasks);
}

async function purgeOldData() {
  const now = new Date();
  const usageCutoff = addDays(startOfDay(now), -USAGE_EVENT_RETENTION_DAYS);
  const errorCutoff = addDays(startOfDay(now), -ERROR_LOG_RETENTION_DAYS);
  const dailyCutoff = addDays(startOfDay(now), -DAILY_RETENTION_DAYS);

  const [usageResult, errorResult, dailyUsageResult, dailyErrorResult] =
    await Promise.all([
      prisma.usageEvent.deleteMany({ where: { createdAt: { lt: usageCutoff } } }),
      prisma.errorLog.deleteMany({ where: { createdAt: { lt: errorCutoff } } }),
      prisma.usageDailyStat.deleteMany({ where: { date: { lt: dailyCutoff } } }),
      prisma.errorDailyStat.deleteMany({ where: { date: { lt: dailyCutoff } } }),
    ]);

  console.log(
    `🧹 Purge : usageEvent=${usageResult.count}, errorLog=${errorResult.count}, usageDaily=${dailyUsageResult.count}, errorDaily=${dailyErrorResult.count}`
  );
}

async function run() {
  const today = startOfDay(new Date());
  const tasks: Array<Promise<void>> = [];

  for (let i = 1; i <= LOOKBACK_DAYS; i += 1) {
    const dayStart = addDays(today, -i);
    const dayEnd = addDays(dayStart, 1);
    tasks.push(
      rollupUsageStatsForDay(dayStart, dayEnd),
      rollupErrorStatsForDay(dayStart, dayEnd)
    );
  }

  await Promise.all(tasks);
  await purgeOldData();
}

run()
  .catch((error) => {
    console.error("❌ Erreur rollup usage stats:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
