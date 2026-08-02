import type { ReactNode } from 'react';
import type { TrainingCarbohydrateDiagram } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';

type CarbohydrateDiagramProps = {
  value: TrainingCarbohydrateDiagram;
  className?: string;
};

type HydroxylSide = 'left' | 'right';

type FischerDefinition = {
  name: string;
  carbonyl: 'aldose' | 'ketose';
  hydroxyls: HydroxylSide[];
};

const chemicalFontFamily = 'KaTeX_Main, Times New Roman, serif';

const fischerDefinitions = {
  'D-glycéraldéhyde': {
    name: 'D-glycéraldéhyde',
    carbonyl: 'aldose',
    hydroxyls: ['right'],
  },
  'L-glycéraldéhyde': {
    name: 'L-glycéraldéhyde',
    carbonyl: 'aldose',
    hydroxyls: ['left'],
  },
  dihydroxyacétone: {
    name: 'Dihydroxyacétone',
    carbonyl: 'ketose',
    hydroxyls: [],
  },
  'D-érythrose': {
    name: 'D-érythrose',
    carbonyl: 'aldose',
    hydroxyls: ['right', 'right'],
  },
  'D-thréose': {
    name: 'D-thréose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'right'],
  },
  'D-ribose': {
    name: 'D-ribose',
    carbonyl: 'aldose',
    hydroxyls: ['right', 'right', 'right'],
  },
  'D-arabinose': {
    name: 'D-arabinose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'right', 'right'],
  },
  'D-xylose': {
    name: 'D-xylose',
    carbonyl: 'aldose',
    hydroxyls: ['right', 'left', 'right'],
  },
  'D-lyxose': {
    name: 'D-lyxose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'left', 'right'],
  },
  'D-allose': {
    name: 'D-allose',
    carbonyl: 'aldose',
    hydroxyls: ['right', 'right', 'right', 'right'],
  },
  'D-altrose': {
    name: 'D-altrose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'right', 'right', 'right'],
  },
  'D-glucose': {
    name: 'D-glucose',
    carbonyl: 'aldose',
    hydroxyls: ['right', 'left', 'right', 'right'],
  },
  'L-glucose': {
    name: 'L-glucose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'right', 'left', 'left'],
  },
  'D-mannose': {
    name: 'D-mannose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'left', 'right', 'right'],
  },
  'D-gulose': {
    name: 'D-gulose',
    carbonyl: 'aldose',
    hydroxyls: ['right', 'right', 'left', 'right'],
  },
  'D-idose': {
    name: 'D-idose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'right', 'left', 'right'],
  },
  'D-galactose': {
    name: 'D-galactose',
    carbonyl: 'aldose',
    hydroxyls: ['right', 'left', 'left', 'right'],
  },
  'D-talose': {
    name: 'D-talose',
    carbonyl: 'aldose',
    hydroxyls: ['left', 'left', 'left', 'right'],
  },
  'D-érythrulose': {
    name: 'D-érythrulose',
    carbonyl: 'ketose',
    hydroxyls: ['right'],
  },
  'D-ribulose': {
    name: 'D-ribulose',
    carbonyl: 'ketose',
    hydroxyls: ['right', 'right'],
  },
  'D-xylulose': {
    name: 'D-xylulose',
    carbonyl: 'ketose',
    hydroxyls: ['left', 'right'],
  },
  'D-psicose': {
    name: 'D-psicose',
    carbonyl: 'ketose',
    hydroxyls: ['right', 'right', 'right'],
  },
  'D-fructose': {
    name: 'D-fructose',
    carbonyl: 'ketose',
    hydroxyls: ['left', 'right', 'right'],
  },
  'D-sorbose': {
    name: 'D-sorbose',
    carbonyl: 'ketose',
    hydroxyls: ['right', 'left', 'right'],
  },
  'D-tagatose': {
    name: 'D-tagatose',
    carbonyl: 'ketose',
    hydroxyls: ['left', 'left', 'right'],
  },
} satisfies Record<string, FischerDefinition>;

type FischerName = keyof typeof fischerDefinitions;

