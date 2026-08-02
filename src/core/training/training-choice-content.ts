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

export type TrainingCarbohydrateDiagramName =
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

export type TrainingCarbohydrateDiagram = {
  type: 'carbohydrate';
  diagram: TrainingCarbohydrateDiagramName;
};

export type TrainingLipidDiagramName =
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

export type TrainingLipidDiagram = {
  type: 'lipid';
  diagram: TrainingLipidDiagramName;
};

export type TrainingProteinDiagramName =
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

export type TrainingProteinDiagram = {
  type: "protein";
  diagram: TrainingProteinDiagramName;
};

export type TrainingEnzymeDiagramName =
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

export type TrainingEnzymeDiagram = {
  type: "enzyme";
  diagram: TrainingEnzymeDiagramName;
};

const allowedMoleculeDiagrams = new Set<TrainingMoleculeDiagram['molecule']>([
  'aspirin-topological',
  'salicylic-acid-topological',
  'dopamine-topological',
  'choline-topological',
  'acetylcholine-topological',
  'paracetamol-topological',
  'cysteine-topological',
  'captopril-topological',
  'n-acetylcysteine-topological',
  '2-methylpropane-topological',
  '2-2-dimethylpropane-topological',
  '2-methylbutane-topological',
  'heptane-topological',
  '3-methylhexane-topological',
  'isooctane-topological',
  'valine-topological',
  'leucine-topological',
  'isoleucine-topological',
  'propofol-topological',
  '3-methylhexan-2-ol-topological',
]);

const allowedCarbohydrateDiagrams = new Set<TrainingCarbohydrateDiagramName>([
  'glyceraldehyde-dihydroxyacetone-linear',
  'glyceraldehyde-enantiomers-fischer',
  'glyceraldehyde-configurations-newman',
  'glucose-enantiomers-fischer',
  'glucose-mannose-galactose-fischer',
  'aldoses-d-filiation',
  'ketoses-d-filiation',
  'glucose-cyclization-anomers',
  'glucose-fructose-ribose-fischer',
  'glucose-to-glucuronic-acid',
  'polyol-reductions',
  'osamine-n-acetyl-osamine',
  'nana-sialic-acid',
  'phosphorylated-oses',
  'sulfated-gag-charge',
  'osides-classification',
  'glycosidic-condensation',
  'lactose-saccharose-maltose',
  'starch-amylose-amylopectin',
  'glycogen-branching',
  'cellulose-cellobiose',
  'gag-basic-repeat',
  'hyaluronic-chondroitin',
  'dermatan-keratan',
  'heparan-heparin',
  'proteoglycan-aggregate',
  'glycoprotein-linkages',
]);

const allowedLipidDiagrams = new Set<TrainingLipidDiagramName>([
  'carbon-numbering',
  'cis-trans-double-bond',
  'delta-omega-numbering',
  'fatty-acid-amphiphile',
  'fatty-acid-reactions',
  'linoleic-linolenic',
  'lipid-classification',
  'melting-point-factors',
  'monolayer-micelle',
  'oleic-palmitoleic',
  'omega3-pathway',
  'palmitic-stearic',
  'saturated-chain-lengths',
  'glycerol-overview',
  'glycerol-numbering',
  'acylglycerol-types',
  'triglyceride-types',
  'triglyceride-example',
  'triglyceride-storage',
  'triglyceride-melting',
  'triglyceride-roles',
  'palm-oil',
  'phosphatidic-acid',
  'phospholipid-general',
  'headgroups',
  'phosphatidylinositol',
  'bilayer',
  'micelle-liposome',
  'phospholipase-sites',
  'pip2-plc',
  'pi3k-akt',
  'plasmalogen-paf',
  'family-tree',
  'sphingosine-functions',
  'ceramide-formation',
  'catabolism',
  'skin-barrier',
  'ceramide-signaling',
  'sphingomyelin-structure',
  'myelin',
  'glyco-general',
  'cerebrosides',
  'gangliosides',
  'metabolic-pathway',
  'disease-table',
  'sterane',
  'sterane-numbering',
  'families',
  'cholesterol-structure',
  'cholesterol-forms',
  'cholesterol-roles',
  'cholesterol-transport',
  'bile-vitd',
  'hormone-origins',
  'steroid-nuclei',
  'aldosterone-cortisol',
  'aldosterone-kidney',
  'cortisol',
  'androgen-estrogen',
  'progesterone',
  'arachidonic-acid-20-4',
  'cox-series2-pathway',
  'eicosanoid-overview',
  'eicosanoid-synthesis-pathways',
  'leukotriene-cells-effects',
  'leukotriene-lipoxin-pathways',
  'lta4-structure',
  'misoprostol-pge1',
  'pge1-pge2-effects',
  'prostaglandin-nomenclature',
  'prostaglandin-series',
  'prostanoic-acid-reference',
  'txa2-pgi2-balance',
]);

