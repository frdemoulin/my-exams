# Obtenir et utiliser une clé API OpenAI

## Étapes pour générer une clé
1) Crée un compte sur <https://platform.openai.com/> (ou connecte-toi si tu en as déjà un).
2) Ajoute un moyen de paiement dans la section Billing (les crédits gratuits ne sont pas toujours proposés).
3) Va dans **API Keys** > **Create new secret key**. Copie la clé (format `sk-...`) et conserve-la en lieu sûr (tu ne pourras pas la revoir).  
4) (Optionnel) Crée une clé distincte par projet et, si disponible, définis des restrictions d’usage.

## Bonnes pratiques
- Ne jamais commiter la clé : la stocker en variable d’environnement (`OPENAI_API_KEY`) ou dans un vault (1Password, Doppler, etc.).  
- Surveiller la facturation/quota dans le dashboard Billing.  
- Limiter les volumes lors des premiers tests (ex. `ENRICH_LIMIT` bas).

## Usage dans ce projet
- LLM réel : `OpenAiLlmAnalyzerService` (modèle par défaut `gpt-4o-mini`, override via `LLM_MODEL`).  
- Activer le mode réel dans le batch d’enrichissement :
  ```bash
  USE_MOCK_OCR=false \
  USE_TESSERACT_FALLBACK=true \
  USE_MOCK_LLM=false \
  OPENAI_API_KEY=sk-... \
  ENRICH_LIMIT=5 \
  pnpm ts-node scripts/enrich-exercises-batch.ts
  ```
- Si `OPENAI_API_KEY` est absent ou `USE_MOCK_LLM=true`, le mock est utilisé.
