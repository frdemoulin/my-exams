import { cn } from '@/lib/utils';

export const STEROID_DIAGRAM_NAMES = [
  "sterane",
  "sterane-numbering",
  "families",
  "cholesterol-structure",
  "cholesterol-forms",
  "cholesterol-roles",
  "cholesterol-transport",
  "bile-vitd",
  "hormone-origins",
  "steroid-nuclei",
  "aldosterone-cortisol",
  "aldosterone-kidney",
  "cortisol",
  "androgen-estrogen",
  "progesterone",
] as const;
export type SteroidDiagramName = (typeof STEROID_DIAGRAM_NAMES)[number];
export function isSteroidDiagramName(value: string): value is SteroidDiagramName {
  return (STEROID_DIAGRAM_NAMES as readonly string[]).includes(value);
}
const DATA: Record<SteroidDiagramName, { title: string; items: string[] }> = {
  "sterane": { title: "Noyau stérane", items: ["cycle A : 6C", "cycle B : 6C", "cycle C : 6C", "cycle D : 5C"] },
  "sterane-numbering": { title: "Numérotation", items: ["A/B : antihoraire", "C : horaire", "D : antihoraire", "centres 5,8,9,10,13,14"] },
  "families": { title: "Familles", items: ["stérol : OH C3", "stéride : ester C3", "stéroïde : noyau stérane"] },
  "cholesterol-structure": { title: "Cholestérol C27", items: ["OH C3", "C5=C6", "chaîne C8 en C17", "8 centres asymétriques"] },
  "cholesterol-forms": { title: "Deux formes", items: ["libre : amphiphile", "estérifié : hydrophobe / stockage"] },
  "cholesterol-roles": { title: "Rôles du cholestérol", items: ["membranes", "fluidité", "précurseur hormonal", "acides biliaires"] },
  "cholesterol-transport": { title: "Transport sanguin", items: ["LDL", "HDL", "lipoprotéines"] },
  "bile-vitd": { title: "Dérivés", items: ["acides biliaires C24 : digestion", "vitamine D C27 : Ca/P/os"] },
  "hormone-origins": { title: "Origines", items: ["corticosurrénales", "gonades", "placenta", "précurseur : cholestérol"] },
  "steroid-nuclei": { title: "Noyaux hormonaux", items: ["estrane C18", "androstane C19", "prégnane C21"] },
  "aldosterone-cortisol": { title: "Corticostéroïdes", items: ["aldostérone : C18-CHO", "cortisol : OH C17", "noyau prégnane"] },
  "aldosterone-kidney": { title: "Aldostérone au rein", items: ["réabsorption Na⁺", "élimination K⁺", "élimination H⁺", "pression artérielle"] },
  "cortisol": { title: "Cortisol", items: ["hyperglycémiant", "anti-inflammatoire", "immunosuppresseur"] },
  "androgen-estrogen": { title: "Hormones sexuelles", items: ["testostérone : androstane", "œstrogènes : estrane", "effets sexuels et osseux"] },
  "progesterone": { title: "Progestérone", items: ["corps jaune", "placenta", "endomètre", "température post-ovulatoire"] },
};
type Props = { diagram: SteroidDiagramName; className?: string };
export function SteroidDiagram({ diagram, className }: Props) {
  const d = DATA[diagram];
  return <figure className={cn('my-5 rounded-2xl border border-border bg-card p-4 text-foreground', className)}>
    <div className="mb-4 text-center text-base font-semibold">{d.title}</div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{d.items.map((item,index)=><div key={item} className="relative rounded-xl border border-border bg-background/60 p-3 text-center text-sm"><div className="mb-2 text-xs font-semibold text-muted-foreground">{index+1}</div><div>{item}</div>{index<d.items.length-1?<div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted-foreground lg:block">→</div>:null}</div>)}</div>
  </figure>;
}
