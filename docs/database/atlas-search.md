# MongoDB Atlas Search — guide express

## Pourquoi l'utiliser ?
- Moteur de recherche intégré à MongoDB, basé sur Lucene (même socle que Elasticsearch/OpenSearch).
- Pas besoin d'infrastructure séparée comme Elasticsearch : index gérés côté Atlas, données en place.
- Fonctionnalités : scoring pertinent, analyzers linguistiques, fuzzy (tolérance aux fautes), autocomplete, highlight, synonymes, facettes, tri par score.

## Atlas Search vs Elasticsearch (en bref)
- Socle : Lucene pour les deux.  
- Déploiement : Atlas Search est un service managé dans MongoDB Atlas ; Elasticsearch nécessite son cluster (ou un service managé tiers).  
- API : Atlas Search s'utilise via l'opérateur d'aggregation `$search` dans un pipeline MongoDB ; Elasticsearch a son API REST dédiée.  
- Indices : dans Atlas Search, on décrit un index (mapping + analyzers) côté Atlas, distinct des index Mongo “classiques”. Prisma ne déclare pas ces index ; on les gère dans la console Atlas ou via l'API Atlas.

## Concepts clés
- **Index Atlas Search** : configuration Lucene stockée côté Atlas (pas un index Mongo classique). On y décrit quels champs sont indexés et comment.
- **Opérateur `$search`** : étape d'aggregation qui active le moteur Lucene. Exemple : `$search: { text: { query: "titrage", path: ["title", "statement"] } }`.
- **Analyzers** : pipeline tokenization/normalisation (ex. `lucene.french`, `lucene.standard`, `autocomplete`, `keyword`). Choix crucial pour gérer accents, pluriels, césures.
- **Types de mappings** : `string`, `number`, `date`, `boolean`, `object`, `array`. Pour le texte, on combine avec un analyzer. Pour l'autocomplete, on mappe en `autocomplete`.
- **Scoring/boost** : possibilité de booster certains champs (`score: { boost: { path: "title", value: 5 } }`) ou combiner avec `compound` (must/should/filter).
- **Fuzzy** : tolérance aux typos (`fuzzy: { maxEdits: 1 }`).
- **Highlight** : retour des matches en surbrillance (`highlight: { path: ["statement"] }`).
- **Synonymes** : dictionnaires configurables côté index pour élargir les matches (ex. “physique-chimie” ~ “PC”).
- **Facettes** : via l'opérateur `$searchMeta` + `facet` pour compter par catégories (utile pour filtres UI).
- **Autocomplete** : type de champ spécifique ; interroge avec `autocomplete` dans `$search`.

## Déclarer un index (exemple)
À créer dans la console Atlas > Search > Create Index sur la collection `Exercise` :
```json
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "title":        { "type": "string", "analyzer": "lucene.french" },
      "label":        { "type": "string", "analyzer": "lucene.french" },
      "statement":    { "type": "string", "analyzer": "lucene.french" },
      "summary":      { "type": "string", "analyzer": "lucene.french" },
      "keywords":     { "type": "string", "analyzer": "lucene.french" },
      "title_autocomplete": { "type": "autocomplete", "tokenization": "edgeGram", "minGrams": 2, "maxGrams": 12 },
      "examPaper": {
        "type": "document",
        "fields": {
          "sessionYear": { "type": "number" },
          "diploma": {
            "type": "document",
            "fields": { "shortDescription": { "type": "string", "analyzer": "lucene.french" } }
          },
          "teaching": {
            "type": "document",
            "fields": {
              "subject": {
                "type": "document",
                "fields": { "shortDescription": { "type": "string", "analyzer": "lucene.french" } }
              }
            }
          }
        }
      },
      "themeIds": { "type": "string" },
      "estimatedDifficulty": { "type": "number" },
      "estimatedDuration": { "type": "number" }
    }
  }
}
```
Notes :
- `dynamic: false` oblige à lister les champs. On peut passer à `true` pour indexer tout automatiquement, mais c'est moins maîtrisé.
- Pour l’autocomplete, on peut dupliquer la valeur dans un champ dédié (ex. `title_autocomplete` dans les documents) ou utiliser `analyzer` `autocomplete` directement sur `title` si on accepte ce comportement pour toutes les requêtes.

## Requêtes types
- Full-text multi-champs avec filtre :  
```javascript
{
  $search: {
    compound: {
      must: [
        { text: { query: userQuery, path: ["title", "label", "summary", "statement"] } }
      ],
      filter: [
        { equals: { path: "examPaper.sessionYear", value: 2024 } },
        { equals: { path: "themeIds", value: "probabilites" } }
      ],
      should: [
        { text: { query: userQuery, path: "title", score: { boost: { value: 5 } } } }
      ]
    }
  }
}
```
- Autocomplete (suggestions) :  
```javascript
{
  $search: {
    autocomplete: {
      query: userInput,
      path: "title_autocomplete",
      tokenOrder: "sequential",
      fuzzy: { maxEdits: 1 }
    }
  }
}
```
- Facettes (pour compter par diplôme, année) : utiliser `$searchMeta` avec `facet`.

## Bonnes pratiques
- Toujours paginer : `$skip` + `$limit` derrière le `$search`.
- Limiter les champs retournés avec `$project` pour réduire la charge réseau.
- Choisir un analyzer adapté à la langue (`lucene.french` pour gérer stemming/accents).
- Booster les champs courts et discriminants (title/label) vs champ long (statement).
- Mettre une limite au `pageSize` (ex. max 50) et un timeout raisonnable côté API.
- Prévoir un fallback (Prisma `findMany` avec `contains`) en local si Atlas Search n'est pas dispo.

## Ce qui n’est pas géré par Prisma
- Les index Atlas Search se configurent côté Atlas (UI ou API). Prisma ne sait pas les déclarer dans le schéma. On peut toutefois stocker la config JSON dans le repo pour traçabilité (comme ci-dessus).

