# Cadrage Gemini — Intégration technique UE14 EB02 — FINAL

**Branche cible : `dev`**  
**Rôle Gemini : intégration technique et validation uniquement**  
**Autorité éditoriale/scientifique : ChatGPT/utilisateur exclusivement**

---

## 1. Règle absolue

Le package EB02 est **éditorialement figé**.

Gemini ne doit jamais :

- reformuler une question ;
- réordonner ou remplacer un choix ;
- modifier une réponse correcte ;
- inventer/corriger un distracteur ;
- modifier une explication ;
- modifier un format ou une difficulté ;
- choisir/remplacer/créer un Theme ;
- créer/supprimer un groupe lié ;
- modifier un `sharedStatement` ;
- redessiner un SVG ;
- déplacer une cible QZONE ;
- modifier une réponse QROC ;
- ajouter ou retirer un contexte médical.

Si un changement de cette nature paraît nécessaire :

> **STOP — retourner le problème précis à ChatGPT/utilisateur.**

---

## 2. Sources du package

Sources éditoriales exactes :

```text
SEED/EB02-UE14-EDITORIAL-SEED.json
SEED/health-eb-ue14-eb02.author.seed.ts
THEMES/health-eb-ue14-eb02-theme-mapping.final.json
THEMES/health-eb-ue14-eb02-theme-mapping.final.ts
ASSETS/*.svg
DOCS/UE14-EB02-BLUEPRINT-EDITORIAL-FINAL.md
DOCS/UE14-EB02-SOURCE-REVIEW.md
AUDIT/UE14-EB02-AUTO-AUDIT-FINAL.json
```

Le **JSON éditorial** est la source de comparaison finale seed/BDD.

Lire également dans le repo :

```text
docs/content/health-ue14-exam-blanc-authoring.md
docs/cadrage-rendu-katex.md
docs/content/health-training-seed-authoring.md
```

---

## 3. Préflight obligatoire

Avant toute modification :

1. se placer sur `dev` ;
2. `git status --short` doit être propre ;
3. synchroniser `origin/dev` en fast-forward uniquement ;
4. relever le SHA de départ réel ;
5. vérifier l’architecture EB déjà utilisée par EB01 ;
6. confirmer qu’EB01 reste présent et fonctionnel ;
7. chercher en BDD :
   - examen `EB02` / `eb02` ;
   - questions `eb02-q*` ;
   - tentatives éventuellement liées à EB02 ;
8. compter les tentatives existantes des autres évaluations et les préserver.

Attendu pour une première intégration :

```text
EB02 existant             0
questions eb02-q*         0
tentatives EB02           0
```

Si EB02 existe déjà, surtout avec des tentatives :

> **STOP. Ne rien purger ni écraser.**

---

## 4. Réutiliser l’architecture EB01

EB02 doit être intégré comme **deuxième examen blanc** du même catalogue UE14.

Ne pas créer :

- nouveau moteur d’évaluation ;
- nouveau composant de navigation ;
- nouveau système de scoring ;
- nouveau validateur parallèle ;
- nouvelle page de résultats spécifique EB02.

Le validateur global a déjà été adapté lors d’EB01 aux contrats QRU/QRM/QRP/QRPL.

**Ne pas le modifier à nouveau** sauf incompatibilité technique démontrée. Dans ce cas : STOP avant toute modification globale.

---

## 5. Structure exacte

```text
EB02
100 questions
150 minutes

Q1–Q28    Chimie                  28
Q29–Q62   Biochimie               34
Q63–Q100  Biologie cellulaire     38
```

Aucune question inter-EC.

---

## 6. Formats exacts

```text
QRM     38
QRU     20
QROC    18
QRP     12
QRPL     6
QZONE    6
TOTAL  100
```

Par EC :

| EC | QRM | QRU | QROC | QRP | QRPL | QZONE | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| Chimie | 11 | 6 | 5 | 3 | 1 | 2 | 28 |
| Biochimie | 13 | 7 | 6 | 4 | 2 | 2 | 34 |
| Biologie cellulaire | 14 | 7 | 7 | 5 | 3 | 2 | 38 |

Contrats :

```text
QRU  : 5 choix, 1 vrai, SINGLE
QRM  : 5 choix, 2 à 4 vrais, MULTIPLE
QRP  : 5 choix, 2 vrais, requiredSelectionCount=2
QRPL : 10 choix, 5 vrais, requiredSelectionCount=5
QROC : text ou number selon payload fourni
QZONE: image + expectedZones
```

Variabilité figée :

```text
QRM à 2 vraies : 13
QRM à 3 vraies : 13
QRM à 4 vraies : 12

QRU correct A : 4
QRU correct B : 4
QRU correct C : 4
QRU correct D : 4
QRU correct E : 4
```

