/**
 * Cartographie éditoriale V2
 * UE14 – Chimie générale – Chapitre 1.3 – Orbitales moléculaires
 */
export const UE14_CH3_V2_QUIZ_MAP = [
  {sectionOrder:1,order:1,slug:'decouvrir-orbitales-moleculaires-liaisons-sigma-pi',title:`Orbitales moléculaires et liaisons σ/π`,description:`Repères fondamentaux sur les orbitales moléculaires, les recouvrements axiaux et latéraux et les liaisons $\\sigma$ et $\\pi$.`,stage:'DISCOVER' as const,questionOrders:[1,2,3,4,5,6,7,8,9,10]},
  {sectionOrder:1,order:2,slug:'sentrainer-orbitales-moleculaires-liaisons-sigma-pi',title:`Orbitales moléculaires et liaisons σ/π`,description:`Applications sur les décomptes $\\sigma/\\pi$, les orbitales liantes et antiliantes et les recouvrements orbitaux.`,stage:'PRACTICE' as const,questionOrders:[11,12,13,14,15,16,17,18,19,20,81,82]},
  {sectionOrder:2,order:1,slug:'decouvrir-hybridation-geometrie-molecules-simples',title:`Hybridation et géométrie des molécules simples`,description:`Repères fondamentaux sur les hybridations $\\mathrm{sp}$, $\\mathrm{sp}^2$ et $\\mathrm{sp}^3$ et leurs géométries caractéristiques.`,stage:'DISCOVER' as const,questionOrders:[21,22,23,24,25,26,27,28,29,30]},
  {sectionOrder:2,order:2,slug:'sentrainer-hybridation-geometrie-molecules-simples',title:`Hybridation et géométrie des molécules simples`,description:`Applications sur les orbitales non hybridées, les géométries locales et l'hybridation d'espèces biologiques ou usuelles.`,stage:'PRACTICE' as const,questionOrders:[31,32,33,34,35,36,37,38,39,40,83,84]},
  {sectionOrder:3,order:1,slug:'decouvrir-liaisons-multiples-carbone-aromaticite',title:`Liaisons multiples, carbone et aromaticité`,description:`Repères sur les doubles et triples liaisons, les hybridations du carbone et le système $\\pi$ délocalisé du benzène.`,stage:'DISCOVER' as const,questionOrders:[41,42,43,44,45,46,47,48,49,50]},
  {sectionOrder:4,order:1,slug:'decouvrir-regle-gillespie-geometrie-moleculaire',title:`Règle de Gillespie et géométrie moléculaire`,description:`Repères sur la notation $\\mathrm{AX}_m\\mathrm{E}_n$, la répulsion des domaines électroniques et les principales géométries moléculaires.`,stage:'DISCOVER' as const,questionOrders:[51,52,53,54,55,56,57,58,59,60]},
  {sectionOrder:5,order:1,slug:'sentrainer-synthese-orbitales-moleculaires',title:`Orbitales moléculaires et géométrie`,description:`Synthèse appliquée reliant liaisons $\\sigma/\\pi$, hybridation, aromaticité et géométrie moléculaire.`,stage:'PRACTICE' as const,questionOrders:[61,62,63,64,65,66,67,68,69,70]},
  {sectionOrder:5,order:2,slug:'maitriser-synthese-orbitales-moleculaires',title:`Orbitales moléculaires et géométrie`,description:`Maîtrise transversale des orbitales moléculaires, hybridations, liaisons multiples, aromaticité et modèle de Gillespie.`,stage:'MASTER' as const,questionOrders:[71,72,73,74,75,76,77,78,79,80,85,86]},
] as const;

export const UE14_CH3_V2_THEME_LABELS_BY_ORDER: Record<number,string[]> = Object.fromEntries(
  Array.from({length:86},(_,i)=>{
    const o=i+1;
    if(o<=20||o===81||o===82) return [o,[`Orbitales moléculaires et liaisons σ/π`]];
    if((o>=21&&o<=40)||o===83||o===84) return [o,[`Hybridation et géométrie`]];
    if(o>=41&&o<=50) return [o,[`Liaisons multiples et aromaticité`]];
    if(o>=51&&o<=60) return [o,[`Gillespie et géométrie moléculaire`]];
    return [o,[`Synthèse des orbitales moléculaires`]];
  })
);
