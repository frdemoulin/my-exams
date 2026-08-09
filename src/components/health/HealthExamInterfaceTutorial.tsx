"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";

import {
  HealthMockExamSession,
  type HealthMockExamSessionAnswer,
} from "@/components/health/HealthMockExamSession";
import { HealthMockExamResults } from "@/components/health/HealthMockExamResults";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type {
  HealthMockExamPassage,
  HealthMockExamResults as HealthMockExamResultsData,
} from "@/core/health-mock-exam/health-mock-exam.types";
import {
  evaluateQuestion,
  getChoiceIdFromIndex,
  type HotspotQuestion,
  type MultipleChoiceQuestion,
  type Question,
  type ShortAnswerQuestion,
} from "@/core/questions";

const tutorialHref = "/sante/interface-examen";

function buildMcqQuestion(input: {
  id: string;
  format: "QRU" | "QRM" | "QRP";
  statement: string;
  choices: string[];
  correctChoiceIndexes: number[];
  explanation: string;
  requiredSelectionCount?: number;
}): MultipleChoiceQuestion {
  return {
    id: input.id,
    type: "mcq",
    format: input.format,
    statement: input.statement,
    explanation: input.explanation,
    selectionMode: input.format === "QRU" ? "single" : "multiple",
    requiredSelectionCount: input.requiredSelectionCount,
    choices: input.choices.map((choice, choiceIndex) => ({
      id: getChoiceIdFromIndex(choiceIndex),
      content: choice,
      correct: input.correctChoiceIndexes.includes(choiceIndex),
      explanation: input.correctChoiceIndexes.includes(choiceIndex)
        ? "Réponse attendue dans ce tutoriel."
        : "Cette proposition n'était pas attendue ici.",
    })),
    scoring: {
      strategy: "all-or-nothing",
    },
  };
}

function buildShortAnswerQuestion(): ShortAnswerQuestion {
  return {
    id: "tutorial-qroc",
    type: "short-answer",
    format: "QROC",
    statement:
      "QROC — Question ouverte à rédaction courte : combien font 2 + 2 ? Répondez en chiffres, par exemple 4 et non quatre.",
    explanation:
      "La réponse attendue est 4, saisie en chiffres. L'objectif est surtout de pratiquer la saisie courte.",
    answerType: "number",
    numericAnswer: {
      value: 4,
      tolerance: 0,
    },
    scoring: {
      strategy: "all-or-nothing",
    },
  };
}

function buildHotspotQuestion(): HotspotQuestion {
  return {
    id: "tutorial-qzone",
    type: "hotspot",
    format: "QZONE",
    statement:
      "QZONE — Question à zone à pointer : pointez le cercle bleu au centre du schéma ci-dessous.",
    explanation:
      "Une QZONE demande de pointer une zone précise sur un schéma ou une image. Vos coordonnées sont enregistrées en relatif.",
    image: {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%231e293b'/><circle cx='300' cy='200' r='60' fill='%233b82f6' stroke='%2360a5fa' stroke-width='4'/><text x='300' y='205' font-family='sans-serif' font-size='18' fill='white' text-anchor='middle'>Zone Cible (QZONE)</text></svg>",
      alt: "Exemple de support visuel QZONE avec zone cible centrale",
    },
    expectedZones: [
      {
        id: "zone-centre",
        label: "Zone Cible Centrale",
        x: 0.5,
        y: 0.5,
        tolerance: 0.12,
      },
    ],
    defaultTolerance: 0.12,
    scoring: {
      strategy: "all-or-nothing",
    },
  };
}

