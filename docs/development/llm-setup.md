# LLM Analyzer — OpenAI (optionnel)

## Ce que ça fait
`OpenAiLlmAnalyzerService` génère les métadonnées d’un exercice (titre, résumé, mots-clés, durée/difficulté estimées, thèmes) à partir de l’énoncé (statement).

## Prérequis
- Variable `OPENAI_API_KEY` définie (compte API OpenAI ; ChatGPT Plus ne suffit pas).
- Modèle par défaut : `gpt-4o-mini`. Personnalisable via `LLM_MODEL` (ex. `gpt-4o`).

## Activation dans le batch
```bash
USE_MOCK_OCR=false \
USE_TESSERACT_FALLBACK=true \
USE_MOCK_LLM=false \
OPENAI_API_KEY=sk-... \
ENRICH_LIMIT=5 \
pnpm ts-node scripts/enrich-exercises-batch.ts
```
- Si `OPENAI_API_KEY` est absent ou `USE_MOCK_LLM=true`, le mock est utilisé.
- Ajuste `ENRICH_LIMIT` pour contrôler le coût.

## Prompt / sortie
- Sortie attendue : JSON strict avec `title`, `summary`, `keywords[]`, `estimatedDuration`, `estimatedDifficulty`, `themeIds[]`.
- Mode `response_format: json_object` utilisé pour fiabiliser le parse.
- Température 0.3, max_tokens 300 (à adapter).

## Bonnes pratiques
- Plafonner `ENRICH_LIMIT` lors des premiers runs.
- Surveiller les logs en cas de parse JSON échoué.
- Si tu veux changer de modèle : `LLM_MODEL=gpt-4o` ou autre modèle compatible.