---

## 7. Difficultés exactes

```text
EASY    18
MEDIUM  56
HARD    26
```

Par EC :

```text
Chimie               6 / 15 / 7
Biochimie            5 / 19 / 10
Biologie cellulaire  7 / 22 / 9
```

Ordre : EASY / MEDIUM / HARD.

---

## 8. Groupes liés exacts

Exactement **4 groupes / 11 questions** :

```text
G1 : eb02-q18, eb02-q19, eb02-q20
G2 : eb02-q54, eb02-q55, eb02-q56
G3 : eb02-q72, eb02-q73, eb02-q74
G4 : eb02-q93, eb02-q94
```

Les `title` et `sharedStatement` sont fournis dans le seed et doivent être repris à l’identique.

Aucun chevauchement. Aucun groupe inter-EC.

---

## 9. Contextes médicaux/pharmacologiques

Les questions marquées `medicalContext=true` sont exactement :

```text
eb02-q52
eb02-q58
eb02-q72
eb02-q73
eb02-q74
eb02-q85
```

Ne pas modifier ce marquage.

---

## 10. QZONE — assets et cibles exacts

Copier les six SVG vers :

```text
public/images/training/ue14/exam-blancs/eb02/
```

- `eb02-q09` → `/images/training/ue14/exam-blancs/eb02/q09-propanenitrile-sp-carbon.svg` — 1000×420 — `x=0.68`, `y=0.5`, `tolerance=0.075`
- `eb02-q20` → `/images/training/ue14/exam-blancs/eb02/q20-2-bromobutane-reactive-carbon.svg` — 1100×430 — `x=0.41`, `y=0.5`, `tolerance=0.08`
- `eb02-q37` → `/images/training/ue14/exam-blancs/eb02/q37-glucopyranose-anomeric-carbon.svg` — 900×650 — `x=0.73`, `y=0.36`, `tolerance=0.085`
- `eb02-q56` → `/images/training/ue14/exam-blancs/eb02/q56-michaelis-vmax-plateau.svg` — 1100×650 — `x=0.82`, `y=0.14`, `tolerance=0.075`
- `eb02-q71` → `/images/training/ue14/exam-blancs/eb02/q71-centrosome-microtubules.svg` — 1100×700 — `x=0.55`, `y=0.52`, `tolerance=0.1`
- `eb02-q90` → `/images/training/ue14/exam-blancs/eb02/q90-metaphase-kinetochore.svg` — 1100×680 — `x=0.48`, `y=0.493`, `tolerance=0.055`

Vérifier dans la BDD finale pour chacune :

```text
image.src
width
height
expectedZones.id
x
y
tolerance
defaultTolerance
```

Aucune adaptation graphique.

---

## 11. Theme mapping

Attendu :

```text
questions thémées       100/100
mono-Theme               80
bi-Theme                 20
relations                120
Theme manquant             0
Theme substitué            0
auto-nearest-map           0
relation inter-EC          0
```

Utiliser exclusivement le mapping fourni.

Avant seed, confirmer que **tous les Theme IDs fournis existent en BDD** et appartiennent à l’EC de la question.

Si un ID manque ou appartient à un autre EC :

> **STOP — aucune substitution autonome.**

---

## 12. Destination technique recommandée

Réutiliser les conventions exactes d’EB01.

Cibles attendues si elles correspondent toujours à l’architecture réelle :

```text
prisma/seeds/data/health-eb-ue14-eb02.author.seed.ts
prisma/seeds/data/health-eb-ue14-eb02-theme-mapping.final.ts
prisma/seeds/data/health-mock-exams-reims-ue14.ts
public/images/training/ue14/exam-blancs/eb02/*.svg
```

Les documents EB02 peuvent être versés dans :

```text
docs/content/health-ue14-exam-blancs/
```

Si les basenames/imports réels du repo ont évolué, adapter **uniquement l’enveloppe technique**, sans changer le contenu éditorial.

---

## 13. Seed / BDD

Le seed doit être :

- ciblé EB02 ;
- idempotent ;
- en création/upsert contrôlé ;
- sans suppression d’EB01 ;
- sans suppression d’une colle/quiz ;
- sans suppression de tentatives.

Interdits :

```text
deleteMany global
drop
reset
reseed destructif
purge des tentatives
```

Si le mécanisme existant impose une suppression destructive : STOP.

---

## 14. Comparaison stricte source ↔ BDD

Après seed, comparer automatiquement BDD/seed compilé au JSON éditorial et confirmer :

```text
100 stableIds identiques
100 stems identiques
choix identiques et même ordre
booléens correct identiques
explications de choix identiques
explications globales identiques
formats identiques
difficultés identiques
requiredSelectionCount identiques
QROC identiques
4 groupes identiques
6 QZONE identiques
120 relations Theme identiques
durée = 150 min
ordre 1→100 identique
```

