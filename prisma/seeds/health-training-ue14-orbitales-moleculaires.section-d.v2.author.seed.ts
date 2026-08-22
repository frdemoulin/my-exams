import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 3 – Orbitales moléculaires
 * Section D – Règle de Gillespie et géométrie moléculaire
 */

export const UE14_CH3_GILLESPIE_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 51,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos de la règle de Gillespie (VSEPR), quelles propositions sont exactes ?`,
    choices: [
      { content: `Les doublets électroniques de valence se repoussent.`, correct: true, explanation: `Vrai.` },
      { content: `Ils tendent à se disposer aussi loin que possible les uns des autres autour de l'atome central.`, correct: true, explanation: `C'est le principe géométrique du modèle.` },
      { content: `Les doublets non liants doivent être pris en compte.`, correct: true, explanation: `Ils occupent de l'espace et influencent la géométrie.` },
      { content: `Seuls les atomes visibles déterminent toujours la géométrie.`, correct: false, explanation: `Les doublets non liants modifient aussi l'organisation spatiale.` },
    ],
    explanation: `Le modèle VSEPR prévoit la géométrie à partir de la répulsion entre les domaines électroniques de la couche de valence.`,
  },
  {
    order: 52,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Dans la notation de Gillespie $\\mathrm{AX}_m\\mathrm{E}_n$, sélectionnez exactement les deux propositions correctes.`,
    choices: [
      { content: `$\\mathrm{A}$ représente l'atome central.`, correct: true, explanation: `Vrai.` },
      { content: `$\\mathrm{E}_n$ indique le nombre de doublets non liants portés par l'atome central.`, correct: true, explanation: `Vrai.` },
      { content: `$m$ indique le nombre total d'électrons de la molécule.`, correct: false, explanation: `Il indique le nombre de directions de liaison X autour du centre.` },
      { content: `$\\mathrm{E}$ représente obligatoirement un élément chimique lié à A.`, correct: false, explanation: `E représente ici un doublet non liant.` },
    ],
    explanation: `Dans AXmEn, A est le centre, X les atomes liés et E les doublets non liants du centre.`,
  },
  {
    order: 53,
    difficulty: 'EASY',
    format: 'QZONE',
    question: `Cliquez sur la géométrie moléculaire correspondant à un centre de type $\\mathrm{AX}_3\\mathrm{E}_1$, comme dans $\\ce{NH3}$.`,
    image: {
      src: '/images/training/ue14/chimie/vsepr-geometries-qzone.svg',
      alt: 'Six géométries moléculaires schématiques : linéaire, trigonale plane, tétraédrique, pyramidale, coudée et octaédrique',
      width: 1200,
      height: 700,
    },
    expectedZones: [
      {
        id: 'pyramidale-ax3e1',
        label: 'Géométrie pyramidale AX3E1',
        x: 0.17,
        y: 0.73,
        tolerance: 0.10,
      },
    ],
    explanation: `Un centre AX3E1 possède trois liaisons et un doublet non liant. L'organisation électronique est tétraédrique, mais la géométrie moléculaire est pyramidale.`,
  },
  {
    order: 54,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Le dioxyde de carbone $\\ce{O=C=O}$ est produit par le métabolisme cellulaire. Quelles propositions sont exactes selon Gillespie ?`,
    choices: [
      { content: `Le carbone central possède deux directions de liaison.`, correct: true, explanation: `Chaque double liaison compte comme une seule direction.` },
      { content: `La molécule est de type $\\mathrm{AX}_2$.`, correct: true, explanation: `Deux atomes périphériques, aucun doublet non liant sur le carbone dans le modèle utilisé.` },
      { content: `La géométrie est linéaire avec un angle de $180^\\circ$.`, correct: true, explanation: `Deux domaines se placent à l'opposé.` },
      { content: `Les deux doubles liaisons imposent un type $\\mathrm{AX}_4$.`, correct: false, explanation: `Une liaison multiple ne compte que comme une direction autour du centre.` },
    ],
    explanation: `Dans VSEPR, une liaison simple, double ou triple correspond à une seule direction électronique autour de l'atome central.`,
  },
  {
    order: 55,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux associations correctes.`,
    choices: [
      { content: `$\\ce{BH3}$ : $\\mathrm{AX}_3$, géométrie trigonale plane.`, correct: true, explanation: `Trois directions de liaison, aucun doublet non liant sur B dans le modèle.` },
      { content: `$\\ce{SO2}$ : $\\mathrm{AX}_2\\mathrm{E}_1$, géométrie coudée.`, correct: true, explanation: `Deux directions de liaison et un doublet non liant autour du soufre dans le modèle du cours.` },
      { content: `$\\ce{BH3}$ : $\\mathrm{AX}_4$, géométrie tétraédrique.`, correct: false, explanation: `Il n'y a que trois directions autour du bore.` },
      { content: `$\\ce{SO2}$ : $\\mathrm{AX}_2$, géométrie linéaire.`, correct: false, explanation: `Le doublet non liant conduit à une forme coudée.` },
    ],
    explanation: `Trois domaines donnent une organisation trigonale ; la présence d'un doublet non liant transforme AX2E1 en géométrie coudée.`,
  },
  {
    order: 56,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Dans l'ion ammonium $\\ce{NH4+}$, combien de directions de liaison entourent l'atome d'azote ?`,
    answer: { type: 'number', value: 4, tolerance: 0 },
    explanation: `$\\ce{NH4+}$ possède quatre liaisons N–H et aucun doublet non liant sur l'azote : type AX4, géométrie tétraédrique.`,
  },
  {
    order: 57,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos de $\\ce{NH3}$ et $\\ce{H2O}$, quelles propositions sont exactes ?`,
    choices: [
      { content: `$\\ce{NH3}$ est de type $\\mathrm{AX}_3\\mathrm{E}_1$ et possède une géométrie pyramidale.`, correct: true, explanation: `Trois liaisons et un doublet non liant.` },
      { content: `$\\ce{H2O}$ est de type $\\mathrm{AX}_2\\mathrm{E}_2$ et possède une géométrie coudée.`, correct: true, explanation: `Deux liaisons et deux doublets non liants.` },
      { content: `Les doublets non liants contribuent à réduire les angles par rapport au tétraèdre idéal.`, correct: true, explanation: `Ils exercent une répulsion importante.` },
      { content: `Les deux molécules sont linéaires.`, correct: false, explanation: `Leurs doublets non liants conduisent à des géométries non linéaires.` },
    ],
    explanation: `NH3 et H2O partagent une organisation électronique à quatre domaines, mais les doublets non liants donnent des formes pyramidale et coudée.`,
  },
  {
    order: 58,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux espèces de type $\\mathrm{AX}_3\\mathrm{E}_1$ dans le modèle du cours.`,
    choices: [
      { content: `$\\ce{NH3}$.`, correct: true, explanation: `Trois liaisons et un doublet non liant.` },
      { content: `$\\ce{H3O+}$.`, correct: true, explanation: `Trois liaisons O–H et un doublet non liant.` },
      { content: `$\\ce{CH4}$.`, correct: false, explanation: `Type AX4.` },
      { content: `$\\ce{H2O}$.`, correct: false, explanation: `Type AX2E2.` },
    ],
    explanation: `NH3 et H3O+ sont tous deux pyramidaux de type AX3E1.`,
  },
  {
    order: 59,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos de $\\ce{PCl5}$ et $\\ce{SF6}$, quelles propositions sont exactes ?`,
    choices: [
      { content: `$\\ce{PCl5}$ est de type $\\mathrm{AX}_5$ et adopte une bipyramide trigonale.`, correct: true, explanation: `Cinq directions de liaison.` },
      { content: `$\\ce{SF6}$ est de type $\\mathrm{AX}_6$ et adopte une géométrie octaédrique.`, correct: true, explanation: `Six directions de liaison.` },
      { content: `Dans $\\ce{PCl5}$, on rencontre des angles de $90^\\circ$ et $120^\\circ$.`, correct: true, explanation: `Positions axiales et équatoriales.` },
      { content: `$\\ce{SF6}$ est linéaire.`, correct: false, explanation: `Sa géométrie est octaédrique.` },
    ],
    explanation: `Le modèle de Gillespie s'étend aux coordinences cinq et six : bipyramide trigonale et octaèdre.`,
  },
  {
    order: 60,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Quelles correspondances molécule → type de Gillespie sont exactes ?`,
    choices: [
      { content: `$\\ce{BeH2}$ → $\\mathrm{AX}_2$.`, correct: true, explanation: `Deux directions, linéaire.` },
      { content: `$\\ce{BH3}$ → $\\mathrm{AX}_3$.`, correct: true, explanation: `Trois directions, trigonale plane.` },
      { content: `$\\ce{CH4}$ → $\\mathrm{AX}_4$.`, correct: true, explanation: `Quatre directions, tétraédrique.` },
      { content: `$\\ce{H2O}$ → $\\mathrm{AX}_4$.`, correct: false, explanation: `La nomenclature détaillée est AX2E2.` },
    ],
    explanation: `La notation de Gillespie distingue les directions de liaison X et les doublets non liants E portés par l'atome central.`,
  },
];
