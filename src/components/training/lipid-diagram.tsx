import type { ReactNode } from 'react';
import type { TrainingLipidDiagram } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';
import { EicosanoidDiagram, isEicosanoidDiagramName } from './eicosanoid-diagram';
import {
  GlycerophospholipidDiagram,
  isGlycerophospholipidDiagramName,
} from './glycerophospholipid-diagram';
import { SphingolipidDiagram, isSphingolipidDiagramName } from './sphingolipid-diagram';
import { SteroidDiagram, isSteroidDiagramName } from './steroid-diagram';

type LipidDiagramProps = {
  value: TrainingLipidDiagram;
  className?: string;
};

const serifFont = 'KaTeX_Main, Times New Roman, serif';

function FigureFrame({
  children,
  viewBox = '0 0 620 220',
}: {
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      className="mx-auto h-auto w-full max-w-3xl overflow-visible"
    >
      {children}
    </svg>
  );
}

function Chain({
  x = 80,
  y = 90,
  n = 12,
  step = 34,
  doubleAt,
}: {
  x?: number;
  y?: number;
  n?: number;
  step?: number;
  doubleAt?: number;
}) {
  const points = Array.from({ length: n + 1 }, (_, index) => ({
    x: x + index * step,
    y: y + (index % 2 ? 18 : 0),
  }));

  return (
    <>
      {points.slice(0, -1).map((start, index) => {
        const end = points[index + 1];

        return (
          <g key={`${start.x}-${start.y}`}>
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {doubleAt === index + 1 ? (
              <line
                x1={start.x}
                y1={start.y - 7}
                x2={end.x}
                y2={end.y - 7}
                stroke="currentColor"
                strokeWidth="2"
              />
            ) : null}
          </g>
        );
      })}
    </>
  );
}

function DiagramCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-3">
      <div className="mb-2 text-center text-sm font-semibold">{title}</div>
      {children}
    </div>
  );
}

function LipidClassificationDiagram() {
  const categories = [
    ['Acides gras', 'simples'],
    ['Glycerides', 'simples'],
    ['Phospholipides', 'complexes'],
    ['Sphingolipides', 'complexes'],
  ] as const;

  return (
    <FigureFrame>
      <rect x="230" y="15" width="160" height="40" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="310" y="41" textAnchor="middle" fill="currentColor" fontWeight="700">
        LIPIDES
      </text>
      {categories.map(([label, family], index) => {
        const centerX = 85 + index * 150;

        return (
          <g key={label}>
            <rect
              x={20 + index * 150}
              y="105"
              width="130"
              height="65"
              rx="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <text x={centerX} y="132" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="700">
              {label}
            </text>
            <text x={centerX} y="153" textAnchor="middle" fill="currentColor" fontSize="11">
              lipides {family}
            </text>
            <line x1="310" y1="55" x2={centerX} y2="105" stroke="currentColor" strokeWidth="1.5" />
          </g>
        );
      })}
    </FigureFrame>
  );
}

function FattyAcidAmphiphileDiagram() {
  return (
    <FigureFrame>
      <circle cx="105" cy="105" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="105" y="101" textAnchor="middle" fill="currentColor" fontFamily={serifFont} fontWeight="700">
        COOH
      </text>
      <text x="105" y="123" textAnchor="middle" fill="currentColor" fontSize="11">
        hydrophile
      </text>
      <Chain x={150} y={95} n={11} />
      <text x="350" y="160" textAnchor="middle" fill="currentColor" fontSize="12">
        chaine hydrophobe
      </text>
    </FigureFrame>
  );
}

function CarbonNumberingDiagram() {
  return (
    <FigureFrame>
      <text x="20" y="105" fill="currentColor" fontFamily={serifFont}>
        COOH
      </text>
      <Chain x={85} y={95} n={13} />
      <text x="560" y="105" fill="currentColor" fontFamily={serifFont}>
        CH3
      </text>
      <text x="50" y="55" fill="currentColor">
        C1
      </text>
      <text x="85" y="155" fill="currentColor">
        C2 = alpha
      </text>
      <text x="120" y="55" fill="currentColor">
        C3 = beta
      </text>
      <text x="560" y="55" fill="currentColor">
        omega
      </text>
    </FigureFrame>
  );
}

function SaturatedChainLengthsDiagram() {
  const lengths = [
    ['4-8 C', 'courte'],
    ['10-14 C', 'moyenne'],
    ['16-20 C', 'longue'],
    ['> 20 C', 'tres longue'],
  ] as const;

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {lengths.map(([range, label]) => (
        <DiagramCard key={label} title={range}>
          <div className="text-center text-sm">chaine {label}</div>
        </DiagramCard>
      ))}
    </div>
  );
}

