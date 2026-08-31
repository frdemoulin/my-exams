# Cadrage éditorial et scientifique — Examens blancs UE14

**Projet : My Exams — Santé PASS/LAS — UE14**  
**Statut : document canonique de rédaction des examens blancs UE14**  
**Emplacement recommandé : `docs/content/health-ue14-exam-blanc-authoring.md`**  
**Portée : EB01 et tous les futurs examens blancs UE14**

---

## 1. Objet du document

Ce document fixe les règles permanentes de conception, de rédaction, de correction et de validation des examens blancs UE14.

Il doit être lu **avant toute rédaction d’un nouvel EB** et évite de redéfinir à chaque examen les mêmes règles éditoriales.

Les principes ci-dessous sont **obligatoires**, sauf arbitrage explicite de ChatGPT/utilisateur documenté dans le blueprint propre à un EB.

Un examen blanc UE14 My Exams n’est :

- ni une simple concaténation de quiz ;
- ni une « grande colle » ;
- ni un recyclage des colles C01→C12 ;
- ni une imitation servile d’une annale ou d’une prépa.

Il doit constituer une **épreuve originale, cohérente, exigeante, réaliste et pédagogiquement utile**, conçue comme une simulation d’examen.

---

## 2. Paramètres structurels fixes de l’UE14

Sauf évolution explicite du référentiel My Exams, un examen blanc UE14 comporte :

```text
100 questions
150 minutes

Chimie                  28 questions
Biochimie               34 questions
Biologie cellulaire     38 questions
                        ────────────
TOTAL                   100 questions
```

Cette répartition est le **blueprint My Exams actuel**. Elle ne doit pas être remplacée par la répartition des anciennes annales PACES.

Les anciennes annales de Reims constituent une source de culture d’examen, de niveau, de style et de pièges, **pas un gabarit de répartition à recopier**.

---

## 3. Hiérarchie obligatoire des sources

La rédaction d’un EB commence toujours par une revue documentaire.

### 3.1. Niveau 1 — Sources scientifiques actuelles

Priorité absolue :

1. supports de cours actuels UE14 disponibles dans la Library ;
2. documents pédagogiques actuels URCA/Reims ;
3. cadrages scientifiques et éditoriaux déjà validés dans le repo ;
4. banque My Exams déjà validée, uniquement pour vérifier la cohérence et éviter les répétitions.

Une annale ancienne, un tutorat ou une prépa **ne prévaut jamais** sur le cours actuel.

### 3.2. Niveau 2 — Annales officielles historiques de Reims

Avant chaque nouvel EB, examiner les annales officielles disponibles dans la Library, notamment les sujets UE1/UE14 historiques de Reims.

Exemples présents dans la Library :

```text
ue1_annale_2010-2011_suj.pdf
ue1_annale_2011-2012_suj.pdf
ue1_annale_2012-2013_suj.pdf
ue1_annale_2013-2014_suj.pdf
ue1_annale_2014-2015_suj.pdf
ue1_annale_2015-2016_suj.pdf
```

Ces annales montrent notamment une tradition d’épreuve longue, cumulative, dans laquelle les candidats doivent passer rapidement d’un domaine à l’autre, avec des distracteurs courts et souvent fondés sur une confusion précise.

Les annales servent à identifier :

- les notions historiquement fortement évaluées ;
- la granularité attendue ;
- le niveau de précision lexical ;
- les confusions récurrentes ;
- les types de calculs ;
- les raisonnements courts mais discriminants ;
- les notions naturellement transversales ;
- les erreurs classiques utilisées comme distracteurs ;
- les mécanismes de pièges pertinents.

Il est **explicitement autorisé** de reprendre une idée pédagogique, une erreur classique, une confusion scientifique ou un mécanisme de piège observé dans une annale, à condition que la question My Exams soit rédigée de façon autonome et adaptée au programme actuel.

Ne pas :

- recopier mot pour mot une question complète ;
- paraphraser superficiellement une question en conservant la même construction, les mêmes données et les mêmes items ;
- réutiliser une structure originale complexe quasi à l’identique ;
- considérer une correction ancienne comme scientifiquement vraie sans la vérifier avec le référentiel actuel.

### 3.3. Niveau 3 — Tutorat / concours blancs

Consulter les concours blancs et corrections du tutorat disponibles dans la Library.

Exemple de référence disponible :

```text
Diapo de correction du CCB.pdf
```

Ces documents sont particulièrement utiles pour :

