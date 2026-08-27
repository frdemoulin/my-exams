import type {
  HealthMockExamPedagogicalAssessment,
  HealthMockExamResultQuestion,
  PedagogicalAssessmentTheme,
} from "./health-mock-exam.types";

const CHAPTER_LABELS: Record<string, string> = {
  "chapter:1.1": "Ch. 1 · Éléments chimiques et classification",
  "chapter:1.2": "Ch. 2 · Liaisons et électronégativité",
  "chapter:1.3": "Ch. 3 · Orbitales moléculaires",
  "chapter:1.4": "Ch. 4 · Forces intermoléculaires",
  "chapter:1.5": "Ch. 5 · Nomenclature et fonctions",
  "chapter:1.6": "Ch. 6 · Isomérie et énantiomérie",
  "chapter:1.7": "Ch. 7 · Hydrocarbures",
  "chapter:1.8": "Ch. 8 · Dérivés halogénés, alcools et amines",
  "chapter:1.9": "Ch. 9 · Esters et amides",
  "chapter:1.10": "Ch. 10 · Aldéhydes et cétones",
  "chapter:1.11": "Ch. 11 · Acides carboxyliques",
  "chapter:2.1": "Ch. 1 · Généralités et structure des glucides",
  "chapter:2.2": "Ch. 2 · Oses simples et dérivés",
  "chapter:2.3": "Ch. 3 · Osides",
  "chapter:2.4": "Ch. 4 · Lipides et acides gras",
  "chapter:2.5": "Ch. 5 · Eicosanoïdes",
  "chapter:2.6": "Ch. 6 · Glycérides et phospholipides",
  "chapter:2.7": "Ch. 7 · Sphingolipides",
  "chapter:2.8": "Ch. 8 · Stérols et stéroïdes",
  "chapter:2.9": "Ch. 9 · Acides aminés",
  "chapter:2.10": "Ch. 10 · Peptides et protéines",
  "chapter:2.14": "Ch. 14 · Enzymes et cinétique",
  "chapter:3.1": "Ch. 1 · Organisation et méthodes d'étude",
  "chapter:3.2": "Ch. 2 · Membrane plasmique et transports",
  "chapter:3.3": "Ch. 3 · Cytosquelette",
  "chapter:3.4": "Ch. 4 · Système endomembranaire",
  "chapter:3.7": "Ch. 7 · Mitochondrie et métabolisme",
  "chapter:3.8": "Ch. 8 · Noyau et cycle cellulaire",
  "chapter:4.1": "Ch. 1 · Méthodes en histologie",
  "chapter:4.2": "Ch. 2 · Tissus épithéliaux",
  "chapter:4.3": "Ch. 3 · Tissus conjonctifs",
  "chapter:4.4": "Ch. 4 · Tissus musculaires",
  "chapter:4.5": "Ch. 5 · Tissu nerveux",
};

const THEME_LABELS: Record<string, string> = {
  "theme:isotopes": "Isotopes & abondance",
  "theme:nuclide": "Nucléides & composition atomique",
  "theme:classification": "Classification périodique",
  "theme:periodic-trends": "Tendances périodiques",
  "theme:periodic-table": "Tableau périodique",
  "theme:coordination-bond": "Liaisons de coordination",
  "theme:ions": "Formation des ions",
  "theme:polarity": "Polarité des liaisons",
  "theme:molecular-polarity": "Polarité moléculaire",
  "theme:geometry-polarity": "Géométrie & moment dipolaire",
  "theme:sigma-pi": "Liaisons σ et π",
  "theme:hybridization": "Hybridation des orbitales",
  "theme:VSEPR": "Géométrie moléculaire VSEPR",
  "theme:london-dispersion": "Forces de dispersion de London",
  "theme:hydrogen-bond": "Liaisons hydrogène",
  "theme:intermolecular-forces": "Forces intermoléculaires",
  "theme:electronegativity-affinity": "Électronégativité & affinité",
  "theme:integration": "Intégration chimie générale",
  "theme:integration-methanol": "Structure & liaisons du méthanol",
};

