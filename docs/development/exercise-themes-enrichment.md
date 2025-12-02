# Enrichissement des thèmes d'un exercice

## Principe
- Le LLM reçoit la liste des thèmes existants (id + libellé) et doit renvoyer des `themeIds` parmi cette liste, au format JSON strict.
- Côté serveur, on filtre les IDs retournés pour ne garder que ceux présents en base.
- Aucun nouveau thème n’est créé automatiquement.

## Commande d’enrichissement (LLM réel)
```bash
USE_MOCK_OCR=false USE_TESSERACT_FALLBACK=true \
USE_MOCK_LLM=false OPENAI_API_KEY=sk-... ENRICH_LIMIT=20 \
npx ts-node -r tsconfig-paths/register scripts/enrich-exercises-batch.ts
```
- Le script récupère les exercices `pending`, passe la liste des thèmes au LLM, puis met à jour `themeIds`.
- `ENRICH_LIMIT` limite le nombre d’exercices traités.

## Commande d’enrichissement (mock)
```bash
USE_MOCK_OCR=true ENRICH_LIMIT=20 \
npx ts-node -r tsconfig-paths/register scripts/enrich-exercises-batch.ts
```
- Mock OCR/LLM (pas d’API). Les `themeIds` restent vides.

## Statuts
- `pending` : à enrichir.
- `completed` : enrichi.
- `failed` : échec (logs, remettre en `pending` ou recréer).