- repérer les erreurs typiques d’étudiants ;
- repérer les formulations réellement discriminantes ;
- construire des distracteurs plausibles ;
- identifier les confusions de listes, de signe, de direction, de nomenclature ou de vocabulaire ;
- observer l’usage de schémas et de questions visuelles ;
- calibrer des questions à cinq propositions.

Les **pièges classiques, idées de distracteurs et erreurs-types** identifiés dans ces documents peuvent être réutilisés librement comme principes pédagogiques.

Ils peuvent contenir des raccourcis, coquilles ou formulations imparfaites : **ils ne sont jamais une autorité scientifique autonome**.

### 3.4. Niveau 4 — Prépas et supports externes présents dans la Library

Consulter également les examens blancs, colles et corrections de prépas présents dans la Library, notamment les fonds :

```text
Médical Reims
Cours Laplace
```

Exemples :

```text
2012-2013 Concours blanc n° 2 - corrigé.pdf
2013-2014 Concours blanc n° 1 - corrigé.pdf
CB UE1 n°2 Corrigé.pdf
colle_rei_ue1_equ_chim_01_suj.pdf
colle_rei_ue1_equ_chim_01_cor.pdf
```

Ces sources sont utiles pour :

- observer la densité des questions ;
- repérer des séries de questions fondées sur des données communes ;
- étudier des calculs ou raisonnements en chaîne ;
- identifier des distracteurs construits à partir d’une erreur intermédiaire ;
- repérer la façon dont une même notion est interrogée sous plusieurs angles ;
- récupérer des **idées de pièges, erreurs classiques et angles de questionnement**.

Il est permis de reprendre :

- une confusion scientifique classique ;
- un type de piège ;
- une erreur de raisonnement fréquente ;
- une idée de mise en situation ;
- un mécanisme de distracteur ;
- un angle d’interrogation.

L’exigence d’originalité porte sur la **rédaction finale et la construction concrète de la question**, pas sur la propriété d’un piège classique ou d’une idée pédagogique.

---

## 4. Revue documentaire obligatoire avant rédaction

Avant d’écrire la première question d’un nouvel EB, produire en interne un tableau de revue des sources.

| Source | EC / thèmes repérés | Types de questions utiles | Pièges / erreurs classiques | À reprendre comme principe ? |
|---|---|---|---|---|
| Annale officielle | … | … | … | oui/non |
| Tutorat / CCB | … | … | … | oui/non |
| Prépa | … | … | … | oui/non |
| Cours actuel | … | … | — | autorité |

L’objectif n’est pas de constituer une bibliographie exhaustive, mais de **s’assurer que l’EB est informé par les vrais usages d’évaluation de Reims**.

Aucun EB ne doit être rédigé uniquement à partir de la mémoire d’un modèle IA.

---

## 5. Blueprint pédagogique avant rédaction

Avant toute rédaction, figer le blueprint propre à l’EB.

Il doit définir au minimum :

- 100 questions ;
- 28 Chimie / 34 Biochimie / 38 Biologie cellulaire ;
- couverture des chapitres ;
- couverture des thèmes ;
- équilibre rappel / compréhension / application / raisonnement ;
- répartition des formats ;
- répartition des difficultés ;
- nombre et position des QZONE ;
- éventuels groupes de questions liées ;
- mises en situation médicales prévues ;
- thèmes transversaux prévus ;
- principaux pièges pédagogiques prévus.

**Le blueprint est figé avant la rédaction des 100 questions.**

Le rédacteur ne doit pas découvrir à la question 80 qu’un chapitre a été oublié.

---

## 6. Couverture du programme

### 6.1. Éviter les trous de programme

Un EB doit couvrir largement le programme disponible à la date de l’épreuve.

Il est interdit de concentrer artificiellement :

- la majorité de la chimie sur deux chapitres ;
- la biochimie uniquement sur métabolisme/protéines ;
- la biologie cellulaire uniquement sur mitochondrie/noyau.

La fréquence historique d’une notion dans les annales peut guider sa pondération, mais ne justifie pas l’abandon d’un pan important du programme actuel.

### 6.2. Questions de synthèse

Une proportion significative de l’EB doit demander autre chose qu’une restitution isolée.

Le candidat doit régulièrement devoir :

- relier deux notions ;
- appliquer une règle à un cas nouveau ;
- comparer deux mécanismes ;
- reconnaître une conséquence indirecte ;
- utiliser une donnée pour écarter un distracteur ;
- mobiliser deux chapitres dans le même raisonnement.

---

## 7. Transversalité — uniquement à l’intérieur d’un même EC