const tutorialQuestions = [
  buildMcqQuestion({
    id: "tutorial-qru",
    format: "QRU",
    statement: "QRU — Question à réponse unique : sélectionnez la seule proposition vraie.",
    choices: [
      "Une QRU attend une seule réponse.",
      "Une QRU attend toujours deux réponses.",
      "Une QRU est une question ouverte.",
      "Une QRU se répond en pointant une image.",
    ],
    correctChoiceIndexes: [0],
    explanation: "Une QRU appartient à la famille QCM et attend une seule proposition.",
  }),
  buildMcqQuestion({
    id: "tutorial-skip",
    format: "QRU",
    statement:
      "QRU — Question à passer : laissez cette question sans réponse, puis revenez-y avec le navigateur.",
    choices: [
      "Je peux laisser une question sans réponse et y revenir.",
      "Une question ignorée est automatiquement fausse immédiatement.",
      "Il est impossible de revenir en arrière.",
      "Le navigateur sert uniquement à décorer l'interface.",
    ],
    correctChoiceIndexes: [0],
    explanation: "Le navigateur permet de revenir sur une question laissée sans réponse.",
  }),
  buildMcqQuestion({
    id: "tutorial-qrm-review",
    format: "QRM",
    statement:
      "QRM — Question à réponses multiples : marquez cette question « À revoir », puis sélectionnez les deux actions disponibles.",
    choices: [
      "Marquer une question à revoir.",
      "Naviguer vers une autre question.",
      "Supprimer définitivement l'examen.",
      "Afficher la correction pendant l'examen.",
    ],
    correctChoiceIndexes: [0, 1],
    explanation: "Le tutoriel vous fait pratiquer le marquage et la navigation.",
  }),
  buildMcqQuestion({
    id: "tutorial-qrp",
    format: "QRP",
    statement:
      "QRP — Question à nombre de réponses précisé : sélectionnez exactement deux propositions.",
    choices: [
      "Le chrono reste visible.",
      "Le bouton précédent permet de revenir en arrière.",
      "La correction détaillée s'affiche pendant l'examen.",
      "Le tutoriel modifie votre moyenne académique.",
    ],
    correctChoiceIndexes: [0, 1],
    requiredSelectionCount: 2,
    explanation: "Une QRP impose un nombre précis de réponses. Ici, deux propositions sont attendues.",
  }),
  buildShortAnswerQuestion(),
  buildHotspotQuestion(),
] satisfies Question[];

function toPassageQuestion(
  question: Question,
  index: number,
): HealthMockExamPassage["questions"][number] {
  const choices =
    question.type === "mcq"
      ? question.choices.map((choice) => choice.content)
      : [];
  const correctChoiceIndexes =
    question.type === "mcq"
      ? question.choices
          .map((choice, choiceIndex) => ({ choice, choiceIndex }))
          .filter(({ choice }) => choice.correct)
          .map(({ choiceIndex }) => choiceIndex)
      : [];

  return {
    attemptQuestionId: `tutorial-attempt-${question.id}`,
    id: question.id,
    globalOrder: index + 1,
    order: index + 1,
    questionType: question.type,
    answerFormat:
      question.type === "mcq" && question.selectionMode === "multiple"
        ? "MULTIPLE"
        : "SINGLE",
    question: question.statement,
    questionDiagram: null,
    choices,
    answerPayload:
      question.type === "short-answer"
        ? {
            answerType: question.answerType,
            acceptedAnswers: question.acceptedAnswers ?? [],
            numericAnswer: question.numericAnswer ?? null,
          }
        : question.type === "mcq" && question.requiredSelectionCount
          ? { requiredSelectionCount: question.requiredSelectionCount }
          : null,
    canonicalQuestion: question,
    group: null,
    selectedChoiceIndexes: [],
    responsePayload: null,
    markedForReview: false,
  };
}

function createTutorialPassage(runKey: number): HealthMockExamPassage {
  const startedAt = new Date();
  const deadlineAt = new Date(startedAt.getTime() + 5 * 60 * 1000);

  return {
    attemptId: `interface-tutorial-${runKey}`,
    startedAt: startedAt.toISOString(),
    deadlineAt: deadlineAt.toISOString(),
    title: "S'entraîner à l'interface d'examen",
    instructions:
      "Ce tutoriel ne teste pas vos connaissances. Réalisez les gestes demandés pour reconnaître les formats UNESS et les commandes du mode examen.",
    questionCount: tutorialQuestions.length,
    sections: [
      {
        id: "interface-tutorial-section",
        title: "Découverte de l'interface",
        order: 1,
        firstQuestion: 1,
        lastQuestion: tutorialQuestions.length,
      },
    ],
    questions: tutorialQuestions.map(toPassageQuestion),
  };
}

