# Traitement d'un sujet d'examen (split + enrichissement)

## 0) Découpage via admin (recommandé)
- Aller sur `/admin/exam-papers/[id]/split`.
- Renseigner `pageStart` / `pageEnd` pour chaque exercice (1-based, inclusif).
- Cliquer sur **"Extraire les énoncés depuis le PDF"** pour pre-remplir `statement`.
- Ajuster manuellement les enonces si besoin, puis **Creer** (remplace les exercices existants).
- Requis : `subjectUrl` sur l'ExamPaper (sinon pas d'extraction auto).

## 1) Découper un ExamPaper en exercices (script)
- Cible **un seul sujet** : passer `EXAM_PAPER_ID=<id>` (les exercices du sujet sont créés à partir du PDF).
- **Dry run (visualiser les blocs sans rien écrire)**  
  ```bash
  EXAM_PAPER_ID=<examPaperId> DRY_RUN=true \
  npx ts-node -r tsconfig-paths/register scripts/split-exam-paper.ts
  ```
- **Création réelle des exercices** (après validation du dry run)  
  ```bash
  EXAM_PAPER_ID=<examPaperId> \
  npx ts-node -r tsconfig-paths/register scripts/split-exam-paper.ts
  ```
- Options : `USE_TESSERACT_FALLBACK=true` si le PDF est scanné/peu de texte.
- Attention : si des exercices existent déjà pour le sujet, les supprimer avant de relancer pour éviter les doublons.

## 2) Enrichir les exercices
- Cible **tous les exercices `pending`** (tous sujets confondus) jusqu’à `ENRICH_LIMIT`.  
  Si tu veux n’enrichir qu’un sujet, assure-toi que seuls ses exercices sont en `pending` ou adapte le script pour filtrer par `examPaperId`.
- **Mode mock (rapide, pas d’appel externe)**  
  ```bash
  USE_MOCK_OCR=true ENRICH_LIMIT=20 \
  npx ts-node -r tsconfig-paths/register scripts/enrich-exercises-batch.ts
  ```
- **OCR réel + LLM OpenAI (clé requise)**  
  ```bash
  USE_MOCK_OCR=false USE_TESSERACT_FALLBACK=true \
  USE_MOCK_LLM=false OPENAI_API_KEY=sk-... ENRICH_LIMIT=20 \
  npx ts-node -r tsconfig-paths/register scripts/enrich-exercises-batch.ts
  ```
- `ENRICH_LIMIT` contrôle le nombre d’exercices traités (status `pending`).
- Statuts d’un exercice :  
  - `pending` : à enrichir (pris par le batch).  
  - `completed` : enrichi (OK).  
  - `failed` : échec (erreur OCR/LLM). Remettre en `pending` ou supprimer/recréer pour retraiter.

## Remettre les exercices d’un sujet en `pending`
```bash
EXAM_PAPER_ID=<id_du_sujet> \
npx ts-node -e "
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
(async () => {
  const examPaperId = process.env.EXAM_PAPER_ID!;
  const res = await prisma.exercise.updateMany({
    where: { examPaperId },
    data: { enrichmentStatus: 'pending', enrichedAt: null }
  });
  console.log(`✓ ${res.count} exercice(s) repassés en pending pour ${examPaperId}`);
  await prisma.$disconnect();
})().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
"
```
Ensuite, relancer le batch d’enrichissement (mock ou LLM réel).

## 3) Vérifications
- Dans l’admin : exercices créés sous le sujet, statut `completed`, statements/keywords/titres remplis.
- Si un enrichissement échoue : le statut passe à `failed` ; relancer après correction.