function FischerFormula({
  name,
  compact = false,
}: {
  name: FischerName;
  compact?: boolean;
}) {
  const definition = fischerDefinitions[name];
  const carbonylRows = definition.carbonyl === 'ketose' ? 1 : 0;
  const rowCount = carbonylRows + definition.hydroxyls.length;
  const rowSpacing = compact ? 25 : 32;
  const topY = compact ? 18 : 22;
  const rowStartY = topY + (compact ? 28 : 34);
  const bottomY = rowStartY + rowCount * rowSpacing;
  const height = bottomY + (compact ? 36 : 46);
  const centerX = 82;
  const leftX = compact ? 24 : 20;
  const rightX = compact ? 140 : 146;
  const fontSize = compact ? 12 : 15;

  return (
    <svg
      viewBox={`0 0 164 ${height}`}
      aria-hidden="true"
      className={cn(compact ? 'h-auto w-28' : 'h-auto w-40', 'shrink-0 overflow-visible')}
    >
      <line
        x1={centerX}
        y1={topY + 8}
        x2={centerX}
        y2={bottomY - 10}
        stroke="currentColor"
        strokeWidth={compact ? 1.6 : 2}
        strokeLinecap="round"
      />
      <text
        x={centerX}
        y={topY}
        textAnchor="middle"
        fill="currentColor"
        fontFamily={chemicalFontFamily}
        fontSize={fontSize}
      >
        {definition.carbonyl === 'aldose' ? 'CHO' : 'CH₂OH'}
      </text>
      {definition.carbonyl === 'ketose' ? (
        <text
          x={centerX}
          y={rowStartY + 5}
          textAnchor="middle"
          fill="currentColor"
          fontFamily={chemicalFontFamily}
          fontSize={fontSize}
        >
          C=O
        </text>
      ) : null}
      {definition.hydroxyls.map((hydroxylSide, index) => {
        const y = rowStartY + (index + carbonylRows) * rowSpacing;
        const leftLabel = hydroxylSide === 'left' ? 'OH' : 'H';
        const rightLabel = hydroxylSide === 'right' ? 'OH' : 'H';
        return (
          <g key={`${name}-${index}`}>
            <line
              x1={centerX - 33}
              y1={y}
              x2={centerX + 33}
              y2={y}
              stroke="currentColor"
              strokeWidth={compact ? 1.6 : 2}
              strokeLinecap="round"
            />
            <text
              x={leftX}
              y={y + 5}
              textAnchor="middle"
              fill="currentColor"
              fontFamily={chemicalFontFamily}
              fontSize={fontSize}
            >
              {leftLabel}
            </text>
            <text
              x={rightX}
              y={y + 5}
              textAnchor="middle"
              fill="currentColor"
              fontFamily={chemicalFontFamily}
              fontSize={fontSize}
            >
              {rightLabel}
            </text>
          </g>
        );
      })}
      <text
        x={centerX}
        y={bottomY + 4}
        textAnchor="middle"
        fill="currentColor"
        fontFamily={chemicalFontFamily}
        fontSize={fontSize}
      >
        CH₂OH
      </text>
      <text
        x={centerX}
        y={height - 7}
        textAnchor="middle"
        fill="currentColor"
        fontFamily={chemicalFontFamily}
        fontSize={compact ? 10 : 12}
        fontWeight="600"
      >
        {definition.name}
      </text>
    </svg>
  );
}

function DiagramFrame({
  ariaLabel,
  children,
  className,
}: {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        'flex max-w-full items-center justify-center overflow-x-auto rounded-lg border border-default bg-neutral-primary-soft p-3 text-foreground',
        className
      )}
    >
      {children}
    </div>
  );
}

function GlyceraldehydeDihydroxyacetoneLinear() {
  return (
    <DiagramFrame ariaLabel="Comparaison des formules linéaires du glycéraldéhyde et de la dihydroxyacétone">
      <div className="flex min-w-max items-center gap-8">
        <FischerFormula name="D-glycéraldéhyde" />
        <span aria-hidden="true" className="text-2xl">
          ≠
        </span>
        <FischerFormula name="dihydroxyacétone" />
      </div>
    </DiagramFrame>
  );
}

function GlyceraldehydeEnantiomersFischer() {
  return (
    <DiagramFrame ariaLabel="Projections de Fischer des énantiomères D et L du glycéraldéhyde">
      <div className="flex min-w-max items-center gap-8">
        <FischerFormula name="D-glycéraldéhyde" />
        <span aria-hidden="true" className="text-2xl">
          ⇄ miroir ⇄
        </span>
        <FischerFormula name="L-glycéraldéhyde" />
      </div>
    </DiagramFrame>
  );
}

