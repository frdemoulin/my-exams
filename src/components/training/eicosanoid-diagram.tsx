import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const EICOSANOID_DIAGRAM_NAMES = [
  'eicosanoid-overview',
  'arachidonic-acid-20-4',
  'eicosanoid-synthesis-pathways',
  'prostanoic-acid-reference',
  'prostaglandin-nomenclature',
  'prostaglandin-series',
  'cox-series2-pathway',
  'pge1-pge2-effects',
  'misoprostol-pge1',
  'txa2-pgi2-balance',
  'leukotriene-cells-effects',
  'lta4-structure',
  'leukotriene-lipoxin-pathways',
] as const;

export type EicosanoidDiagramName = (typeof EICOSANOID_DIAGRAM_NAMES)[number];

export function isEicosanoidDiagramName(value: string): value is EicosanoidDiagramName {
  return (EICOSANOID_DIAGRAM_NAMES as readonly string[]).includes(value);
}

type Props = { diagram: EicosanoidDiagramName; className?: string };

function Frame({ children, viewBox = '0 0 760 280' }: { children: ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} role="img" className="mx-auto h-auto w-full max-w-4xl overflow-visible">
      {children}
    </svg>
  );
}

function Box({
  x,
  y,
  width,
  label,
  sub,
}: {
  x: number;
  y: number;
  width: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height="58" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x={x + width / 2} y={y + 24} textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700">
        {label}
      </text>
      {sub ? (
        <text x={x + width / 2} y={y + 45} textAnchor="middle" fill="currentColor" fontSize="11">
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  label,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
}) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
      <path d={`M ${x2 - 9} ${y2 - 5} L ${x2} ${y2} L ${x2 - 9} ${y2 + 5}`} fill="none" stroke="currentColor" strokeWidth="2" />
      {label ? (
        <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 8} textAnchor="middle" fill="currentColor" fontSize="11">
          {label}
        </text>
      ) : null}
    </g>
  );
}

function EicosanoidOverview() {
  return (
    <Frame>
      <Box x={285} y={15} width={190} label="EICOSANOÏDES" sub="composés à 20 carbones" />
      <Box x={80} y={135} width={245} label="Prostanoïdes" sub="prostaglandines + thromboxanes" />
      <Box x={435} y={135} width={245} label="Lipoxygénases" sub="leucotriènes + lipoxines" />
      <Arrow x1={380} y1={73} x2={205} y2={135} />
      <Arrow x1={380} y1={73} x2={558} y2={135} />
      <text x="380" y="245" textAnchor="middle" fill="currentColor" fontSize="13">
        précurseur majeur : acide arachidonique
      </text>
    </Frame>
  );
}

function ArachidonicAcid() {
  const points = Array.from({ length: 16 }, (_, index) => ({
    x: 90 + index * 36,
    y: 125 + (index % 2 ? 20 : 0),
  }));
  const doubles = new Set([3, 6, 9, 12]);

  return (
    <Frame>
      <text x="20" y="135" fill="currentColor" fontSize="15">COOH / C1</text>
      {points.slice(0, -1).map((point, index) => {
        const next = points[index + 1];
        return (
          <g key={index}>
            <line x1={point.x} y1={point.y} x2={next.x} y2={next.y} stroke="currentColor" strokeWidth="2.5" />
            {doubles.has(index) ? (
              <line x1={point.x} y1={point.y - 7} x2={next.x} y2={next.y - 7} stroke="currentColor" strokeWidth="2" />
            ) : null}
          </g>
        );
      })}
      <text x="660" y="135" fill="currentColor" fontSize="15">CH₃ / C20</text>
      <text x="360" y="225" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="700">
        20:4 Δ5,8,11,14 — n-6 — toutes cis
      </text>
    </Frame>
  );
}

function SynthesisPathways() {
  return (
    <Frame viewBox="0 0 840 340">
      <Box x={305} y={15} width={230} label="Acide arachidonique" />
      <Box x={35} y={145} width={190} label="Prostaglandines" />
      <Box x={245} y={245} width={170} label="Thromboxanes" />
      <Box x={455} y={145} width={170} label="Leucotriènes" />
      <Box x={650} y={145} width={150} label="Lipoxines" />
      <Arrow x1={350} y1={73} x2={130} y2={145} label="COX" />
      <Arrow x1={130} y1={203} x2={310} y2={245} label="TX synthase" />
      <Arrow x1={470} y1={73} x2={540} y2={145} label="5-lipoxygénase" />
      <Arrow x1={520} y1={60} x2={725} y2={145} label="15-lipoxygénase" />
      <text x="420" y="325" textAnchor="middle" fill="currentColor" fontSize="12">
        origine : alimentation et clivage des phospholipides membranaires
      </text>
    </Frame>
  );
}

