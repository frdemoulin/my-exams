# Cadrage Gemini — Intégration technique EB01 UE14

**Projet : My Exams — Santé PASS/LAS — UE14**  
**Lot : EB01 — premier examen blanc UE14**  
**Branche cible : `dev`**  
**Responsabilité éditoriale : ChatGPT uniquement**  
**Rôle de Gemini : intégration et validation technique exclusivement**

---

## 0. Règle absolue de responsabilité

Le package fourni est **éditorialement définitif**.

ChatGPT a défini et rédigé :

- le blueprint ;
- les 100 questions ;
- les réponses correctes ;
- tous les distracteurs ;
- les explications de chaque item ;
- les explications globales ;
- les formats ;
- les difficultés ;
- les groupes de questions liées ;
- les données communes ;
- les mises en situation médicales ;
- les réponses QROC ;
- les 6 QZONE et leurs assets ;
- les Theme mappings ;
- le TeX/KaTeX.

Gemini **ne rédige, ne complète, ne reformule, ne simplifie et n’arbitre aucun contenu pédagogique, scientifique ou éditorial**.

Si le contenu fourni ne peut pas être intégré exactement dans l’architecture actuelle :

> **STOP — retourner l’incompatibilité technique brute à ChatGPT/utilisateur.**

Gemini ne doit jamais « améliorer » une question pour résoudre une incompatibilité technique.

---

# 1. Préflight obligatoire

Avant toute modification :

```bash
git checkout dev
git status --short
git pull --ff-only origin dev
git rev-parse HEAD
```

Conditions :

1. l’arbre de travail doit être propre ;
2. relever le SHA réel de départ ;
3. ne pas supposer que le HEAD est resté sur un SHA cité dans une conversation antérieure ;
4. si `dev` a avancé, intégrer sur l’état courant sans écraser une évolution plus récente.

Inspecter avant toute écriture :

```text
prisma/schema.prisma
prisma/seeds/
src/core/
src/app/
```

et identifier précisément :

- le modèle Prisma actuellement utilisé pour les examens blancs / mock exams ;
- le mécanisme actuel de seed des colles et examens blancs ;
- le type/enum exact utilisé pour distinguer `COLLE` et examen blanc ;
- le mécanisme de création/reprise/finalisation d’une tentative ;
- le calcul du chronomètre ;
- les routes de passation et de correction ;
- la logique de sanitisation des questions avant correction ;
- la logique Theme actuelle.

### Garde de sécurité sur un EB01 préexistant

Avant toute création, rechercher :

- un examen blanc portant le code/slug logique `EB01` / `eb01` ;
- des questions dont le stableId logique est `eb01-q01` → `eb01-q100` ;
- toute tentative utilisateur rattachée à un éventuel EB01 existant.

Si un EB01 fonctionnel ou des tentatives réelles existent déjà :

> **STOP. Ne pas écraser, supprimer, renommer ou réallouer. Retourner l’état exact pour arbitrage.**

Aucun `deleteMany` global ou purge destructive n’est autorisé.

---

# 2. Documentation canonique à lire

Lire avant intégration :

```text
docs/content/health-ue14-exam-blanc-authoring.md
docs/cadrage-rendu-katex.md
docs/content/health-training-seed-authoring.md
```

Si une représentation de Lewis est rencontrée dans l’architecture ou dans un helper appelé :

```text
docs/lewis-representations.md
```

Priorités :

1. le contenu éditorial du seed fourni est figé ;
2. `docs/cadrage-rendu-katex.md` reste la norme de rendu TeX/KaTeX ;
3. le cadrage EB fixe la structure pédagogique permanente ;
4. l’agent adapte uniquement la **syntaxe et le branchement technique** nécessaires.

---

# 3. Fichiers fournis

Le ZIP contient notamment :