function getCorrectChoiceIndexes(question: Question) {
  return question.type === "mcq"
    ? question.choices
        .map((choice, choiceIndex) => ({ choice, choiceIndex }))
        .filter(({ choice }) => choice.correct)
        .map(({ choiceIndex }) => choiceIndex)
    : [];
}

function buildTutorialResults(input: {
  passage: HealthMockExamPassage;
  answersByAttemptQuestionId: Record<string, HealthMockExamSessionAnswer>;
  elapsedSeconds: number;
}): HealthMockExamResultsData {
  const questions = input.passage.questions.map((question) => {
    const answer = input.answersByAttemptQuestionId[question.attemptQuestionId];
    const evaluation = evaluateQuestion(question.canonicalQuestion, answer?.responsePayload);
    const correctChoiceIndexes = getCorrectChoiceIndexes(question.canonicalQuestion);
    const choiceExplanations =
      question.canonicalQuestion.type === "mcq"
        ? question.canonicalQuestion.choices.map((choice) => choice.explanation ?? "")
        : [];

    return {
      ...question,
      selectedChoiceIndexes: answer?.selectedChoiceIndexes ?? [],
      responsePayload: answer?.responsePayload ?? null,
      markedForReview: answer?.markedForReview ?? false,
      correctChoiceIndexes,
      explanation: question.canonicalQuestion.explanation ?? "",
      choiceExplanations,
      evaluationStatus: evaluation.status,
      score: evaluation.score,
      maxScore: evaluation.maxScore,
    };
  });
  const score = questions.reduce((total, question) => total + question.score, 0);
  const maxScore = questions.reduce((total, question) => total + question.maxScore, 0);
  const answeredQuestionCount = questions.filter(
    (question) => question.evaluationStatus !== "unanswered",
  ).length;
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  return {
    attemptId: input.passage.attemptId,
    status: "SUBMITTED",
    submittedAt: new Date().toISOString(),
    elapsedSeconds: input.elapsedSeconds,
    score,
    maxScore,
    percentage,
    autoSubmitted: false,
    title: input.passage.title,
    slug: "interface-tutorial",
    courseUnitId: "interface-tutorial",
    courseUnitTitle: "Mode examen",
    questions,
    sections: input.passage.sections.map((section) => ({
      id: section.id,
      title: section.title,
      firstQuestion: section.firstQuestion,
      lastQuestion: section.lastQuestion,
      score,
      maxScore,
      percentage,
    })),
  };
}

export function HealthExamInterfaceTutorial() {
  const [runKey, setRunKey] = useState(0);
  const passage = useMemo(() => createTutorialPassage(runKey), [runKey]);
  const [result, setResult] = useState<HealthMockExamResultsData | null>(null);
  const answeredQuestionCount = result
    ? result.questions.filter((question) => question.evaluationStatus !== "unanswered").length
    : 0;
  const markedForReviewCount = result
    ? result.questions.filter((question) => question.markedForReview).length
    : 0;

  if (result) {
    return (
      <div className="space-y-6">
        <Card className="rounded-base bg-card hover:bg-card">
          <CardHeader>
            <CardTitle>Récapitulatif pédagogique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Ce score n&apos;est pas une performance académique. Il sert seulement à vérifier que
              vous avez manipulé les principaux éléments du mode examen.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                {answeredQuestionCount}/{result.questions.length} questions répondues
              </Badge>
              <Badge variant="outline">
                {result.questions.length - answeredQuestionCount} sans réponse
              </Badge>
              <Badge variant="outline">{markedForReviewCount} à revoir</Badge>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setRunKey((value) => value + 1);
                setResult(null);
              }}
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Refaire sans recharger la page
            </Button>
          </CardContent>
        </Card>

        <HealthMockExamResults
          result={result}
          restartHref={tutorialHref}
          headingLabel="Fin du tutoriel d'interface"
          restartLabel="Refaire le tutoriel"
        />
      </div>
    );
  }

  return (
    <HealthMockExamSession
      courseUnitId="interface-tutorial"
      examSlug="interface-tutorial"
      mode="tutorial"
      passage={passage}
      onLocalSubmit={(answersByAttemptQuestionId, elapsedSeconds) => {
        setResult(
          buildTutorialResults({
            passage,
            answersByAttemptQuestionId,
            elapsedSeconds,
          }),
        );
      }}
    />
  );
}
