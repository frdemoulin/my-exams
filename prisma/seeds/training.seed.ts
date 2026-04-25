import type {
  ChapterSectionKind,
  PrismaClient,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';
import { inferTrainingQuizStageFromOrder } from '../../src/core/training/training-stage';
import { lunetteTrainingChapter } from './data/lunette-training-chapter';
import { mouvementsFluideTrainingChapter } from './data/mouvements-fluide-training-chapter';
import { optimisationSyntheseTrainingChapter } from './data/optimisation-synthese-training-chapter';
import { thermalTransfersTrainingChapter } from './data/thermal-transfers-training-chapter';
import { transformationNucleaireTrainingChapter } from './data/transformation-nucleaire-training-chapter';

type SeedQuizQuestion = {
  difficulty: QuizDifficulty;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
};

type SeedTrainingQuizQuestionGroup = {
  title?: string;
  sharedStatement: string;
  order: number;
  questionOrders: number[];
};

type SeedTrainingQuizItem =
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

type SeedTrainingQuiz = {
  title: string;
  slug: string;
  description: string;
  order: number;
  stage?: TrainingQuizStage;
  isPublished?: boolean;
  questionOrders?: number[];
  questionGroups?: SeedTrainingQuizQuestionGroup[];
  items?: SeedTrainingQuizItem[];
};

type SeedChapterSection = {
  title: string;
  description: string;
  order: number;
  kind?: ChapterSectionKind;
  quizzes: SeedTrainingQuiz[];
};

type SeedChapter = {
  title: string;
  slug: string;
  order: number;
  domainLongDescriptions: string[];
  questions: SeedQuizQuestion[];
  sections?: SeedChapterSection[];
};

function normalizeSeedQuizItems(quiz: SeedTrainingQuiz) {
  if (quiz.items?.length) {
    return quiz.items.map((item, index) => ({
      ...item,
      order: index + 1,
    }));
  }

  let itemOrder = 1;
  const items: Array<
    | {
        type: 'QUESTION';
        questionOrder: number;
        order: number;
      }
    | {
        type: 'GROUP';
        title?: string;
        sharedStatement: string;
        questionOrders: number[];
        order: number;
      }
  > = [];

  for (const questionOrder of quiz.questionOrders ?? []) {
    items.push({
      type: 'QUESTION',
      questionOrder,
      order: itemOrder,
    });
    itemOrder += 1;
  }

  for (const questionGroup of [...(quiz.questionGroups ?? [])].sort(
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
}

const subjectLongDescription = 'Sciences physiques';

const chapters: SeedChapter[] = [
  {
    title: 'Transformation acide-base et pH',
    slug: 'transformation-acide-base-et-ph',
    order: 1,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'EASY',
        order: 1,
        question: 'Dans une solution aqueuse, si $[H_3O^+] = 1{,}0 \\times 10^{-3}\\ \\mathrm{mol\\cdot L^{-1}}$, quelle est la valeur du pH ?',
        choices: ['$1$', '$3$', '$7$', '$11$'],
        correctChoiceIndex: 1,
        explanation: 'On utilise $pH = -\\log([H_3O^+])$. Donc $pH = -\\log(10^{-3}) = 3$.',
      },
    ],
  },
  {
    title: "Analyse d'un système",
    slug: 'analyse-d-un-systeme',
    order: 2,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Pour la réaction $A + 2B \\rightarrow C$, on introduit $n_A^0 = 0{,}10\\ \\mathrm{mol}$ et $n_B^0 = 0{,}30\\ \\mathrm{mol}$. Quel est l’avancement maximal ?',
        choices: ['$0{,}05\\ \\mathrm{mol}$', '$0{,}10\\ \\mathrm{mol}$', '$0{,}15\\ \\mathrm{mol}$', '$0{,}30\\ \\mathrm{mol}$'],
        correctChoiceIndex: 1,
        explanation: 'Il faut comparer $n_A^0/1 = 0{,}10$ et $n_B^0/2 = 0{,}15$. Le minimum donne $x_{max} = 0{,}10\\ \\mathrm{mol}$.',
      },
    ],
  },
  {
    title: 'Suivi temporel et modélisation macroscopique',
    slug: 'suivi-temporel-et-modelisation-macroscopique',
    order: 3,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'EASY',
        order: 1,
        question: 'À quoi correspond le temps de demi-réaction $t_{1/2}$ ?',
        choices: [
          'Au temps nécessaire pour consommer toute la matière.',
          'Au temps nécessaire pour atteindre la moitié de l’avancement final.',
          'À la moitié de la durée totale de l’expérience.',
          'Au temps où la vitesse est maximale.',
        ],
        correctChoiceIndex: 1,
        explanation: 'Par définition, $t_{1/2}$ vérifie $x(t_{1/2}) = x_f/2$.',
      },
    ],
  },
  {
    title: 'Suivi temporel et modélisation microscopique',
    slug: 'suivi-temporel-et-modelisation-microscopique',
    order: 4,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Pour une cinétique d’ordre 1 modélisée par $v = k[A]$, quelle est l’unité de $k$ si $v$ est en $\\mathrm{mol\\cdot L^{-1}\\cdot s^{-1}}$ ?',
        choices: ['$\\mathrm{s^{-1}}$', '$\\mathrm{mol\\cdot L^{-1}}$', '$\\mathrm{L\\cdot mol^{-1}\\cdot s^{-1}}$', '$\\mathrm{mol\\cdot s^{-1}}$'],
        correctChoiceIndex: 0,
        explanation: 'Comme $v = k[A]$, on a $k = v/[A]$, donc $k$ s’exprime en $\\mathrm{s^{-1}}$.',
      },
    ],
  },
  transformationNucleaireTrainingChapter,
  {
    title: "Évolution spontanée d'un système chimique",
    slug: 'evolution-spontanee-d-un-systeme-chimique',
    order: 6,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Pour une transformation chimique, si le quotient de réaction initial $Q_{r,i}$ est inférieur à la constante d’équilibre $K$, dans quel sens le système évolue-t-il spontanément ?',
        choices: ['Dans le sens direct.', 'Dans le sens inverse.', 'Il reste forcément immobile.', 'Le sens dépend uniquement de la température.'],
        correctChoiceIndex: 0,
        explanation: 'Si $Q_{r,i} < K$, le système évolue dans le sens qui augmente $Q_r$, donc dans le sens direct.',
      },
    ],
  },
  {
    title: 'Équilibre de la réaction acide-base',
    slug: 'equilibre-de-la-reaction-acide-base',
    order: 7,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'EASY',
        order: 1,
        question: 'Pour le couple acide-base $HA/A^-$, quelle expression correspond à la constante d’acidité $K_a$ ?',
        choices: ['$K_a = \\dfrac{[HA]}{[A^-][H_3O^+]}$', '$K_a = \\dfrac{[A^-][H_3O^+]}{[HA]}$', '$K_a = [HA][A^-]$', '$K_a = \\dfrac{[H_3O^+]}{[A^-]}$'],
        correctChoiceIndex: 1,
        explanation: 'Pour $HA + H_2O \\rightleftharpoons A^- + H_3O^+$, on a $K_a = \\dfrac{[A^-][H_3O^+]}{[HA]}$.',
      },
    ],
  },
  {
    title: 'Électrolyse',
    slug: 'electrolyse',
    order: 8,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Lors d’une électrolyse menée avec un courant constant $I$ pendant une durée $\\Delta t$, quelle relation donne la quantité de charge transférée ?',
        choices: ['$Q = I\\Delta t$', '$Q = \\dfrac{I}{\\Delta t}$', '$Q = F\\Delta t$', '$Q = nI$'],
        correctChoiceIndex: 0,
        explanation: 'La charge électrique transférée par un courant constant est $Q = I\\Delta t$.',
      },
    ],
  },
  optimisationSyntheseTrainingChapter,
  {
    title: 'Stratégie de synthèse multi-étapes',
    slug: 'strategie-de-synthese-multi-etapes',
    order: 10,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Une synthèse comporte deux étapes de rendements $80\\%$ puis $50\\%$. Quel est le rendement global ?',
        choices: ['$30\\%$', '$40\\%$', '$65\\%$', '$130\\%$'],
        correctChoiceIndex: 1,
        explanation: 'Les rendements successifs se multiplient : $0{,}80 \\times 0{,}50 = 0{,}40$, soit $40\\%$.',
      },
    ],
  },
  {
    title: 'Forces et mouvements',
    slug: 'forces-et-mouvements',
    order: 11,
    domainLongDescriptions: ['Mouvement et interactions'],
    questions: [
      {
        difficulty: 'EASY',
        order: 1,
        question: 'Dans un référentiel galiléen, quelle relation traduit la deuxième loi de Newton pour un système de masse constante ?',
        choices: ['$\\sum \\vec{F} = m\\vec{a}$', '$\\sum \\vec{F} = \\dfrac{\\vec{v}}{m}$', '$\\sum \\vec{F} = m\\vec{v}$', '$\\sum \\vec{F} = \\vec{0}$ dans tous les cas'],
        correctChoiceIndex: 0,
        explanation: 'Pour une masse constante, la deuxième loi de Newton s’écrit $\\sum \\vec{F} = m\\vec{a}$.',
      },
    ],
  },
  {
    title: 'Mouvement et énergies dans un champ uniforme',
    slug: 'mouvement-et-energies-dans-un-champ-uniforme',
    order: 12,
    domainLongDescriptions: ['Mouvement et interactions'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Dans un champ de pesanteur uniforme, sans frottements, quelle grandeur se conserve pour un projectile ?',
        choices: ['Son énergie cinétique.', 'Son énergie potentielle de pesanteur.', 'Son énergie mécanique.', 'Sa vitesse verticale.'],
        correctChoiceIndex: 2,
        explanation: 'Sans frottements, seules des forces conservatives travaillent : l’énergie mécanique $E_m = E_c + E_p$ se conserve.',
      },
    ],
  },
  {
    title: 'Mouvements des satellites et des planètes',
    slug: 'mouvements-des-satellites-et-des-planetes',
    order: 13,
    domainLongDescriptions: ['Mouvement et interactions'],
    questions: [
      {
        difficulty: 'HARD',
        order: 1,
        question: 'Pour un satellite en orbite circulaire de rayon $r$ autour d’un astre de masse $M$, quelle expression donne sa vitesse orbitale ?',
        choices: ['$v = \\sqrt{\\dfrac{GM}{r}}$', '$v = \\sqrt{GMr}$', '$v = \\dfrac{GM}{r^2}$', '$v = 2\\pi r$'],
        correctChoiceIndex: 0,
        explanation: 'La gravitation fournit l’accélération centripète : $\\dfrac{GMm}{r^2}=m\\dfrac{v^2}{r}$, donc $v=\\sqrt{GM/r}$.',
      },
    ],
  },
  mouvementsFluideTrainingChapter,
  {
    title: 'Modèle du gaz parfait',
    slug: 'modele-du-gaz-parfait',
    order: 15,
    domainLongDescriptions: ['Énergie'],
    questions: [
      {
        difficulty: 'EASY',
        order: 1,
        question: 'Quelle équation d’état relie pression, volume, quantité de matière et température pour un gaz parfait ?',
        choices: ['$PV=nRT$', '$P=nVT$', '$V=nRP$', '$T=PVnR$'],
        correctChoiceIndex: 0,
        explanation: 'Le modèle du gaz parfait est décrit par l’équation $PV=nRT$.',
      },
    ],
  },
  thermalTransfersTrainingChapter,
  {
    title: 'Atténuations et effet Doppler',
    slug: 'attenuations-et-effet-doppler',
    order: 17,
    domainLongDescriptions: ['Ondes et signaux'],
    questions: [
      {
        difficulty: 'EASY',
        order: 1,
        question: 'Lorsqu’une source sonore se rapproche d’un observateur immobile, comment évolue la fréquence perçue par rapport à la fréquence émise ?',
        choices: ['Elle diminue.', 'Elle augmente.', 'Elle reste toujours égale.', 'Elle devient nulle.'],
        correctChoiceIndex: 1,
        explanation: 'Par effet Doppler, une source qui se rapproche produit une fréquence perçue plus grande que la fréquence émise.',
      },
    ],
  },
  {
    title: 'Diffraction des ondes et interférences',
    slug: 'diffraction-des-ondes-et-interferences',
    order: 18,
    domainLongDescriptions: ['Ondes et signaux'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Pour une ouverture de largeur $a$ diffractant une onde de longueur d’onde $\\lambda$, quelle approximation donne l’angle caractéristique de diffraction ?',
        choices: ['$\\theta \\approx \\dfrac{\\lambda}{a}$', '$\\theta \\approx \\lambda a$', '$\\theta \\approx \\dfrac{a}{\\lambda}$', '$\\theta \\approx \\lambda + a$'],
        correctChoiceIndex: 0,
        explanation: 'Pour les petits angles, l’écart angulaire caractéristique vérifie $\\theta \\approx \\lambda/a$.',
      },
    ],
  },
  lunetteTrainingChapter,
  {
    title: 'La lumière : un flux de photons',
    slug: 'la-lumiere-un-flux-de-photons',
    order: 20,
    domainLongDescriptions: ['Ondes et signaux'],
    questions: [
      {
        difficulty: 'EASY',
        order: 1,
        question: 'Quelle relation donne l’énergie d’un photon de fréquence $\\nu$ ?',
        choices: ['$E=h\\nu$', '$E=\\dfrac{h}{\\nu}$', '$E=h+\\nu$', '$E=mgh$'],
        correctChoiceIndex: 0,
        explanation: 'L’énergie d’un photon est proportionnelle à sa fréquence : $E=h\\nu$. On peut aussi écrire $E=hc/\\lambda$.',
      },
    ],
  },
  {
    title: 'Systèmes électriques capacitifs',
    slug: 'systemes-electriques-capacitifs',
    order: 21,
    domainLongDescriptions: ['Énergie', 'Ondes et signaux'],
    questions: [
      {
        difficulty: 'MEDIUM',
        order: 1,
        question: 'Dans un circuit $RC$, quelle expression donne la constante de temps $\\tau$ ?',
        choices: ['$\\tau = RC$', '$\\tau = \\dfrac{R}{C}$', '$\\tau = \\dfrac{C}{R}$', '$\\tau = R + C$'],
        correctChoiceIndex: 0,
        explanation: 'La constante de temps d’un dipôle $RC$ vaut $\\tau = RC$ et s’exprime en secondes.',
      },
    ],
  },
];

