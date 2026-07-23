import type { TrainingMoleculeDiagram } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';

type MoleculeDiagramProps = {
  value: TrainingMoleculeDiagram;
  className?: string;
};

type Point = {
  x: number;
  y: number;
};

const ringVertices: Point[] = [
  { x: 80, y: 46 },
  { x: 114, y: 66 },
  { x: 114, y: 106 },
  { x: 80, y: 126 },
  { x: 46, y: 106 },
  { x: 46, y: 66 },
];

const ringCenter: Point = { x: 80, y: 86 };
const bondLabels = ['C1-C2', 'C2-C3', 'C3-C4', 'C4-C5', 'C5-C6', 'C6-C1'];
const doubleBondIndexes = new Set([0, 2, 4]);

const getInnerDoubleBond = (from: Point, to: Point) => {
  const midpoint = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
  const vectorToCenter = { x: ringCenter.x - midpoint.x, y: ringCenter.y - midpoint.y };
  const distanceToCenter = Math.hypot(vectorToCenter.x, vectorToCenter.y);
  const unitToCenter = {
    x: vectorToCenter.x / distanceToCenter,
    y: vectorToCenter.y / distanceToCenter,
  };
  const bondVector = { x: to.x - from.x, y: to.y - from.y };
  const bondLength = Math.hypot(bondVector.x, bondVector.y);
  const unitAlongBond = { x: bondVector.x / bondLength, y: bondVector.y / bondLength };
  const inset = 4.5;
  const shorten = 6;

  return {
    x1: from.x + unitToCenter.x * inset + unitAlongBond.x * shorten,
    y1: from.y + unitToCenter.y * inset + unitAlongBond.y * shorten,
    x2: to.x + unitToCenter.x * inset - unitAlongBond.x * shorten,
    y2: to.y + unitToCenter.y * inset - unitAlongBond.y * shorten,
  };
};

function SalicylicAcidTopologicalDiagram({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Formule topologique de l'acide salicylique, avec un noyau benzénique portant un groupe hydroxyle et un groupe acide carboxylique en positions voisines."
      className={cn('flex max-w-full items-center justify-center overflow-x-auto py-1 text-foreground', className)}
    >
      <svg
        viewBox="20 -18 170 158"
        aria-hidden="true"
        className="h-36 w-48 shrink-0 overflow-visible"
      >
        {ringVertices.map((from, bondIndex) => {
          const to = ringVertices[(bondIndex + 1) % ringVertices.length];
          const innerLine = doubleBondIndexes.has(bondIndex) ? getInnerDoubleBond(from, to) : null;

          return (
            <g key={bondLabels[bondIndex]} data-bond={bondLabels[bondIndex]}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {innerLine ? (
                <line
                  {...innerLine}
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                />
              ) : null}
            </g>
          );
        })}

        <line x1="114" y1="66" x2="151" y2="48" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <text x="157" y="52" fill="currentColor" fontSize="15" fontFamily="KaTeX_Main, Times New Roman, serif">
          OH
        </text>

        <line x1="80" y1="46" x2="80" y2="10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="80" y1="10" x2="51" y2="-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="83" y1="6" x2="54" y2="-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <text x="33" y="-9" fill="currentColor" fontSize="15" fontFamily="KaTeX_Main, Times New Roman, serif">
          O
        </text>
        <line x1="80" y1="10" x2="109" y2="-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <text x="116" y="-6" fill="currentColor" fontSize="15" fontFamily="KaTeX_Main, Times New Roman, serif">
          OH
        </text>
      </svg>
    </div>
  );
}

function AspirinTopologicalDiagram({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Formule topologique de l'aspirine, avec un noyau benzénique portant un groupe acide carboxylique et un groupe acétoxy en positions voisines."
      className={cn('flex max-w-full items-center justify-center overflow-x-auto py-1 text-foreground', className)}
    >
      <svg
        viewBox="20 -20 220 166"
        aria-hidden="true"
        className="h-40 w-64 shrink-0 overflow-visible"
      >
        {ringVertices.map((from, bondIndex) => {
          const to = ringVertices[(bondIndex + 1) % ringVertices.length];
          const innerLine = doubleBondIndexes.has(bondIndex) ? getInnerDoubleBond(from, to) : null;

          return (
            <g key={bondLabels[bondIndex]} data-bond={bondLabels[bondIndex]}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {innerLine ? (
                <line
                  {...innerLine}
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                />
              ) : null}
            </g>
          );
        })}

        <line x1="80" y1="46" x2="80" y2="10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="80" y1="10" x2="51" y2="-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="83" y1="6" x2="54" y2="-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <text x="33" y="-9" fill="currentColor" fontSize="15" fontFamily="KaTeX_Main, Times New Roman, serif">
          O
        </text>
        <line x1="80" y1="10" x2="109" y2="-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <text x="116" y="-6" fill="currentColor" fontSize="15" fontFamily="KaTeX_Main, Times New Roman, serif">
          OH
        </text>

        <line x1="114" y1="66" x2="142" y2="49" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <text x="148" y="54" fill="currentColor" fontSize="15" fontFamily="KaTeX_Main, Times New Roman, serif">
          O
        </text>
        <line x1="164" y1="53" x2="184" y2="65" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="184" y1="65" x2="184" y2="99" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="188" y1="65" x2="188" y2="99" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <text x="178" y="118" fill="currentColor" fontSize="15" fontFamily="KaTeX_Main, Times New Roman, serif">
          O
        </text>
        <line x1="186" y1="65" x2="216" y2="48" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function MoleculeDiagram({ value, className }: MoleculeDiagramProps) {
  if (value.molecule === 'aspirin-topological') {
    return <AspirinTopologicalDiagram className={className} />;
  }

  if (value.molecule === 'salicylic-acid-topological') {
    return <SalicylicAcidTopologicalDiagram className={className} />;
  }

  return null;
}
