/**
 * Cartographie éditoriale V2
 * UE14 – Chimie générale – Chapitre 1.2
 * Formation des ions, électronégativité et liaisons chimiques
 */
export const UE14_CH2_V2_QUIZ_MAP = [
  { sectionOrder: 1, order: 1, slug: 'decouvrir-formation-ions', title: `Formation des ions et électronégativité`,
    description: `Repères fondamentaux sur les cations, les anions, l'énergie d'ionisation et l'électronégativité.`,
    stage: 'DISCOVER' as const, questionOrders: [1,2,3,4,5,6,7,8,9,10] },
  { sectionOrder: 1, order: 2, slug: 'sentrainer-formation-ions', title: `Formation des ions et électronégativité`,
    description: `Applications sur les configurations ioniques, les tendances périodiques et les espèces isoélectroniques.`,
    stage: 'PRACTICE' as const,
    items: [
      {type:'GROUP' as const,title:`Ions sodium et chlorure`,sharedStatement:`Une solution aqueuse de chlorure de sodium contient notamment les ions $\\ce{Na+}$ et $\\ce{Cl-}$. On donne $Z(\\ce{Na})=11$, $Z(\\ce{Cl})=17$, $Z(\\ce{Ne})=10$ et $Z(\\ce{Ar})=18$.`,questionOrders:[11,12]},
      {type:'QUESTION' as const,questionOrder:13},{type:'QUESTION' as const,questionOrder:14},{type:'QUESTION' as const,questionOrder:15},
      {type:'QUESTION' as const,questionOrder:16},{type:'QUESTION' as const,questionOrder:17},{type:'QUESTION' as const,questionOrder:18},
      {type:'QUESTION' as const,questionOrder:19},{type:'QUESTION' as const,questionOrder:20},
      {type:'GROUP' as const,title:`Ion calcium`,sharedStatement:`Le calcium est un élément important de l'organisme. On considère $\\ce{Ca^2+}$ avec $Z(\\ce{Ca})=20$ et $Z(\\ce{Ar})=18$.`,questionOrders:[61,62]}
    ]},
  { sectionOrder: 2, order: 1, slug: 'decouvrir-liaisons-chimiques', title:`Liaisons chimiques`,
    description:`Repères fondamentaux sur les liaisons covalentes et de coordination, la polarisation, les radicaux et la mésomérie.`,
    stage:'DISCOVER' as const, questionOrders:[21,22,23,26,28,30,32,33,37,38]},
  { sectionOrder:2, order:2, slug:'sentrainer-liaisons-chimiques', title:`Liaisons chimiques`,
    description:`Applications sur les liaisons multiples, la coordination, les moments dipolaires, la mésomérie et les ruptures de liaison.`,
    stage:'PRACTICE' as const,
    items:[
      {type:'QUESTION' as const,questionOrder:25},{type:'QUESTION' as const,questionOrder:24},
      {type:'GROUP' as const,title:`Formation de l'ion ammonium`,sharedStatement:`L'ammoniac possède un doublet non liant sur l'azote. En présence d'un proton, il forme $\\ce{NH4+}$ selon $\\ce{NH3 + H+ -> NH4+}$.`,questionOrders:[27]},
      {type:'GROUP' as const,title:`Coordination du fer de l'hème`,sharedStatement:`Dans l'hémoglobine, le fer de l'hème est coordonné aux azotes de la porphyrine et à une histidine ; une position supplémentaire peut fixer $\\ce{O2}$.`,questionOrders:[29]},
      {type:'QUESTION' as const,questionOrder:31},{type:'QUESTION' as const,questionOrder:36},{type:'QUESTION' as const,questionOrder:39},{type:'QUESTION' as const,questionOrder:50},
      {type:'GROUP' as const,title:`Radiolyse de l'eau`,sharedStatement:`Un rayonnement ionisant peut provoquer une rupture homolytique d'une liaison $\\ce{O-H}$ et générer des espèces radicalaires.`,questionOrders:[40,41]},
      {type:'QUESTION' as const,questionOrder:63},{type:'QUESTION' as const,questionOrder:64}
    ]},
  { sectionOrder:3, order:1, slug:'sentrainer-synthese-ions-electronegativite-liaisons-chimiques', title:`Ions, électronégativité et liaisons chimiques`,
    description:`Synthèse appliquée reliant ions, polarisation, coordination, mésomérie et rupture des liaisons dans des contextes biologiques et médicaux.`,
    stage:'PRACTICE' as const,
    items:[
      {type:'GROUP' as const,title:`Sérum physiologique et chlorure de sodium`,sharedStatement:`Le sérum physiologique contient notamment du chlorure de sodium. On donne $Z(\\ce{Na})=11$ et $Z(\\ce{Cl})=17$.`,questionOrders:[51,52]},
      {type:'QUESTION' as const,questionOrder:53},{type:'QUESTION' as const,questionOrder:54},{type:'QUESTION' as const,questionOrder:55},
      {type:'QUESTION' as const,questionOrder:56},{type:'QUESTION' as const,questionOrder:57},{type:'QUESTION' as const,questionOrder:58},
      {type:'GROUP' as const,title:`Radiothérapie et radiolyse de l'eau`,sharedStatement:`Lors d'une radiolyse, une liaison $\\ce{O-H}$ peut subir une rupture homolytique. On donne $E_{\\ce{O-H}}=460\\,\\mathrm{kJ\\,mol^{-1}}$.`,questionOrders:[59,60]}
    ]},
  { sectionOrder:3, order:2, slug:'synthese-ions-electronegativite-liaisons-chimiques', title:`Ions, électronégativité et liaisons chimiques`,
    description:`Maîtrise transversale : ionisation, électronégativité, coordination, mésomérie, polarisation et énergie de liaison.`,
    stage:'MASTER' as const,
    items:[
      {type:'QUESTION' as const,questionOrder:34},
      {type:'GROUP' as const,title:`Fluorures et prévention dentaire`,sharedStatement:`Les ions fluorure sont utilisés dans la prévention de la carie. On considère $\\ce{NaF}$ avec $\\chi(\\ce{Na})\\approx0{,}9$ et $\\chi(\\ce{F})\\approx4{,}0$.`,questionOrders:[42,43]},
      {type:'QUESTION' as const,questionOrder:44},{type:'QUESTION' as const,questionOrder:45},
      {type:'GROUP' as const,title:`Hémoglobine et monoxyde de carbone`,sharedStatement:`Dans l'hémoglobine, le fer de l'hème peut fixer $\\ce{O2}$ ; le monoxyde de carbone peut entrer en compétition pour ce site.`,questionOrders:[46,47]},
      {type:'QUESTION' as const,questionOrder:48},{type:'QUESTION' as const,questionOrder:49},{type:'QUESTION' as const,questionOrder:35},
      {type:'QUESTION' as const,questionOrder:65},{type:'QUESTION' as const,questionOrder:66}
    ]}
] as const;