function PalmiticStearicDiagram() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <DiagramCard title="Acide palmitique - 16:0">
        <FigureFrame viewBox="0 0 500 150">
          <text x="10" y="80" fill="currentColor">
            CH3
          </text>
          <Chain x={55} y={72} n={10} />
          <text x="425" y="80" fill="currentColor">
            COOH
          </text>
        </FigureFrame>
      </DiagramCard>
      <DiagramCard title="Acide stearique - 18:0">
        <FigureFrame viewBox="0 0 560 150">
          <text x="10" y="80" fill="currentColor">
            CH3
          </text>
          <Chain x={55} y={72} n={12} />
          <text x="495" y="80" fill="currentColor">
            COOH
          </text>
        </FigureFrame>
      </DiagramCard>
    </div>
  );
}

function CisTransDoubleBondDiagram() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <DiagramCard title="cis">
        <FigureFrame viewBox="0 0 300 170">
          <line x1="115" y1="85" x2="185" y2="85" stroke="currentColor" strokeWidth="3" />
          <line x1="115" y1="93" x2="185" y2="93" stroke="currentColor" strokeWidth="2" />
          <line x1="115" y1="85" x2="50" y2="40" stroke="currentColor" strokeWidth="3" />
          <line x1="185" y1="85" x2="250" y2="40" stroke="currentColor" strokeWidth="3" />
        </FigureFrame>
      </DiagramCard>
      <DiagramCard title="trans">
        <FigureFrame viewBox="0 0 300 170">
          <line x1="115" y1="85" x2="185" y2="85" stroke="currentColor" strokeWidth="3" />
          <line x1="115" y1="93" x2="185" y2="93" stroke="currentColor" strokeWidth="2" />
          <line x1="115" y1="85" x2="50" y2="40" stroke="currentColor" strokeWidth="3" />
          <line x1="185" y1="93" x2="250" y2="140" stroke="currentColor" strokeWidth="3" />
        </FigureFrame>
      </DiagramCard>
    </div>
  );
}

function UnsaturatedPairDiagram({ poly = false }: { poly?: boolean }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <DiagramCard title={poly ? 'Linoleique - 18:2 delta 9,12 - n-6' : 'Palmitoleique - 16:1 delta 9 - n-7'}>
        <FigureFrame viewBox="0 0 520 150">
          <text x="10" y="80" fill="currentColor">
            CH3
          </text>
          <Chain x={55} y={72} n={11} doubleAt={poly ? 6 : 8} />
          <text x="450" y="80" fill="currentColor">
            COOH
          </text>
        </FigureFrame>
      </DiagramCard>
      <DiagramCard title={poly ? 'Linolenique - 18:3 delta 9,12,15 - n-3' : 'Oleique - 18:1 delta 9 - n-9'}>
        <FigureFrame viewBox="0 0 560 150">
          <text x="10" y="80" fill="currentColor">
            CH3
          </text>
          <Chain x={55} y={72} n={12} doubleAt={poly ? 4 : 9} />
          <text x="490" y="80" fill="currentColor">
            COOH
          </text>
        </FigureFrame>
      </DiagramCard>
    </div>
  );
}

function DeltaOmegaNumberingDiagram() {
  return (
    <FigureFrame>
      <text x="20" y="105" fill="currentColor">
        COOH / C1
      </text>
      <Chain x={105} y={95} n={12} doubleAt={8} />
      <text x="535" y="105" fill="currentColor">
        CH3 / omega
      </text>
      <text x="210" y="45" fill="currentColor">
        delta : depuis le COOH
      </text>
      <text x="405" y="175" fill="currentColor">
        omega : depuis le methyle terminal
      </text>
    </FigureFrame>
  );
}

function MonolayerMicelleDiagram() {
  const monolayerHeads = Array.from({ length: 8 }, (_, index) => 40 + index * 38);
  const micelleSpokes = Array.from({ length: 12 }, (_, index) => {
    const angle = (index * Math.PI) / 6;

    return {
      key: index,
      outerX: 170 + 60 * Math.cos(angle),
      outerY: 90 + 60 * Math.sin(angle),
      innerX: 170 + 25 * Math.cos(angle),
      innerY: 90 + 25 * Math.sin(angle),
    };
  });

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <DiagramCard title="Monocouche">
        <FigureFrame viewBox="0 0 340 180">
          <line x1="20" y1="115" x2="320" y2="115" stroke="currentColor" strokeWidth="3" />
          {monolayerHeads.map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="105" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1={cx} y1="98" x2={cx} y2="50" stroke="currentColor" strokeWidth="2" />
            </g>
          ))}
        </FigureFrame>
      </DiagramCard>
      <DiagramCard title="Micelle">
        <FigureFrame viewBox="0 0 340 180">
          <circle cx="170" cy="90" r="60" fill="none" stroke="currentColor" strokeDasharray="4 4" />
          {micelleSpokes.map(({ key, outerX, outerY, innerX, innerY }) => (
            <g key={key}>
              <circle cx={outerX} cy={outerY} r="6" fill="none" stroke="currentColor" />
              <line x1={outerX} y1={outerY} x2={innerX} y2={innerY} stroke="currentColor" />
            </g>
          ))}
        </FigureFrame>
      </DiagramCard>
    </div>
  );
}

