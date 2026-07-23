import type { TrainingBenzeneKekuleDiagram } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';

type BenzeneKekuleDiagramProps = {
  value: TrainingBenzeneKekuleDiagram;
  className?: string;
};

type Point = {
  x: number;
  y: number;
};

type KekuleForm = 'A' | 'B';

const vertices: Point[] = [
  { x: 50, y: 8 },
  { x: 82, y: 26 },
  { x: 82, y: 62 },
  { x: 50, y: 80 },
  { x: 18, y: 62 },
  { x: 18, y: 26 },
];

const bondOrdersByForm: Record<KekuleForm, Array<1 | 2>> = {
  A: [2, 1, 2, 1, 2, 1],
  B: [1, 2, 1, 2, 1, 2],
};

const bondLabels = ['C1-C2', 'C2-C3', 'C3-C4', 'C4-C5', 'C5-C6', 'C6-C1'];
const center: Point = { x: 50, y: 44 };

const getInnerDoubleBond = (from: Point, to: Point) => {
  const midpoint = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
  const vectorToCenter = { x: center.x - midpoint.x, y: center.y - midpoint.y };
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

function KekuleStructure({ form, index }: { form: KekuleForm; index: number }) {
  const bondOrders = bondOrdersByForm[form];

  return (
    <svg
      viewBox="0 0 100 88"
      aria-hidden="true"
      className="h-16 w-20 shrink-0 overflow-visible"
      data-structure-index={index}
    >
      {bondOrders.map((order, bondIndex) => {
        const from = vertices[bondIndex];
        const to = vertices[(bondIndex + 1) % vertices.length];
        const innerLine = order === 2 ? getInnerDoubleBond(from, to) : null;

        return (
          <g key={bondLabels[bondIndex]} data-bond={bondLabels[bondIndex]} data-bond-order={order}>
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
    </svg>
  );
}

function AromaticStructure() {
  return (
    <svg
      viewBox="0 0 100 88"
      aria-hidden="true"
      className="h-16 w-20 shrink-0 overflow-visible"
    >
      {vertices.map((from, bondIndex) => {
        const to = vertices[(bondIndex + 1) % vertices.length];

        return (
          <line
            key={bondLabels[bondIndex]}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={center.x} cy={center.y} r="18" fill="none" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

export function BenzeneKekuleDiagram({ value, className }: BenzeneKekuleDiagramProps) {
  const variant = value.variant ?? (value.showAromaticHybrid ? 'kekule-with-aromatic' : 'kekule');
  const ariaLabel =
    variant === 'aromatic'
      ? 'Formule topologique aromatique du benzène, représentée par un hexagone contenant un cercle.'
      : variant === 'single-kekule'
        ? 'Formule de Kekulé du benzène, représentée par un hexagone avec trois doubles liaisons alternées.'
      : variant === 'kekule-with-aromatic'
        ? 'Deux formes de Kekulé du benzène reliées par une flèche de mésomérie, suivies de la représentation aromatique avec six électrons pi délocalisés.'
        : 'Deux formes de Kekulé du benzène reliées par une flèche de mésomérie. Elles conservent le même cycle de six carbones et diffèrent par la position des trois doubles liaisons.';

  if (variant === 'aromatic' || variant === 'single-kekule') {
    return (
      <div
        role="img"
        aria-label={ariaLabel}
        className={cn(
          'flex max-w-full items-center justify-center overflow-x-auto py-1 text-foreground',
          className
        )}
      >
        {variant === 'aromatic' ? <AromaticStructure /> : <KekuleStructure form="A" index={0} />}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        'flex max-w-full flex-wrap items-center justify-center gap-2 overflow-x-auto py-1 text-foreground sm:gap-3',
        className
      )}
    >
      <KekuleStructure form="A" index={0} />
      <span aria-hidden="true" className="shrink-0 text-xl leading-none">
        ↔
      </span>
      <KekuleStructure form="B" index={1} />
      {variant === 'kekule-with-aromatic' ? (
        <>
          <span aria-hidden="true" className="shrink-0 text-xl leading-none">
            →
          </span>
          <AromaticStructure />
        </>
      ) : null}
    </div>
  );
}
