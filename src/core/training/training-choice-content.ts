export type TrainingQuantumBoxFill = 'empty' | 'up' | 'down' | 'pair';

export type TrainingQuantumBoxOrbital = {
  label: string;
  boxes: TrainingQuantumBoxFill[];
};

export type TrainingQuantumBoxesChoice = {
  type: 'quantum-boxes';
  orbitals: TrainingQuantumBoxOrbital[];
};

export type TrainingChoiceContent = string | TrainingQuantumBoxesChoice;

const allowedQuantumBoxFills = new Set<TrainingQuantumBoxFill>([
  'empty',
  'up',
  'down',
  'pair',
]);

const quantumBoxFillToPlainText: Record<TrainingQuantumBoxFill, string> = {
  empty: '[ ]',
  up: '[↑]',
  down: '[↓]',
  pair: '[↑↓]',
};

const getQuantumBoxLabelPlainText = (label: string) =>
  label
    .replace(/\$+/g, '')
    .replace(/\\mathrm\{([^}]*)\}/g, '$1')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\ce\{([^}]*)\}/g, '$1')
    .replace(/\\,/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

export const isTrainingQuantumBoxesChoice = (
  value: unknown
): value is TrainingQuantumBoxesChoice => {
  if (!isRecord(value) || value.type !== 'quantum-boxes' || !Array.isArray(value.orbitals)) {
    return false;
  }

  return value.orbitals.every((orbital) => {
    if (!isRecord(orbital) || typeof orbital.label !== 'string' || !Array.isArray(orbital.boxes)) {
      return false;
    }

    return orbital.boxes.every(
      (box): box is TrainingQuantumBoxFill =>
        typeof box === 'string' && allowedQuantumBoxFills.has(box as TrainingQuantumBoxFill)
    );
  });
};

export const normalizeTrainingQuantumBoxesChoice = (
  value: unknown
): TrainingQuantumBoxesChoice | null => {
  if (!isTrainingQuantumBoxesChoice(value)) {
    return null;
  }

  return {
    type: 'quantum-boxes',
    orbitals: value.orbitals.map((orbital) => ({
      label: orbital.label,
      boxes: [...orbital.boxes],
    })),
  };
};

export const normalizeTrainingChoiceContent = (
  value: unknown
): TrainingChoiceContent | null => {
  if (typeof value === 'string') {
    return value;
  }

  return normalizeTrainingQuantumBoxesChoice(value);
};

export const normalizeTrainingChoiceContents = (
  value: unknown
): TrainingChoiceContent[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((entry) => normalizeTrainingChoiceContent(entry))
    .filter((entry): entry is TrainingChoiceContent => entry !== null);
};

export const getTrainingChoicePlainText = (choice: TrainingChoiceContent): string => {
  if (typeof choice === 'string') {
    return choice;
  }

  return choice.orbitals
    .map(
      (orbital) =>
        `${getQuantumBoxLabelPlainText(orbital.label)} ${orbital.boxes
          .map((box) => quantumBoxFillToPlainText[box])
          .join('')}`.trim()
    )
    .join('   ');
};