```text
SEED/EB01-UE14-EDITORIAL-SEED.json
SEED/health-eb-ue14-eb01.author.seed.ts
THEMES/health-eb-ue14-eb01-theme-mapping.final.json
THEMES/health-eb-ue14-eb01-theme-mapping.final.ts
ASSETS/q09-ethanol-oh-bond.svg
ASSETS/q20-propanone-electrophilic-carbon.svg
ASSETS/q37-glycerophospholipid-phosphate.svg
ASSETS/q56-lineweaver-burk-x-intercept.svg
ASSETS/q71-migrating-cell-lamellipodium.svg
ASSETS/q90-nucleus-nucleolus.svg
DOCS/health-ue14-exam-blanc-authoring.md
DOCS/UE14-EB01-BLUEPRINT-EDITORIAL-FINAL.md
DOCS/UE14-EB01-SOURCE-REVIEW.md
AUDIT/UE14-EB01-AUTO-AUDIT-FINAL.json
```

### Source de vérité éditoriale

`SEED/EB01-UE14-EDITORIAL-SEED.json` est la représentation éditoriale structurée de référence.

Le `.author.seed.ts` contient le même corpus sous forme de littéral TypeScript.

Si l’architecture réelle exige une autre enveloppe TypeScript, Gemini peut :

- déplacer les objets dans le wrapper attendu ;
- convertir les guillemets ;
- supprimer les propriétés `null` si le type les interdit ;
- adapter les imports ;
- adapter le nom technique de l’enum représentant un examen blanc ;
- convertir la structure fournie vers `HealthTrainingAuthorQuestion` ou le type auteur réellement utilisé ;
- brancher les sections/groupes selon le modèle du repo.

Gemini **ne peut pas modifier la valeur éditoriale** d’un champ.

---

# 4. Identité exacte d’EB01

Valeurs éditoriales :

```text
code logique : EB01
slug logique : eb01
titre : Examen blanc UE14 — EB01
UE : UE14
durée : 150 min = 9000 s
questions : 100
```

Sections :

```text
Q001–Q028 : Chimie                 = 28
Q029–Q062 : Biochimie              = 34
Q063–Q100 : Biologie cellulaire    = 38
```

StableIds logiques obligatoires :

```text
eb01-q01
...
eb01-q99
eb01-q100
```

Ne jamais renuméroter les questions en fonction d’un identifiant BDD.

Le moteur peut utiliser ses identifiants techniques internes, mais les stableIds fournis restent l’identité éditoriale.

---

# 5. Pas de transversalité inter-EC

Point de vigilance majeur :

> **Aucune question d’EB01 ne doit devenir inter-EC lors de l’intégration.**

Les sections sont distinctes :

- Chimie ;
- Biochimie ;
- Biologie cellulaire.

Les éventuelles questions de synthèse sont **intra-EC seulement**.

Ne pas fusionner des sections, déplacer une question vers un autre EC ou modifier un Theme pour créer artificiellement une transversalité inter-EC.

---

# 6. Distribution exacte des formats

Attendu global :

```text
QRM    38
QRU    20
QROC   18
QRP    12
QRPL    6
QZONE   6
TOTAL 100
```

Par EC :

| EC | QRM | QRU | QROC | QRP | QRPL | QZONE | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| Chimie | 11 | 6 | 5 | 3 | 1 | 2 | 28 |
| Biochimie | 13 | 7 | 6 | 4 | 2 | 2 | 34 |
| Biologie cellulaire | 14 | 7 | 7 | 5 | 3 | 2 | 38 |

Contrats :

```text
QRU
- 5 propositions
- SINGLE
- exactement 1 vraie
- requiredSelectionCount absent/null

QRM
- 5 propositions
- MULTIPLE
- 2, 3 ou 4 vraies
- requiredSelectionCount absent/null

QRP
- 5 propositions
- MULTIPLE
- requiredSelectionCount = 2
- exactement 2 vraies

QRPL
- 10 propositions
- MULTIPLE
- requiredSelectionCount = 5
- exactement 5 vraies

QROC
- short-answer
- answerType text ou number

QZONE
- hotspot
- image
- expectedZones non vide
- coordonnées normalisées
```

