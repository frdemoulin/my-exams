export type TrainingQuantumBoxFill = 'empty' | 'up' | 'down' | 'pair';

export type TrainingQuantumBoxOrbital = {
  label: string;
  boxes: TrainingQuantumBoxFill[];
};

export type TrainingQuantumBoxesChoice = {
  type: 'quantum-boxes';
  suffix?: string;
  orbitals: TrainingQuantumBoxOrbital[];
};

export type TrainingLewisElectronMark = 'none' | 'single' | 'pair';

export type TrainingLewisAtomChoice = {
  type: 'lewis-atom';
  element: string;
  charge?: number;
  electrons: {
    top: TrainingLewisElectronMark;
    right: TrainingLewisElectronMark;
    bottom: TrainingLewisElectronMark;
    left: TrainingLewisElectronMark;
  };
};

export type TrainingLewisPairSide = 'top' | 'right' | 'bottom' | 'left';

export type TrainingLewisStructureAtom = {
  element: string;
  charge?: number;
  lonePairs: TrainingLewisPairSide[];
};

export type TrainingLewisBond = 'single' | 'double' | 'triple';

export type TrainingLewisStructure = {
  atoms: TrainingLewisStructureAtom[];
  bonds: TrainingLewisBond[];
};

export type TrainingLewisResonanceDiagram = {
  type: 'lewis-resonance';
  forms: TrainingLewisStructure[];
};

export type TrainingBenzeneKekuleDiagram = {
  type: 'benzene-kekule';
  variant?: 'kekule' | 'single-kekule' | 'aromatic' | 'kekule-with-aromatic';
  showAromaticHybrid?: boolean;
};

export type TrainingMoleculeDiagram = {
  type: 'molecule';
  molecule: 'aspirin-topological' | 'salicylic-acid-topological';
};

export type TrainingChoiceContent =
  | string
  | TrainingQuantumBoxesChoice
  | TrainingLewisAtomChoice;

export type TrainingDiagramContent = TrainingQuantumBoxesChoice | TrainingLewisAtomChoice;

export type TrainingQuestionDiagramContent =
  | TrainingQuantumBoxesChoice
  | TrainingLewisResonanceDiagram
  | TrainingBenzeneKekuleDiagram
  | TrainingMoleculeDiagram;

const allowedQuantumBoxFills = new Set<TrainingQuantumBoxFill>([
  'empty',
  'up',
  'down',
  'pair',
]);