function MeltingPointFactorsDiagram() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <DiagramCard title="Chaine plus longue">
        <div className="text-center">point de fusion augmente</div>
      </DiagramCard>
      <DiagramCard title="Plus de doubles liaisons">
        <div className="text-center">point de fusion diminue</div>
      </DiagramCard>
    </div>
  );
}

function FattyAcidReactionsDiagram() {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      <DiagramCard title="Esterification">
        <div className="text-center text-sm">R-COOH + HO-R&apos; {'->'} R-COO-R&apos; + H2O</div>
      </DiagramCard>
      <DiagramCard title="Reduction">
        <div className="text-center text-sm">oleique 18:1 {'->'} stearique 18:0</div>
      </DiagramCard>
      <DiagramCard title="Isomerisation">
        <div className="text-center text-sm">cis vers trans</div>
      </DiagramCard>
    </div>
  );
}

function Omega3PathwayDiagram() {
  const steps = [
    ['Linolenique', '18:3 n-3', 20],
    ['EPA', '20:5 n-3', 260],
    ['DHA', '22:6 n-3', 500],
  ] as const;

  return (
    <FigureFrame viewBox="0 0 700 180">
      {steps.map(([label, formula, x]) => (
        <g key={label}>
          <rect x={x} y="45" width="180" height="75" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x={x + 90} y="78" textAnchor="middle" fill="currentColor" fontWeight="700">
            {label}
          </text>
          <text x={x + 90} y="102" textAnchor="middle" fill="currentColor" fontSize="13">
            {formula}
          </text>
        </g>
      ))}
      <line x1="205" y1="83" x2="248" y2="83" stroke="currentColor" strokeWidth="2" />
      <line x1="445" y1="83" x2="488" y2="83" stroke="currentColor" strokeWidth="2" />
      <text x="350" y="155" textAnchor="middle" fill="currentColor" fontSize="12">
        conversion limitee - source principale alimentaire
      </text>
    </FigureFrame>
  );
}

export function LipidDiagram({ value, className }: LipidDiagramProps) {
  let content: ReactNode = null;

  switch (value.diagram) {
    case 'lipid-classification':
      content = <LipidClassificationDiagram />;
      break;
    case 'fatty-acid-amphiphile':
      content = <FattyAcidAmphiphileDiagram />;
      break;
    case 'carbon-numbering':
      content = <CarbonNumberingDiagram />;
      break;
    case 'saturated-chain-lengths':
      content = <SaturatedChainLengthsDiagram />;
      break;
    case 'palmitic-stearic':
      content = <PalmiticStearicDiagram />;
      break;
    case 'cis-trans-double-bond':
      content = <CisTransDoubleBondDiagram />;
      break;
    case 'oleic-palmitoleic':
      content = <UnsaturatedPairDiagram />;
      break;
    case 'linoleic-linolenic':
      content = <UnsaturatedPairDiagram poly />;
      break;
    case 'delta-omega-numbering':
      content = <DeltaOmegaNumberingDiagram />;
      break;
    case 'monolayer-micelle':
      content = <MonolayerMicelleDiagram />;
      break;
    case 'melting-point-factors':
      content = <MeltingPointFactorsDiagram />;
      break;
    case 'fatty-acid-reactions':
      content = <FattyAcidReactionsDiagram />;
      break;
    case 'omega3-pathway':
      content = <Omega3PathwayDiagram />;
      break;
  }

  if (content) {
    return (
      <figure className={cn('my-5 rounded-2xl border border-border bg-card p-4 text-foreground', className)}>
        {content}
      </figure>
    );
  }

  if (isGlycerophospholipidDiagramName(value.diagram)) {
    return <GlycerophospholipidDiagram diagram={value.diagram} className={className} />;
  }

  if (isSphingolipidDiagramName(value.diagram)) {
    return <SphingolipidDiagram diagram={value.diagram} className={className} />;
  }

  if (isSteroidDiagramName(value.diagram)) {
    return <SteroidDiagram diagram={value.diagram} className={className} />;
  }

  if (isEicosanoidDiagramName(value.diagram)) {
    return <EicosanoidDiagram diagram={value.diagram} className={className} />;
  }

  return null;
}