const EC_LABELS: Record<string, string> = {
  "ec:CHIMIE": "Chimie générale",
  "ec:BIOCHIMIE": "Biochimie",
  "ec:BIOCELL": "Biologie cellulaire",
  "ec:HISTOLOGIE": "Histologie",
};

function getExplicitLabel(tag: string): string | null {
  if (THEME_LABELS[tag]) return THEME_LABELS[tag];
  if (CHAPTER_LABELS[tag]) return CHAPTER_LABELS[tag];
  if (EC_LABELS[tag]) return EC_LABELS[tag];
  return null;
}

function resolveExplicitLabel(key: string): string | null {
  if (key.startsWith("group:")) {
    const title = key.replace("group:", "").trim();
    return title.length > 0 ? title : null;
  }
  return getExplicitLabel(key);
}

type QuestionPedagogicalInfo = {
  question: HealthMockExamResultQuestion;
  primaryKey: string | null;
  chapterKey: string | null;
  disciplineKey: string | null;
};

function extractQuestionPedagogicalInfo(
  question: HealthMockExamResultQuestion
): QuestionPedagogicalInfo {
  const payload = question.answerPayload as { tags?: string[] } | null;
  const tags = Array.isArray(payload?.tags) ? payload.tags : [];

  // 1. Primary: theme / notion tag or question group title
  const themeTag = tags.find((t) => t.startsWith("theme:") || t.startsWith("notion:"));
  let primaryKey: string | null = null;
  if (themeTag) {
    primaryKey = themeTag;
  } else if (question.group?.title) {
    primaryKey = `group:${question.group.title}`;
  }

  // 2. Chapter tag
  const chapterTag = tags.find((t) => t.startsWith("chapter:"));
  const chapterKey = chapterTag ?? null;

  // 3. Discipline / EC tag
  const ecTag = tags.find((t) => t.startsWith("ec:") || t.startsWith("discipline:"));
  const disciplineKey = ecTag ?? null;

  return {
    question,
    primaryKey,
    chapterKey,
    disciplineKey,
  };
}

type GroupAccumulator = {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  questionCount: number;
  questionIds: Set<string>;
};