Les examens de référence séparent nettement les EC. Les examens blancs My Exams respectent cette logique : **aucune question ne doit exiger de croiser des connaissances appartenant à deux EC différents**.

La transversalité recherchée est exclusivement **intra-EC**, c’est-à-dire entre plusieurs chapitres d’un même EC.

### 7.1. Chimie

Exemples de croisements naturels :

- atomistique + liaisons ;
- orbitales + hybridation + géométrie ;
- stéréochimie + nomenclature ;
- fonctions organiques + réactivité ;
- nomenclature + molécules polyfonctionnelles.

### 7.2. Biochimie

Exemples de croisements naturels :

- glucides : structure + anomérie + liaisons osidiques ;
- lipides : structure + nomenclature + phospholipases ;
- protéines : structure + rôle biologique ;
- enzymologie : mécanisme + cinétique + régulation.

### 7.3. Biologie cellulaire

Exemples de croisements naturels :

- membrane + transport ;
- cytosquelette + moteurs moléculaires ;
- RER + Golgi + lysosome + trafic ;
- peroxysome + adressage + fonctions ;
- mitochondrie + chaîne respiratoire + phosphorylation oxydative ;
- noyau + cycle cellulaire.

Une question peut mobiliser plusieurs chapitres **du même EC**, mais elle doit rester entièrement résoluble à partir des contenus de cet EC.

Même lorsqu’une notion existe également dans un autre EC — par exemple actine, lipides membranaires ou β-oxydation — la question doit être rédigée uniquement selon l’angle et les connaissances explicitement rattachés à l’EC concerné.

Le Theme mapping suit la même logique : Theme principal obligatoire et, si nécessaire, second Theme appartenant **au même EC**.

### 7.4. Interdiction des questions inter-EC

Ne pas construire une question nécessitant simultanément :

- une connaissance propre à la Chimie et une connaissance propre à la Biochimie ;
- une connaissance propre à la Biochimie et une connaissance propre à la Biologie cellulaire ;
- ou des connaissances propres aux trois EC.

Une mise en situation peut évoquer un objet biologique commun à plusieurs disciplines, mais les informations nécessaires à la réponse doivent rester strictement dans le périmètre de l’EC auquel la question est rattachée.

---

## 8. Mises en situation médicales

Les mises en situation médicales sont **ponctuelles mais souhaitées**.

Elles doivent donner du sens à la science fondamentale, pas transformer l’UE14 en épreuve de sémiologie ou de diagnostic.

Une situation médicale est acceptable si :

- toutes les informations nécessaires sont dans l’énoncé ou dans le programme UE14 ;
- la question évalue d’abord une notion UE14 ;
- aucun savoir clinique extérieur n’est nécessaire pour réussir ;
- le contexte apporte une vraie valeur au raisonnement.

Exemples de contextes possibles :

- maladie de surcharge lysosomale pour les sphingolipides/lysosomes ;
- anomalie de transport membranaire ;
- déficit enzymatique ;
- médicament ou toxique servant de contexte à une voie ;
- mutation protéique ;
- anomalie mitochondriale ;
- perturbation d’un gradient ionique.

Pas de quota rigide.

Cible indicative : **quelques questions dans l’EB**, éventuellement regroupées dans un ou deux mini-dossiers.

Si le contexte médical paraît artificiel, ne pas l’utiliser.

---

## 9. Questions liées / données communes

Les questions liées sont autorisées et souhaitables **lorsqu’un vrai contexte commun existe**.

Elles ne doivent jamais être créées artificiellement pour donner une apparence d’examen.

Un groupe lié peut reposer sur :

- une molécule ou structure ;
- une réaction ;
- un graphique ;
- une expérience ;
- une image ;
- une voie métabolique ;
- une vignette médicale ;
- un tableau de données ;
- une situation cellulaire.

En règle générale :

```text
2 à 4 questions liées
```

Une taille supérieure nécessite une justification réelle.

Une erreur à la première question ne doit pas rendre mécaniquement toutes les suivantes impossibles.

Les questions peuvent partager des données, mais elles doivent tester des compétences différentes.

Utiliser le mécanisme canonique de données communes :

```text
DONNÉES COMMUNES AUX QUESTIONS X À Y
```

avec le titre thématique prévu par l’UI.

---

## 10. Pièges pédagogiques

Les pièges sont **volontairement autorisés** dans les EB.

Ils doivent reproduire les erreurs réalistes d’un étudiant et améliorer la précision de lecture.

