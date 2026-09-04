import prisma from "@/lib/db/prisma";
import { Prisma, User } from "@prisma/client";

export type UserDetail = Prisma.UserGetPayload<{
    select: {
        id: true;
        name: true;
        email: true;
        emailVerified: true;
        image: true;
        roles: true;
        createdAt: true;
        updatedAt: true;
        accounts: {
            select: {
                id: true;
                provider: true;
                providerAccountId: true;
                type: true;
                createdAt: true;
                updatedAt: true;
            };
        };
        sessions: {
            select: {
                id: true;
                expires: true;
                createdAt: true;
                updatedAt: true;
            };
        };
        Authenticator: {
            select: {
                credentialID: true;
                credentialDeviceType: true;
                credentialBackedUp: true;
                counter: true;
                transports: true;
                providerAccountId: true;
            };
        };
    };
}>;

export async function fetchUsers(): Promise<User[]> {
    return await prisma.user.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchUserById(id: string): Promise<UserDetail | null> {
    return prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            roles: true,
            createdAt: true,
            updatedAt: true,
            accounts: {
                select: {
                    id: true,
                    provider: true,
                    providerAccountId: true,
                    type: true,
                    createdAt: true,
                    updatedAt: true,
                },
            },
            sessions: {
                select: {
                    id: true,
                    expires: true,
                    createdAt: true,
                    updatedAt: true,
                },
            },
            Authenticator: {
                select: {
                    credentialID: true,
                    credentialDeviceType: true,
                    credentialBackedUp: true,
                    counter: true,
                    transports: true,
                    providerAccountId: true,
                },
            },
        },
    });
}

import { Role, UserPedagogicalAudience } from "@prisma/client";
import { getActiveAcademicYear } from "@/core/academic-year";
import {
  getAvailableAcademicEnrollmentOptions,
  formatEnrollmentPayloadDescription,
} from "@/core/academic-enrollment";

export type AdminUserListItem = {
  id: string;
  name: string | null;
  email: string | null;
  roles: Role;
  createdAt: Date;
  updatedAt: Date;
  activeEnrollment: {
    id: string;
    audience: UserPedagogicalAudience;
    scopeLabel: string;
    status: "ENROLLED" | "ONBOARDING_REQUIRED";
    updatedAt: Date;
  } | null;
};

export type FetchUsersForAdminParams = {
  search?: string;
  page?: number | string;
  pageSize?: number | string;
};

export type FetchUsersForAdminResult = {
  users: AdminUserListItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  activeYearCode: string | null;
};