export function buildHealthMockExamPedagogicalAssessment(
  questions: HealthMockExamResultQuestion[]
): HealthMockExamPedagogicalAssessment {
  if (questions.length === 0) {
    return {
      strengths: [],
      toReview: [],
      neutralMessage: "Aucune question disponible pour établir un bilan pédagogique.",
    };
  }

  const extracted = questions.map(extractQuestionPedagogicalInfo);

  // Step 1: Collect counts for primary themes that have an explicit label
  const primaryCounts = new Map<string, { count: number; maxScore: number }>();
  for (const item of extracted) {
    if (item.primaryKey && resolveExplicitLabel(item.primaryKey) !== null) {
      const prev = primaryCounts.get(item.primaryKey) ?? { count: 0, maxScore: 0 };
      primaryCounts.set(item.primaryKey, {
        count: prev.count + 1,
        maxScore: prev.maxScore + item.question.maxScore,
      });
    }
  }

  // Step 2: Collect counts for chapters for questions not covered by a reliable primary theme with explicit label
  const chapterCounts = new Map<string, { count: number; maxScore: number }>();
  for (const item of extracted) {
    const isPrimaryExplicit = item.primaryKey ? resolveExplicitLabel(item.primaryKey) !== null : false;
    const primaryInfo = isPrimaryExplicit && item.primaryKey ? primaryCounts.get(item.primaryKey) : null;
    const isPrimaryReliable = primaryInfo && (primaryInfo.count >= 2 || primaryInfo.maxScore >= 2);

    if (!isPrimaryReliable && item.chapterKey && resolveExplicitLabel(item.chapterKey) !== null) {
      const prev = chapterCounts.get(item.chapterKey) ?? { count: 0, maxScore: 0 };
      chapterCounts.set(item.chapterKey, {
        count: prev.count + 1,
        maxScore: prev.maxScore + item.question.maxScore,
      });
    }
  }

  // Step 3: Accumulate into reliable groups with explicit labels only
  const groups = new Map<string, GroupAccumulator>();

  for (const item of extracted) {
    const q = item.question;
    const isPrimaryExplicit = item.primaryKey ? resolveExplicitLabel(item.primaryKey) !== null : false;
    const primaryInfo = isPrimaryExplicit && item.primaryKey ? primaryCounts.get(item.primaryKey) : null;
    const isPrimaryReliable = primaryInfo && (primaryInfo.count >= 2 || primaryInfo.maxScore >= 2);

    let chosenKey: string | null = null;
    let chosenLabel: string | null = null;

    if (isPrimaryReliable && item.primaryKey) {
      chosenKey = item.primaryKey;
      chosenLabel = resolveExplicitLabel(item.primaryKey);
    } else if (item.chapterKey && resolveExplicitLabel(item.chapterKey) !== null) {
      const chapterInfo = chapterCounts.get(item.chapterKey);
      const isChapterReliable = chapterInfo && (chapterInfo.count >= 2 || chapterInfo.maxScore >= 2);
      if (isChapterReliable) {
        chosenKey = item.chapterKey;
        chosenLabel = resolveExplicitLabel(item.chapterKey);
      }
    }

    // If still not reliable, fallback to discipline if present and explicit
    if (!chosenKey && item.disciplineKey && resolveExplicitLabel(item.disciplineKey) !== null) {
      chosenKey = item.disciplineKey;
      chosenLabel = resolveExplicitLabel(item.disciplineKey);
    }

    if (chosenKey && chosenLabel) {
      let group = groups.get(chosenKey);
      if (!group) {
        group = {
          id: chosenKey,
          label: chosenLabel,
          score: 0,
          maxScore: 0,
          questionCount: 0,
          questionIds: new Set<string>(),
        };
        groups.set(chosenKey, group);
      }

      if (!group.questionIds.has(q.id)) {
        group.questionIds.add(q.id);
        group.score += q.score;
        group.maxScore += q.maxScore;
        group.questionCount += 1;
      }
    }
  }

  // Step 4: Filter by minimum reliability (>= 2 questions or >= 2 maxScore)
  const validThemes: PedagogicalAssessmentTheme[] = [];
  for (const group of groups.values()) {
    if (group.questionCount >= 2 || group.maxScore >= 2) {
      const masteryPercentage =
        group.maxScore > 0 ? Math.round((group.score / group.maxScore) * 100) : 0;
      validThemes.push({
        id: group.id,
        label: group.label,
        masteryPercentage,
        score: Math.round(group.score * 100) / 100,
        maxScore: group.maxScore,
        questionCount: group.questionCount,
      });
    }
  }

  // Step 5: Classify into Strengths (>= 80%) and To Review (< 60%)
  const strengths = validThemes
    .filter((t) => t.masteryPercentage >= 80)
    .sort((a, b) => b.masteryPercentage - a.masteryPercentage || b.questionCount - a.questionCount)
    .slice(0, 3);

  const toReview = validThemes
    .filter((t) => t.masteryPercentage < 60)
    .sort((a, b) => a.masteryPercentage - b.masteryPercentage || b.questionCount - a.questionCount)
    .slice(0, 3);

  const neutralMessage =
    strengths.length === 0 && toReview.length === 0
      ? "L'évaluation ne permet pas encore d'isoler suffisamment de thèmes pour dégager des points forts ou à retravailler."
      : null;

  return {
    strengths,
    toReview,
    neutralMessage,
  };
}