Le tutorat, les annales et les prépas peuvent fournir des **idées de pièges directement réutilisables**. Un piège classique n’a pas à être abandonné sous prétexte qu’il a déjà été utilisé dans une source antérieure.

### 10.1. Réutilisation explicite des pièges classiques

Il est permis de reprendre, y compris plusieurs fois dans différents examens blancs :

- une erreur classique ;
- une confusion scientifique ;
- une inversion de relation ;
- une confusion lexicale ;
- une erreur de signe ;
- une erreur de position ;
- une confusion de compartiment ;
- une confusion de mécanisme ;
- une confusion de nomenclature ;
- une confusion liée à une unité ou un ordre de grandeur.

Exemples :

```text
Km ≠ Kd
R/S ≠ signe du pouvoir rotatoire
complexe II ≠ pompe à protons
actine/myosine : glissement ≠ raccourcissement
N-glycosylation ≠ O-glycosylation
épimère ≠ énantiomère
nucléide ≠ élément
A = Z + N
entrée/sortie de K+ ou Na+
mauvais carbone fonctionnel
mauvais compartiment cellulaire
confusion thiol / thioester
```

L’exigence d’originalité ne porte pas sur ces **connaissances ou erreurs classiques**, mais sur la formulation et la construction de la question.

### 10.2. Bons pièges

Un bon piège est :

- plausible ;
- fondé sur une vraie confusion ;
- scientifiquement non ambigu ;
- détectable par un étudiant qui maîtrise précisément le programme ;
- explicable clairement dans la correction.

Familles utiles :

#### Confusion lexicale / orthographique

- termes scientifiques très proches ;
- suffixe ou préfixe incorrect ;
- nom de fonction proche ;
- confusion de nomenclature.

#### Erreur classique de notion

- isotope / isobare ;
- nucléide / élément ;
- énantiomère / diastéréoisomère / épimère ;
- pouvoir rotatoire / configuration R/S ;
- Km / Kd ;
- complexe mitochondrial qui pompe ou non des protons ;
- actine qui « raccourcit » au lieu de glisser ;
- O- versus N-glycosylation ;
- récepteur canal chimio-dépendant versus voltage-dépendant.

#### Erreur de signe ou direction

- entrée / sortie d’un ion ;
- sens d’un gradient ;
- charge partielle ;
- sens d’une réaction ;
- endergonique / exergonique ;
- oxydation / réduction.

#### Erreur de position

- C1 / C2 / C4 / C6 ;
- position d’une double liaison ;
- carbone anomérique ;
- site d’une fonction ;
- résidu ou compartiment concerné.

#### Erreur de grandeur / unité

- facteur 10 ;
- milli / micro ;
- concentration ;
- nombre de molécules ;
- unité absente ou incompatible.

#### Absolus trompeurs

Utiliser avec parcimonie :

```text
toujours
jamais
exclusivement
nécessairement
uniquement
```

uniquement lorsqu’ils rendent la proposition scientifiquement clairement fausse.

### 10.3. Mauvais pièges

Sont interdits :

- ambiguïté sémantique ;
- détail hors programme ;
- formulation grammaticalement volontairement illisible ;
- double négation gratuite ;
- omission d’une donnée indispensable ;
- piège dépendant d’une convention non enseignée ;
- faute typographique qui empêche de comprendre ;
- réponse fausse uniquement parce que le rédacteur a choisi une définition exotique.

Le piège doit tester la maîtrise, pas la capacité à deviner l’intention du rédacteur.

### 10.4. Orthographe scientifique comme distracteur

Une faute ou un terme voisin peut constituer un distracteur si :

1. la forme correcte est explicitement enseignée ;
2. la forme fausse correspond à une confusion plausible ;
3. la différence a un sens scientifique réel ;
4. la correction explique précisément le piège.

Ne pas multiplier ces distracteurs au point de transformer l’EB en dictée scientifique.

---

## 11. Distracteurs

Un distracteur doit être conçu **avant** la correction finale, pas ajouté comme remplissage.

Chaque distracteur doit correspondre à au moins une catégorie :

- erreur classique ;
- confusion de mécanisme ;
- confusion de nomenclature ;
- inversion de relation ;
- mauvais compartiment ;
- mauvais ordre ;
- mauvaise unité ;
- mauvaise position ;
- mauvaise causalité ;
- généralisation abusive ;
- notion vraie mais appliquée au mauvais objet.

Éviter les distracteurs génériques du type :