function ProstanoicAcid() {
  return (
    <Frame>
      <path d="M 255 90 L 305 65 L 350 105 L 330 160 L 275 160 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="303" y="120" textAnchor="middle" fill="currentColor" fontSize="13">cyclopentane</text>
      <text x="245" y="78" fill="currentColor" fontSize="12">C8</text>
      <text x="332" y="177" fill="currentColor" fontSize="12">C12</text>
      <line x1="255" y1="90" x2="85" y2="48" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" />
      <line x1="330" y1="160" x2="610" y2="210" stroke="currentColor" strokeWidth="7" />
      <text x="82" y="34" fill="currentColor" fontSize="12">chaîne C8 en arrière</text>
      <text x="545" y="238" fill="currentColor" fontSize="12">chaîne C12 en avant</text>
      <text x="380" y="28" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="700">
        Acide prostanoïque — référence structurale C20
      </text>
    </Frame>
  );
}

function ProstaglandinNomenclature() {
  return (
    <Frame>
      <Box x={25} y={95} width={150} label="PG" sub="prostaglandine" />
      <Box x={205} y={95} width={150} label="E ou F" sub="groupe du noyau" />
      <Box x={385} y={95} width={135} label="2" sub="série : 2 DL" />
      <Box x={550} y={95} width={170} label="α / β" sub="OH en C9" />
      <Arrow x1={175} y1={124} x2={205} y2={124} />
      <Arrow x1={355} y1={124} x2={385} y2={124} />
      <Arrow x1={520} y1={124} x2={550} y2={124} />
      <text x="380" y="225" textAnchor="middle" fill="currentColor" fontSize="17" fontWeight="700">
        Exemples : PGE₂ — PGF₂α
      </text>
    </Frame>
  );
}

function ProstaglandinSeries() {
  const cards = [
    ['Série 1', 'Δ13', 'acide linoléique', 'plus rare'],
    ['Série 2', 'Δ5,13', 'acide arachidonique', 'plus fréquente'],
    ['Série 3', 'Δ5,13,17', 'acide α-linolénique', 'plus rare'],
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {cards.map(([title, delta, precursor, frequency]) => (
        <div key={title} className="rounded-xl border border-border p-3 text-center">
          <div className="font-semibold">{title}</div>
          <div className="mt-1 text-sm">{delta}</div>
          <div className="mt-1 text-xs">Précurseur : {precursor}</div>
          <div className="mt-2 text-xs italic">{frequency}</div>
        </div>
      ))}
    </div>
  );
}

function CoxSeries2Pathway() {
  const products = [
    ['PGI₂', 45, 265],
    ['PGD₂', 210, 315],
    ['PGE₂', 375, 315],
    ['PGF₂α', 540, 315],
    ['TXA₂', 705, 265],
  ] as const;

  return (
    <Frame viewBox="0 0 880 410">
      <Box x={325} y={15} width={230} label="Acide arachidonique" />
      <Arrow x1={440} y1={73} x2={440} y2={125} label="COX" />
      <text x="555" y="95" fill="currentColor" fontSize="12">aspirine — ibuprofène ⊣</text>
      <Box x={355} y={130} width={170} label="PGH₂" sub="intermédiaire central" />
      {products.map(([label, x, y]) => (
        <g key={label}>
          <Box x={x} y={y} width={120} label={label} />
          <Arrow x1={440} y1={188} x2={x + 60} y2={y} />
        </g>
      ))}
    </Frame>
  );
}

function PgeEffects() {
  const rows = [
    ['Inflammation', 'anti-inflammatoire', 'pro-inflammatoire'],
    ['Vaisseaux', 'vasodilatation', 'vasodilatation'],
    ['Bronches', 'bronchodilatation', 'bronchodilatation'],
    ['Agrégation', 'inhibe', 'stimule'],
  ];

  return (
    <div className="overflow-x-auto">
      <table className="mx-auto min-w-[560px] border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-border p-2"></th>
            <th className="border border-border p-2">PGE₁</th>
            <th className="border border-border p-2">PGE₂</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={cell} className={cn('border border-border p-2', index === 0 && 'font-semibold')}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 text-center text-sm">
        PGF₂α : effets souvent contraires à PGE₂, dont vasoconstriction et bronchoconstriction
      </div>
    </div>
  );
}

function Misoprostol() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-border p-4 text-center">
        <div className="font-semibold">PGE₁</div>
        <div className="mt-2 text-sm">modèle biologique</div>
      </div>
      <div className="rounded-xl border border-border p-4 text-center">
        <div className="font-semibold">Misoprostol — ANGUSTA®</div>
        <div className="mt-2 text-sm">analogue synthétique</div>
        <div className="mt-3 text-xs">contraction utérine + assouplissement du col</div>
      </div>
    </div>
  );
}