function NewmanConfiguration({ configuration }: { configuration: 'R' | 'S' }) {
  const leftBottom = configuration === 'R' ? 'CH₂OH' : 'CHO';
  const rightBottom = configuration === 'R' ? 'CHO' : 'CH₂OH';
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 180 160" aria-hidden="true" className="h-40 w-44 shrink-0">
        <circle cx="90" cy="72" r="28" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="90" cy="72" r="3.5" fill="currentColor" />
        <line x1="90" y1="72" x2="90" y2="22" stroke="currentColor" strokeWidth="2.2" />
        <line x1="90" y1="72" x2="137" y2="112" stroke="currentColor" strokeWidth="2.2" />
        <line x1="90" y1="72" x2="43" y2="112" stroke="currentColor" strokeWidth="2.2" />
        <text x="90" y="16" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="16">
          OH
        </text>
        <text x="149" y="126" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="15">
          {rightBottom}
        </text>
        <text x="31" y="126" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="15">
          {leftBottom}
        </text>
        <text x="90" y="78" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="12">
          C*
        </text>
        <text x="90" y="151" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="12">
          vue selon C*–H
        </text>
      </svg>
      <span className="font-semibold">Configuration {configuration}</span>
    </div>
  );
}

function GlyceraldehydeConfigurationsNewman() {
  return (
    <DiagramFrame ariaLabel="Projections spatiales simplifiées de type Newman des configurations R et S du glycéraldéhyde">
      <div className="flex min-w-max items-center gap-8">
        <NewmanConfiguration configuration="R" />
        <span aria-hidden="true" className="text-3xl">
          ↔
        </span>
        <NewmanConfiguration configuration="S" />
      </div>
    </DiagramFrame>
  );
}

function GlucoseEnantiomersFischer() {
  return (
    <DiagramFrame ariaLabel="Projections de Fischer du D-glucose et du L-glucose, images miroir non superposables">
      <div className="flex min-w-max items-center gap-8">
        <FischerFormula name="D-glucose" />
        <span aria-hidden="true" className="text-2xl">
          ⇄ miroir ⇄
        </span>
        <FischerFormula name="L-glucose" />
      </div>
    </DiagramFrame>
  );
}

function GlucoseMannoseGalactoseFischer() {
  return (
    <DiagramFrame ariaLabel="Projections de Fischer du D-glucose, du D-mannose et du D-galactose montrant leurs relations d'épimérie">
      <div className="flex min-w-max items-end gap-6">
        <FischerFormula name="D-mannose" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium">épimérie en C2</span>
          <span aria-hidden="true" className="text-xl">
            ↔
          </span>
        </div>
        <FischerFormula name="D-glucose" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium">épimérie en C4</span>
          <span aria-hidden="true" className="text-xl">
            ↔
          </span>
        </div>
        <FischerFormula name="D-galactose" />
      </div>
    </DiagramFrame>
  );
}

function FiliationRow({ names }: { names: FischerName[] }) {
  return (
    <div className="flex min-w-max items-end justify-center gap-2">
      {names.map((name) => (
        <div key={name}>
          <FischerFormula name={name} compact />
        </div>
      ))}
    </div>
  );
}

function FiliationArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span aria-hidden="true" className="text-xl">
        ↓
      </span>
    </div>
  );
}

function AldosesDFiliation() {
  return (
    <DiagramFrame ariaLabel="Filiation des aldoses de série D du glycéraldéhyde aux huit aldohexoses">
      <div className="flex min-w-max flex-col items-center gap-1">
        <FiliationRow names={['D-glycéraldéhyde']} />
        <FiliationArrow label="ajout d'un carbone asymétrique" />
        <FiliationRow names={['D-érythrose', 'D-thréose']} />
        <FiliationArrow label="aldopentoses" />
        <FiliationRow names={['D-ribose', 'D-arabinose', 'D-xylose', 'D-lyxose']} />
        <FiliationArrow label="aldohexoses" />
        <FiliationRow
          names={[
            'D-allose',
            'D-altrose',
            'D-glucose',
            'D-mannose',
            'D-gulose',
            'D-idose',
            'D-galactose',
            'D-talose',
          ]}
        />
        <p className="text-xs text-muted-foreground">
          Série D représentée : 8 aldohexoses ; avec leurs 8 énantiomères L, 16 stéréoisomères.
        </p>
      </div>
    </DiagramFrame>
  );
}