- « aucune des réponses » sans raison pédagogique ;
- phrase manifestement absurde ;
- notion sans rapport avec l’énoncé ;
- proposition rendue fausse par un détail arbitraire sans intérêt pédagogique.

---

## 12. Niveau de difficulté

Un EB doit comporter une courbe de difficulté réaliste.

La difficulté ne vient pas seulement de la rareté d’une notion.

### EASY

- notion centrale ;
- reconnaissance directe ;
- un seul raisonnement court ;
- piège léger ou absent.

### MEDIUM

- croisement de deux notions ;
- application à une situation nouvelle ;
- distracteurs proches ;
- calcul court ;
- lecture précise nécessaire.

### HARD

- transversalité réelle ;
- plusieurs étapes de raisonnement ;
- discrimination entre propositions très plausibles ;
- exploitation de données ;
- calcul ou interprétation non immédiate ;
- piège classique intégré sans ambiguïté.

Une question n’est pas HARD simplement parce qu’elle porte sur un détail obscur.

---

## 13. Formats

Les EB utilisent les formats My Exams déjà validés :

```text
QRM
QRU
QROC
QRP
QRPL
QZONE
```

Les questions fermées respectent la convention actuelle **A–E / 5 items** lorsqu’elle s’applique.

La distribution exacte des formats est fixée dans le blueprint de l’EB avant rédaction.

Elle ne doit pas être improvisée au fil des questions.

---

## 14. QRM et QRU

### QRM

Les items doivent pouvoir être jugés indépendamment autant que possible.

Éviter :

- cinq formulations presque identiques ;
- dépendance logique totale entre items ;
- deux propositions disant exactement la même chose.

### QRU

La bonne réponse doit être incontestable.

Les distracteurs doivent rester plausibles sans créer deux « meilleures réponses ».

---

## 15. QRP / QRPL

Les questions de réponses en nombre imposé doivent être utilisées lorsque le format apporte une vraie contrainte cognitive.

Ne pas convertir artificiellement un QRM en QRP uniquement pour atteindre un quota.

Le nombre de réponses attendues doit être compatible avec la règle de scoring existante.

---

## 16. QROC

Les QROC doivent tester une connaissance ou un raisonnement **précis et court**.

Éviter les réponses génériques du type :

```text
« mitochondrie »
« enzyme »
« protéine »
```

si plusieurs réponses pourraient raisonnablement convenir.

Définir :

- réponse canonique ;
- variantes lexicales acceptées ;
- accents/pluriels raisonnables ;
- éventuelles unités ;
- niveau de précision attendu.

---

## 17. QZONE

Une QZONE doit être justifiée par une vraie compétence spatiale ou structurale.

Bon usage :

- atome fonctionnel dans une structure ;
- carbone anomérique ;
- liaison précise ;
- compartiment d’une cellule ;
- zone d’un organite ;
- élément d’un schéma.

Mauvais usage :

- pointer une grande zone triviale ;
- remplacer artificiellement une QRU textuelle ;
- cible minuscule ou ambiguë.

Les coordonnées, tolérances, labels et assets sont définis par ChatGPT et validés visuellement avant intégration.

---

## 18. Correction détaillée — standard obligatoire

La qualité de l’EB repose autant sur sa correction que sur ses questions.

**Aucune correction générique bateau n’est acceptée.**

### 18.1. Pour chaque proposition

La correction doit expliquer **pourquoi** elle est vraie ou fausse.

Mauvais :

```text
FAUX : ce n’est pas le cas.
FAUX : proposition incorrecte.
VRAI : conforme au cours.
```

Bon standard :

```text
FAUX — Le complexe II transfère des électrons au coenzyme Q mais ne pompe pas de protons à travers la membrane mitochondriale interne.
```

La correction doit idéalement expliciter la confusion ciblée par le distracteur.

### 18.2. Explication globale

L’explication globale doit apporter une synthèse utile :

- mécanisme ;
- relation entre notions ;
- méthode de calcul ;
- moyen de discrimination ;
- rappel de l’erreur classique.

Elle ne doit pas paraphraser les cinq items.

### 18.3. Questions difficiles

Pour une question HARD, la correction doit reconstruire le raisonnement étape par étape.

Ne jamais écrire une correction plus pauvre que la question.

### 18.4. Pièges

Lorsqu’un distracteur repose sur une erreur classique, la correction doit la nommer explicitement.

Exemple :

```text
Piège classique : ne pas confondre configuration absolue R/S et signe du pouvoir rotatoire (+/−). Il n’existe pas de correspondance générale entre les deux.
```

---

## 19. TeX / KaTeX — conformité obligatoire dès la rédaction

