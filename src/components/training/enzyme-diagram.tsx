import { cn } from "@/lib/utils";

export const ENZYME_DIAGRAM_NAMES = [
  "activation-energy",
  "active-site-parts",
  "allosteric-regulation",
  "apoenzyme-holoenzyme",
  "catalyst-types",
  "catalytic-power",
  "chymotrypsin-mechanism",
  "coenzyme-vitamins",
  "covalent-regulation",
  "enzyme-nature",
  "enzyme-nomenclature-ec",
  "enzyme-substrate-affinity",
  "es-ep-cycle",
  "fisher-koshland",
  "isoenzymes-ck-ldh",
  "pka-camp",
  "prosthetic-labile",
  "protease-specificity",
  "ubiquitin-proteasome",
  "zymogen-cascade",
  "beer-lambert-rate",
  "catalytic-concentration",
  "competitive-inhibition",
  "enzyme-concentrations",
  "enzyme-kinetics-overview",
  "initial-rate-slope",
  "kcat-turnover",
  "km-affinity",
  "lineweaver-burk",
  "michaelis-curve",
  "michaelis-equation",
  "mixed-inhibition-percent",
  "noncompetitive-uncompetitive",
  "ph-temperature-effects",
  "reaction-orders",
  "reaction-phases",
  "specific-activities",
  "substrate-enzyme-effects",
  "ui-katal",
  "ui-katal-conversion",
] as const;

export type EnzymeDiagramName = (typeof ENZYME_DIAGRAM_NAMES)[number];

export function isEnzymeDiagramName(value: string): value is EnzymeDiagramName {
  return (ENZYME_DIAGRAM_NAMES as readonly string[]).includes(value);
}

