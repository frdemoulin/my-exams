# Tâches planifiées (cron)

Ce document centralise les tâches planifiées utilisées en production.

---
## Nettoyage des journaux de connexion

- **Commande** : `npm run auth:logs:cleanup`
- **Action** : supprime les logs `AuthLog` plus anciens que la rétention.
- **Fréquence conseillée** : 1 fois par jour.
- **Variable d'environnement** : `AUTH_LOG_RETENTION_DAYS` (ex: `180`).
- **Remarques** :
  - Rétention par défaut : 180 jours.
  - Ce nettoyage est recommandé pour respecter les durées de conservation (CNIL).

---
## Archivage + purge des stats d'usage

- **Commande** : `npm run usage:stats:rollup`
- **Action** :
  - Agrège les événements d'usage en statistiques journalières.
  - Purge les logs bruts et les agrégats trop anciens.
- **Fréquence conseillée** : 1 fois par jour.
- **Variables d'environnement** :
  - `USAGE_STATS_LOOKBACK_DAYS` (ex: `3`) : rattrapage des derniers jours.
  - `USAGE_EVENT_RETENTION_DAYS` (ex: `180`) : rétention des événements bruts.
  - `ERROR_LOG_RETENTION_DAYS` (ex: `180`) : rétention des logs d'erreur.
  - `USAGE_DAILY_RETENTION_DAYS` (ex: `730`) : rétention des stats journalières.