Les EB doivent respecter **dès la première version** :

```text
docs/cadrage-rendu-katex.md
docs/content/health-training-seed-authoring.md
```

Il est interdit de prévoir une « passe TeX plus tard ».

Le contenu définitif doit être correctement formaté avant intégration.

Utiliser les helpers et conventions canoniques du repo.

Notamment :

- formules et ions chimiques : `\ce{...}` quand le cadrage l’impose ;
- symboles chimiques correctement romanisés ;
- variables mathématiques en italique lorsqu’elles sont réellement des variables ;
- symboles conventionnels droits lorsque le cadrage le prévoit ;
- unités correctement espacées et formatées ;
- indices/exposants TeX ;
- lettres grecques TeX ;
- nucléides selon le helper/convention canonique ;
- pas d’indices Unicode bricolés ;
- pas de TeX ad hoc incompatible avec KaTeX.

Avant livraison du seed :

```text
100/100 questions contrôlées
0 violation connue
```

Vérifier :

- question ;
- choix ;
- explications ;
- données communes ;
- QROC ;
- labels ;
- légendes ;
- QZONE.

---

## 20. Originalité vis-à-vis des colles C01→C12

Les 315 questions des colles constituent un corpus de calibration et de non-répétition.

Avant de finaliser un EB :

- éviter la reprise quasi mot pour mot d’une question ;
- éviter de reprendre les mêmes données, les mêmes items et le même enchaînement ;
- éviter de simplement convertir une question de colle dans un autre format ;
- vérifier que la formulation finale apporte une construction nouvelle.

En revanche, il est **explicitement autorisé** de réutiliser :

- la même notion ;
- le même piège classique ;
- la même erreur-type ;
- le même mécanisme de distracteur ;
- la même conclusion scientifique ;
- le même angle pédagogique.

Une notion ou un piège peut naturellement réapparaître ; **la question concrète doit être nouvelle**.

---

## 21. Originalité entre EB

À partir d’EB02, comparer systématiquement au(x) EB précédent(s).

Contrôler :

- répétition de formulation ;
- même exemple complexe ;
- même structure moléculaire si elle rend la question quasi identique ;
- même mini-dossier ;
- mêmes données numériques et même raisonnement.

La **réutilisation d’un piège classique ou d’une erreur-type reste autorisée** entre plusieurs EB.

Un nouvel EB doit offrir une simulation réellement différente sans se priver des confusions fondamentales qu’un étudiant doit savoir éviter.

---

## 22. Theme mapping

Chaque question possède un Theme mapping canonique.

Pour une question transversale :

- un thème principal est obligatoire ;
- un deuxième thème est autorisé lorsqu’il est réellement nécessaire ;
- ne jamais sur-mapper une question pour refléter chaque mot de l’énoncé.

Aucun auto-nearest-map n’est autorisé.

Le mapping final est décidé éditorialement, pas par une heuristique.

---

## 23. Notation UNESS

Les EB utilisent la notation UNESS déjà implémentée dans My Exams.

Règles actuelles à respecter :

```text
QRU : tout ou rien

QRM :
0 discordance → 100 %
1 discordance → 50 %
2 discordances → 20 %
≥ 3 discordances → 0

QRP / QRPL :
crédit x/n uniquement si exactement n réponses sont sélectionnées
nombre de réponses invalide → 0

QROC / QZONE :
évaluateurs canoniques existants
```

La rédaction des questions doit être compatible avec ces règles.

---

## 24. Mise en situation, données et calculs

Lorsqu’une question comporte des données :

- donner seulement les données nécessaires ;
- ne pas cacher une constante indispensable ;
- ne pas demander de connaissance numérique hors référentiel ;
- utiliser les helpers TeX/quantités du repo ;
- vérifier la cohérence des unités ;
- recalculer indépendamment la réponse.

Pour un calcul :

1. résultat exact ou arrondi attendu ;
2. unité ;
3. méthode ;
4. distracteurs issus de vraies erreurs de calcul ;
5. tolérance si le format l’exige.

---

## 25. Processus « one shot » — pas de multiples passes éditoriales

L’objectif est de produire **une version éditoriale définitive dès la première livraison**.

Cela ne signifie pas « écrire sans vérifier ».

Cela signifie que toutes les vérifications doivent être réalisées **en interne avant transmission**.

### Étape A — Revue des sources

Avant rédaction :

- cours actuel ;
- annales ;
- tutorat ;
- prépas ;
- colles My Exams ;
- EB précédents.