const DATA: Record<EnzymeDiagramName, { title: string; items: string[] }> = {
  "activation-energy": {"title": "L’énergie d’activation", "items": ["Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.", "L’enzyme diminue l’énergie d’activation.", "La diminution de cette barrière accélère la réaction.", "La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique."]},
  "active-site-parts": {"title": "Le site de fixation et le site catalytique", "items": ["Le site de fixation assure la reconnaissance spatiale du substrat.", "Le site catalytique porte les groupements responsables de la transformation chimique.", "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.", "Le site actif regroupe les fonctions de fixation et de catalyse."]},
  "allosteric-regulation": {"title": "L’allostérie", "items": ["Une enzyme allostérique possède un site régulateur distinct du site actif.", "Un effecteur allostérique peut être activateur ou inhibiteur.", "La fixation de l’effecteur modifie la conformation de l’enzyme.", "Une enzyme peut alterner entre formes active et inactive."]},
  "apoenzyme-holoenzyme": {"title": "Les cofacteurs et l’holoenzyme", "items": ["La partie protéique seule est appelée apoenzyme.", "La partie non protéique nécessaire est appelée cofacteur.", "L’association apoenzyme-cofacteur constitue l’holoenzyme.", "Un cofacteur organique est appelé coenzyme."]},
  "catalyst-types": {"title": "Les catalyseurs", "items": ["Un catalyseur accélère une réaction chimique.", "Les catalyseurs peuvent être minéraux ou organiques.", "Les catalyseurs insolubles relèvent d’une catalyse hétérogène.", "Les catalyseurs solubles, dont les enzymes, relèvent d’une catalyse homogène."]},
  "catalytic-power": {"title": "La puissance catalytique", "items": ["Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.", "L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.", "La nucléase staphylococcique est associée à un facteur de 10¹⁴.", "L’anhydrase carbonique est associée à un facteur de 10⁶."]},
  "chymotrypsin-mechanism": {"title": "La chymotrypsine et sa triade catalytique", "items": ["La chymotrypsine est une protéase pancréatique.", "Elle clive notamment les liaisons Phe-X et Trp-X.", "Sa triade catalytique associe sérine, histidine et aspartate.", "Le mécanisme passe par un intermédiaire acyl-enzyme puis l’intervention d’une molécule d’eau."]},
  "coenzyme-vitamins": {"title": "Les vitamines précurseurs de coenzymes", "items": ["Le phosphate de pyridoxal dérive de la vitamine B6.", "Les coenzymes NADH et NADPH dérivent de la vitamine B3 ou PP.", "Les coenzymes flaviniques dérivent de la vitamine B2.", "La biotine correspond à la vitamine B8 et intervient dans les transferts de CO₂."]},
  "covalent-regulation": {"title": "La régulation par modification covalente", "items": ["Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme.", "La phosphorylation est réalisée par une kinase.", "Adénylation, uridylation, ADP-ribosylation et acétylation sont citées.", "La cascade PKA-phosphorylase kinase-glycogène phosphorylase favorise la mobilisation du glycogène."]},
  "enzyme-nature": {"title": "La nature des enzymes", "items": ["La plupart des enzymes sont des protéines.", "Les ribozymes sont des ARN catalytiques.", "Les enzymes possèdent un pouvoir catalytique élevé.", "Les enzymes présentent une spécificité de réaction et de substrat."]},
  "enzyme-nomenclature-ec": {"title": "La nomenclature et les classes EC", "items": ["La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase.", "Le numéro EC comporte quatre nombres.", "Le premier nombre EC indique le grand type de réaction catalysée.", "Les six classes du cours sont oxydoréductases, transférases, hydrolases, lyases, isomérases et ligases."]},
  "enzyme-substrate-affinity": {"title": "L’affinité enzyme-substrat", "items": ["Une enzyme peut fixer son substrat à de très faibles concentrations.", "Des interactions hydrophobes peuvent participer à la fixation.", "Des liaisons ioniques et hydrogène peuvent stabiliser le complexe enzyme-substrat.", "La complémentarité du site actif contribue à l’affinité."]},
  "es-ep-cycle": {"title": "Les complexes ES et EP", "items": ["L’enzyme forme d’abord un complexe enzyme-substrat ES.", "Le produit peut rester transitoirement associé dans un complexe EP.", "Le produit a souvent une affinité plus faible que le substrat pour l’enzyme.", "La libération du produit régénère l’enzyme."]},
  "fisher-koshland": {"title": "Les modèles de Fisher et Koshland", "items": ["Le modèle de Fisher est le modèle clé-serrure.", "Il suppose une complémentarité géométrique préexistante.", "Le modèle de Koshland est celui de l’ajustement induit.", "Le modèle de Koshland admet une adaptation conformationnelle de l’enzyme."]},
  "isoenzymes-ck-ldh": {"title": "Les isoenzymes CK et LDH", "items": ["Des isoenzymes ont des structures différentes mais catalysent la même réaction.", "CK-BB est préférentiellement exprimée dans les tissus nerveux.", "CK-MB est associée au muscle cardiaque et CK-MM aux muscles squelettiques.", "La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles."]},
  "pka-camp": {"title": "La régulation de la PKA par l’AMPc", "items": ["La PKA inactive associe sous-unités régulatrices et catalytiques.", "Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.", "La fixation de l’AMPc libère les sous-unités catalytiques.", "La libération rend les sites actifs accessibles."]},
  "prosthetic-labile": {"title": "Les groupements prosthétiques et cofacteurs labiles", "items": ["Un groupement prosthétique reste fixé en permanence à l’enzyme.", "Un cofacteur labile est mobile et peut être libéré après la réaction.", "Le FAD est cité comme groupement prosthétique de la cholestérol oxydase.", "Le NAD⁺ est cité comme coenzyme labile associé à l’aldose réductase."]},
  "protease-specificity": {"title": "La spécificité des protéases", "items": ["La subtilisine peut couper entre deux acides aminés quelconques dans l’exemple du cours.", "La trypsine clive après une arginine ou une lysine.", "La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné.", "La spécificité enzymatique est relative et varie selon l’enzyme."]},
  "ubiquitin-proteasome": {"title": "L’ubiquitination et le protéasome", "items": ["La dégradation d’une enzyme diminue sa quantité et donc son activité globale.", "Les enzymes E1, E2 et E3 participent à l’ubiquitination.", "La polyubiquitination permet la reconnaissance par le protéasome.", "L’ubiquitine est une protéine de 76 acides aminés dans la fiche."]},
  "zymogen-cascade": {"title": "La protéolyse limitée et les zymogènes", "items": ["Un zymogène est un précurseur enzymatique inactif.", "La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques.", "L’entéropeptidase active le trypsinogène en trypsine.", "La trypsine active notamment chymotrypsinogène, proélastase et procarboxypeptidase."]},
  "beer-lambert-rate": {"title": "La loi de Beer-Lambert appliquée à l’enzymologie", "items": ["La loi utilisée est A = ε·l·[P].", "La vitesse initiale peut s’écrire v₀ = (ΔA/Δt)/(ε·l).", "ε est le coefficient d’absorption molaire.", "l correspond à la largeur de la cuve."]},
  "catalytic-concentration": {"title": "La concentration d’activité catalytique", "items": ["La concentration catalytique rapporte l’activité à un volume de solution enzymatique.", "Elle peut s’exprimer en UI·L⁻¹.", "Elle peut s’exprimer en kat·L⁻¹.", "Elle correspond finalement à une vitesse initiale par unité de volume."]},
  "competitive-inhibition": {"title": "L’inhibition compétitive", "items": ["L’inhibiteur compétitif se fixe sur l’enzyme libre.", "Il dispute le site actif au substrat.", "Le Km apparent augmente.", "La Vmax reste inchangée."]},
  "enzyme-concentrations": {"title": "Les concentrations E, ES et Et", "items": ["La concentration totale d’enzyme vérifie [E]t = [E] + [ES].", "La concentration d’enzyme libre diminue rapidement au début.", "Le substrat est initialement en excès d’au moins un facteur 10 par rapport à l’enzyme dans le cours.", "Pendant l’état stationnaire, [ES] reste approximativement constante."]},
  "enzyme-kinetics-overview": {"title": "La cinétique enzymatique", "items": ["La cinétique enzymatique étudie la vitesse d’une réaction.", "Elle étudie les paramètres susceptibles de modifier cette vitesse.", "La vitesse peut être définie par la quantité de substrat transformée par unité de temps.", "La vitesse peut aussi être définie par la quantité de produit formée par unité de temps."]},
  "initial-rate-slope": {"title": "La détermination de la vitesse initiale", "items": ["La pente ΔA/Δt permet de suivre l’évolution de l’absorbance.", "Les mesures sont réalisées plusieurs fois par minute.", "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.", "La vitesse initiale correspond à la pente pendant la phase stationnaire."]},
  "kcat-turnover": {"title": "La constante catalytique Kcat", "items": ["Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation.", "Kcat s’exprime en s⁻¹.", "L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.", "La chymotrypsine est donnée à environ 100 s⁻¹."]},
  "km-affinity": {"title": "La signification de Km", "items": ["Km est caractéristique d’un couple enzyme-substrat dans des conditions données.", "Km dépend notamment du pH et de la température.", "Un Km faible correspond à une forte affinité.", "Lorsque [S] = Km, v₀ = Vm/2."]},
  "lineweaver-burk": {"title": "La représentation de Lineweaver-Burk", "items": ["Elle représente 1/v₀ en fonction de 1/[S].", "L’ordonnée à l’origine vaut 1/Vm.", "La pente vaut Km/Vm.", "Le cours indique que l’intersection avec l’axe des abscisses permet d’obtenir l’inverse de Km."]},
  "michaelis-curve": {"title": "La saturation enzymatique et Vm", "items": ["Vm est la vitesse maximale atteinte au plateau.", "À forte concentration de substrat, la plupart des sites actifs sont occupés.", "Augmenter encore [S] à saturation modifie peu la vitesse.", "Vm augmente si la concentration totale d’enzyme augmente."]},
  "michaelis-equation": {"title": "L’équation de Michaelis-Menten", "items": ["L’équation est v₀ = Vm·[S]/(Km + [S]).", "Vm = Kcat·[E]t.", "La fraction v₀/Vm vaut [S]/(Km + [S]).", "La relation est établie dans les conditions initiales avec [P] négligeable."]},
  "mixed-inhibition-percent": {"title": "L’inhibition mixte et le pourcentage d’inhibition", "items": ["Un inhibiteur mixte se fixe sur E et ES avec des affinités différentes.", "Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.", "Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100.", "v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur."]},
  "noncompetitive-uncompetitive": {"title": "Les inhibitions non compétitive et incompétitive", "items": ["L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition.", "Dans l’inhibition non compétitive pure, Km reste inchangé et Vmax diminue.", "L’inhibiteur incompétitif se fixe exclusivement au complexe ES.", "Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions."]},
  "ph-temperature-effects": {"title": "L’effet du pH et de la température", "items": ["Les pH extrêmes inférieurs à 2 ou supérieurs à 10 peuvent dénaturer les enzymes.", "Le pH optimal varie selon l’enzyme.", "Une température supérieure à environ 60 °C dénature de nombreuses enzymes humaines.", "La Taq polymérase est adaptée aux températures élevées et utilisée en PCR."]},
  "reaction-orders": {"title": "Les ordres de réaction", "items": ["Pour une réaction d’ordre 0, la vitesse est constante par rapport à la concentration du substrat.", "Pour une réaction d’ordre 1, v = k[A].", "Pour une réaction d’ordre 2 à deux substrats, v = k[A][B].", "Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat."]},
  "reaction-phases": {"title": "Les phases de la réaction enzymatique", "items": ["La phase préstationnaire correspond à la mise en charge de l’enzyme.", "La phase stationnaire est approximativement linéaire pour la formation du produit.", "La vitesse initiale est mesurée pendant la phase stationnaire.", "La phase post-stationnaire correspond au ralentissement lorsque le substrat s’épuise ou que le produit s’accumule."]},
  "specific-activities": {"title": "L’activité spécifique et l’activité molaire spécifique", "items": ["L’activité spécifique rapporte l’activité à la masse d’enzyme.", "Elle peut s’exprimer en UI·mg⁻¹.", "L’activité molaire spécifique rapporte l’activité à la quantité de matière d’enzyme.", "À saturation, l’activité molaire spécifique exprimée en kat·mol⁻¹ est égale à Kcat."]},
  "substrate-enzyme-effects": {"title": "L’effet des concentrations de substrat et d’enzyme", "items": ["La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.", "À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.", "Augmenter la concentration d’enzyme ne modifie pas l’équilibre final de la réaction.", "Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre."]},
  "ui-katal": {"title": "L’unité internationale d’activité enzymatique", "items": ["Une UI correspond à 1 µmol de substrat transformé par minute.", "L’UI reste très utilisée.", "L’activité doit être définie dans des conditions expérimentales données.", "L’unité UI peut aussi être exprimée à partir de la quantité de produit formée."]},
  "ui-katal-conversion": {"title": "Le katal et les conversions", "items": ["Un katal correspond à 1 mole de substrat transformée par seconde.", "Un katal est une unité cohérente du Système international.", "Une UI vaut environ 16,67 nkat.", "Un nkat vaut 60·10⁻³ UI."]},
};