const allowedProteinDiagrams = new Set<TrainingProteinDiagramName>([
  "acid-basic-amino-acids",
  "amino-acid-chirality",
  "amino-acid-codes",
  "amino-acid-families",
  "amino-acid-general-structure",
  "amino-acid-ionization",
  "amino-acid-overview",
  "aromatic-amino-acids",
  "branched-amino-acids",
  "essential-amino-acids",
  "fischer-amino-acids",
  "hydroxyl-sulfur-amino-acids",
  "ninhydrin-reaction",
  "polarity-classes",
  "polarity-solubility",
  "proline-hydroxyproline",
  "uv-absorption",
  "alpha-helix",
  "beta-sheet",
  "ck-dimers",
  "disulfide-proteolysis",
  "four-levels-primary",
  "peptide-bond",
  "peptide-bond-rigidity",
  "peptide-size",
  "peptide-termini",
  "phi-psi-angles",
  "posttranslational-modifications",
  "proline-peptide-kink",
  "protein-denaturation-classification",
  "protein-domains",
  "protein-g-trimer",
  "quaternary-assemblies",
  "quaternary-structure",
  "tertiary-structure",
  "tetramer-examples",
  "aa-biological-precursors",
  "aa-neurotransmitter-precursors",
  "aa-structural-roles",
  "amyloid-app",
  "cyclosporine-aspartame",
  "cytokines-interleukins",
  "essential-aa-needs",
  "glucagon-insulin",
  "glucogenic-ketogenic-aa",
  "growth-factors",
  "insulin-maturation",
  "interferons-chemokines",
  "natriuretic-peptides",
  "opioid-peptides",
  "peptide-antibiotics",
  "peptide-biological-roles",
  "peptide-hormone-signaling",
  "pomc-glutathione",
  "transamination-methionine",
  "urea-cycle-aa",
  "abc-pgp",
  "adhesion-families",
  "antibody-classes",
  "antibody-epitope",
  "antibody-fab-fc",
  "antibody-h2l2",
  "antibody-multimers",
  "cftr-channel",
  "connexin-gap-junction",
  "gpcr-rhodopsin",
  "igcam",
  "insulin-receptor",
  "integrin-focal-adhesion",
  "ionotropic-channel",
  "metabotropic-receptor",
  "nuclear-receptor",
  "receptor-general",
  "selectin-cadherin",
  "serotonin-gaba-channels",
  "sodium-potassium-pump",
  "actin-microtubules",
  "collagen-alpha-chain",
  "collagen-classification",
  "collagen-crosslinks",
  "collagen-fibril",
  "collagen-gly-x-y",
  "collagen-overview",
  "collagen-triple-helix",
  "collagen-type-iv",
  "cytoskeleton-overview",
  "extracellular-matrix",
  "fibronectin",
  "hemoglobin-anomalies",
  "hemoglobin-conformations",
  "hemoglobin-structure",
  "laminin",
  "matrix-glycoproteins",
  "myosin-cycle",
  "protein-role-acronym",
  "sickle-albumin-lipoprotein",
]);

const allowedEnzymeDiagrams = new Set<TrainingEnzymeDiagramName>([
  "activation-energy",
  "active-site-parts",
  "allosteric-regulation",
  "apoenzyme-holoenzyme",
  "catalyst-types",
  "catalytic-power",
  "chymotrypsin-mechanism",
  "coenzyme-vitamins",
  "covalent-regulation",
  "enzyme-nature",
  "enzyme-nomenclature-ec",
  "enzyme-substrate-affinity",
  "es-ep-cycle",
  "fisher-koshland",
  "isoenzymes-ck-ldh",
  "pka-camp",
  "prosthetic-labile",
  "protease-specificity",
  "ubiquitin-proteasome",
  "zymogen-cascade",
  "beer-lambert-rate",
  "catalytic-concentration",
  "competitive-inhibition",
  "enzyme-concentrations",
  "enzyme-kinetics-overview",
  "initial-rate-slope",
  "kcat-turnover",
  "km-affinity",
  "lineweaver-burk",
  "michaelis-curve",
  "michaelis-equation",
  "mixed-inhibition-percent",
  "noncompetitive-uncompetitive",
  "ph-temperature-effects",
  "reaction-orders",
  "reaction-phases",
  "specific-activities",
  "substrate-enzyme-effects",
  "ui-katal",
  "ui-katal-conversion",
]);