### Étape B — Blueprint complet

Figer :

- thèmes ;
- formats ;
- difficultés ;
- transversalité ;
- pièges ;
- groupes liés ;
- médical ;
- QZONE.

### Étape C — Rédaction définitive

Rédiger les 100 questions avec :

- réponses définitives ;
- explications de chaque item ;
- explication globale ;
- Theme mapping ;
- difficulté ;
- format ;
- TeX définitif ;
- assets/QZONE définitifs.

Pas de placeholder.

Pas de :

```text
TODO
à compléter
exemple à revoir
explication générique provisoire
```

### Étape D — Auto-audit scientifique et éditorial AVANT livraison

Pour chaque question vérifier :

1. énoncé non ambigu ;
2. réponses scientifiquement exactes ;
3. distracteurs réellement faux ;
4. aucune deuxième interprétation légitime ;
5. difficulté correcte ;
6. format adapté ;
7. correction complète ;
8. piège explicable ;
9. TeX conforme ;
10. Theme mapping correct ;
11. absence de quasi-duplication ;
12. données/calculs revérifiés.

### Étape E — Audit global de l’EB

Avant remise :

```text
100 questions présentes
28 Chimie
34 Biochimie
38 Biologie cellulaire

0 question sans correction
0 distracteur non justifié
0 placeholder
0 erreur TeX connue
0 réponse générique bateau
0 quasi-duplication de question
0 Theme non validé
0 QZONE non vérifiée
```

La première livraison à l’intégrateur doit être considérée comme **éditorialement finale**.

---

## 26. Répartition des responsabilités IA

### ChatGPT

ChatGPT conserve l’autorité sur :

- blueprint ;
- choix des notions ;
- rédaction des questions ;
- réponses ;
- distracteurs ;
- explications ;
- pièges ;
- difficulté ;
- formats ;
- groupes liés ;
- mises en situation médicales ;
- QZONE ;
- assets scientifiques ;
- Theme mapping ;
- arbitrages scientifiques ;
- conformité éditoriale.

### Gemini / Claude / Codex / autre agent d’intégration

L’agent d’intégration :

- lit le cadrage ;
- intègre exactement le contenu fourni ;
- exécute les seeds ;
- réalise les contrôles techniques ;
- teste ;
- signale les incohérences.

Il **ne doit pas** :

- écrire une nouvelle question ;
- inventer un distracteur ;
- modifier une réponse ;
- simplifier une explication ;
- décider d’un Theme ;
- inventer une QZONE ;
- ajouter une mise en situation ;
- corriger scientifiquement une question de sa propre initiative.

En cas d’ambiguïté :

```text
STOP → retour ChatGPT/utilisateur
```

---

## 27. Ce que les sources historiques nous apprennent — sans les copier

La revue des annales et supports présents dans la Library fait ressortir plusieurs caractéristiques utiles à conserver.

### 27.1. Épreuve longue et changement fréquent de contexte

Les annales officielles historiques de Reims sont des épreuves de 100 questions en 2 h 30, organisées en grands blocs d’EC.

Le candidat doit donc être capable de changer rapidement de domaine et de méthode.

My Exams conserve cette logique de densité et d’endurance, avec son blueprint UE14 actuel.

### 27.2. Distracteurs construits sur des confusions précises

Les corrections de Médical Reims montrent fréquemment des distracteurs fondés sur :

- épimère / énantiomère ;
- R/S / pouvoir rotatoire ;
- fonction thiol / thioester ;
- métal / non-métal ;
- numéro atomique / nombre de masse ;
- sous-couche impossible ;
- sens d’un gradient ;
- localisation d’une fonction.

Ces confusions sont **réutilisables** dans les EB My Exams. Elles ne deviennent pas interdites parce qu’elles figurent dans une source antérieure.

### 27.3. Questions liées naturelles

Les supports de prépa contiennent des questions qui réutilisent une structure, une réaction ou une donnée précédente.

Cette logique est pertinente lorsqu’elle évite de répéter les données et permet de tester plusieurs compétences sur un même objet.

### 27.4. Calculs et données

Les supports Cours Laplace et Médical Reims utilisent régulièrement des équilibres, constantes, thermodynamique ou structures nécessitant une vraie exploitation de données.

Un EB My Exams doit conserver une part de raisonnement quantitatif quand le programme le justifie.

### 27.5. Pièges assumés

Les supports du tutorat montrent explicitement l’usage de « petits pièges » sur des listes ou confusions classiques.

My Exams reprend le principe avec deux garanties :