### Variabilité volontaire des QRM

EB01 a été écrit pour éviter le biais « toujours trois bonnes réponses ».

Attendu :

```text
QRM à 2 bonnes réponses : 13
QRM à 3 bonnes réponses : 13
QRM à 4 bonnes réponses : 12
```

Ne pas rééquilibrer autrement.

Les positions des bonnes réponses QRU sont également brassées :

```text
A = 4
B = 4
C = 4
D = 4
E = 4
```

---

# 7. Difficultés exactes

```text
EASY   18
MEDIUM 56
HARD   26
TOTAL 100
```

Par EC :

```text
Chimie               6 EASY / 15 MEDIUM / 7 HARD
Biochimie            5 EASY / 19 MEDIUM / 10 HARD
Biologie cellulaire  7 EASY / 22 MEDIUM / 9 HARD
```

Gemini ne modifie aucune difficulté.

---

# 8. Groupes de questions liées — exacts

Il existe exactement **4 groupes**, soit **11 questions liées**.

## G1 — Carbonyle et organomagnésien

```text
eb01-q18
eb01-q19
eb01-q20
```

Le `sharedStatement` exact est fourni dans le seed.

## G2 — Déficit lysosomal et ganglioside

```text
eb01-q42
eb01-q43
eb01-q44
```

## G3 — Adressage d’une hydrolase lysosomale

```text
eb01-q74
eb01-q75
eb01-q76
```

## G4 — Pathologie peroxysomale et acides gras à très longue chaîne

```text
eb01-q82
eb01-q83
```

Ne pas :

- créer d’autre groupe ;
- modifier les bornes ;
- fusionner deux groupes ;
- dupliquer le `sharedStatement` dans un autre groupe ;
- rendre une question dépendante de la réponse à la précédente.

Le composant UI canonique de données communes doit afficher les numéros globaux corrects.

---

# 9. Mises en situation médicales

Exactement 6 questions ont un contexte médical explicitement prévu :

```text
Q42
Q43
Q44
Q76
Q82
Q83
```

Ne pas ajouter de contexte clinique ailleurs.

Ne pas demander de connaissance clinique non présente dans le seed.

---

# 10. QZONE et assets — exacts

Copier les six SVG sans les redessiner.

Destination recommandée si conforme à l’architecture existante :

```text
public/images/training/ue14/exam-blancs/eb01/
```

Fichiers et cibles :

| Q | Asset | Target | x | y | tolerance |
|---:|---|---|---:|---:|---:|
| 9 | `q09-ethanol-oh-bond.svg` | `oh-bond` | 0.76 | 0.50 | 0.075 |
| 20 | `q20-propanone-electrophilic-carbon.svg` | `carbonyl-carbon` | 0.50 | 0.52 | 0.075 |
| 37 | `q37-glycerophospholipid-phosphate.svg` | `phosphate` | 0.66 | 0.50 | 0.085 |
| 56 | `q56-lineweaver-burk-x-intercept.svg` | `x-intercept` | 0.155 | 0.769 | 0.075 |
| 71 | `q71-migrating-cell-lamellipodium.svg` | `lamellipodium` | 0.82 | 0.46 | 0.11 |
| 90 | `q90-nucleus-nucleolus.svg` | `nucleolus` | 0.52 | 0.48 | 0.10 |

Dimensions/alt sont dans le seed.

### Interdit

- ne pas déplacer graphiquement un élément ;
- ne pas recolorer pour « améliorer » le dessin si cela altère sa lisibilité ou sa cible ;
- ne pas recalculer les coordonnées ;
- ne pas remplacer un SVG par un asset existant jugé « proche ».

Si l’UI requiert une dimension technique différente, conserver le `viewBox`, les proportions et les coordonnées normalisées ; sinon STOP.

---

# 11. QROC

Les réponses canoniques et variantes acceptées sont définies par ChatGPT.

Gemini peut uniquement convertir la structure vers le schéma actuel.

Ne pas :