export type TrainingChoiceContent =
  | string
  | TrainingQuantumBoxesChoice
  | TrainingLewisAtomChoice;

export type TrainingDiagramContent = TrainingQuantumBoxesChoice | TrainingLewisAtomChoice;

export type TrainingQuestionDiagramContent =
  | TrainingQuantumBoxesChoice
  | TrainingLewisResonanceDiagram
  | TrainingBenzeneKekuleDiagram
  | TrainingMoleculeDiagram
  | TrainingCarbohydrateDiagram
  | TrainingLipidDiagram
  | TrainingProteinDiagram
  | TrainingEnzymeDiagram;

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
  typeof value.molecule === 'string' &&
  allowedMoleculeDiagrams.has(value.molecule as TrainingMoleculeDiagram['molecule']);

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

export const isTrainingCarbohydrateDiagram = (
  value: unknown
): value is TrainingCarbohydrateDiagram =>
  isRecord(value) &&
  value.type === 'carbohydrate' &&
  typeof value.diagram === 'string' &&
  allowedCarbohydrateDiagrams.has(value.diagram as TrainingCarbohydrateDiagramName);

export const normalizeTrainingCarbohydrateDiagram = (
  value: unknown
): TrainingCarbohydrateDiagram | null => {
  if (!isTrainingCarbohydrateDiagram(value)) {
    return null;
  }

  return {
    type: 'carbohydrate',
    diagram: value.diagram,
  };
};

export const isTrainingLipidDiagram = (value: unknown): value is TrainingLipidDiagram =>
  isRecord(value) &&
  value.type === 'lipid' &&
  typeof value.diagram === 'string' &&
  allowedLipidDiagrams.has(value.diagram as TrainingLipidDiagramName);

export const normalizeTrainingLipidDiagram = (
  value: unknown
): TrainingLipidDiagram | null => {
  if (!isTrainingLipidDiagram(value)) {
    return null;
  }

  return {
    type: 'lipid',
    diagram: value.diagram,
  };
};

export const isTrainingProteinDiagram = (
  value: unknown
): value is TrainingProteinDiagram =>
  isRecord(value) &&
  value.type === "protein" &&
  typeof value.diagram === "string" &&
  allowedProteinDiagrams.has(value.diagram as TrainingProteinDiagramName);

export const normalizeTrainingProteinDiagram = (
  value: unknown
): TrainingProteinDiagram | null => {
  if (!isTrainingProteinDiagram(value)) {
    return null;
  }

  return {
    type: "protein",
    diagram: value.diagram,
  };
};

export const isTrainingEnzymeDiagram = (
  value: unknown
): value is TrainingEnzymeDiagram =>
  isRecord(value) &&
  value.type === "enzyme" &&
  typeof value.diagram === "string" &&
  allowedEnzymeDiagrams.has(value.diagram as TrainingEnzymeDiagramName);

export const normalizeTrainingEnzymeDiagram = (
  value: unknown
): TrainingEnzymeDiagram | null => {
  if (!isTrainingEnzymeDiagram(value)) {
    return null;
  }

  return {
    type: "enzyme",
    diagram: value.diagram,
  };
};

export const normalizeTrainingQuestionDiagramContent = (
  value: unknown
): TrainingQuestionDiagramContent | null =>
  normalizeTrainingQuantumBoxesChoice(value) ??
  normalizeTrainingLewisResonanceDiagram(value) ??
  normalizeTrainingBenzeneKekuleDiagram(value) ??
  normalizeTrainingMoleculeDiagram(value) ??
  normalizeTrainingCarbohydrateDiagram(value) ??
  normalizeTrainingLipidDiagram(value) ??
  normalizeTrainingProteinDiagram(value) ??
  normalizeTrainingEnzymeDiagram(value);

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
