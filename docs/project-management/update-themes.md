# Mise à jour des descriptions de thèmes

Ce document décrit le workflow à suivre lorsque l’on souhaite enrichir les descriptions (`description`) des thèmes sans toucher aux priorités P0 utilisateurs.

## Contexte

- Le champ `description` (string nullable) a été ajouté au modèle `Theme`.
- Il n’est **pas** exposé dans les vues publiques par défaut (optionnel, sans rupture).
- L’enrichissement reste manuel/assisté (ex. : aide ChatGPT) : on ne crée pas encore d’IA interne.

## Étapes

1. **Exporter les thèmes actuels**
   - Depuis une session `mongosh` ou via Prisma, récupérer `id`, `longDescription`, `shortDescription`, `domainId`.
   - Par exemple :
     ```bash
     mongosh "$DATABASE_URL_PROD" --eval '
       db.Theme.find({}, { _id: 1, longDescription: 1, shortDescription: 1, domainId: 1 }).toArray()
     ' > /tmp/themes-base.json
     ```
   - Le fichier JSON (`themes-base.json`) est ensuite envoyé à l’assistant (ou utilisé localement) pour enrichissement.

2. **Compléter les descriptions**
   - L’assistant (ChatGPT) reçoit le JSON et ajoute un champ `description` à chaque thème. Une valeur vide est acceptable (`""`), mais on préfèrera `null` pour signifier l’absence.
   - Résultat attendu :
     ```json
     [
       { "id": "693e...", "description": "Approche sur les fonctions affines…" },
       ...
     ]
     ```

3. **Mettre à jour la base**
   - Exécuter le script `scripts/update-theme-descriptions.ts` en lui passant le JSON enrichi :
     ```bash
     npx tsx scripts/update-theme-descriptions.ts /tmp/themes-with-description.json
     ```
   - Le script lit le fichier, normalise les chaînes vides en `null`, puis fait un `prisma.theme.update` pour chaque `id`.
   - Aucune migration Prisma n’est nécessaire : le champ est nullable.

4. **Répliquer en dev**
   - Après avoir mis à jour prod, synchroniser la base de dev via `scripts/sync_prod_to_dev.sh --db my_exams`.
   - Cela garantit que les environnements locale et CI restent en phase.

5. **Vérifications**
   - `npm run lint`, `npm run test`/`npm run build` si besoin.
   - S’assurer que les formulaires admin affichent/éditent `description`.
   - Confirmer que les vues publiques (si ajout ultérieur) lisent ce champ (ajouter `theme.description` aux includes).

## Notes complémentaires

- `scripts/update-theme-descriptions.ts` est autonome : il importe Prisma, lit le JSON et met à jour `description`.
- Si un thème ne doit plus avoir de description, mettre `description: null` dans le JSON.
- On peut enrichir les textes à partir d’un corpus (longDescription > description).  
- On ne doit pas créer de migration par-dessus une migration déjà appliquée : on crée un nouveau fichier si on veut modifier le comportement d’un `scripts/migrations/…`.