export async function fetchUsersForAdmin(
  params: FetchUsersForAdminParams = {}
): Promise<FetchUsersForAdminResult> {
  const activeYear = await getActiveAcademicYear().catch(() => null);

  const page = Math.max(1, Math.floor(Number(params.page) || 1));
  const pageSize = Math.min(50, Math.max(5, Math.floor(Number(params.pageSize) || 10)));
  const skip = (page - 1) * pageSize;

  const rawSearch = typeof params.search === "string" ? params.search.trim() : "";
  const search = rawSearch.slice(0, 100);

  const where: Prisma.UserWhereInput = search
    ? {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      }
    : {};

  const [rawUsers, totalCount] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        createdAt: true,
        updatedAt: true,
        academicEnrollments: activeYear
          ? {
              where: { academicYearId: activeYear.id },
              select: {
                id: true,
                audience: true,
                secondaryGradeId: true,
                healthProgramVersionId: true,
                healthPathwayId: true,
                updatedAt: true,
              },
            }
          : false,
      },
    }),
    prisma.user.count({ where }),
  ]);

  const gradeIds = new Set<string>();
  const versionIds = new Set<string>();
  const pathwayIds = new Set<string>();

  for (const u of rawUsers) {
    const active = (u as any).academicEnrollments?.[0];
    if (active) {
      if (active.secondaryGradeId) gradeIds.add(active.secondaryGradeId);
      if (active.healthProgramVersionId) versionIds.add(active.healthProgramVersionId);
      if (active.healthPathwayId) pathwayIds.add(active.healthPathwayId);
    }
  }

  const [grades, versions, pathways] = await Promise.all([
    gradeIds.size > 0
      ? prisma.grade.findMany({
          where: { id: { in: Array.from(gradeIds) } },
          select: { id: true, shortDescription: true, longDescription: true },
        })
      : [],
    versionIds.size > 0
      ? prisma.healthProgramVersion.findMany({
          where: { id: { in: Array.from(versionIds) } },
          select: {
            id: true,
            label: true,
            program: { select: { label: true } },
            institution: { select: { name: true } },
          },
        })
      : [],
    pathwayIds.size > 0
      ? prisma.healthPathway.findMany({
          where: { id: { in: Array.from(pathwayIds) } },
          select: { id: true, name: true },
        })
      : [],
  ]);

  const gradeMap = new Map(grades.map((g) => [g.id, g.shortDescription || g.longDescription]));
  const versionMap = new Map(versions.map((v) => [v.id, v]));
  const pathwayMap = new Map(pathways.map((p) => [p.id, p.name]));

  const users: AdminUserListItem[] = rawUsers.map((u) => {
    const active = (u as any).academicEnrollments?.[0];
    let activeEnrollment: AdminUserListItem["activeEnrollment"] = null;

    if (active) {
      let scopeLabel = "Inconnu";
      if (active.audience === "SECONDARY") {
        scopeLabel = gradeMap.get(active.secondaryGradeId) || "Secondaire";
      } else if (active.audience === "HEALTH") {
        const v = versionMap.get(active.healthProgramVersionId);
        const pName = active.healthPathwayId ? pathwayMap.get(active.healthPathwayId) : null;
        if (v) {
          scopeLabel = `${v.program.label} — ${v.institution.name}${pName ? ` (${pName})` : ""}`;
        } else {
          scopeLabel = "Santé";
        }
      }

      activeEnrollment = {
        id: active.id,
        audience: active.audience,
        scopeLabel,
        status: "ENROLLED",
        updatedAt: active.updatedAt,
      };
    }

    return {
      id: u.id,
      name: u.name,
      email: u.email,
      roles: u.roles,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
      activeEnrollment,
    };
  });

  const totalPages = Math.ceil(totalCount / pageSize) || 1;

  return {
    users,
    totalCount,
    page,
    pageSize,
    totalPages,
    activeYearCode: activeYear ? activeYear.code : null,
  };
}

export type AdminUserDetailResult = {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    roles: Role;
    createdAt: Date;
    updatedAt: Date;
  };
  activeYear: {
    id: string;
    code: string;
    label: string;
  } | null;
  activeEnrollment: {
    id: string;
    audience: UserPedagogicalAudience;
    secondaryGradeId: string | null;
    healthProgramVersionId: string | null;
    healthPathwayId: string | null;
    scopeLabel: string;
    createdAt: Date;
    updatedAt: Date;
    expectedUpdatedAt: string;
    lockedAt: Date | null;
    createdBy: string;
    createdByActorName: string | null;
    hasPedagogicalActivity: boolean;
    activityCounts: {
      attempts: number;
      progress: number;
      mockExams: number;
    };
  } | null;
  allEnrollments: Array<{
    id: string;
    academicYearCode: string;
    academicYearLabel: string;
    isCurrent: boolean;
    audience: UserPedagogicalAudience;
    scopeLabel: string;
    createdAt: Date;
    createdBy: string;
    lockedAt: Date | null;
  }>;
  corrections: Array<{
    id: string;
    enrollmentId: string;
    academicYearCode: string;
    actorAdminName: string;
    reason: string;
    beforeLabel: string;
    afterLabel: string;
    createdAt: Date;
  }>;
  availableOptions: Awaited<ReturnType<typeof getAvailableAcademicEnrollmentOptions>>;
};