function KetosesDFiliation() {
  return (
    <DiagramFrame ariaLabel="Filiation des cétoses de série D de la dihydroxyacétone aux quatre cétohexoses">
      <div className="flex min-w-max flex-col items-center gap-1">
        <FiliationRow names={['dihydroxyacétone']} />
        <FiliationArrow label="cétotétrose" />
        <FiliationRow names={['D-érythrulose']} />
        <FiliationArrow label="cétopentoses" />
        <FiliationRow names={['D-ribulose', 'D-xylulose']} />
        <FiliationArrow label="cétohexoses" />
        <FiliationRow names={['D-psicose', 'D-fructose', 'D-sorbose', 'D-tagatose']} />
        <p className="text-xs text-muted-foreground">
          Série D représentée : 4 cétohexoses ; avec leurs 4 énantiomères L, 8 stéréoisomères.
        </p>
      </div>
    </DiagramFrame>
  );
}

type HaworthAnomer = 'alpha' | 'beta';

function HaworthGlucopyranose({ anomer }: { anomer: HaworthAnomer }) {
  const anomericOhEndY = anomer === 'alpha' ? 128 : 32;
  const anomericOhTextY = anomer === 'alpha' ? 146 : 25;
  const ring = {
    c1: { x: 150, y: 80 },
    o: { x: 125, y: 36.7 },
    c5: { x: 75, y: 36.7 },
    c4: { x: 50, y: 80 },
    c3: { x: 75, y: 123.3 },
    c2: { x: 125, y: 123.3 },
  };
  const points = [ring.c1, ring.o, ring.c5, ring.c4, ring.c3, ring.c2, ring.c1];
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="20 0 180 170" aria-hidden="true" className="h-44 w-48 shrink-0 overflow-visible">
        <polyline
          points={points.map((point) => `${point.x},${point.y}`).join(' ')}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <text x={ring.o.x} y={ring.o.y + 5} textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="16">
          O
        </text>
        <line x1={ring.c5.x} y1={ring.c5.y} x2={ring.c5.x} y2="8" stroke="currentColor" strokeWidth="2" />
        <text x={ring.c5.x} y="8" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="14">
          CH₂OH
        </text>
        <line x1={ring.c1.x} y1={ring.c1.y} x2={ring.c1.x} y2={anomericOhEndY} stroke="currentColor" strokeWidth="2" />
        <text x={ring.c1.x + 2} y={anomericOhTextY} textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="14">
          OH
        </text>
        <line x1={ring.c2.x} y1={ring.c2.y} x2={ring.c2.x} y2="153" stroke="currentColor" strokeWidth="2" />
        <text x={ring.c2.x} y="167" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="14">
          OH
        </text>
        <line x1={ring.c3.x} y1={ring.c3.y} x2={ring.c3.x} y2="93" stroke="currentColor" strokeWidth="2" />
        <text x={ring.c3.x} y="88" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="14">
          OH
        </text>
        <line x1={ring.c4.x} y1={ring.c4.y} x2={ring.c4.x} y2="111" stroke="currentColor" strokeWidth="2" />
        <text x={ring.c4.x} y="126" textAnchor="middle" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="14">
          OH
        </text>
        <text x="160" y="75" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="10">C1</text>
        <text x="132" y="118" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="10">C2</text>
        <text x="65" y="118" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="10">C3</text>
        <text x="34" y="75" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="10">C4</text>
        <text x="64" y="32" fill="currentColor" fontFamily={chemicalFontFamily} fontSize="10">C5</text>
      </svg>
      <span className="font-semibold">
        {anomer === 'alpha' ? 'α-D-glucopyranose' : 'β-D-glucopyranose'}
      </span>
    </div>
  );
}

function GlucoseCyclizationAnomers() {
  return (
    <DiagramFrame ariaLabel="Cyclisation du D-glucose linéaire en alpha-D-glucopyranose et bêta-D-glucopyranose">
      <div className="flex min-w-max items-center gap-5">
        <FischerFormula name="D-glucose" />
        <span aria-hidden="true" className="text-3xl">
          →
        </span>
        <HaworthGlucopyranose anomer="alpha" />
        <span aria-hidden="true" className="text-2xl">
          ⇄
        </span>
        <HaworthGlucopyranose anomer="beta" />
      </div>
    </DiagramFrame>
  );
}


