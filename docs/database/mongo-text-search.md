# Recherche full-text gratuite avec MongoDB

## Objectif
Utiliser l’index `text` natif (gratuit, dispo sur M0/M2/M5) pour la recherche et l’autocomplete simple sans Atlas Search ni Elasticsearch.

## Index à créer
Dans le shell Mongo ou Atlas (Collection > Indexes) :
```javascript
// Index full-text (scoring via $text)
db.Exercise.createIndex({
  title: "text",
  label: "text",
  summary: "text",
  statement: "text",
  keywords: "text"
});

// Index pour les filtres
db.Exercise.createIndex({ "examPaper.sessionYear": 1 });
db.Exercise.createIndex({ estimatedDifficulty: 1 });
db.Exercise.createIndex({ estimatedDuration: 1 });
db.Exercise.createIndex({ themeIds: 1 }); // multikey
```
Notes :
- `text` ne fait pas de fuzzy ni d’autocomplete avancé. Il retourne un score (`textScore`) utilisable pour trier.
- Les index ci-dessus restent gratuits ; ils utilisent le moteur Mongo classique.

## Requêtes à viser
- Recherche textuelle : `$match: { $text: { $search: "titrage" } }`, puis `$project` le score, `$sort` par `textScore`, pagination via `$skip/$limit`.
- Filtres combinés : ajouter des conditions sur `examPaper.sessionYear`, `estimatedDifficulty`, `themeIds`.
- Autocomplete simple : utiliser `startsWith` (regex prefix) sur `title`/`label` avec un minimum de 2 caractères et un `limit` faible (5–10) pour limiter le coût. Cela reste un compromis sans index dédié.

## Limitations vs Atlas Search
- Pas de fuzzy (tolérance aux fautes), pas d’analyzers linguistiques avancés, pas de highlight/synonymes.
- Pas d’autocomplete natif ; le prefix via `startsWith` peut scanner davantage si le dataset grandit.
- Performances correctes tant que le catalogue reste modeste et qu’on limite la pagination.

## Bonnes pratiques
- Toujours paginer et limiter la taille des réponses (`pageSize` max 50).
- Minimiser les champs renvoyés côté suggestions.
- Prévoir un passage à Atlas Search ou Elastic si besoin de fuzzy/autocomplete avancé ou si le volume explose.
