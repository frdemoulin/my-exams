import type {
  ChapterSectionKind,
  Prisma,
  PrismaClient,
  QuizAnswerFormat,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';
import {
  compileHealthTrainingAuthorQuestion,
  type HealthSeedQuestion,
  type HealthTrainingAuthorQuestion,
} from '../../src/core/questions';


export type QuantumBoxesDiagram = {
  type: 'quantum-boxes';
  suffix?: string;
  orbitals: Array<{
    label: string;
    boxes: Array<'empty' | 'up' | 'down' | 'pair'>;
  }>;
};

export type LewisAtomDiagram = {
  type: 'lewis-atom';
  element: string;
  charge?: number;
  electrons: {
    top: 'none' | 'single' | 'pair';
    right: 'none' | 'single' | 'pair';
    bottom: 'none' | 'single' | 'pair';
    left: 'none' | 'single' | 'pair';
  };
};

export type LewisResonanceDiagram = {
  type: 'lewis-resonance';
  forms: Array<{
    atoms: Array<{
      element: string;
      charge?: number;
      lonePairs: Array<'top' | 'right' | 'bottom' | 'left'>;
    }>;
    bonds: Array<'single' | 'double' | 'triple'>;
  }>;
};

export type BenzeneKekuleDiagram = {
  type: 'benzene-kekule';
  variant?: 'kekule' | 'single-kekule' | 'aromatic' | 'kekule-with-aromatic';
  showAromaticHybrid?: boolean;
};

export type MoleculeDiagram = {
  type: 'molecule';
  molecule:
    | 'aspirin-topological'
    | 'salicylic-acid-topological'
    | 'dopamine-topological'
    | 'choline-topological'
    | 'acetylcholine-topological'
    | 'paracetamol-topological'
    | 'cysteine-topological'
    | 'captopril-topological'
    | 'n-acetylcysteine-topological'
    | '2-methylpropane-topological'
    | '2-2-dimethylpropane-topological'
    | '2-methylbutane-topological'
    | 'heptane-topological'
    | '3-methylhexane-topological'
    | 'isooctane-topological'
    | 'valine-topological'
    | 'leucine-topological'
    | 'isoleucine-topological'
    | 'propofol-topological'
    | '3-methylhexan-2-ol-topological';
};

export type CarbohydrateDiagramName =
  | 'glyceraldehyde-dihydroxyacetone-linear'
  | 'glyceraldehyde-enantiomers-fischer'
  | 'glyceraldehyde-configurations-newman'
  | 'glucose-enantiomers-fischer'
  | 'glucose-mannose-galactose-fischer'
  | 'aldoses-d-filiation'
  | 'ketoses-d-filiation'
  | 'glucose-cyclization-anomers'
  | 'glucose-fructose-ribose-fischer'
  | 'glucose-to-glucuronic-acid'
  | 'polyol-reductions'
  | 'osamine-n-acetyl-osamine'
  | 'nana-sialic-acid'
  | 'phosphorylated-oses'
  | 'sulfated-gag-charge'
  | 'osides-classification'
  | 'glycosidic-condensation'
  | 'lactose-saccharose-maltose'
  | 'starch-amylose-amylopectin'
  | 'glycogen-branching'
  | 'cellulose-cellobiose'
  | 'gag-basic-repeat'
  | 'hyaluronic-chondroitin'
  | 'dermatan-keratan'
  | 'heparan-heparin'
  | 'proteoglycan-aggregate'
  | 'glycoprotein-linkages';

export type CarbohydrateDiagram = {
  type: 'carbohydrate';
  diagram: CarbohydrateDiagramName;
};

export type LipidDiagramName =
  | 'carbon-numbering'
  | 'cis-trans-double-bond'
  | 'delta-omega-numbering'
  | 'fatty-acid-amphiphile'
  | 'fatty-acid-reactions'
  | 'linoleic-linolenic'
  | 'lipid-classification'
  | 'melting-point-factors'
  | 'monolayer-micelle'
  | 'oleic-palmitoleic'
  | 'omega3-pathway'
  | 'palmitic-stearic'
  | 'saturated-chain-lengths'
  | 'glycerol-overview'
  | 'glycerol-numbering'
  | 'acylglycerol-types'
  | 'triglyceride-types'
  | 'triglyceride-example'
  | 'triglyceride-storage'
  | 'triglyceride-melting'
  | 'triglyceride-roles'
  | 'palm-oil'
  | 'phosphatidic-acid'
  | 'phospholipid-general'
  | 'headgroups'
  | 'phosphatidylinositol'
  | 'bilayer'
  | 'micelle-liposome'
  | 'phospholipase-sites'
  | 'pip2-plc'
  | 'pi3k-akt'
  | 'plasmalogen-paf'
  | 'family-tree'
  | 'sphingosine-functions'
  | 'ceramide-formation'
  | 'catabolism'
  | 'skin-barrier'
  | 'ceramide-signaling'
  | 'sphingomyelin-structure'
  | 'myelin'
  | 'glyco-general'
  | 'cerebrosides'
  | 'gangliosides'
  | 'metabolic-pathway'
  | 'disease-table'
  | 'sterane'
  | 'sterane-numbering'
  | 'families'
  | 'cholesterol-structure'
  | 'cholesterol-forms'
  | 'cholesterol-roles'
  | 'cholesterol-transport'
  | 'bile-vitd'
  | 'hormone-origins'
  | 'steroid-nuclei'
  | 'aldosterone-cortisol'
  | 'aldosterone-kidney'
  | 'cortisol'
  | 'androgen-estrogen'
  | 'progesterone'
  | 'arachidonic-acid-20-4'
  | 'cox-series2-pathway'
  | 'eicosanoid-overview'
  | 'eicosanoid-synthesis-pathways'
  | 'leukotriene-cells-effects'
  | 'leukotriene-lipoxin-pathways'
  | 'lta4-structure'
  | 'misoprostol-pge1'
  | 'pge1-pge2-effects'
  | 'prostaglandin-nomenclature'
  | 'prostaglandin-series'
  | 'prostanoic-acid-reference'
  | 'txa2-pgi2-balance';

export type LipidDiagram = {
  type: 'lipid';
  diagram: LipidDiagramName;
};

export type ProteinDiagramName =
  | "acid-basic-amino-acids"
  | "amino-acid-chirality"
  | "amino-acid-codes"
  | "amino-acid-families"
  | "amino-acid-general-structure"
  | "amino-acid-ionization"
  | "amino-acid-overview"
  | "aromatic-amino-acids"
  | "branched-amino-acids"
  | "essential-amino-acids"
  | "fischer-amino-acids"
  | "hydroxyl-sulfur-amino-acids"
  | "ninhydrin-reaction"
  | "polarity-classes"
  | "polarity-solubility"
  | "proline-hydroxyproline"
  | "uv-absorption"
  | "alpha-helix"
  | "beta-sheet"
  | "ck-dimers"
  | "disulfide-proteolysis"
  | "four-levels-primary"
  | "peptide-bond"
  | "peptide-bond-rigidity"
  | "peptide-size"
  | "peptide-termini"
  | "phi-psi-angles"
  | "posttranslational-modifications"
  | "proline-peptide-kink"
  | "protein-denaturation-classification"
  | "protein-domains"
  | "protein-g-trimer"
  | "quaternary-assemblies"
  | "quaternary-structure"
  | "tertiary-structure"
  | "tetramer-examples"
  | "aa-biological-precursors"
  | "aa-neurotransmitter-precursors"
  | "aa-structural-roles"
  | "amyloid-app"
  | "cyclosporine-aspartame"
  | "cytokines-interleukins"
  | "essential-aa-needs"
  | "glucagon-insulin"
  | "glucogenic-ketogenic-aa"
  | "growth-factors"
  | "insulin-maturation"
  | "interferons-chemokines"
  | "natriuretic-peptides"
  | "opioid-peptides"
  | "peptide-antibiotics"
  | "peptide-biological-roles"
  | "peptide-hormone-signaling"
  | "pomc-glutathione"
  | "transamination-methionine"
  | "urea-cycle-aa"
  | "abc-pgp"
  | "adhesion-families"
  | "antibody-classes"
  | "antibody-epitope"
  | "antibody-fab-fc"
  | "antibody-h2l2"
  | "antibody-multimers"
  | "cftr-channel"
  | "connexin-gap-junction"
  | "gpcr-rhodopsin"
  | "igcam"
  | "insulin-receptor"
  | "integrin-focal-adhesion"
  | "ionotropic-channel"
  | "metabotropic-receptor"
  | "nuclear-receptor"
  | "receptor-general"
  | "selectin-cadherin"
  | "serotonin-gaba-channels"
  | "sodium-potassium-pump"
  | "actin-microtubules"
  | "collagen-alpha-chain"
  | "collagen-classification"
  | "collagen-crosslinks"
  | "collagen-fibril"
  | "collagen-gly-x-y"
  | "collagen-overview"
  | "collagen-triple-helix"
  | "collagen-type-iv"
  | "cytoskeleton-overview"
  | "extracellular-matrix"
  | "fibronectin"
  | "hemoglobin-anomalies"
  | "hemoglobin-conformations"
  | "hemoglobin-structure"
  | "laminin"
  | "matrix-glycoproteins"
  | "myosin-cycle"
  | "protein-role-acronym"
  | "sickle-albumin-lipoprotein";

export type ProteinDiagram = {
  type: "protein";
  diagram: ProteinDiagramName;
};

export type EnzymeDiagramName =
  | "activation-energy"
  | "active-site-parts"
  | "allosteric-regulation"
  | "apoenzyme-holoenzyme"
  | "catalyst-types"
  | "catalytic-power"
  | "chymotrypsin-mechanism"
  | "coenzyme-vitamins"
  | "covalent-regulation"
  | "enzyme-nature"
  | "enzyme-nomenclature-ec"
  | "enzyme-substrate-affinity"
  | "es-ep-cycle"
  | "fisher-koshland"
  | "isoenzymes-ck-ldh"
  | "pka-camp"
  | "prosthetic-labile"
  | "protease-specificity"
  | "ubiquitin-proteasome"
  | "zymogen-cascade"
  | "beer-lambert-rate"
  | "catalytic-concentration"
  | "competitive-inhibition"
  | "enzyme-concentrations"
  | "enzyme-kinetics-overview"
  | "initial-rate-slope"
  | "kcat-turnover"
  | "km-affinity"
  | "lineweaver-burk"
  | "michaelis-curve"
  | "michaelis-equation"
  | "mixed-inhibition-percent"
  | "noncompetitive-uncompetitive"
  | "ph-temperature-effects"
  | "reaction-orders"
  | "reaction-phases"
  | "specific-activities"
  | "substrate-enzyme-effects"
  | "ui-katal"
  | "ui-katal-conversion";

export type EnzymeDiagram = {
  type: "enzyme";
  diagram: EnzymeDiagramName;
};

export type LegacySeedQuestion = {
  order: number;
  difficulty: QuizDifficulty;
  questionType?: string;
  answerFormat: QuizAnswerFormat;
  question: string;
  questionDiagram?:
    | QuantumBoxesDiagram
    | LewisResonanceDiagram
    | BenzeneKekuleDiagram
    | MoleculeDiagram
    | CarbohydrateDiagram
    | LipidDiagram
    | ProteinDiagram
    | EnzymeDiagram;
  choices: Array<string | QuantumBoxesDiagram | LewisAtomDiagram>;
  correctChoiceIndexes: number[];
  answerPayload?: Prisma.InputJsonValue;
  explanation: string | null;
  choiceExplanations?: string[];
  requiredSelectionCount?: number;
};

export type { HealthTrainingAuthorQuestion };
export type SeedQuestion = HealthSeedQuestion;


export type SeedSection = {
  order: number;
  title: string;
  description: string;
  kind: ChapterSectionKind;
};

export type SeedQuiz = {
  order: number;
  slug: string;
  title: string;
  description: string;
  stage: TrainingQuizStage;
  sectionOrder: number;
  questionOrders?: number[];
  questionGroups?: Array<{
    title?: string;
    order: number;
    sharedStatement: string;
    questionOrders: number[];
  }>;
  items?: SeedQuizItem[];
};

type SeedQuizItem =
  | {
      type: 'QUESTION';
      questionOrder: number;
    }
  | {
      type: 'GROUP';
      title?: string;
      sharedStatement: string;
      questionOrders: number[];
    };

type NormalizedSeedQuizItem = SeedQuizItem & { order: number };

const ANSI_GREEN = '\u001b[32m';
const ANSI_RESET = '\u001b[0m';
const SUCCESS_TICK = `${ANSI_GREEN}✓${ANSI_RESET}`;

const normalizeSeedQuizItems = (quizSeed: SeedQuiz): NormalizedSeedQuizItem[] => {
  if (quizSeed.items?.length) {
    return quizSeed.items.map((item, index) => ({ ...item, order: index + 1 }));
  }

  let itemOrder = 1;
  const items: NormalizedSeedQuizItem[] = [];

  for (const questionOrder of quizSeed.questionOrders ?? []) {
    items.push({
      type: 'QUESTION',
      questionOrder,
      order: itemOrder,
    });
    itemOrder += 1;
  }

  for (const questionGroup of [...(quizSeed.questionGroups ?? [])].sort(
    (left, right) => left.order - right.order
  )) {
    items.push({
      type: 'GROUP',
      title: questionGroup.title,
      sharedStatement: questionGroup.sharedStatement,
      questionOrders: questionGroup.questionOrders,
      order: itemOrder,
    });
    itemOrder += 1;
  }

  return items;
};

type SeedHealthTrainingChapterParams = {
  prisma: PrismaClient;
  subjectLongDescription: string;
  chapterSlug: string;
  logLabel: string;
  questionThemeLabelsByOrder: Record<number, string[]>;
  questions: SeedQuestion[];
  sections: SeedSection[];
  quizSeeds: SeedQuiz[];
  masterCleanupSectionOrders?: number[];
  cleanupSectionOrders?: number[];
};

const trainingQuizStageLogLabels: Record<TrainingQuizStage, string> = {
  DISCOVER: 'Découvrir',
  PRACTICE: "S'entraîner",
  MASTER: 'Maîtriser',
};

const formatOptionalPrefixLabel = (
  prefix: string | null | undefined,
  label: string | null | undefined
) => {
  if (!prefix) return label ?? '';
  if (!label) return prefix;
  return label.includes(prefix) ? label : `${prefix} - ${label}`;
};

export async function seedHealthTrainingChapter({
  prisma,
  subjectLongDescription,
  chapterSlug,
  logLabel,
  questionThemeLabelsByOrder,
  questions,
  sections,
  quizSeeds,
  masterCleanupSectionOrders = [],
  cleanupSectionOrders = [],
}: SeedHealthTrainingChapterParams) {
  const subject = await prisma.subject.findFirst({
    where: { longDescription: subjectLongDescription },
    select: { id: true },
  });

  if (!subject) {
    console.warn(`   ⚠️  Matière introuvable : ${subjectLongDescription}`);
    return;
  }

  const chapter = await prisma.chapter.findUnique({
    where: {
      subjectId_slug: {
        subjectId: subject.id,
        slug: chapterSlug,
      },
    },
    select: { id: true, title: true, isActive: true, domainIds: true },
  });

  if (!chapter?.isActive) {
    console.warn(`   ⚠️  Chapitre introuvable ou inactif : ${chapterSlug}`);
    return;
  }

  if (chapter.domainIds.length === 0) {
    throw new Error(
      `Le chapitre ${chapterSlug} doit être rattaché à un domaine avant le seed des thèmes.`
    );
  }

  const healthAssignment = await prisma.chapterAssignment.findFirst({
    where: {
      chapterId: chapter.id,
      vertical: 'HEALTH',
      contextType: 'HEALTH_TEACHING_ELEMENT',
      isActive: true,
    },
    select: {
      order: true,
      contextId: true,
    },
    orderBy: { order: 'asc' },
  });

  const healthTeachingElement = healthAssignment
    ? await prisma.healthTeachingElement.findUnique({
        where: { id: healthAssignment.contextId },
        select: {
          code: true,
          title: true,
          shortTitle: true,
          courseUnit: {
            select: {
              code: true,
              title: true,
              shortTitle: true,
            },
          },
        },
      })
    : null;

  const courseUnitLabel =
    healthTeachingElement?.courseUnit
      ? formatOptionalPrefixLabel(
          healthTeachingElement.courseUnit.code,
          healthTeachingElement.courseUnit.shortTitle ?? healthTeachingElement.courseUnit.title
        )
      : logLabel;
  const teachingElementLabel = healthTeachingElement
    ? formatOptionalPrefixLabel(
        healthTeachingElement.code,
        healthTeachingElement.shortTitle ?? healthTeachingElement.title
      )
    : subjectLongDescription;
  const chapterLabel = healthAssignment
    ? `Chapitre ${healthAssignment.order} - ${chapter.title}`
    : chapter.title;

  console.log('');
  console.log(`UE        ${courseUnitLabel}`);
  console.log(`  EC      ${teachingElementLabel}`);
  console.log(`    ${chapterLabel}`);
  console.log(`      Questions : ${questions.length}`);
  console.log(`      Sections  : ${sections.length}`);

  const questionThemeLabels = Array.from(
    new Set(Object.values(questionThemeLabelsByOrder).flat())
  );
  const existingThemes =
    questionThemeLabels.length > 0
      ? await prisma.theme.findMany({
          where: { title: { in: questionThemeLabels } },
          select: {
            id: true,
            title: true,
            chapterIds: true,
            domainIds: true,
            domains: { select: { subjectId: true } },
          },
        })
      : [];
  const existingThemesByTitle = new Map<string, typeof existingThemes>();

  for (const theme of existingThemes) {
    const themes = existingThemesByTitle.get(theme.title);
    if (themes) {
      themes.push(theme);
    } else {
      existingThemesByTitle.set(theme.title, [theme]);
    }
  }

  const themeBelongsOnlyToCurrentSubject = (theme: (typeof existingThemes)[number]) => {
    const subjectIds = new Set(theme.domains.map((domain) => domain.subjectId));

    return subjectIds.size === 1 && subjectIds.has(subject.id);
  };

  const themeIdByLabel = new Map<string, string>();

  for (const label of questionThemeLabels) {
    const labelThemes = existingThemesByTitle.get(label) ?? [];
    const existingTheme =
      labelThemes
        .filter(themeBelongsOnlyToCurrentSubject)
        .find((theme) => chapter.domainIds.some((domainId) => theme.domainIds.includes(domainId))) ??
      labelThemes.filter(themeBelongsOnlyToCurrentSubject)[0];

    const staleThemeAssociations = labelThemes.filter(
      (theme) =>
        theme.id !== existingTheme?.id &&
        (theme.chapterIds.includes(chapter.id) ||
          chapter.domainIds.some((domainId) => theme.domainIds.includes(domainId)))
    );

    for (const staleTheme of staleThemeAssociations) {
      const staleDomainIds = chapter.domainIds.filter((domainId) =>
        staleTheme.domainIds.includes(domainId)
      );

      await prisma.theme.update({
        where: { id: staleTheme.id },
        data: {
          ...(staleTheme.chapterIds.includes(chapter.id)
            ? { chapters: { disconnect: [{ id: chapter.id }] } }
            : {}),
          ...(staleDomainIds.length > 0
            ? {
                domains: {
                  disconnect: staleDomainIds.map((domainId) => ({ id: domainId })),
                },
              }
            : {}),
        },
      });
    }

    if (existingTheme) {
      const missingDomainIds = chapter.domainIds.filter(
        (domainId) => !existingTheme.domainIds.includes(domainId)
      );

      if (!existingTheme.chapterIds.includes(chapter.id) || missingDomainIds.length > 0) {
        await prisma.theme.update({
          where: { id: existingTheme.id },
          data: {
            chapters: { connect: [{ id: chapter.id }] },
            domains: {
              connect: missingDomainIds.map((domainId) => ({ id: domainId })),
            },
          },
        });
      }

      themeIdByLabel.set(label, existingTheme.id);
      continue;
    }

    const createdTheme = await prisma.theme.create({
      data: {
        title: label,
        shortTitle: label,
        chapters: { connect: [{ id: chapter.id }] },
        domains: {
          connect: chapter.domainIds.map((domainId) => ({ id: domainId })),
        },
      },
      select: { id: true },
    });
    themeIdByLabel.set(label, createdTheme.id);
  }

  for (const entry of questions) {
    const existingQuestion = await prisma.quizQuestion.findUnique({
      where: {
        chapterId_order: {
          chapterId: chapter.id,
          order: entry.order,
        },
      },
      select: { id: true },
    });

    const compiled = compileHealthTrainingAuthorQuestion(entry, {
      chapterSlug,
    });

    const data = {
      chapterId: chapter.id,
      difficulty: compiled.difficulty as QuizDifficulty,
      questionType: compiled.questionFormat ?? compiled.format ?? compiled.questionType ?? 'mcq',
      question: compiled.question,
      questionDiagram: (compiled.questionDiagram ?? null) as Prisma.InputJsonValue | null,
      choices: (compiled.choices ?? []) as Prisma.InputJsonValue,
      answerFormat: (compiled.answerFormat ?? 'SINGLE') as QuizAnswerFormat,
      correctChoiceIndexes: compiled.correctChoiceIndexes ?? [],
      correctChoiceIndex: compiled.correctChoiceIndexes?.[0] ?? 0,
      answerPayload: (compiled.answerPayload ?? undefined) as Prisma.InputJsonValue | undefined,
      explanation: compiled.explanation ?? '',
      choiceExplanations: (compiled.choiceExplanations ?? []) as Prisma.InputJsonValue,
      order: compiled.order,
      isPublished: true,
      themeIds: (questionThemeLabelsByOrder[compiled.order] ?? [])
        .map((label) => themeIdByLabel.get(label))
        .filter((themeId): themeId is string => Boolean(themeId)),
    };


    if (existingQuestion) {
      await prisma.quizQuestion.update({
        where: { id: existingQuestion.id },
        data,
      });
    } else {
      await prisma.quizQuestion.create({ data });
    }
  }

  const sectionIdByOrder = new Map<number, string>();
  const sectionLabelByOrder = new Map<number, string>();

  for (const sectionSeed of sections) {
    const section = await prisma.chapterSection.upsert({
      where: {
        chapterId_order: {
          chapterId: chapter.id,
          order: sectionSeed.order,
        },
      },
      update: {
        title: sectionSeed.title,
        description: sectionSeed.description,
        kind: sectionSeed.kind,
        isPublished: true,
      },
      create: {
        chapterId: chapter.id,
        title: sectionSeed.title,
        description: sectionSeed.description,
        order: sectionSeed.order,
        kind: sectionSeed.kind,
        isPublished: true,
        themeIds: [],
      },
      select: { id: true },
    });

    sectionIdByOrder.set(sectionSeed.order, section.id);
    sectionLabelByOrder.set(sectionSeed.order, sectionSeed.title);
  }

  const declaredSectionOrders = sections.map((section) => section.order);
  const obsoleteSections = await prisma.chapterSection.findMany({
    where: {
      chapterId: chapter.id,
      order: { notIn: declaredSectionOrders },
    },
    select: { id: true },
  });

  if (obsoleteSections.length > 0) {
    const obsoleteSectionIds = obsoleteSections.map((section) => section.id);

    await prisma.trainingQuiz.deleteMany({
      where: { sectionId: { in: obsoleteSectionIds } },
    });

    await prisma.chapterSection.deleteMany({
      where: { id: { in: obsoleteSectionIds } },
    });
  }

  const chapterQuestions =
    questions.length > 0
      ? await prisma.quizQuestion.findMany({
          where: { chapterId: chapter.id, order: { in: questions.map((item) => item.order) } },
          select: { id: true, order: true },
          orderBy: { order: 'asc' },
        })
      : [];
  const declaredQuizSlugs = quizSeeds.map((quizSeed) => quizSeed.slug);

  if (cleanupSectionOrders.length > 0) {
    await prisma.trainingQuiz.deleteMany({
      where: {
        chapterId: chapter.id,
        slug: { notIn: declaredQuizSlugs },
        section: {
          order: { in: cleanupSectionOrders },
        },
      },
    });
  }

  if (masterCleanupSectionOrders.length > 0) {
    await prisma.trainingQuiz.deleteMany({
      where: {
        chapterId: chapter.id,
        slug: { notIn: declaredQuizSlugs },
        stage: 'MASTER',
        section: {
          order: { in: masterCleanupSectionOrders },
        },
      },
    });
  }

  const targetSectionIds = [...new Set(quizSeeds.map((quizSeed) => sectionIdByOrder.get(quizSeed.sectionOrder)).filter((sectionId): sectionId is string => Boolean(sectionId)))];

  if (targetSectionIds.length > 0) {
    const existingQuizzesInTargetSections = await prisma.trainingQuiz.findMany({
      where: {
        chapterId: chapter.id,
        sectionId: { in: targetSectionIds },
      },
      select: { id: true, sectionId: true, order: true },
      orderBy: [{ sectionId: 'asc' }, { order: 'asc' }],
    });

    const maxOrderBySectionId = new Map<string, number>();

    for (const quiz of existingQuizzesInTargetSections) {
      const currentMaxOrder = maxOrderBySectionId.get(quiz.sectionId) ?? 0;
      maxOrderBySectionId.set(quiz.sectionId, Math.max(currentMaxOrder, quiz.order));
    }

    const nextTempOrderBySectionId = new Map(
      [...maxOrderBySectionId.entries()].map(([sectionId, maxOrder]) => [sectionId, maxOrder + 1] as const)
    );

    for (const quiz of existingQuizzesInTargetSections) {
      const nextTempOrder = nextTempOrderBySectionId.get(quiz.sectionId);

      if (!nextTempOrder) {
        continue;
      }

      await prisma.trainingQuiz.update({
        where: { id: quiz.id },
        data: { order: nextTempOrder },
      });

      nextTempOrderBySectionId.set(quiz.sectionId, nextTempOrder + 1);
    }
  }

  const questionIdByOrder = new Map(
    chapterQuestions.map((question) => [question.order, question.id] as const)
  );

  for (const quizSeed of quizSeeds) {
    const sectionId = sectionIdByOrder.get(quizSeed.sectionOrder);

    if (!sectionId) {
      console.warn(
        `   ⚠️  Section introuvable pour ${chapter.title} (ordre ${quizSeed.sectionOrder})`
      );
      continue;
    }

    const quiz = await prisma.trainingQuiz.upsert({
      where: {
        chapterId_slug: {
          chapterId: chapter.id,
          slug: quizSeed.slug,
        },
      },
      update: {
        sectionId,
        title: quizSeed.title,
        description: quizSeed.description,
        order: quizSeed.order,
        stage: quizSeed.stage,
        isPublished: true,
      },
      create: {
        chapterId: chapter.id,
        sectionId,
        slug: quizSeed.slug,
        title: quizSeed.title,
        description: quizSeed.description,
        order: quizSeed.order,
        stage: quizSeed.stage,
        isPublished: true,
      },
      select: { id: true },
    });

    await prisma.trainingQuizQuestion.deleteMany({
      where: { quizId: quiz.id },
    });

    await prisma.trainingQuizQuestionGroup.deleteMany({
      where: { quizId: quiz.id },
    });

    let linkedQuestionCount = 0;
    let quizQuestionOrder = 1;

    for (const item of normalizeSeedQuizItems(quizSeed)) {
      if (item.type === 'QUESTION') {
        const questionId = questionIdByOrder.get(item.questionOrder);

        if (!questionId) {
          console.warn(
            `   ⚠️  Question introuvable pour ${chapter.title} (ordre ${item.questionOrder})`
          );
          continue;
        }

        await prisma.trainingQuizQuestion.create({
          data: {
            quizId: quiz.id,
            questionId,
            order: quizQuestionOrder,
          },
        });

        quizQuestionOrder += 1;
        linkedQuestionCount += 1;
        continue;
      }

      const questionGroup = await prisma.trainingQuizQuestionGroup.create({
        data: {
          quizId: quiz.id,
          title: item.title?.trim() || null,
          sharedStatement: item.sharedStatement,
          order: item.order,
        },
        select: { id: true },
      });

      for (const questionOrder of item.questionOrders) {
        const questionId = questionIdByOrder.get(questionOrder);

        if (!questionId) {
          console.warn(`   ⚠️  Question introuvable pour ${chapter.title} (ordre ${questionOrder})`);
          continue;
        }

        await prisma.trainingQuizQuestion.create({
          data: {
            quizId: quiz.id,
            groupId: questionGroup.id,
            questionId,
            order: quizQuestionOrder,
          },
        });

        quizQuestionOrder += 1;
        linkedQuestionCount += 1;
      }
    }

    const sectionLabel =
      sectionLabelByOrder.get(quizSeed.sectionOrder) ?? `section ${quizSeed.sectionOrder}`;
    const stageLabel = quizSeed.stage ? trainingQuizStageLogLabels[quizSeed.stage] : 'Sans niveau';

    console.log(
      `      ${SUCCESS_TICK} QCM ${quizSeed.order} | ${sectionLabel} | ${stageLabel} | ${linkedQuestionCount} question${linkedQuestionCount > 1 ? 's' : ''} | ${quizSeed.slug}`
    );
  }
}