Toute différence éditoriale = échec de recette.

---

## 15. Sécurité anti-fuite

Réutiliser les protections déjà validées.

Avant finalisation d’une tentative, le payload étudiant ne doit jamais exposer :

```text
correct
correctChoiceIndexes
expected answer
acceptedAnswers
numericAnswer
expectedZones exploitables comme correction
explications détaillées
```

Après finalisation, la correction doit être accessible selon les gates ownership/status existants.

Ne pas régresser :

- `private/no-store` ;
- ownership ;
- status gates ;
- watermark/protection existante ;
- absence de banque exportable.

---

## 16. Tests obligatoires

Ajouter un test unitaire EB02 ciblé, sans dupliquer inutilement le moteur.

Contrôler au minimum :

- 100 questions ;
- 28/34/38 ;
- formats exacts ;
- difficultés exactes ;
- QRM 13/13/12 ;
- QRU A–E 4/4/4/4/4 ;
- 4 groupes / 11 liées ;
- 6 QZONE ;
- 100/120 Theme mapping ;
- absence de Theme inter-EC ;
- sécurité anti-fuite.

Ajouter un E2E EB02 couvrant :

- visibilité d’EB02 à côté d’EB01 ;
- lancement ;
- navigation 1→100 ;
- groupe lié ;
- QROC ;
- QZONE ;
- finalisation ;
- résultats ;
- correction détaillée après finalisation.

Puis exécuter :

```bash
npm run test:unit
npx tsc --noEmit
npm run lint
npm run build -- --webpack
npx playwright test
```

Le **full Playwright** doit être vert.

`playwright.config.ts` reste inchangé.

---

## 17. Recette visuelle

Produire au minimum :

```text
tmp/eb02-intro.png
tmp/eb02-chimie-linked-group.png
tmp/eb02-biochimie-linked-group.png
tmp/eb02-biocell-linked-group.png
tmp/eb02-qzone.png
tmp/eb02-results.png
tmp/eb02-correction.png
```

Vérifier :

- EB01 et EB02 correctement ordonnés dans l’index ;
- 100 questions / 2 h 30 ;
- sections EC ;
- données communes non répétées dans les stems ;
- TeX/KaTeX ;
- SVG ;
- navigateur 1→100 ;
- résultats et correction.

Captures et rapports restent dans `tmp/` et ne sont pas commités.

---

## 18. Non-régression EB01

Après intégration, confirmer :

- EB01 toujours présent ;
- 100 questions EB01 intactes ;
- tentatives EB01 intactes ;
- assets EB01 intacts ;
- tests EB01 toujours verts.

Aucune migration d’EB02 ne doit modifier le corpus éditorial EB01.

---

## 19. Git

Avant commit :

```bash
git diff --check
git status --short
```

Aucun script jetable, audit `tmp/` ou screenshot dans le commit.

Commit recommandé :

```text
feat(health): add UE14 mock exam EB02
```

Puis, après pipeline intégralement vert :

```bash
git push origin dev
```

---

## 20. Rapport de clôture attendu

Retourner :

1. SHA de départ ;
2. préflight EB02 et nombre de tentatives préservées ;
3. fichiers ajoutés/modifiés ;
4. slug/code technique final ;
5. 100/100 questions ;
6. 28/34/38 ;
7. formats ;
8. difficultés ;
9. QRM 13/13/12 ;
10. QRU A–E 4/4/4/4/4 ;
11. 4 groupes / 11 questions liées ;
12. 6 contextes ;
13. 6 QZONE et payload exact ;
14. 100 questions thémées / 120 relations ;
15. 0 Theme inter-EC ;
16. comparaison source ↔ BDD ;
17. état EB01 avant/après ;
18. tests unitaires ;
19. TypeScript ;
20. lint ;
21. build Webpack ;
22. full Playwright ;
23. captures ;
24. `git diff --stat` ;
25. SHA commit ;
26. push `origin/dev` ;
27. `git status --short` final vide.

---

## 21. Conditions STOP

STOP immédiatement si :

- EB02 existe déjà avec des tentatives ;
- un Theme fourni est introuvable ;
- un Theme fourni est rattaché au mauvais EC ;
- l’intégration nécessite une suppression ;
- une question ne peut pas être représentée sans en changer le sens ;
- une QZONE nécessite d’être redessinée ;
- une réponse scientifique paraît douteuse ;
- une convention TeX semble contradictoire ;
- un changement global du moteur/validateur/UI paraît nécessaire.

> **Gemini n’arbitre pas. Il retourne le problème à ChatGPT/utilisateur.**
