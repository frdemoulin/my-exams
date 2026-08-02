import { cn } from '@/lib/utils';

export const SPHINGOLIPID_DIAGRAM_NAMES = [
  "family-tree",
  "sphingosine-functions",
  "ceramide-formation",
  "catabolism",
  "skin-barrier",
  "ceramide-signaling",
  "sphingomyelin-structure",
  "myelin",
  "glyco-general",
  "cerebrosides",
  "gangliosides",
  "metabolic-pathway",
  "disease-table",
] as const;
export type SphingolipidDiagramName = (typeof SPHINGOLIPID_DIAGRAM_NAMES)[number];
export function isSphingolipidDiagramName(value: string): value is SphingolipidDiagramName {
  return (SPHINGOLIPID_DIAGRAM_NAMES as readonly string[]).includes(value);
}
const DATA: Record<SphingolipidDiagramName, { title: string; items: string[] }> = {
  "family-tree": { title: "Famille des sphingolipides", items: ["sphingosine", "céramide", "sphingomyéline", "glycosphingolipides"] },
  "sphingosine-functions": { title: "Sphingosine C18", items: ["C1 : OH primaire", "C2 : NH2", "C3 : OH secondaire", "C4=C5 trans"] },
  "ceramide-formation": { title: "Céramide", items: ["sphingosine", "acide gras C16–C24", "liaison amide"] },
  "catabolism": { title: "Catabolisme", items: ["sphingomyéline → céramide", "céramide → sphingosine + AG"] },
  "skin-barrier": { title: "Céramides cutanés", items: ["cohésion", "barrière", "hydratation", "peau atopique / psoriasis"] },
  "ceramide-signaling": { title: "Signaux", items: ["céramide : apoptose", "sphingosine-1-P : survie / prolifération"] },
  "sphingomyelin-structure": { title: "Sphingomyéline", items: ["céramide", "phosphate", "choline / éthanolamine", "liaison phosphodiester"] },
  "myelin": { title: "Localisations", items: ["cerveau", "substance blanche", "gaine de myéline", "cornée"] },
  "glyco-general": { title: "Glycosphingolipide", items: ["céramide", "ose(s) en C1", "liaison β-osidique", "sans phosphate"] },
  "cerebrosides": { title: "Cérébrosides", items: ["glucosylcéramide", "galactosylcéramide", "un seul ose"] },
  "gangliosides": { title: "Gangliosides", items: ["G", "M/D/T/Q : NANA", "GM3 : Glu-Gal-NANA"] },
  "metabolic-pathway": { title: "Voie métabolique", items: ["sphingomyélinase", "céramidase", "sphingosine kinase", "céramide kinase"] },
  "disease-table": { title: "Sphingolipidoses", items: ["Gaucher : β-glucosidase", "Fabry : α-galactosidase", "Krabbe : β-galactosidase", "Tay-Sachs : β-hexosaminidase"] },
};
type Props = { diagram: SphingolipidDiagramName; className?: string };
export function SphingolipidDiagram({ diagram, className }: Props) {
  const d = DATA[diagram];
  return <figure className={cn('my-5 rounded-2xl border border-border bg-card p-4 text-foreground', className)}>
    <div className="mb-4 text-center text-base font-semibold">{d.title}</div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{d.items.map((item,index)=><div key={item} className="relative rounded-xl border border-border bg-background/60 p-3 text-center text-sm"><div className="mb-2 text-xs font-semibold text-muted-foreground">{index+1}</div><div>{item}</div>{index<d.items.length-1?<div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted-foreground lg:block">→</div>:null}</div>)}</div>
  </figure>;
}