function GlucoseFructoseRiboseFischer() {
  return (
    <DiagramFrame ariaLabel="Comparaison simplifiée des projections de Fischer du D-glucose, du D-fructose et du D-ribose">
      <div className="flex min-w-max items-end gap-8">
        <FischerFormula name="D-glucose" />
        <FischerFormula name="D-fructose" />
        <FischerFormula name="D-ribose" />
      </div>
    </DiagramFrame>
  );
}

function ReactionCard({ title, formula, detail }: { title: string; formula: string; detail?: string }) {
  return (
    <div className="min-w-48 rounded-md border border-default bg-neutral-primary p-3 text-center">
      <div className="mb-2 font-semibold">{title}</div>
      <div className="font-mono text-sm">{formula}</div>
      {detail ? <div className="mt-2 text-xs text-muted-foreground">{detail}</div> : null}
    </div>
  );
}

function GlucoseToGlucuronicAcid() {
  return (
    <DiagramFrame ariaLabel="Oxydation du carbone 6 du glucose en acide glucuronique">
      <div className="flex min-w-max items-center gap-4">
        <ReactionCard title="Glucose" formula="CHO–(CHOH)₄–CH₂OH" detail="C6 : alcool primaire" />
        <div className="text-center"><div className="text-xl">⟶</div><div className="text-xs font-semibold">oxydation de C6</div></div>
        <ReactionCard title="Acide glucuronique" formula="CHO–(CHOH)₄–COOH" detail="⇄ glucuronate COO⁻" />
      </div>
    </DiagramFrame>
  );
}

