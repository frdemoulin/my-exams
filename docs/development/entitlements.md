# Entitlements — guide technique (v1)

## Objectif
Préparer un système de droits **sans impact visible** sur la v1.
Tout reste accessible pour l’instant ; les droits ne servent qu’à structurer l’avenir.

## Modèles Prisma
- `Entitlement` : un droit atomique (code + libellé).
- `SubscriptionPlan` : un plan d’accès (ex. FREE).
- `SubscriptionPlanEntitlement` : lien plan ↔ droits.
- `UserEntitlement` : droits spécifiques par utilisateur (override).
- `UserSubscription` : abonnement d’un utilisateur (statut).

## Droits macro (v1)
Codes utilisés actuellement :
- `ACCESS_EXERCISES`
- `ACCESS_EXAM_PAPERS`
- `ACCESS_CORRECTIONS`
- `ACCESS_ADMIN`

## Endpoint
`GET /api/me/entitlements`
- Si non connecté : retourne la baseline (droits actifs).
- Si connecté : retourne les droits utilisateur + ceux des abonnements actifs.
- Source retournée : `baseline` ou `user`.

Fichier : `src/app/api/me/entitlements/route.ts`

## Helpers backend
Fichier : `src/lib/entitlements.ts`

Fonctions :
- `fetchEntitlementsForUser(userId)`
- `assertEntitlement(userId, entitlementCode)`

Remarque : `assertEntitlement()` n’est **pas** utilisé pour bloquer en v1.

## Seeds
Deux seeds sont en place :
- `prisma/seeds/entitlement.seed.ts`
- `prisma/seeds/subscription-plan.seed.ts` (plan `FREE`)

Commande :
- `npm run db:seed`

## Exemple d’usage (préparation v2)
```ts
import { assertEntitlement } from '@/lib/entitlements';

await assertEntitlement(userId, 'ACCESS_CORRECTIONS');
```

## Notes
- Aucune logique d’abonnement ni paywall n’est active.
- Les droits servent de base pour l’EPIC 3 / v2.