type Props = {
  diagram: EnzymeDiagramName;
  className?: string;
};

function Axes() {
  return (
    <>
      <line x1="45" y1="185" x2="335" y2="185" stroke="currentColor" strokeWidth="2" />
      <line x1="45" y1="185" x2="45" y2="25" stroke="currentColor" strokeWidth="2" />
    </>
  );
}

export function EnzymeDiagram({ diagram, className }: Props) {
  const data = DATA[diagram];

  if (diagram === "activation-energy") {
    return (
      <figure className={cn("my-5 rounded-2xl border border-border bg-card p-4 text-foreground", className)}>
        <div className="mb-3 text-center font-semibold">{data.title}</div>
        <svg viewBox="0 0 380 220" className="mx-auto w-full max-w-2xl" role="img" aria-label={data.title}>
          <Axes />
          <path d="M50 165 C120 160 125 35 190 45 C245 52 255 160 330 150" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.35" />
          <path d="M50 165 C95 155 105 105 145 110 C180 115 190 80 225 95 C265 112 280 155 330 150" fill="none" stroke="currentColor" strokeWidth="3" />
          <text x="205" y="36" fontSize="12">sans enzyme</text>
          <text x="205" y="88" fontSize="12">avec enzyme</text>
          <text x="150" y="210" fontSize="12">coordonnée réactionnelle</text>
          <text x="8" y="112" fontSize="12" transform="rotate(-90 8 112)">énergie</text>
        </svg>
      </figure>
    );
  }

  if (diagram === "michaelis-curve" || diagram === "km-affinity" || diagram === "michaelis-equation") {
    return (
      <figure className={cn("my-5 rounded-2xl border border-border bg-card p-4 text-foreground", className)}>
        <div className="mb-3 text-center font-semibold">{data.title}</div>
        <svg viewBox="0 0 380 220" className="mx-auto w-full max-w-2xl" role="img" aria-label={data.title}>
          <Axes />
          <path d="M48 182 C85 125 130 82 190 58 C245 37 295 34 335 33" fill="none" stroke="currentColor" strokeWidth="3" />
          <line x1="45" y1="33" x2="335" y2="33" stroke="currentColor" strokeDasharray="5 5" opacity="0.5" />
          <line x1="45" y1="108" x2="151" y2="108" stroke="currentColor" strokeDasharray="5 5" opacity="0.6" />
          <line x1="151" y1="108" x2="151" y2="185" stroke="currentColor" strokeDasharray="5 5" opacity="0.6" />
          <text x="9" y="37" fontSize="12">Vm</text>
          <text x="4" y="112" fontSize="12">Vm/2</text>
          <text x="143" y="203" fontSize="12">Km</text>
          <text x="175" y="214" fontSize="12">[S]</text>
          <text x="18" y="105" fontSize="12" transform="rotate(-90 18 105)">v₀</text>
        </svg>
      </figure>
    );
  }

  if (diagram === "lineweaver-burk" || diagram.includes("inhibition")) {
    return (
      <figure className={cn("my-5 rounded-2xl border border-border bg-card p-4 text-foreground", className)}>
        <div className="mb-3 text-center font-semibold">{data.title}</div>
        <svg viewBox="0 0 380 220" className="mx-auto w-full max-w-2xl" role="img" aria-label={data.title}>
          <Axes />
          <line x1="78" y1="180" x2="315" y2="42" stroke="currentColor" strokeWidth="3" />
          {diagram.includes("inhibition") ? <line x1="105" y1="180" x2="315" y2="70" stroke="currentColor" strokeWidth="3" opacity="0.45" /> : null}
          <text x="178" y="214" fontSize="12">1/[S]</text>
          <text x="15" y="110" fontSize="12" transform="rotate(-90 15 110)">1/v₀</text>
        </svg>
      </figure>
    );
  }

  return (
    <figure className={cn("my-5 rounded-2xl border border-border bg-card p-4 text-foreground", className)}>
      <div className="mb-4 text-center text-base font-semibold">{data.title}</div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((item, index) => (
          <div
            key={diagram + "-" + item}
            className="relative rounded-xl border border-border bg-background/60 p-3 text-center text-sm"
          >
            <div className="mb-2 text-xs font-semibold text-muted-foreground">{index + 1}</div>
            <div>{item}</div>
            {index < data.items.length - 1 ? (
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted-foreground lg:block">→</div>
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