function PolyolReductions() {
  const rows = [
    ['Glycéraldéhyde', 'Glycérol'],
    ['Mannose', 'Mannitol'],
    ['Glucose', 'Sorbitol'],
  ];
  return (
    <DiagramFrame ariaLabel="Réduction du glycéraldéhyde, du mannose et du glucose en polyols">
      <div className="grid min-w-max gap-3">
        {rows.map(([ose, polyol]) => (
          <div key={ose} className="grid grid-cols-[180px_100px_180px] items-center gap-3 text-center">
            <div className="rounded-md border border-default bg-neutral-primary p-2 font-semibold">{ose}</div>
            <div><div className="text-xl">⟶</div><div className="text-xs">réduction C=O → C–OH</div></div>
            <div className="rounded-md border border-default bg-neutral-primary p-2 font-semibold">{polyol}</div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

function OsamineNAcetylOsamine() {
  return (
    <DiagramFrame ariaLabel="Transformation en C2 d'un ose en osamine puis en osamine N-acétylée">
      <div className="flex min-w-max items-center gap-4">
        <ReactionCard title="Ose" formula="C2–OH" detail="fonction alcool" />
        <div className="text-center"><div className="text-xl">⟶</div><div className="text-xs">OH remplacé par NH₂</div></div>
        <ReactionCard title="Osamine" formula="C2–NH₂" detail="amine primaire" />
        <div className="text-center"><div className="text-xl">⟶</div><div className="text-xs">+ CH₃CO–</div></div>
        <ReactionCard title="Osamine N-acétylée" formula="C2–NH–CO–CH₃" detail="fonction amide" />
      </div>
    </DiagramFrame>
  );
}

function NanaSialicAcid() {
  return (
    <DiagramFrame ariaLabel="Formation simplifiée de l'acide N-acétylneuraminique ou NANA">
      <div className="flex min-w-max items-center gap-4">
        <ReactionCard title="D-mannosamine" formula="ose–NH₂" />
        <div className="text-center"><div className="text-xl">+</div><div className="text-xs">acide pyruvique</div></div>
        <ReactionCard title="Acide neuraminique" formula="cyclisation C2–C6" />
        <div className="text-center"><div className="text-xl">⟶</div><div className="text-xs">N-acétylation</div></div>
        <ReactionCard title="NANA / acide sialique" formula="N–CO–CH₃ ; COOH ⇄ COO⁻" detail="surface cellulaire" />
      </div>
    </DiagramFrame>
  );
}

function PhosphorylatedOses() {
  const compounds = [
    ['Glucose-1-phosphate', 'G1P'],
    ['Glucose-6-phosphate', 'G6P'],
    ['Fructose-1,6-bisphosphate', 'F1,6BP'],
    ['Fructose-2,6-bisphosphate', 'F2,6BP'],
    ['Ribose-5-phosphate', 'R5P'],
    ['2-désoxyribose-5-phosphate', 'dR5P'],
  ];
  return (
    <DiagramFrame ariaLabel="Principaux esters phosphoriques des oses cités dans le cours">
      <div className="grid min-w-max grid-cols-3 gap-3">
        {compounds.map(([name, short]) => (
          <div key={name} className="rounded-md border border-default bg-neutral-primary p-3 text-center">
            <div className="font-semibold">{name}</div>
            <div className="mt-1 font-mono text-sm">{short}</div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

function SulfatedGagCharge() {
  return (
    <DiagramFrame ariaLabel="Motif simplifié d'un glycosaminoglycane portant des sulfates et carboxylates négatifs">
      <div className="min-w-max text-center">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide">Motif répété de GAG</div>
        <div className="flex items-center gap-3 text-lg font-semibold">
          <span className="rounded-md border border-default bg-neutral-primary p-3">Osamine–SO₃⁻</span>
          <span>—</span>
          <span className="rounded-md border border-default bg-neutral-primary p-3">Acide uronique–COO⁻</span>
          <span>—</span>
          <span className="rounded-md border border-default bg-neutral-primary p-3">Osamine–SO₃⁻</span>
        </div>
        <div className="mt-3 text-sm">Charges négatives → hydratation et répulsion électrostatique</div>
      </div>
    </DiagramFrame>
  );
}

function SimpleNode({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="min-w-40 rounded-md border border-default bg-neutral-primary p-3 text-center">
      <div className="font-semibold">{title}</div>
      {detail ? <div className="mt-1 text-xs text-muted-foreground">{detail}</div> : null}
    </div>
  );
}

function OsidesClassification() {
  return (
    <DiagramFrame ariaLabel="Classification des osides en holosides et hétérosides">
      <div className="flex min-w-max flex-col items-center gap-3">
        <SimpleNode title="Oside" detail="liaison O-glycosidique" />
        <div className="text-2xl">↙︎&nbsp;&nbsp;&nbsp;&nbsp;↘︎</div>
        <div className="flex gap-8">
          <SimpleNode
            title="Holoside"
            detail="uniquement des oses : di-, tri-, tétraholosides, polyosides"
          />
          <SimpleNode title="Hétéroside" detail="partie glucidique + aglycone" />
        </div>
      </div>
    </DiagramFrame>
  );
}

function GlycosidicCondensation() {
  return (
    <DiagramFrame ariaLabel="Deux modes de condensation conduisant à un diholoside réducteur ou non réducteur">
      <div className="grid min-w-max gap-4">
        <div className="flex items-center gap-3">
          <SimpleNode title="Hémiacétal 1" />
          <span>+</span>
          <SimpleNode title="Hémiacétal 2" />
          <span>→ - H₂O →</span>
          <SimpleNode
            title="Diholoside non réducteur"
            detail="deux centres anomériques engagés"
          />
        </div>
        <div className="flex items-center gap-3">
          <SimpleNode title="Hémiacétal" />
          <span>+</span>
          <SimpleNode title="Alcool" />
          <span>→ - H₂O →</span>
          <SimpleNode title="Diholoside réducteur" detail="un centre anomérique libre" />
        </div>
      </div>
    </DiagramFrame>
  );
}

function LactoseSaccharoseMaltose() {
  return (
    <DiagramFrame ariaLabel="Comparaison du lactose, du saccharose et du maltose">
      <div className="grid min-w-max grid-cols-3 gap-4">
        <SimpleNode title="Lactose" detail="Gal β(1→4) Glc - réducteur" />
        <SimpleNode title="Saccharose" detail="Glc α(1→2) β Fru - non réducteur" />
        <SimpleNode title="Maltose" detail="Glc α(1→4) Glc - réducteur" />
      </div>
    </DiagramFrame>
  );
}

function StarchAmyloseAmylopectin() {
  return (
    <DiagramFrame ariaLabel="Composition de l'amidon en amylose linéaire et amylopectine ramifiée">
      <div className="grid min-w-max grid-cols-2 gap-6">
        <div className="rounded-md border border-default bg-neutral-primary p-4 text-center">
          <div className="font-semibold">Amylose ≈ 20 %</div>
          <div className="my-3 text-xl tracking-widest">Glc-Glc-Glc-Glc-Glc</div>
          <div className="text-xs">α(1→4), chaîne linéaire, hélice 6-8 Glc/tour</div>
        </div>
        <div className="rounded-md border border-default bg-neutral-primary p-4 text-center">
          <div className="font-semibold">Amylopectine ≈ 80 %</div>
          <div className="my-3 whitespace-pre font-mono text-sm">
            {'Glc-Glc-Glc-Glc\n        │\n        Glc-Glc'}
          </div>
          <div className="text-xs">chaînes α(1→4), branches α(1→6)</div>
        </div>
      </div>
    </DiagramFrame>
  );
}

function GlycogenBranching() {
  return (
    <DiagramFrame ariaLabel="Structure ramifiée du glycogène autour de la glycogénine">
      <div className="min-w-max text-center">
        <div className="mx-auto mb-3 w-fit rounded-full border border-default bg-neutral-primary px-5 py-3 font-semibold">
          Glycogénine
        </div>
        <div className="whitespace-pre font-mono text-base">
          {'Glc-Glc-Glc-Glc-Glc\n   │       │       │\n Glc-Glc  Glc-Glc  Glc-Glc'}
        </div>
        <div className="mt-3 text-xs">
          chaînes α(1→4) ; embranchements α(1→6), environ tous les 8-12 Glc
        </div>
      </div>
    </DiagramFrame>
  );
}

function CelluloseCellobiose() {
  return (
    <DiagramFrame ariaLabel="Cellulose formée de motifs cellobiose avec liaisons bêta 1 vers 4">
      <div className="min-w-max text-center">
        <div className="text-lg font-semibold">β-D-Glc-β(1→4)-β-D-Glc</div>
        <div className="my-2 text-sm">motif cellobiose répété</div>
        <div className="font-mono text-base">[ Glc-β(1→4)-Glc ]ₙ</div>
        <div className="mt-3 text-xs">
          polyoside structural végétal ; absence de β-glucosidase digestive chez l&apos;Homme
        </div>
      </div>
    </DiagramFrame>
  );
}

function GagBasicRepeat() {
  return (
    <DiagramFrame ariaLabel="Motif général répété des glycosaminoglycanes">
      <div className="min-w-max text-center">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <SimpleNode title="Osamine" detail="souvent N-acétylée ou sulfatée" />
          <span>-</span>
          <SimpleNode title="Acide uronique" detail="D ou L ; COO⁻, parfois sulfaté" />
        </div>
        <div className="mt-3 font-mono">[ osamine - acide uronique ]ₙ</div>
        <div className="mt-2 text-xs">MEC • membranes basales • surface cellulaire</div>
      </div>
    </DiagramFrame>
  );
}

function HyaluronicChondroitin() {
  return (
    <DiagramFrame ariaLabel="Comparaison de l'acide hyaluronique et de la chondroïtine sulfate">
      <div className="grid min-w-max grid-cols-2 gap-5">
        <SimpleNode
          title="Acide hyaluronique"
          detail="GlcA β(1→3) GlcNAc ; dimères β(1→4) ; non sulfaté ; n = 300-5000"
        />
        <SimpleNode
          title="Chondroïtine sulfate"
          detail="GlcA β(1→3) GalNAc ; dimères β(1→4) ; sulfates ; n ≈ 50"
        />
      </div>
    </DiagramFrame>
  );
}

function DermatanKeratan() {
  return (
    <DiagramFrame ariaLabel="Comparaison du dermatane sulfate et du kératane sulfate">
      <div className="grid min-w-max grid-cols-2 gap-5">
        <SimpleNode
          title="Dermatane sulfate"
          detail="L-IdoA α(1→3) GalNAc ; dimères β(1→4) ; n ≈ 50"
        />
        <SimpleNode
          title="Kératane sulfate"
          detail="Gal β(1→4) GlcNAc ; dimères β(1→3) ; sulfates en C6 ; n ≈ 10"
        />
      </div>
    </DiagramFrame>
  );
}

function HeparanHeparin() {
  return (
    <DiagramFrame ariaLabel="Comparaison de l'héparane sulfate et de l'héparine">
      <div className="grid min-w-max grid-cols-2 gap-5">
        <SimpleNode
          title="Héparane sulfate"
          detail="IdoA/GlcA + glucosamine ; n = 20-100 ; signalisation"
        />
        <SimpleNode
          title="Héparine"
          detail="structure proche ; n ≈ 10 ; sulfatation ++++ ; anticoagulant"
        />
      </div>
    </DiagramFrame>
  );
}

function ProteoglycanAggregate() {
  return (
    <DiagramFrame ariaLabel="Agrégat de protéoglycanes autour d'un filament d'acide hyaluronique">
      <div className="min-w-max text-center">
        <div className="mb-3 font-semibold">Filament d&apos;acide hyaluronique</div>
        <div className="font-mono text-lg">════════════════════════════</div>
        <div className="whitespace-pre font-mono text-base">
          {'  │       │       │       │\n ╪╪╪     ╪╪╪     ╪╪╪     ╪╪╪\nprotéine coeur + chaînes de GAG'}
        </div>
        <div className="mt-3 text-xs">hydratation • amortissement des chocs • signalisation</div>
      </div>
    </DiagramFrame>
  );
}

function GlycoproteinLinkages() {
  return (
    <DiagramFrame ariaLabel="Liaisons O-glycosidique et N-glycosidique des glycoprotéines">
      <div className="grid min-w-max gap-4">
        <div className="flex items-center gap-3">
          <SimpleNode title="Sucre réducteur" />
          <span>-O-</span>
          <SimpleNode title="Sérine / Thréonine" detail="fonction alcool" />
          <span className="font-semibold">O-glycosidique</span>
        </div>
        <div className="flex items-center gap-3">
          <SimpleNode title="Sucre réducteur" />
          <span>-N-</span>
          <SimpleNode title="Asparagine / fonction amide" />
          <span className="font-semibold">N-glycosidique</span>
        </div>
      </div>
    </DiagramFrame>
  );
}

export function CarbohydrateDiagram({ value, className }: CarbohydrateDiagramProps) {
  const diagram = (() => {
    switch (value.diagram) {
      case 'glyceraldehyde-dihydroxyacetone-linear':
        return <GlyceraldehydeDihydroxyacetoneLinear />;
      case 'glyceraldehyde-enantiomers-fischer':
        return <GlyceraldehydeEnantiomersFischer />;
      case 'glyceraldehyde-configurations-newman':
        return <GlyceraldehydeConfigurationsNewman />;
      case 'glucose-enantiomers-fischer':
        return <GlucoseEnantiomersFischer />;
      case 'glucose-mannose-galactose-fischer':
        return <GlucoseMannoseGalactoseFischer />;
      case 'aldoses-d-filiation':
        return <AldosesDFiliation />;
      case 'ketoses-d-filiation':
        return <KetosesDFiliation />;
      case 'glucose-cyclization-anomers':
        return <GlucoseCyclizationAnomers />;
      case 'glucose-fructose-ribose-fischer':
        return <GlucoseFructoseRiboseFischer />;
      case 'glucose-to-glucuronic-acid':
        return <GlucoseToGlucuronicAcid />;
      case 'polyol-reductions':
        return <PolyolReductions />;
      case 'osamine-n-acetyl-osamine':
        return <OsamineNAcetylOsamine />;
      case 'nana-sialic-acid':
        return <NanaSialicAcid />;
      case 'phosphorylated-oses':
        return <PhosphorylatedOses />;
      case 'sulfated-gag-charge':
        return <SulfatedGagCharge />;
      case 'osides-classification':
        return <OsidesClassification />;
      case 'glycosidic-condensation':
        return <GlycosidicCondensation />;
      case 'lactose-saccharose-maltose':
        return <LactoseSaccharoseMaltose />;
      case 'starch-amylose-amylopectin':
        return <StarchAmyloseAmylopectin />;
      case 'glycogen-branching':
        return <GlycogenBranching />;
      case 'cellulose-cellobiose':
        return <CelluloseCellobiose />;
      case 'gag-basic-repeat':
        return <GagBasicRepeat />;
      case 'hyaluronic-chondroitin':
        return <HyaluronicChondroitin />;
      case 'dermatan-keratan':
        return <DermatanKeratan />;
      case 'heparan-heparin':
        return <HeparanHeparin />;
      case 'proteoglycan-aggregate':
        return <ProteoglycanAggregate />;
      case 'glycoprotein-linkages':
        return <GlycoproteinLinkages />;
      default:
        return null;
    }
  })();

  return diagram ? <div className={className}>{diagram}</div> : null;
}