export async function seedTraining(prisma: PrismaClient) {
  console.log('🧠 Seeding Training chapters and quizzes...');

  const subject = await prisma.subject.findFirst({
    where: {
      longDescription: subjectLongDescription,
      isActive: true,
    },
    select: {
      id: true,
    },
  });

  if (!subject) {
    console.warn(`   ⚠️  Matière introuvable: ${subjectLongDescription}`);
    return;
  }

  const domainLongDescriptions = Array.from(
    new Set(chapters.flatMap((chapter) => chapter.domainLongDescriptions))
  );
  const domains = await prisma.domain.findMany({
    where: {
      subjectId: subject.id,
      longDescription: {
        in: domainLongDescriptions,
      },
    },
    select: {
      id: true,
      longDescription: true,
    },
  });
  const domainIdByLongDescription = new Map(
    domains.map((domain) => [domain.longDescription, domain.id])
  );

  let chapterCount = 0;
  let questionCount = 0;
  let sectionCount = 0;
  let quizCount = 0;
  let questionGroupCount = 0;
  let quizLinkCount = 0;
  let updatedQuestionCount = 0;
  let updatedSectionCount = 0;
  let updatedQuizCount = 0;
  let updatedQuestionGroupCount = 0;
  let updatedQuizLinkCount = 0;
  let skippedChapterCount = 0;
  let skippedQuestionCount = 0;
  let skippedSectionCount = 0;
  let skippedQuizCount = 0;
  let skippedQuestionGroupCount = 0;
  let skippedQuizLinkCount = 0;

  for (const chapterSeed of chapters) {
    const domainIds = chapterSeed.domainLongDescriptions
      .map((longDescription) => domainIdByLongDescription.get(longDescription))
      .filter((id): id is string => Boolean(id));

    const existingChapter = await prisma.chapter.findUnique({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: chapterSeed.slug,
        },
      },
      select: {
        id: true,
      },
    });

    const chapter = existingChapter
      ? existingChapter
      : await prisma.chapter.create({
          data: {
            title: chapterSeed.title,
            slug: chapterSeed.slug,
            level: 'terminale',
            order: chapterSeed.order,
            isActive: true,
            isPublished: true,
            subjectId: subject.id,
            domainIds,
          },
            select: {
            id: true,
          },
        });

    if (existingChapter) {
      skippedChapterCount++;
    } else {
      chapterCount++;
    }

    for (const question of chapterSeed.questions) {
      const existingQuestion = await prisma.quizQuestion.findUnique({
        where: {
          chapterId_order: {
            chapterId: chapter.id,
            order: question.order,
          },
        },
        select: {
          id: true,
        },
      });

      if (existingQuestion) {
        await prisma.quizQuestion.update({
          where: {
            id: existingQuestion.id,
          },
          data: {
            difficulty: question.difficulty,
            question: question.question,
            choices: question.choices,
            correctChoiceIndex: question.correctChoiceIndex,
            explanation: question.explanation,
            isPublished: true,
          },
        });
        updatedQuestionCount++;
        continue;
      }

      await prisma.quizQuestion.create({
        data: {
          chapterId: chapter.id,
          difficulty: question.difficulty,
          question: question.question,
          choices: question.choices,
          correctChoiceIndex: question.correctChoiceIndex,
          explanation: question.explanation,
          order: question.order,
          isPublished: true,
        },
      });
      questionCount++;
    }

    if (!chapterSeed.sections?.length) {
      continue;
    }

    const chapterQuestions = await prisma.quizQuestion.findMany({
      where: {
        chapterId: chapter.id,
      },
      select: {
        id: true,
        order: true,
      },
    });

    const questionIdByOrder = new Map(
      chapterQuestions.map((question) => [question.order, question.id])
    );

    for (const sectionSeed of chapterSeed.sections) {
      const existingSection = await prisma.chapterSection.findUnique({
        where: {
          chapterId_order: {
            chapterId: chapter.id,
            order: sectionSeed.order,
          },
        },
        select: {
          id: true,
        },
      });

      const section = existingSection
        ? await prisma.chapterSection.update({
            where: {
              id: existingSection.id,
            },
            data: {
              title: sectionSeed.title,
              description: sectionSeed.description,
              order: sectionSeed.order,
              kind: sectionSeed.kind ?? 'THEME',
              isPublished: true,
            },
            select: {
              id: true,
            },
          })
        : await prisma.chapterSection.create({
            data: {
              chapterId: chapter.id,
              title: sectionSeed.title,
              description: sectionSeed.description,
              order: sectionSeed.order,
              kind: sectionSeed.kind ?? 'THEME',
              isPublished: true,
              themeIds: [],
            },
            select: {
              id: true,
            },
          });

      if (existingSection) {
        updatedSectionCount++;
      } else {
        sectionCount++;
      }

      for (const quizSeed of sectionSeed.quizzes) {
        const quizStage = quizSeed.stage ?? inferTrainingQuizStageFromOrder(quizSeed.order);
        const existingQuiz = await prisma.trainingQuiz.findUnique({
          where: {
            chapterId_slug: {
              chapterId: chapter.id,
              slug: quizSeed.slug,
            },
          },
          select: {
            id: true,
          },
        });

        const quiz = existingQuiz
          ? await prisma.trainingQuiz.update({
              where: {
                id: existingQuiz.id,
              },
              data: {
                sectionId: section.id,
                title: quizSeed.title,
                description: quizSeed.description,
                order: quizSeed.order,
                stage: quizStage,
                isPublished: quizSeed.isPublished ?? true,
              },
              select: {
                id: true,
              },
            })
          : await prisma.trainingQuiz.create({
              data: {
                chapterId: chapter.id,
                sectionId: section.id,
                slug: quizSeed.slug,
                title: quizSeed.title,
                description: quizSeed.description,
                order: quizSeed.order,
                stage: quizStage,
                isPublished: quizSeed.isPublished ?? true,
              },
              select: {
                id: true,
              },
            });

        if (existingQuiz) {
          updatedQuizCount++;
        } else {
          quizCount++;
        }

        const normalizedQuizItems = normalizeSeedQuizItems(quizSeed);

          let quizQuestionOrder = 1;

        for (const item of normalizedQuizItems) {
          if (item.type === 'QUESTION') {
            const questionId = questionIdByOrder.get(item.questionOrder);
            const currentOrder = quizQuestionOrder;

            quizQuestionOrder += 1;

            if (!questionId) {
              console.warn(
                `   ⚠️  Question introuvable pour ${chapterSeed.slug} (ordre ${item.questionOrder})`
              );
              continue;
            }

            const existingQuizLink = await prisma.trainingQuizQuestion.findUnique({
              where: {
                quizId_questionId: {
                  quizId: quiz.id,
                  questionId,
                },
              },
              select: {
                id: true,
              },
            });

            if (existingQuizLink) {
              await prisma.trainingQuizQuestion.update({
                where: {
                  id: existingQuizLink.id,
                },
                data: {
                  groupId: null,
                  order: currentOrder,
                },
              });
              updatedQuizLinkCount++;
              continue;
            }

            await prisma.trainingQuizQuestion.create({
              data: {
                quizId: quiz.id,
                questionId,
                order: currentOrder,
              },
            });
            quizLinkCount++;
            continue;
          }

          const existingQuestionGroup = await prisma.trainingQuizQuestionGroup.findUnique({
            where: {
              quizId_order: {
                quizId: quiz.id,
                order: item.order,
              },
            },
            select: {
              id: true,
            },
          });

          const questionGroup = existingQuestionGroup
            ? await prisma.trainingQuizQuestionGroup.update({
                where: {
                  id: existingQuestionGroup.id,
                },
                data: {
                  title: item.title?.trim() || null,
                  sharedStatement: item.sharedStatement,
                  order: item.order,
                },
                select: {
                  id: true,
                },
              })
            : await prisma.trainingQuizQuestionGroup.create({
                data: {
                  quizId: quiz.id,
                  title: item.title?.trim() || null,
                  sharedStatement: item.sharedStatement,
                  order: item.order,
                },
                select: {
                  id: true,
                },
              });

          if (existingQuestionGroup) {
            updatedQuestionGroupCount++;
          } else {
            questionGroupCount++;
          }

          for (const questionOrder of item.questionOrders) {
            const questionId = questionIdByOrder.get(questionOrder);
            const currentOrder = quizQuestionOrder;

            quizQuestionOrder += 1;

            if (!questionId) {
              console.warn(
                `   ⚠️  Question introuvable pour ${chapterSeed.slug} (ordre ${questionOrder})`
              );
              continue;
            }

            const existingQuizLink = await prisma.trainingQuizQuestion.findUnique({
              where: {
                quizId_questionId: {
                  quizId: quiz.id,
                  questionId,
                },
              },
              select: {
                id: true,
              },
            });

            if (existingQuizLink) {
              await prisma.trainingQuizQuestion.update({
                where: {
                  id: existingQuizLink.id,
                },
                data: {
                  groupId: questionGroup.id,
                  order: currentOrder,
                },
              });
              updatedQuizLinkCount++;
              continue;
            }

            await prisma.trainingQuizQuestion.create({
              data: {
                quizId: quiz.id,
                groupId: questionGroup.id,
                questionId,
                order: currentOrder,
              },
            });
            quizLinkCount++;
          }
        }
      }
    }
  }

  console.log(
    `   ✓ ${chapterCount} chapitres, ${questionCount} questions, ${sectionCount} sections, ${quizCount} quiz, ${questionGroupCount} blocs liés et ${quizLinkCount} liaisons créés (${updatedQuestionCount} questions, ${updatedSectionCount} sections, ${updatedQuizCount} quiz, ${updatedQuestionGroupCount} blocs liés, ${updatedQuizLinkCount} liaisons mis à jour ; ${skippedChapterCount} chapitres déjà présents)`
  );
}