1. le piège doit être scientifiquement incontestable ;
2. la correction doit expliciter précisément pourquoi il fonctionne.

---

## 28. Checklist finale obligatoire avant validation d’un EB

### Structure

- [ ] 100 questions
- [ ] 28 Chimie
- [ ] 34 Biochimie
- [ ] 38 Biologie cellulaire
- [ ] durée 150 min
- [ ] ordre cohérent
- [ ] formats conformes au blueprint
- [ ] difficultés conformes au blueprint

### Sources

- [ ] cours actuels revus
- [ ] annales officielles revues
- [ ] tutorat/CCB revu
- [ ] prépas disponibles revues
- [ ] colles C01→C12 comparées
- [ ] EB précédents comparés
- [ ] pièges classiques utiles identifiés

### Questions

- [ ] aucune ambiguïté
- [ ] aucune connaissance hors programme indispensable
- [ ] transversalité présente
- [ ] quelques mises en situation médicales pertinentes
- [ ] questions liées uniquement si naturelles
- [ ] distracteurs plausibles
- [ ] pièges pédagogiques explicables
- [ ] réutilisation de pièges classiques autorisée
- [ ] pas de remplissage

### Corrections

- [ ] chaque item expliqué
- [ ] aucune correction générique
- [ ] explication globale utile
- [ ] erreurs classiques nommées
- [ ] calculs reconstruits
- [ ] unités justifiées

### TeX

- [ ] `docs/cadrage-rendu-katex.md` respecté
- [ ] `mhchem` utilisé lorsque requis
- [ ] symboles/variables correctement typographiés
- [ ] unités conformes
- [ ] 100/100 questions auditées
- [ ] 0 violation connue

### Technique éditoriale

- [ ] stableIds définitifs
- [ ] Theme mapping définitif
- [ ] groupes liés définitifs
- [ ] QZONE/assets définitifs
- [ ] réponses définitives
- [ ] difficultés définitives
- [ ] aucune donnée provisoire

### Originalité

- [ ] aucune question copiée mot pour mot d’une annale
- [ ] aucune quasi-copie structurale d’une prépa
- [ ] aucune quasi-duplication d’une colle My Exams
- [ ] pièges classiques et erreurs-types réutilisables si formulation autonome
- [ ] aucun recyclage paresseux d’un EB précédent

---

## 29. Livrables éditoriaux attendus pour chaque nouvel EB

Avant intégration technique, fournir un package définitif contenant :

```text
1. Blueprint de l’EB
2. Seed auteur complet des 100 questions
3. Mapping Theme complet
4. Liste des groupes liés / sharedStatements
5. Assets et specs QZONE
6. Rapport de couverture par chapitre/thème
7. Rapport de distribution formats/difficultés
8. Rapport d’originalité vs colles + EB précédents
9. Audit TeX/KaTeX
10. Auto-audit scientifique final
```

L’intégrateur reçoit **un corpus définitif**, pas un brouillon à améliorer.

---

## 30. Conditions STOP

La rédaction ou l’intégration doit s’arrêter si :

- une notion du cours actuel est ambiguë ;
- deux sources se contredisent sur le fond ;
- une annale/prépa semble scientifiquement erronée ;
- un distracteur pourrait être défendu comme vrai ;
- une QROC admet plusieurs réponses non prévues ;
- une QZONE est visuellement ambiguë ;
- un calcul ne donne pas un résultat unique ;
- une convention TeX n’est pas couverte ;
- un Theme mapping est incertain.

Dans ce cas :

```text
STOP → arbitrage ChatGPT/utilisateur
```

Aucune décision éditoriale autonome de l’intégrateur.

---

## 31. Règle finale

> **Un examen blanc UE14 doit être pensé comme un véritable examen avant d’être pensé comme une banque de questions.**
>
> Il doit s’appuyer sur les cours actuels, apprendre des annales, du tutorat et des prépas, exploiter les erreurs classiques des étudiants, proposer de la transversalité et quelques contextes médicaux pertinents, tout en restant entièrement original dans sa rédaction.
>
> Les idées pédagogiques, pièges classiques, erreurs-types et mécanismes de distracteurs peuvent être repris des annales, tutorats et prépas. L’originalité exigée porte sur la formulation et la construction concrète de la question, non sur l’idée scientifique ou le piège lui-même.
>
> Les 100 questions, leurs réponses, leurs explications, leur TeX, leurs pièges, leurs Themes et leurs assets doivent être considérés comme définitifs avant le premier passage à l’intégrateur.