export async function fetchUserAdminDetail(id: string): Promise<AdminUserDetailResult | null> {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      roles: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    return null;
  }

  const [activeYear, availableOptions, rawEnrollments] = await Promise.all([
    getActiveAcademicYear().catch(() => null),
    getAvailableAcademicEnrollmentOptions(),
    prisma.userAcademicEnrollment.findMany({
      where: { userId: id },
      orderBy: { academicYear: { startsAt: "desc" } },
      include: {
        academicYear: true,
        corrections: {
          orderBy: { createdAt: "desc" },
        },
      },
    }),
  ]);

  // Collect distinct IDs for batch resolution (grades, versions, pathways, admins)
  const gradeIds = new Set<string>();
  const versionIds = new Set<string>();
  const pathwayIds = new Set<string>();
  const adminActorIds = new Set<string>();

  for (const e of rawEnrollments) {
    if (e.secondaryGradeId) gradeIds.add(e.secondaryGradeId);
    if (e.healthProgramVersionId) versionIds.add(e.healthProgramVersionId);
    if (e.healthPathwayId) pathwayIds.add(e.healthPathwayId);
    if (e.createdByActorId) adminActorIds.add(e.createdByActorId);

    for (const c of e.corrections) {
      if (c.actorAdminId) adminActorIds.add(c.actorAdminId);
      const bp = c.beforePayload as any;
      if (bp?.secondaryGradeId) gradeIds.add(bp.secondaryGradeId);
      if (bp?.healthProgramVersionId) versionIds.add(bp.healthProgramVersionId);
      if (bp?.healthPathwayId) pathwayIds.add(bp.healthPathwayId);
      const ap = c.afterPayload as any;
      if (ap?.secondaryGradeId) gradeIds.add(ap.secondaryGradeId);
      if (ap?.healthProgramVersionId) versionIds.add(ap.healthProgramVersionId);
      if (ap?.healthPathwayId) pathwayIds.add(ap.healthPathwayId);
    }
  }

  const [grades, versions, pathways, adminUsers] = await Promise.all([
    gradeIds.size > 0
      ? prisma.grade.findMany({
          where: { id: { in: Array.from(gradeIds) } },
          select: { id: true, shortDescription: true, longDescription: true },
        })
      : [],
    versionIds.size > 0
      ? prisma.healthProgramVersion.findMany({
          where: { id: { in: Array.from(versionIds) } },
          select: {
            id: true,
            label: true,
            program: { select: { label: true } },
            institution: { select: { name: true } },
          },
        })
      : [],
    pathwayIds.size > 0
      ? prisma.healthPathway.findMany({
          where: { id: { in: Array.from(pathwayIds) } },
          select: { id: true, name: true },
        })
      : [],
    adminActorIds.size > 0
      ? prisma.user.findMany({
          where: { id: { in: Array.from(adminActorIds) } },
          select: { id: true, name: true, email: true },
        })
      : [],
  ]);

  const gradeMap = new Map(grades.map((g) => [g.id, g.shortDescription || g.longDescription]));
  const versionMap = new Map(versions.map((v) => [v.id, v]));
  const pathwayMap = new Map(pathways.map((p) => [p.id, p.name]));
  const adminMap = new Map(adminUsers.map((a) => [a.id, a.name || a.email || a.id]));

  const formatScope = (
    audience: UserPedagogicalAudience,
    secondaryGradeId?: string | null,
    healthProgramVersionId?: string | null,
    healthPathwayId?: string | null
  ): string => {
    if (audience === "SECONDARY") {
      return (secondaryGradeId ? gradeMap.get(secondaryGradeId) : null) || "Secondaire";
    }
    if (audience === "HEALTH") {
      const v = healthProgramVersionId ? versionMap.get(healthProgramVersionId) : null;
      const pName = healthPathwayId ? pathwayMap.get(healthPathwayId) : null;
      if (v) {
        return `${v.program.label} — ${v.institution.name}${pName ? ` (${pName})` : ""}`;
      }
      return "Santé";
    }
    return "Inconnu";
  };

  const activeEnrollmentRecord = rawEnrollments.find(
    (e) => e.academicYearId === activeYear?.id
  );

  let hasPedagogicalActivity = false;
  let activityCounts = { attempts: 0, progress: 0, mockExams: 0 };

  if (activeEnrollmentRecord) {
    const [attempts, progress, mockExams] = await Promise.all([
      prisma.userTrainingQuizAttempt.count({
        where: { academicEnrollmentId: activeEnrollmentRecord.id },
      }),
      prisma.userTrainingQuizProgress.count({
        where: { academicEnrollmentId: activeEnrollmentRecord.id },
      }),
      prisma.userHealthMockExamAttempt.count({
        where: { academicEnrollmentId: activeEnrollmentRecord.id },
      }),
    ]);
    activityCounts = { attempts, progress, mockExams };
    hasPedagogicalActivity = attempts + progress + mockExams > 0;
  }

  const activeEnrollment: AdminUserDetailResult["activeEnrollment"] = activeEnrollmentRecord
    ? {
        id: activeEnrollmentRecord.id,
        audience: activeEnrollmentRecord.audience,
        secondaryGradeId: activeEnrollmentRecord.secondaryGradeId,
        healthProgramVersionId: activeEnrollmentRecord.healthProgramVersionId,
        healthPathwayId: activeEnrollmentRecord.healthPathwayId,
        scopeLabel: formatScope(
          activeEnrollmentRecord.audience,
          activeEnrollmentRecord.secondaryGradeId,
          activeEnrollmentRecord.healthProgramVersionId,
          activeEnrollmentRecord.healthPathwayId
        ),
        createdAt: activeEnrollmentRecord.createdAt,
        updatedAt: activeEnrollmentRecord.updatedAt,
        expectedUpdatedAt: activeEnrollmentRecord.updatedAt.toISOString(),
        lockedAt: activeEnrollmentRecord.lockedAt,
        createdBy: activeEnrollmentRecord.createdBy,
        createdByActorName: activeEnrollmentRecord.createdByActorId
          ? adminMap.get(activeEnrollmentRecord.createdByActorId) || null
          : null,
        hasPedagogicalActivity,
        activityCounts,
      }
    : null;

  const allEnrollments: AdminUserDetailResult["allEnrollments"] = rawEnrollments.map((e) => ({
    id: e.id,
    academicYearCode: e.academicYear.code,
    academicYearLabel: e.academicYear.label,
    isCurrent: e.academicYearId === activeYear?.id,
    audience: e.audience,
    scopeLabel: formatScope(
      e.audience,
      e.secondaryGradeId,
      e.healthProgramVersionId,
      e.healthPathwayId
    ),
    createdAt: e.createdAt,
    createdBy: e.createdBy,
    lockedAt: e.lockedAt,
  }));

  const allCorrections: AdminUserDetailResult["corrections"] = rawEnrollments.flatMap((e) =>
    e.corrections.map((c) => {
      // Priorité 1 : snapshot métier durable v1
      let beforeLabel = formatEnrollmentPayloadDescription(c.beforePayload);
      let afterLabel = formatEnrollmentPayloadDescription(c.afterPayload);

      // Priorité 2 (fallback legacy si snapshot absent)
      const bp = c.beforePayload as any;
      if (beforeLabel === "Secondaire" && bp?.secondaryGradeId) {
        beforeLabel = gradeMap.get(bp.secondaryGradeId) || beforeLabel;
      } else if (beforeLabel === "Santé" && bp?.healthProgramVersionId) {
        const v = versionMap.get(bp.healthProgramVersionId);
        const p = bp.healthPathwayId ? pathwayMap.get(bp.healthPathwayId) : null;
        if (v) beforeLabel = `${v.program.label} — ${v.institution.name}${p ? ` (${p})` : ""}`;
      }

      const ap = c.afterPayload as any;
      if (afterLabel === "Secondaire" && ap?.secondaryGradeId) {
        afterLabel = gradeMap.get(ap.secondaryGradeId) || afterLabel;
      } else if (afterLabel === "Santé" && ap?.healthProgramVersionId) {
        const v = versionMap.get(ap.healthProgramVersionId);
        const p = ap.healthPathwayId ? pathwayMap.get(ap.healthPathwayId) : null;
        if (v) afterLabel = `${v.program.label} — ${v.institution.name}${p ? ` (${p})` : ""}`;
      }

      return {
        id: c.id,
        enrollmentId: e.id,
        academicYearCode: e.academicYear.code,
        actorAdminName: adminMap.get(c.actorAdminId) || c.actorAdminId,
        reason: c.reason,
        beforeLabel,
        afterLabel,
        createdAt: c.createdAt,
      };
    })
  );

  return {
    user,
    activeYear: activeYear ? { id: activeYear.id, code: activeYear.code, label: activeYear.label } : null,
    activeEnrollment,
    allEnrollments,
    corrections: allCorrections,
    availableOptions,
  };
}