- ajouter des synonymes de sa propre initiative ;
- rendre une réponse plus permissive ;
- transformer une QROC texte en QRU ;
- transformer une QROC numérique en texte.

Pour les QROC numériques, conserver strictement valeur, tolérance, unité et `displayUnit` fournis.

---

# 12. Theme mapping — exact et non heuristique

Le package contient le mapping exact de **100/100 questions**.

Gemini doit créer les relations Theme à partir de :

```text
THEMES/health-eb-ue14-eb01-theme-mapping.final.json
```

ou du `.ts` équivalent.

Règles :

- 80 questions mono-Theme ;
- 20 questions bi-Theme ;
- aucune question sans Theme ;
- aucun Theme inter-EC ;
- aucune recherche « nearest », fuzzy ou sémantique ;
- aucun Theme substitué parce qu’un intitulé paraît plus proche.

Si un `themeId` fourni n’existe plus sur `dev` :

> **STOP et retourner stableId + themeId + Theme attendu.**

Ne pas auto-remapper.

---

# 13. TeX / KaTeX

Le corpus a été rédigé directement selon le cadrage TeX.

Gemini doit préserver exactement les chaînes scientifiques.

En particulier, ne pas remplacer :

```text
\ce{...}
\mathrm{...}
\alpha
\beta
\delta
\Delta
\sigma
\pi
```

par des caractères Unicode ou du texte brut.

Ne pas reformater les liaisons chimiques en `\mathrm{C{-}O}` si `\ce{C-O}` est fourni.

Avant clôture, exécuter un audit sémantique de tous les champs affichables d’EB01 contre :

```text
docs/cadrage-rendu-katex.md
```

Si Gemini pense détecter une anomalie nécessitant une **décision typographique ou scientifique**, ne pas la corriger de lui-même :

> STOP → stableId, champ, extrait, règle concernée.

Les adaptations purement syntaxiques requises par TypeScript sont autorisées.

---

# 14. Sécurité des corrections

EB01 doit utiliser le mécanisme sécurisé déjà en place pour les évaluations.

Avant finalisation d’une tentative :

- ne jamais envoyer les réponses correctes au client ;
- ne jamais envoyer les explications ;
- ne jamais exposer les answer payloads complets ;
- ne jamais créer une route d’export de la banque.

Après finalisation, la correction est accessible selon les règles existantes de propriété/statut de tentative.

Ne pas contourner la sanitisation existante pour accélérer l’intégration.

---

# 15. Navigation et chronométrage

EB01 :

```text
100 questions
150 minutes
9000 secondes
```

Le chrono doit utiliser le mécanisme canonique existant.

La navigation reste celle des évaluations actuelles :

- navigation libre pendant la passation ;
- retour possible entre questions ;
- correction détaillée après fin de l’épreuve ;
- numérotation globale 1→100 ;
- sections distinctes ;
- groupes liés sans fusionner les tuiles du navigateur.

Ne pas créer une navigation spécifique EB01 si le composant partagé suffit.

---

# 16. Seed / BDD

Le seed doit être :

- ciblé EB01 ;
- idempotent ;
- en mise à jour/upsert contrôlé ;
- sans suppression d’autres évaluations ;
- sans suppression de tentatives utilisateur.

Aucun :

```text
deleteMany global
drop
reset
reseed complet
```

pour intégrer EB01.

Si un mécanisme existant impose une purge destructive pour créer un examen blanc :

> STOP et retourner le problème.

---

# 17. Contrôles de non-régression éditoriale

Après intégration, comparer automatiquement la BDD/seed compilé au JSON éditorial fourni.

Confirmer :

```text
100 stableIds identiques
100 stems identiques
tous les choix identiques et dans le même ordre
toutes les réponses correctes identiques
toutes les explications de choix identiques
toutes les explications globales identiques
tous les formats identiques
toutes les difficultés identiques
tous les requiredSelectionCount identiques
toutes les réponses QROC identiques
les 4 groupes identiques
les 6 QZONE identiques
les Theme relations identiques
durée identique
ordre identique
```