export const UE14_CH2_V2_THEME_LABELS_BY_ORDER: Record<number,string[]> = Object.fromEntries([
  [1,`Formation d'un cation`],[2,`Nombre d'électrons de l'ion magnésium`],[3,`Ions isoélectroniques du néon`],[4,`Énergie d'ionisation et taille atomique`],
  [5,`Formation des anions`],[6,`Définition de l'électronégativité`],[7,`Évolution périodique de l'électronégativité`],[8,`Électronégativité de H, C, N et O`],
  [9,`Électronégativité du fluor`],[10,`Électronégativité et tendance ionique`],[11,`Ion sodium : nombre d'électrons`],[12,`Ion chlorure : nombre d'électrons`],
  [13,`Espèces isoélectroniques du néon`],[14,`Cations ferreux et ferrique`],[15,`Ion ferrique : nombre d'électrons`],[16,`Classement H/C/N/O par électronégativité`],
  [17,`Électronégativité des métaux alcalins`],[18,`Tendances de formation des ions`],[19,`Reconnaissance des cations`],[20,`Charge après perte d'électrons`],
  [21,`Formation d'une liaison covalente`],[22,`Doublets liants et non liants`],[23,`Doublet non liant de l'ammoniac`],[24,`Valence du carbone et du phosphore`],
  [25,`Liaisons sigma et pi`],[26,`Liaison de coordination`],[27,`Ion ammonium et coordination`],[28,`Complexe de coordination`],
  [29,`Coordination du fer de l'hème`],[30,`Polarisation de liaison`],[31,`Moment dipolaire et charge partielle`],[32,`Différence d'électronégativité C-O`],
  [33,`Mésomérie`],[34,`Chlore : configuration et ion`],[35,`Cisplatine et ADN`],[36,`Protoxyde d'azote et mésomérie`],
  [37,`Rupture homolytique`],[38,`Effet inductif`],[39,`Mésomérie de la liaison amide`],[40,`Radiolyse de l'eau`],
  [41,`Conversion d'énergie de liaison`],[42,`Ion fluorure`],[43,`Caractère ionique de NaF`],[44,`Liaison peptidique et mésomérie`],
  [45,`Moment dipolaire H-Cl`],[46,`Coordination de l'hémoglobine`],[47,`Compétition du monoxyde de carbone`],[48,`Énergie microscopique O-H`],
  [49,`Réactivité radicalaire`],[50,`Définition d'un radical`],[51,`Sérum physiologique : sodium`],[52,`Électroneutralité du chlorure de sodium`],
  [53,`Formation de l'ammonium`],[54,`Peroxyde d'hydrogène`],[55,`Moment dipolaire H-Cl`],[56,`Cisplatine : coordination`],
  [57,`Hémoglobine et dioxygène`],[58,`Liaison peptidique`],[59,`Radiolyse et radicaux`],[60,`Énergie molaire O-H`],
  [61,`Ion calcium : nombre d'électrons`],[62,`Ion calcium : formation`],[63,`Cisplatine : ligands`],[64,`Liaisons polarisées`],
  [65,`Accepteurs de doublets`],[66,`Charge partielle avancée`]
].map(([order,label])=>[order,[label as string]]));
