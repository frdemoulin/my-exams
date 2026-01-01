# Dashboard unifié — v1

## Rôle
Point d’entrée unique dans l’écosystème.
Il traduit les droits en actions visibles et empêche les mauvais choix (QCM vs examen).

## Principes UX
- On n’affiche pas “plateforme QCM” / “plateforme examens”
- On affiche des intentions : S’entraîner / Se tester / Suivre mes progrès
- Pas de bouton mort : si pas de droit, pas d’action visible

## Structure v1
1) Mon objectif actuel (contextualisation)
2) Actions principales
   - S’entraîner (sans pression)
   - Se tester (conditions réelles)
   - Suivre mes progrès (stats, diagnostic, classement)
3) Continuer là où je me suis arrêté (réduction friction)

## Règles d’affichage (par entitlements)
- S’entraîner visible si : training.*.access OU qcm.*.train
- Se tester visible si : exam.*.attempt OU exam.*.white
- Progrès visible si : stats.*.diagnose OU rank.*.rank

## Mapping droits → blocs
- training.*.access → S’entraîner
- qcm.*.train → S’entraîner
- exam.*.attempt | exam.*.white → Se tester
- stats.*.diagnose → Suivre mes progrès
- rank.*.rank → Suivre mes progrès (classements MMOPK)

## Exemple PASS
- Objectif : PASS – UE Biophysique
- S’entraîner → QCM par UE
- Se tester → Examen blanc PASS
- Progrès → stats & diagnostic
- Continuer → dernier QCM/examen
