import type { TrainingLewisAtomChoice } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';

type LewisAtomDiagramProps = {
  value: TrainingLewisAtomChoice;
  className?: string;
  ariaLabel?: string;
};

const pointRadius = 2.75;
const chemicalFontFamily = 'KaTeX_Main, Times New Roman, serif';

// A short stroke distinguishes a lone pair from two separate single electrons.
const lonePairStrokes = {
  top: [41, 27, 55, 27],
  right: [69, 41, 69, 55],
  bottom: [41, 69, 55, 69],
  left: [27, 41, 27, 55],
} as const;

const singlePoints = {
  top: [[48, 27]],
  right: [[69, 48]],
  bottom: [[48, 69]],
  left: [[27, 48]],
} as const;

const formatCharge = (charge: number | undefined) => {
  if (!charge) {
    return null;
  }

  const sign = charge > 0 ? '+' : '−';
  const absoluteCharge = Math.abs(charge);

  return absoluteCharge === 1 ? sign : `${absoluteCharge}${sign}`;
};

export function LewisAtomDiagram({ value, className, ariaLabel }: LewisAtomDiagramProps) {
  const chargeText = formatCharge(value.charge);

  return (
    <svg
      viewBox="0 0 96 96"
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={cn('h-14 w-14 shrink-0 overflow-visible', className)}
    >
      <text
        x="48"
        y="57"
        textAnchor="middle"
        fontSize="27"
        fontFamily={chemicalFontFamily}
        fontWeight="400"
        fontStyle="normal"
        fill="currentColor"
      >
        {value.element}
      </text>

      {chargeText ? (
        <text
          x="65"
          y="31"
          textAnchor="start"
          fontSize="18"
          fontFamily={chemicalFontFamily}
          fontWeight="400"
          fontStyle="normal"
          fill="currentColor"
        >
          {chargeText}
        </text>
      ) : null}

      {(
        ['top', 'right', 'bottom', 'left'] as Array<keyof TrainingLewisAtomChoice['electrons']>
      ).flatMap((side) => {
        const mark = value.electrons[side];

        if (mark === 'none') {
          return [];
        }

        if (mark === 'pair') {
          const [x1, y1, x2, y2] = lonePairStrokes[side];

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
        }

        const points = singlePoints[side];

        return points.map(([cx, cy], index) => (
          <circle
            key={`${side}-${index}`}
            cx={cx}
            cy={cy}
            r={pointRadius}
            fill="currentColor"
          />
        ));
      })}
    </svg>
  );
}
