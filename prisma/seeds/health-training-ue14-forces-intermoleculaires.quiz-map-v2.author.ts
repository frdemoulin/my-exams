/**
 * Cartographie éditoriale V2
 * UE14 – Chimie générale – Chapitre 1.4 – Forces intermoléculaires
 */
export const UE14_CH4_V2_QUIZ_MAP = [
  {sectionOrder:1,order:1,slug:'decouvrir-polarite-molecules',title:`Polarité des molécules`,description:`Repères fondamentaux sur les liaisons polarisées, le moment dipolaire, la géométrie moléculaire et la polarité globale.`,stage:'DISCOVER' as const,questionOrders:[1,2,3,4,5,6,7,8,9,10]},
  {sectionOrder:1,order:2,slug:'sentrainer-polarite-molecules',title:`Polarité des molécules`,description:`Applications sur le calcul du moment dipolaire, la symétrie, les isomères géométriques et la miscibilité.`,stage:'PRACTICE' as const,questionOrders:[31,32,33,34,35,36,37,38,39,40,51,52]},
  {sectionOrder:2,order:1,slug:'decouvrir-interactions-molecules',title:`Interactions entre molécules`,description:`Repères sur la dispersion de London, les interactions dipôle-dipôle, les liaisons hydrogène et leurs conséquences physiques.`,stage:'DISCOVER' as const,questionOrders:[11,12,13,14,15,16,17,18,19,20]},
  {sectionOrder:2,order:2,slug:'sentrainer-interactions-molecules',title:`Interactions entre molécules`,description:`Applications sur la polarisation, la surface de contact, les liaisons hydrogène, l'hydratation ionique et les biomolécules.`,stage:'PRACTICE' as const,questionOrders:[41,42,43,44,45,46,47,48,49,50,53,54]},
  {sectionOrder:3,order:1,slug:'sentrainer-synthese-forces-intermoleculaires',title:`Polarité et forces intermoléculaires`,description:`Synthèse appliquée reliant polarité, solvatation, dispersion, liaisons hydrogène et propriétés de la matière.`,stage:'PRACTICE' as const,questionOrders:[55,56,57,58,59,60,61,62,63,64]},
  {sectionOrder:3,order:2,slug:'maitriser-synthese-forces-intermoleculaires',title:`Polarité et forces intermoléculaires`,description:`Maîtrise transversale des interactions non covalentes, de la polarité et de leurs applications physiques et biologiques.`,stage:'MASTER' as const,questionOrders:[21,22,23,24,25,26,27,28,29,30,65,66]},
] as const;

export const UE14_CH4_V2_THEME_LABELS_BY_ORDER: Record<number,string[]> = Object.fromEntries(
  Array.from({length:66},(_,i)=>{
    const o=i+1;
    if((o>=1&&o<=10)||(o>=31&&o<=40)||o===51||o===52) return [o,[`Polarité et moment dipolaire`]];
    if((o>=11&&o<=20)||(o>=41&&o<=50)||o===53||o===54) return [o,[`Interactions intermoléculaires`]];
    return [o,[`Synthèse des forces intermoléculaires`]];
  })
);