const lewisSides = ['top', 'right', 'bottom', 'left'] as const;
const allowedLewisPairSides = new Set<TrainingLewisPairSide>(lewisSides);
const allowedLewisElectronMarks = new Set<TrainingLewisElectronMark>([
  'none',
  'single',
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

const isSafeLewisElement = (value: string) => /^[A-Z][a-z]?$/.test(value.trim());

const isSafeLewisCharge = (value: unknown) =>
  value === undefined || (Number.isInteger(value) && Number(value) >= -4 && Number(value) <= 4);

export const isTrainingQuantumBoxesChoice = (
  value: unknown
): value is TrainingQuantumBoxesChoice => {
  if (!isRecord(value) || value.type !== 'quantum-boxes' || !Array.isArray(value.orbitals)) {
    return false;
  }

  if ('suffix' in value && value.suffix !== undefined && typeof value.suffix !== 'string') {
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
    ...(value.suffix === undefined ? {} : { suffix: value.suffix }),
    orbitals: value.orbitals.map((orbital) => ({
      label: orbital.label,
      boxes: [...orbital.boxes],
    })),
  };
};

export const isTrainingLewisAtomChoice = (
  value: unknown
): value is TrainingLewisAtomChoice => {
  if (!isRecord(value) || value.type !== 'lewis-atom') {
    return false;
  }

  if (typeof value.element !== 'string' || !isSafeLewisElement(value.element)) {
    return false;
  }

  if ('charge' in value && !isSafeLewisCharge(value.charge)) {
    return false;
  }

  if (!isRecord(value.electrons)) {
    return false;
  }

  const electrons = value.electrons;

  return lewisSides.every((side) => {
    const electronMark = electrons[side];
    return (
      typeof electronMark === 'string' &&
      allowedLewisElectronMarks.has(electronMark as TrainingLewisElectronMark)
    );
  });
};

export const isTrainingLewisResonanceDiagram = (
  value: unknown
): value is TrainingLewisResonanceDiagram => {
  if (!isRecord(value) || value.type !== 'lewis-resonance' || !Array.isArray(value.forms)) {
    return false;
  }

  if (value.forms.length < 2 || value.forms.length > 4) {
    return false;
  }

  return value.forms.every((form) => {
    if (!isRecord(form) || !Array.isArray(form.atoms) || !Array.isArray(form.bonds)) {
      return false;
    }

    if (
      form.atoms.length < 2 ||
      form.atoms.length > 8 ||
      form.bonds.length !== form.atoms.length - 1
    ) {
      return false;
    }

    const atomsAreValid = form.atoms.every((atom) => {
      if (
        !isRecord(atom) ||
        typeof atom.element !== 'string' ||
        !isSafeLewisElement(atom.element) ||
        !Array.isArray(atom.lonePairs) ||
        !isSafeLewisCharge(atom.charge)
      ) {
        return false;
      }

      const lonePairs = atom.lonePairs as unknown[];

      return (
        lonePairs.length <= lewisSides.length &&
        lonePairs.every(
          (side): side is TrainingLewisPairSide =>
            typeof side === 'string' && allowedLewisPairSides.has(side as TrainingLewisPairSide)
        ) &&
        new Set(lonePairs).size === lonePairs.length
      );
    });

    const bondsAreValid = form.bonds.every(
      (bond): bond is TrainingLewisBond =>
        bond === 'single' || bond === 'double' || bond === 'triple'
    );

    return atomsAreValid && bondsAreValid;
  });
};

export const normalizeTrainingLewisResonanceDiagram = (
  value: unknown
): TrainingLewisResonanceDiagram | null => {
  if (!isTrainingLewisResonanceDiagram(value)) {
    return null;
  }

  return {
    type: 'lewis-resonance',
    forms: value.forms.map((form) => ({
      atoms: form.atoms.map((atom) => ({
        element: atom.element.trim(),
        charge: atom.charge,
        lonePairs: [...atom.lonePairs],
      })),
      bonds: [...form.bonds],
    })),
  };
};

export const isTrainingBenzeneKekuleDiagram = (
  value: unknown
): value is TrainingBenzeneKekuleDiagram =>
  isRecord(value) &&
    value.type === 'benzene-kekule' &&
  (!('variant' in value) ||
    value.variant === 'kekule' ||
    value.variant === 'single-kekule' ||
    value.variant === 'aromatic' ||
    value.variant === 'kekule-with-aromatic') &&
  (!('showAromaticHybrid' in value) || typeof value.showAromaticHybrid === 'boolean');

export const normalizeTrainingBenzeneKekuleDiagram = (
  value: unknown
): TrainingBenzeneKekuleDiagram | null => {
  if (!isTrainingBenzeneKekuleDiagram(value)) {
    return null;
  }

  return {
    type: 'benzene-kekule',
    ...(value.variant === undefined ? {} : { variant: value.variant }),
    ...(value.showAromaticHybrid === undefined
      ? {}
      : { showAromaticHybrid: value.showAromaticHybrid }),
  };
};

export const isTrainingMoleculeDiagram = (value: unknown): value is TrainingMoleculeDiagram =>
  isRecord(value) &&
  value.type === 'molecule' &&
  (value.molecule === 'aspirin-topological' || value.molecule === 'salicylic-acid-topological');

export const normalizeTrainingMoleculeDiagram = (
  value: unknown
): TrainingMoleculeDiagram | null => {
  if (!isTrainingMoleculeDiagram(value)) {
    return null;
  }

  return {
    type: 'molecule',
    molecule: value.molecule,
  };
};

export const normalizeTrainingQuestionDiagramContent = (
  value: unknown
): TrainingQuestionDiagramContent | null =>
  normalizeTrainingQuantumBoxesChoice(value) ??
  normalizeTrainingLewisResonanceDiagram(value) ??
  normalizeTrainingBenzeneKekuleDiagram(value) ??
  normalizeTrainingMoleculeDiagram(value);

export const normalizeTrainingLewisAtomChoice = (
  value: unknown
): TrainingLewisAtomChoice | null => {
  if (!isTrainingLewisAtomChoice(value)) {
    return null;
  }

  return {
    type: 'lewis-atom',
    element: value.element.trim(),
    charge: value.charge,
    electrons: {
      top: value.electrons.top,
      right: value.electrons.right,
      bottom: value.electrons.bottom,
      left: value.electrons.left,
    },
  };
};

const countLewisElectronMarks = (
  electrons: TrainingLewisAtomChoice['electrons']
): Record<Exclude<TrainingLewisElectronMark, 'none'>, number> => ({
  single: lewisSides.filter((side) => electrons[side] === 'single').length,
  pair: lewisSides.filter((side) => electrons[side] === 'pair').length,
});

export const getTrainingLewisAtomPlainText = (choice: TrainingLewisAtomChoice): string => {
  const { single, pair } = countLewisElectronMarks(choice.electrons);
  const chargeText =
    choice.charge === undefined || choice.charge === 0
      ? ''
      : choice.charge > 0
        ? ` de charge ${choice.charge === 1 ? 'plus' : `${choice.charge} plus`}`
        : ` de charge ${choice.charge === -1 ? 'moins' : `${Math.abs(choice.charge)} moins`}`;

  const fragments = [
    pair > 0 ? `${pair} ${pair === 1 ? 'doublet non liant' : 'doublets non liants'}` : '',
    single > 0
      ? `${single} ${single === 1 ? 'électron célibataire' : 'électrons célibataires'}`
      : '',
  ].filter(Boolean);

  return `Atome de ${choice.element}${chargeText}${
    fragments.length > 0 ? ` avec ${fragments.join(' et ')}` : ''
  }`;
};

export const normalizeTrainingChoiceContent = (
  value: unknown
): TrainingChoiceContent | null => {
  if (typeof value === 'string') {
    return value;
  }

  const quantumBoxes = normalizeTrainingQuantumBoxesChoice(value);

  if (quantumBoxes) {
    return quantumBoxes;
  }

  return normalizeTrainingLewisAtomChoice(value);
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

  if (choice.type === 'quantum-boxes') {
    const diagramText = choice.orbitals
      .map(
        (orbital) =>
          `${getQuantumBoxLabelPlainText(orbital.label)} ${orbital.boxes
            .map((box) => quantumBoxFillToPlainText[box])
            .join('')}`.trim()
      )
      .join('   ');

    return `${diagramText}${choice.suffix ?? ''}`;
  }

  return getTrainingLewisAtomPlainText(choice);
};