function TxaPgiBalance() {
  return (
    <Frame>
      <Box x={35} y={80} width={285} label="TXA₂ — plaquettes" sub="vasoconstriction + agrégation — t½ ≈ 30 s" />
      <Box x={440} y={80} width={285} label="PGI₂ — endothélium" sub="vasodilatation + inhibition — t½ 2–3 min" />
      <Arrow x1={320} y1={109} x2={440} y2={109} label="effets antagonistes" />
      <text x="380" y="235" textAnchor="middle" fill="currentColor" fontSize="13">
        Aspirine à faible dose : inhibition des TX → action anti-agrégante
      </text>
    </Frame>
  );
}

function LeukotrieneCellsEffects() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-border p-4">
        <div className="text-center font-semibold">Cellules productrices</div>
        <div className="mt-3 text-center text-sm">leucocytes — mastocytes — plaquettes — macrophages</div>
      </div>
      <div className="rounded-xl border border-border p-4">
        <div className="text-center font-semibold">Effets</div>
        <div className="mt-3 text-center text-sm">
          vasoconstriction — bronchoconstriction — chimiotactisme — activité cytotoxique lymphocytaire ↑
        </div>
      </div>
    </div>
  );
}

function Lta4Structure() {
  const points = Array.from({ length: 14 }, (_, index) => ({
    x: 75 + index * 43,
    y: 150 + (index % 2 ? 20 : 0),
  }));
  const doubles = new Set([2, 4, 6, 9]);

  return (
    <Frame>
      <text x="20" y="160" fill="currentColor">COOH</text>
      {points.slice(0, -1).map((point, index) => {
        const next = points[index + 1];
        return (
          <g key={index}>
            <line x1={point.x} y1={point.y} x2={next.x} y2={next.y} stroke="currentColor" strokeWidth="2.5" />
            {doubles.has(index) ? (
              <line x1={point.x} y1={point.y - 7} x2={next.x} y2={next.y - 7} stroke="currentColor" strokeWidth="2" />
            ) : null}
          </g>
        );
      })}
      <polygon points="195,122 230,95 257,126" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="230" y="88" textAnchor="middle" fill="currentColor" fontSize="16">O</text>
      <text x="230" y="52" textAnchor="middle" fill="currentColor" fontSize="12">époxyde C5–C6</text>
      <text x="380" y="245" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="700">
        LTA₄ — 4 doubles liaisons, dont 3 conjuguées
      </text>
    </Frame>
  );
}

function LeukotrienePathways() {
  return (
    <Frame viewBox="0 0 900 440">
      <Box x={330} y={15} width={240} label="Acide arachidonique" />
      <Arrow x1={450} y1={73} x2={450} y2={125} label="5-lipoxygénase" />
      <Box x={370} y={130} width={160} label="LTA₄" />
      <Box x={75} y={250} width={150} label="LXA₄" />
      <Box x={285} y={250} width={150} label="LTB₄" />
      <Box x={585} y={215} width={150} label="LTC₄" sub="+ glutathion" />
      <Box x={585} y={300} width={150} label="LTD₄" sub="− Glu" />
      <Box x={585} y={385} width={150} label="LTE₄" sub="− Gly" />
      <Arrow x1={390} y1={188} x2={150} y2={250} label="15-lipoxygénase" />
      <Arrow x1={435} y1={188} x2={360} y2={250} />
      <Arrow x1={505} y1={188} x2={660} y2={215} label="γ-Glu-Cys-Gly" />
      <Arrow x1={660} y1={273} x2={660} y2={300} />
      <Arrow x1={660} y1={358} x2={660} y2={385} />
    </Frame>
  );
}

export function EicosanoidDiagram({ diagram, className }: Props) {
  let content: ReactNode = null;

  switch (diagram) {
    case 'eicosanoid-overview':
      content = <EicosanoidOverview />;
      break;
    case 'arachidonic-acid-20-4':
      content = <ArachidonicAcid />;
      break;
    case 'eicosanoid-synthesis-pathways':
      content = <SynthesisPathways />;
      break;
    case 'prostanoic-acid-reference':
      content = <ProstanoicAcid />;
      break;
    case 'prostaglandin-nomenclature':
      content = <ProstaglandinNomenclature />;
      break;
    case 'prostaglandin-series':
      content = <ProstaglandinSeries />;
      break;
    case 'cox-series2-pathway':
      content = <CoxSeries2Pathway />;
      break;
    case 'pge1-pge2-effects':
      content = <PgeEffects />;
      break;
    case 'misoprostol-pge1':
      content = <Misoprostol />;
      break;
    case 'txa2-pgi2-balance':
      content = <TxaPgiBalance />;
      break;
    case 'leukotriene-cells-effects':
      content = <LeukotrieneCellsEffects />;
      break;
    case 'lta4-structure':
      content = <Lta4Structure />;
      break;
    case 'leukotriene-lipoxin-pathways':
      content = <LeukotrienePathways />;
      break;
  }

  return (
    <figure className={cn('my-5 rounded-2xl border border-border bg-card p-4 text-foreground', className)}>
      {content}
    </figure>
  );
}
