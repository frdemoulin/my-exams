import { cn } from '@/lib/utils';

export const GLYCEROPHOSPHOLIPID_DIAGRAM_NAMES = [
  "glycerol-overview",
  "glycerol-numbering",
  "acylglycerol-types",
  "triglyceride-types",
  "triglyceride-example",
  "triglyceride-storage",
  "triglyceride-melting",
  "triglyceride-roles",
  "palm-oil",
  "phosphatidic-acid",
  "phospholipid-general",
  "headgroups",
  "phosphatidylinositol",
  "bilayer",
  "micelle-liposome",
  "phospholipase-sites",
  "pip2-plc",
  "pi3k-akt",
  "plasmalogen-paf",
] as const;
export type GlycerophospholipidDiagramName = (typeof GLYCEROPHOSPHOLIPID_DIAGRAM_NAMES)[number];
export function isGlycerophospholipidDiagramName(value: string): value is GlycerophospholipidDiagramName {
  return (GLYCEROPHOSPHOLIPID_DIAGRAM_NAMES as readonly string[]).includes(value);
}
const DATA: Record<GlycerophospholipidDiagramName, { title: string; items: string[] }> = {
  "glycerol-overview": { title: "Glycérol et acylglycérols", items: ["glycérol", "+ acide(s) gras", "liaison ester"] },
  "glycerol-numbering": { title: "Glycérol", items: ["C1 = α : alcool primaire", "C2 = β : alcool secondaire", "C3 = α′ : alcool primaire"] },
  "acylglycerol-types": { title: "Acylglycérols", items: ["mono : 1 AG", "di : 2 AG", "tri : 3 AG"] },
  "triglyceride-types": { title: "Triglycérides", items: ["homogène : R1=R2=R3", "mixte : chaînes différentes"] },
  "triglyceride-example": { title: "1,3-distéaryl-2-oléyl-glycérol", items: ["stéaryl C1", "oléyl C2", "stéaryl C3"] },
  "triglyceride-storage": { title: "Stockage", items: ["alimentation", "adipocyte", "mobilisation des AG", "production d’ATP"] },
  "triglyceride-melting": { title: "Point de fusion", items: ["chaînes saturées : augmente", "chaînes désaturées : diminue"] },
  "triglyceride-roles": { title: "Rôles", items: ["énergie", "isolation", "soutien", "lubrification"] },
  "palm-oil": { title: "Huile de palme", items: ["acide palmitique ++", "acide oléique", "polyinsaturés minoritaires"] },
  "phosphatidic-acid": { title: "Acide phosphatidique", items: ["AG en C1", "AG en C2", "phosphate en C3"] },
  "phospholipid-general": { title: "Glycérophospholipide", items: ["2 queues hydrophobes", "phosphate", "alcool X"] },
  "headgroups": { title: "Têtes polaires", items: ["sérine → PS", "éthanolamine → PE", "choline → PC", "glycérol → PG"] },
  "phosphatidylinositol": { title: "Phosphatidylinositol", items: ["inositol C6", "6 fonctions alcool", "signalisation"] },
  "bilayer": { title: "Bicouche", items: ["têtes vers l’eau", "queues au centre", "fluide et déformable"] },
  "micelle-liposome": { title: "Assemblages", items: ["micelle", "liposome", "transport de médicaments"] },
  "phospholipase-sites": { title: "Phospholipases", items: ["A1 : C1", "A2 : C2", "C : glycérol-phosphate", "D : phosphate-alcool"] },
  "pip2-plc": { title: "PIP2 — PLC", items: ["PIP2", "DAG → PKC", "IP3 → Ca²⁺"] },
  "pi3k-akt": { title: "PI3K–AKT", items: ["PIP2 → PIP3", "recrutement AKT", "PTEN : voie inverse", "cancérologie"] },
  "plasmalogen-paf": { title: "Plasmalogènes et PAF", items: ["liaison éther C1", "PAF", "agrégation", "bronchoconstriction"] },
};
type Props = { diagram: GlycerophospholipidDiagramName; className?: string };
export function GlycerophospholipidDiagram({ diagram, className }: Props) {
  const d = DATA[diagram];
  return <figure className={cn('my-5 rounded-2xl border border-border bg-card p-4 text-foreground', className)}>
    <div className="mb-4 text-center text-base font-semibold">{d.title}</div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{d.items.map((item,index)=><div key={item} className="relative rounded-xl border border-border bg-background/60 p-3 text-center text-sm"><div className="mb-2 text-xs font-semibold text-muted-foreground">{index+1}</div><div>{item}</div>{index<d.items.length-1?<div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted-foreground lg:block">→</div>:null}</div>)}</div>
  </figure>;
}
