# Matrice des droits (entitlements) — v1

## Objectif
Traduire les parcours en droits atomiques vérifiables côté backend.
Les plateformes ne “connaissent” pas les abonnements, elles vérifient des droits.

## Convention de nommage
<domaine>.<niveau>.<action>

Exemples :
- exam.bac.white
- qcm.pass.train
- training.science.access

## Domaines
- training : exercices fondamentaux
- exam : annales / examens / examens blancs
- qcm : QCM normés
- stats : diagnostics, progression
- rank : classement

## Droits v1 (liste normalisée)
### Entraînement fondamental
- training.science.access

### Collège / Lycée (consultation annales + entraînement)
- training.college.access
- training.lycee.access
- exam.college.read
- exam.lycee.read

### Bac
- exam.bac.read
- exam.bac.attempt
- exam.bac.white
- stats.bac.diagnose

### PASS / LAS
- qcm.pass.train
- exam.pass.attempt
- exam.pass.white
- stats.pass.diagnose

### MMOPK
- qcm.mmopk.train
- exam.mmopk.attempt
- exam.mmopk.white
- stats.mmopk.diagnose
- rank.mmopk.rank

## Matrice parcours ↔ droits
### Parcours Collège
- training.college.access
- exam.college.read

### Parcours Lycée
- training.lycee.access
- exam.lycee.read

### Parcours Bac
- exam.bac.read
- exam.bac.attempt
- exam.bac.white
- stats.bac.diagnose

### Parcours PASS / LAS
- qcm.pass.train
- exam.pass.attempt
- exam.pass.white
- stats.pass.diagnose
- training.science.access

### Parcours MMOPK
- qcm.mmopk.train
- exam.mmopk.attempt
- exam.mmopk.white
- stats.mmopk.diagnose
- rank.mmopk.rank
- training.science.access

## Reco implémentation (v1)
- une source de vérité backend pour les droits
- middleware/guard : assertEntitlement(user, 'exam.pass.white')
- le front lit les droits pour afficher/masquer, mais ne décide jamais
