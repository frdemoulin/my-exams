# Pipeline d'enrichissement (OCR + LLM) — squelette

Objectif : générer automatiquement les métadonnées des exercices (statement complet, titre, résumé, mots-clés, difficulté, durée, thèmes) pour que **tout le texte** soit indexé.

## Ce qui existe dans le code
- Modèle Prisma `Exercise` avec `enrichmentStatus/enrichedAt` et champs enrichis (statement, summary, keywords, estimatedDuration, estimatedDifficulty, themeIds).
- Stubs dans `src/core/enrichment/` :
  - `ocr.service.ts` : interface + `MockOcrService` (retourne un texte simulé), `PdfParseOcrService` (OCR réel via pdf-parse pour PDF texte) avec fallback optionnel vers Tesseract si peu de texte.
  - `llm-analyzer.service.ts` : interface + `MockLlmAnalyzerService` (génère des métadonnées factices), `OpenAiLlmAnalyzerService` (API OpenAI, modèle par défaut gpt-4o-mini).
  - `enrichment.types.ts` : types partagés.
- Script batch mock/réel : `scripts/enrich-exercises-batch.ts` (prend les exercices `pending`, OCR mock ou réel selon `USE_MOCK_OCR`, puis LLM mock, met à jour l'exercice).
- Script de découpage : `scripts/split-exam-paper.ts` (squelette pour splitter un ExamPaper en plusieurs Exercises à partir du PDF).

## Glossaire utile
- `enrichmentStatus` : statut d'enrichissement (`pending` = à traiter, `completed` = enrichi, `failed` = échec).
- `enrichedAt` : horodatage de fin d'enrichissement.
- `statement` : texte complet de l'énoncé de l'exercice (doit contenir l'intégralité du contenu OCRisé pour l'indexation full-text).
- `keywords` : mots-clés extraits (via LLM).
- `estimatedDuration` : durée estimée (minutes) pour cet exercice.
- `estimatedDifficulty` : difficulté estimée (1-5).
- `themeIds` : IDs de thèmes pédagogiques propres à l'exercice.

## Étapes à implémenter pour un vrai pipeline
1) OCR : extraire tout le texte PDF (idéalement l’énoncé complet de l’exercice)  
   - Option PDF texte : PDF.js ou un wrapper `pdf-parse`.  
   - Option OCR image : Tesseract (local ou API) pour les PDFs scannés.  
   - Stocker le texte complet dans `Exercise.statement` pour indexation full-text.

2) Analyse LLM : générer les métadonnées  
   - Entrées : `statement` complet (issu OCR ou déjà présent), contexte (diplôme, matière, année).  
   - Sorties : `title`, `summary`, `keywords`, `estimatedDuration`, `estimatedDifficulty`, `themeIds`.  
   - Implémenter `LlmAnalyzerService` avec une API (OpenAI/Claude) ou un modèle local.

3) Batch & statuts  
   - Sélectionner les exercices `enrichmentStatus = 'pending'`.  
   - Mettre à jour `enrichmentStatus` → `completed` ou `failed` + `enrichedAt`.  
   - Ajouter un `ENRICH_LIMIT` pour limiter les batchs et éviter les coûts.

4) Indexation full-text (gratuit Mongo)  
   - `statement` doit être rempli pour que la recherche couvre tout l’énoncé.  
   - Index text déjà créé : `title/label/summary/statement/keywords` (langue française).  
   - Si migration Atlas Search plus tard, le pipeline `$search` pourra exploiter `statement` avec un analyzer français et l’autocomplete.

## Commande (mode mock ou réel OCR via pdf-parse)
```bash
# mock OCR
USE_MOCK_OCR=true ENRICH_LIMIT=5 pnpm ts-node scripts/enrich-exercises-batch.ts

# OCR réel (pdf-parse) - PDF texte
USE_MOCK_OCR=false ENRICH_LIMIT=5 pnpm ts-node scripts/enrich-exercises-batch.ts

# OCR réel avec fallback Tesseract (PDF scannés) si pdf-parse renvoie peu de texte
USE_MOCK_OCR=false USE_TESSERACT_FALLBACK=true ENRICH_LIMIT=5 pnpm ts-node scripts/enrich-exercises-batch.ts

# OCR réel + LLM OpenAI (clé requise)
USE_MOCK_OCR=false USE_TESSERACT_FALLBACK=true USE_MOCK_LLM=false OPENAI_API_KEY=sk-... ENRICH_LIMIT=5 pnpm ts-node scripts/enrich-exercises-batch.ts
```
(adapte la commande à ton runner : tsx/node/register, etc.)

## Prochaines étapes suggérées
- Implémenter une vraie OCR image (Tesseract) pour les PDFs scannés : installer Tesseract + poppler (pour convertir le PDF en images), puis brancher `TesseractOcrService`.
- Implémenter un vrai `LlmAnalyzerService` (OpenAI/Claude ou modèle local) avec un prompt dédié et un budget de tokens plafonné.
- Ajouter des logs/metrics (latence, taux de succès).
- Facultatif : un flag `USE_MOCK_ENRICHMENT` pour basculer entre mock et prod.