Toute différence de contenu doit faire échouer la recette.

---

# 18. Tests obligatoires

Après intégration :

```bash
npm run test:unit
npx tsc --noEmit
npm run lint
npm run build -- --webpack
npx playwright test
```

Si le parallélisme Playwright provoque une collision démontrée :

```bash
npx playwright test --workers=1
```

uniquement en CLI.

`playwright.config.ts` doit rester strictement inchangé.

Ajouter uniquement les tests ciblés EB01 nécessaires, notamment :

- visibilité/lancement ;
- 100 questions ;
- sectionnement 28/34/38 ;
- durée 150 min ;
- navigation jusqu’à Q100 ;
- groupe lié ;
- une QROC ;
- une QZONE ;
- finalisation ;
- correction après finalisation ;
- absence de fuite des réponses avant finalisation ;
- restitution et scoring UNESS.

---

# 19. Recette visuelle

Produire des captures au minimum de :

```text
tmp/eb01-intro.png
tmp/eb01-chimie-question.png
tmp/eb01-biochimie-linked-group.png
tmp/eb01-biocell-question.png
tmp/eb01-qzone.png
tmp/eb01-results.png
tmp/eb01-correction.png
```

Vérifier :

- titre ;
- badge 100 questions ;
- durée 150 min ;
- sections ;
- données communes ;
- TeX ;
- SVG ;
- navigateur 1→100 ;
- correction détaillée ;
- métriques du bilan.

---

# 20. Git

Aucun script jetable ne doit être committé.

Avant commit :

```bash
git status --short
git diff --check
```

`playwright.config.ts` doit être inchangé.

Commit recommandé, à adapter uniquement si la convention Git du repo l’impose :

```text
feat(health): add UE14 mock exam EB01
```

Puis :

```bash
git push origin dev
```

Un seul push final après validation complète.

---

# 21. Rapport de clôture attendu

Retourner :

1. SHA de départ réel ;
2. architecture d’examen blanc identifiée ;
3. fichiers ajoutés/modifiés ;
4. code/slug/type technique final ;
5. 100/100 questions intégrées ;
6. décompte 28/34/38 ;
7. distribution formats ;
8. distribution difficultés ;
9. QRM 2/3/4 bonnes réponses = 13/13/12 ;
10. QRU positions A–E = 4/4/4/4/4 ;
11. 4 groupes / 11 questions liées ;
12. 6 contextes médicaux ;
13. 6 QZONE + chemins + coordonnées confirmées ;
14. 100/100 Theme mappings, 80 mono / 20 bi ;
15. résultat de comparaison exacte seed ↔ BDD ;
16. absence de perte de tentatives ;
17. tests unitaires ;
18. TypeScript ;
19. lint ;
20. build Webpack ;
21. Playwright ;
22. captures produites ;
23. `git diff --stat` ;
24. SHA commit ;
25. `git status --short` vide ;
26. confirmation du push `origin/dev`.

---

# 22. Conditions STOP

STOP immédiatement si :

- EB01 existe déjà avec des tentatives ;
- un Theme fourni est introuvable ;
- le moteur ne possède pas de type compatible examen blanc ;
- l’intégration nécessite une suppression de données ;
- une question ne peut pas être représentée sans changer son contenu ;
- une QZONE doit être redessinée ou ses coordonnées changées ;
- une convention TeX paraît contradictoire ;
- une réponse scientifique paraît douteuse ;
- une modification éditoriale semble « nécessaire » ;
- un helper global devrait être modifié avec impact sur d’autres contenus.

Gemini retourne alors le problème précis et **n’arbitre rien**.

---

## Règle finale

> **Le package EB01 est le produit éditorial de ChatGPT. Gemini est un intégrateur technique.**
>
> Tout changement de sens, de formulation, de réponse, de distracteur, d’explication, de difficulté, de format, de Theme, de groupe ou de QZONE relève exclusivement de ChatGPT/utilisateur.
