import type {
  TrainingLewisBond,
  TrainingLewisPairSide,
  TrainingLewisResonanceDiagram as TrainingLewisResonanceDiagramValue,
  TrainingLewisStructure,
} from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';

type LewisResonanceDiagramProps = {
  value: TrainingLewisResonanceDiagramValue;
  className?: string;
};

const chemicalFontFamily = 'KaTeX_Main, Times New Roman, serif';
const atomSpacing = 66;
const horizontalPadding = 30;
const atomY = 48;

const bondOffsets: Record<TrainingLewisBond, number[]> = {
  single: [0],
  double: [-5, 5],
  triple: [-7, 0, 7],
};

const formatCharge = (charge: number | undefined) => {
  if (!charge) {
    return null;
  }

  const sign = charge > 0 ? '+' : '−';
  const absoluteCharge = Math.abs(charge);

  return absoluteCharge === 1 ? sign : `${absoluteCharge}${sign}`;
};

const getLonePairCoordinates = (
  atomX: number,
  side: TrainingLewisPairSide
): [number, number, number, number] => {
  switch (side) {
    case 'top':
      return [atomX - 7, 27, atomX + 7, 27];
    case 'right':
      return [atomX + 21, atomY - 7, atomX + 21, atomY + 7];
    case 'bottom':
      return [atomX - 7, 69, atomX + 7, 69];
    case 'left':
      return [atomX - 21, atomY - 7, atomX - 21, atomY + 7];
  }
};

function LewisStructure({ structure }: { structure: TrainingLewisStructure }) {
  const width = horizontalPadding * 2 + atomSpacing * (structure.atoms.length - 1);

  return (
    <svg
      viewBox={`0 0 ${width} 96`}
      aria-hidden="true"
      className="h-14 w-auto shrink-0 overflow-visible"
    >
      {structure.bonds.flatMap((bond, bondIndex) => {
        const firstAtomX = horizontalPadding + bondIndex * atomSpacing;
        const secondAtomX = firstAtomX + atomSpacing;

        return bondOffsets[bond].map((offset, lineIndex) => (
          <line
            key={`${bondIndex}-${lineIndex}`}
            x1={firstAtomX + 19}
            y1={atomY + offset}
            x2={secondAtomX - 19}
            y2={atomY + offset}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ));
      })}

      {structure.atoms.map((atom, atomIndex) => {
        const atomX = horizontalPadding + atomIndex * atomSpacing;
        const charge = formatCharge(atom.charge);

        return (
          <g key={`${atom.element}-${atomIndex}`}>
            <text
              x={atomX}
              y={atomY + 9}
              textAnchor="middle"
              fontSize="27"
              fontFamily={chemicalFontFamily}
              fontWeight="400"
              fontStyle="normal"
              fill="currentColor"
            >
              {atom.element}
            </text>

            {charge ? (
              <text
                x={atomX + 13}
                y="31"
                textAnchor="start"
                fontSize="18"
                fontFamily={chemicalFontFamily}
                fontWeight="400"
                fontStyle="normal"
                fill="currentColor"
              >
                {charge}
              </text>
            ) : null}

            {atom.lonePairs.map((side) => {
              const [x1, y1, x2, y2] = getLonePairCoordinates(atomX, side);

              return (
                <line
                  key={side}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

export function LewisResonanceDiagram({ value, className }: LewisResonanceDiagramProps) {
  return (
    <div
      role="img"
      aria-label="Formes mésomères avec leurs liaisons, charges formelles et doublets non liants"
      className={cn(
        'flex max-w-full items-center justify-center gap-2 overflow-x-auto py-1 text-foreground',
        className
      )}
    >
      {value.forms.map((form, formIndex) => (
        <div key={formIndex} className="contents">
          {formIndex > 0 ? (
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none"
              style={{ fontFamily: chemicalFontFamily }}
            >
              ↔
            </span>
          ) : null}
          <LewisStructure structure={form} />
        </div>
      ))}
    </div>
  );
}
