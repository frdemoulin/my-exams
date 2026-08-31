# Blueprint éditorial définitif — EB02 UE14

**Projet : My Exams — Santé PASS/LAS — UE14**  
**Référentiel : `docs/content/health-ue14-exam-blanc-authoring.md`**  
**Statut : FIGÉ — source éditoriale définitive avant intégration**

## 1. Paramètres

```text
EB02 UE14
100 questions
150 minutes

Q1–Q28    Chimie                  28
Q29–Q62   Biochimie               34
Q63–Q100  Biologie cellulaire     38
```

Aucune question n’exige de connaissances appartenant à deux EC différents. La synthèse et la transversalité sont exclusivement **intra-EC**.

## 2. Distribution des formats — figée

| EC | QRM | QRU | QROC | QRP | QRPL | QZONE | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| Chimie | 11 | 6 | 5 | 3 | 1 | 2 | 28 |
| Biochimie | 13 | 7 | 6 | 4 | 2 | 2 | 34 |
| Biologie cellulaire | 14 | 7 | 7 | 5 | 3 | 2 | 38 |
| **Total** | **38** | **20** | **18** | **12** | **6** | **6** | **100** |

QRM : **13** questions à 2 bonnes réponses, **13** à 3, **12** à 4.  
QRU : positions des réponses exactes **A/B/C/D/E = 4/4/4/4/4**.

## 3. Difficulté — figée

| EC | EASY | MEDIUM | HARD | Total |
|---|---:|---:|---:|---:|
| Chimie | 6 | 15 | 7 | 28 |
| Biochimie | 5 | 19 | 10 | 34 |
| Biologie cellulaire | 7 | 22 | 9 | 38 |
| **Total** | **18** | **56** | **26** | **100** |

## 4. Groupes liés — figés

| Groupe | Questions | EC | Contexte |
|---|---|---|---|
| G1 | Q18–Q20 | Chimie | Substitution SN2 du 2-bromobutane |
| G2 | Q54–Q56 | Biochimie | Cinétique de Michaelis–Menten avec inhibiteur |
| G3 | Q72–Q74 | Biologie cellulaire | Endocytose du LDL par récepteur |
| G4 | Q93–Q94 | Biologie cellulaire | Dommage de l’ADN et checkpoint G1/S |

Exactement **4 groupes / 11 questions liées**, sans chevauchement et sans groupe inter-EC.

## 5. Mises en situation médicales / pharmacologiques

Exactement 6 questions sont marquées comme contextualisées : **Q52, Q58, Q72–Q74 et Q85**.  
Le contexte ne requiert aucune connaissance clinique extérieure à l’UE14.

## 6. QZONE — figées

| Q | Cible | Asset | x | y | tolérance |
|---:|---|---|---:|---:|---:|
| 9 | nitrile-carbon | `q09-propanenitrile-sp-carbon.svg` | 0.68 | 0.5 | 0.075 |
| 20 | c2-bromo | `q20-2-bromobutane-reactive-carbon.svg` | 0.41 | 0.5 | 0.08 |
| 37 | anomeric-c1 | `q37-glucopyranose-anomeric-carbon.svg` | 0.73 | 0.36 | 0.085 |
| 56 | vmax-plateau | `q56-michaelis-vmax-plateau.svg` | 0.82 | 0.14 | 0.075 |
| 71 | centrosome | `q71-centrosome-microtubules.svg` | 0.55 | 0.52 | 0.1 |
| 90 | kinetochore | `q90-metaphase-kinetochore.svg` | 0.48 | 0.493 | 0.055 |

Les SVG et les coordonnées/tolérances sont **définitifs**. L’intégrateur ne les redessine pas et ne déplace aucune cible.

## 7. Grille question par question

| Q | EC | Chapitre / périmètre | Axe | Format | Diff. | Groupe | Médical | Themes |
|---:|---|---|---|---|:---:|:---:|:---:|---|
| 1 | Chimie | 1.1 Éléments chimiques / classification | Ions et nombre d’électrons | QRU | E | — | — | `6a7a4d32a918b78a835ff27d` |
| 2 | Chimie | 1.1 Éléments chimiques / classification | Magnésium, chlore et périodicité | QRM | M | — | — | `6a7b93dd1dff71cd982c43c1` |
| 3 | Chimie | 1.1 Éléments chimiques / classification | Configuration électronique | QROC | M | — | — | `6a7b8ca93d6fc9b257c55ab8` |
| 4 | Chimie | 1.2 Ions / électronégativité / liaisons | Tendances périodiques | QRP | M | — | — | `6a7b93dd1dff71cd982c43c0` |
| 5 | Chimie | 1.2 Ions / électronégativité / liaisons | Polarité et moment dipolaire | QRM | E | — | — | `6a8a0d8dd6a47c332b5a3b66` |
| 6 | Chimie | 1.3 Orbitales moléculaires | Liaisons sigma et pi | QRU | M | — | — | `6a8a0d88d6a47c332b5a3b45` |
| 7 | Chimie | 1.3 Orbitales moléculaires | Hybridation et géométrie | QRM | M | — | — | `6a8a0d9ad6a47c332b5a3bb5` |
| 8 | Chimie | 1.4 Forces intermoléculaires | Interactions et température d’ébullition | QRM | M | — | — | `6a8a106631d779778c65337e` |
| 9 | Chimie | 1.3 Orbitales moléculaires / 2.1 Fonctions | Carbone sp d’un nitrile | QZONE | M | — | — | `6a8a0d9ad6a47c332b5a3bb5`, `6a7ce15da2c08979a9142619` |
| 10 | Chimie | 2.1 Fonctions chimiques | Identification d’une fonction nitrile | QRU | E | — | — | `6a7ce15da2c08979a9142619` |
| 11 | Chimie | 2.1 / 2.8 Fonctions et nomenclature | Nomenclature d’un nitrile | QROC | M | — | — | `6a89f6520a0bc2f74d7f5c0c`, `6a89f6510a0bc2f74d7f5c08` |
| 12 | Chimie | 2.2 Isomérie / énantiomérie | Isomérie de constitution | QRM | M | — | — | `6a7da47760f468cd34ba49e3` |
| 13 | Chimie | 2.2 Isomérie / énantiomérie | R/S, énantiomères et activité optique | QRM | H | — | — | `6a7da47c60f468cd34ba49fb` |
| 14 | Chimie | 2.2 Isomérie / énantiomérie | Configuration E/Z | QRP | M | — | — | `6a7da47a60f468cd34ba49f1` |
| 15 | Chimie | 2.3 Hydrocarbures | Hydrogénation d’un alcène | QRU | M | — | — | `6a7dafb88752b34dca61d8f6` |
| 16 | Chimie | 2.3 Hydrocarbures | Clivage oxydant d’un alcène | QRM | H | — | — | `6a7dafb98752b34dca61d8fe` |
| 17 | Chimie | 2.4 Alcools / amines / halogénés | Oxydation d’un alcool primaire | QROC | M | — | — | `6a7db6fe05ec0659eae74631` |
| 18 | Chimie | 2.4 Alcools / amines / halogénés | SN2 sur un dérivé halogéné | QRM | H | G1 | — | `6a7db70105ec0659eae74643`, `6a7da47c60f468cd34ba49fb` |
| 19 | Chimie | 2.4 Alcools / amines / halogénés | Produit de substitution | QROC | H | G1 | — | `6a7db70105ec0659eae74643` |
| 20 | Chimie | 2.4 Alcools / amines / halogénés | Carbone attaqué en SN2 | QZONE | M | G1 | — | `6a7db70105ec0659eae74643` |
| 21 | Chimie | 2.4 Alcools / amines / halogénés | Comparer SN1 et SN2 | QRM | H | — | — | `6a7db70205ec0659eae74647` |
| 22 | Chimie | 2.5 Esters / thioesters / amides | Dérivés d’acides carboxyliques | QRP | M | — | — | `6a7dbefab676934885fd010f` |
| 23 | Chimie | 2.6 Aldéhydes / cétones | Condensation carbonyle-amine | QRM | M | — | — | `6a7dc4d8b73f1ee1e829c2f5` |
| 24 | Chimie | 2.7 Acides carboxyliques et fonctions diverses | Acide carboxylique / carboxylate | QRU | E | — | — | `6a7dd07747be2e611a3217a0` |
| 25 | Chimie | 2.8 Nomenclature organique | Nomenclature polyfonctionnelle | QRPL | H | — | — | `6a89f6520a0bc2f74d7f5c0c`, `6a89f6520a0bc2f74d7f5c0d` |
| 26 | Chimie | 2.8 Nomenclature organique | Structure et réactivité d’une molécule polyfonctionnelle | QRM | H | — | — | `6a89f6520a0bc2f74d7f5c0d`, `6a7ce15da2c08979a9142619` |
| 27 | Chimie | 2.8 Nomenclature organique | Lecture d’une réduction | QRU | E | — | — | `6a7dc4d8b73f1ee1e829c2f2` |
| 28 | Chimie | 2.8 Nomenclature organique | Nom d’un alcool secondaire | QROC | E | — | — | `6a89f6510a0bc2f74d7f5c09` |
| 29 | Biochimie | 1.1 Glucides — généralités | Rôles et propriétés générales | QRM | E | — | — | `6a7dda5c689c52db81009ecb` |
| 30 | Biochimie | 1.2 Oses simples et dérivés | Anomérie alpha/bêta | QRU | M | — | — | `6a7dda62689c52db81009ee5` |
| 31 | Biochimie | 1.2 Oses simples et dérivés | Épimérie et oses | QRM | M | — | — | `6a7e11c575d63c56a9d1e839` |
| 32 | Biochimie | 1.3 Osides / GAG / protéoglycanes | Liaison du lactose | QROC | M | — | — | `6a7e2073cd27601b0acc15bc` |
| 33 | Biochimie | 1.3 Osides / GAG / protéoglycanes | GAG, protéoglycanes et glycoprotéines | QRM | M | — | — | `6a7e2075cd27601b0acc15c7` |
| 34 | Biochimie | 2.1 Introduction aux lipides / acides gras | Nomenclature d’un acide gras | QRU | E | — | — | `6a7e208ccd27601b0acc1659` |
| 35 | Biochimie | 2.1 Introduction aux lipides / acides gras | Séries oméga | QRP | M | — | — | `6a7e208ecd27601b0acc1665` |
| 36 | Biochimie | 2.3 Eicosanoïdes | Précurseur et voies enzymatiques | QRM | M | — | — | `6a7e20a3cd27601b0acc16ed` |
| 37 | Biochimie | 1.2 Oses simples et dérivés | Carbone anomérique du glucose | QZONE | M | — | — | `6a7dda62689c52db81009ee5` |
| 38 | Biochimie | 2.4–2.5 Glycérides / glycérophospholipides | Produits des phospholipases | QRM | H | — | — | `6a7e2c37efd01033fcc18b2a`, `6a7e20a3cd27601b0acc16ec` |
| 39 | Biochimie | 2.6 Sphingolipides | Céramide et dérivés sphingolipidiques | QRM | M | — | — | `6a7e2c4cefd01033fcc18bb1` |
| 40 | Biochimie | 2.7 Stérols / stéroïdes / stérides | Stérols et stérides | QRU | E | — | — | `6a7e2c62efd01033fcc18c3f` |
| 41 | Biochimie | 2.4–2.7 Lipides membranaires | Organisation des lipides | QRP | M | — | — | `6a7e2c37efd01033fcc18b2a`, `6a7e2c62efd01033fcc18c3f` |
| 42 | Biochimie | 2.6 Sphingolipides | Définition du céramide | QROC | M | — | — | `6a7e2c4defd01033fcc18bb6` |
| 43 | Biochimie | 2.6 Sphingolipides | Comparer sphingomyéline et glycosphingolipides | QRM | H | — | — | `6a7e2c4defd01033fcc18bb7` |
| 44 | Biochimie | 2.7 Stérols / stéroïdes / stérides | Noyau stérane | QRU | M | — | — | `6a7e2c62efd01033fcc18c3f` |
| 45 | Biochimie | 3.1 Acides aminés | Charge, pH et point isoélectrique | QRM | M | — | — | `6a6e39760c23d446b3994abc` |
| 46 | Biochimie | 3.1 Acides aminés | Classification des chaînes latérales | QRPL | H | — | — | `6a89f45b0a0bc2f74d7f51c3` |
| 47 | Biochimie | 3.2 Structure des peptides et protéines | Nature de la liaison peptidique | QROC | E | — | — | `6a6e398d0c23d446b3994c0c` |
| 48 | Biochimie | 3.2 Structure des peptides et protéines | Structures secondaires et ponts disulfure | QRM | M | — | — | `6a7ee31ceb2cff79ffcc2685`, `6a7ee319eb2cff79ffcc2677` |
| 49 | Biochimie | 3.4 Rôles biologiques des protéines (1) | Structure des immunoglobulines | QRU | M | — | — | `6a7f15322704406d760875ea` |
| 50 | Biochimie | 3.4 Rôles biologiques des protéines (1) | Associer protéines et fonctions | QRP | M | — | — | `6a7f13fb8f2039a3fa5c26df` |
| 51 | Biochimie | 3.5 Rôles biologiques des protéines (2) | Myosine et contraction | QRM | M | — | — | `6a7f15312704406d760875e6`, `6a7f15382704406d76087609` |
| 52 | Biochimie | 3.4 Rôles biologiques des protéines (1) | P-glycoprotéine et résistance aux médicaments | QRU | M | — | oui | `6a7f13ff8f2039a3fa5c26f3` |
| 53 | Biochimie | 4.1 Enzymologie — propriétés et mécanisme | Cofacteur organique | QROC | E | — | — | `6a6e3d37db61a3ea18ae7760` |
| 54 | Biochimie | 4.2 Mesure d’activité enzymatique | Données Michaelis-Menten | QRU | M | G2 | — | `6a7f15712704406d76087753` |
| 55 | Biochimie | 4.1–4.2 Enzymologie | Interprétation cinétique de l’inhibiteur | QRM | H | G2 | — | `6a7f15712704406d76087753`, `6a6e3d4fdb61a3ea18ae78b5` |
| 56 | Biochimie | 4.2 Mesure d’activité enzymatique | Plateau de Vmax sur Michaelis-Menten | QZONE | H | G2 | — | `6a7f15712704406d76087753` |
| 57 | Biochimie | 4.2 Mesure d’activité enzymatique | Activité spécifique | QROC | M | — | — | `6a7f156f2704406d7608774e` |
| 58 | Biochimie | 4.1–4.2 Enzymologie | Inhibitions enzymatiques | QRM | H | — | oui | `6a6e3d4fdb61a3ea18ae78b5`, `6a7f15732704406d76087761` |
| 59 | Biochimie | 4.1 Enzymologie | Régulation allostérique | QRP | H | — | — | `6a7f15542704406d760876b1` |
| 60 | Biochimie | 4.2 Mesure d’activité enzymatique | Synthèse cinétique enzymatique | QRPL | H | — | — | `6a6e3d4edb61a3ea18ae78af`, `6a7f156e2704406d76087749` |
| 61 | Biochimie | 3.2–4.2 Protéines et enzymologie | Structure protéique et activité | QRM | H | — | — | `6a7ee317eb2cff79ffcc266e` |
| 62 | Biochimie | 1.3 Glucides + 2.6 Sphingolipides | Identification d’un glycosphingolipide | QROC | H | — | — | `6a7dda5c689c52db81009ecb`, `6a7e2c4cefd01033fcc18bb1` |
| 63 | Biologie cellulaire | Ch1 Organisation de la cellule | Organisation eucaryote | QRM | E | — | — | `6a8e0f057e71f38a3e530dd1` |
| 64 | Biologie cellulaire | Ch1 Organisation / méthodes | Immunofluorescence indirecte | QRU | E | — | — | `6a8e0f057e71f38a3e530dd4` |
| 65 | Biologie cellulaire | Ch2 Membrane plasmique | Glycocalyx | QROC | M | — | — | `6a8e0f1c7e71f38a3e530e51` |
| 66 | Biologie cellulaire | Ch2 Membrane plasmique | Transport actif secondaire | QROC | M | — | — | `6a8e0f1c7e71f38a3e530e53` |
| 67 | Biologie cellulaire | Ch2 Membrane plasmique | Na+/K+ ATPase et gradients | QRM | H | — | — | `6a8e0f1c7e71f38a3e530e53` |
| 68 | Biologie cellulaire | Ch2 Membrane plasmique | Récepteurs et canaux | QRP | M | — | — | `6a8e0f1c7e71f38a3e530e52` |
| 69 | Biologie cellulaire | Ch3 Cytosquelette | Microtubules, actine et filaments intermédiaires | QRM | M | — | — | `6a8e0f337e71f38a3e530edb` |
| 70 | Biologie cellulaire | Ch3 Cytosquelette | Moteur rétrograde sur microtubules | QROC | M | — | — | `6a8e0f327e71f38a3e530ed8` |
| 71 | Biologie cellulaire | Ch3 Cytosquelette | Centrosome et réseau microtubulaire | QZONE | M | — | — | `6a8e0f337e71f38a3e530eda`, `6a8e0f337e71f38a3e530edb` |
| 72 | Biologie cellulaire | Ch4 Système endomembranaire I | Endocytose médiée par récepteur | QRU | E | G3 | oui | `6a6f9de0b849f867f6f72023` |
| 73 | Biologie cellulaire | Ch4 Système endomembranaire I | Clathrine, adaptateurs, dynamine et tri LDL | QRM | H | G3 | oui | `6a6f9de0b849f867f6f72023` |
| 74 | Biologie cellulaire | Ch4 Système endomembranaire I | Compartiment de tri initial du LDL | QROC | M | G3 | oui | `6a6f9de0b849f867f6f72023` |
| 75 | Biologie cellulaire | Ch4–Ch5 Système endomembranaire | Manteaux vésiculaires et directions de trafic | QRM | H | — | — | `6a6f9de0b849f867f6f72022`, `6a6fa05eb4071341bc2beac2` |
| 76 | Biologie cellulaire | Ch5 RER / Golgi / lysosomes | N-glycosylation | QRU | M | — | — | `6a6fa05eb4071341bc2beac2` |
| 77 | Biologie cellulaire | Ch5 RER / Golgi / lysosomes | Lysosome et autophagie | QRM | M | — | — | `6a6fa05eb4071341bc2beac2`, `6a6fa05eb4071341bc2beac4` |
| 78 | Biologie cellulaire | Ch4–Ch5 Système endomembranaire | Rab/SNARE et fusion | QRP | M | — | — | `6a6fa05eb4071341bc2beac4` |
| 79 | Biologie cellulaire | Ch6 Peroxysomes | Organisation générale | QRU | E | — | — | `6a8e0f747e71f38a3e531069` |
| 80 | Biologie cellulaire | Ch6 Peroxysomes | Import PTS1 / PEX5 | QRM | M | — | — | `6a8e0f747e71f38a3e531069` |
| 81 | Biologie cellulaire | Ch6 Peroxysomes | Oxydation peroxysomale et peroxyde d’hydrogène | QROC | H | — | — | `6a8e0f747e71f38a3e53106b` |
| 82 | Biologie cellulaire | Ch6 Peroxysomes | Fonctions métaboliques du peroxysome | QRM | M | — | — | `6a8e0f747e71f38a3e53106c`, `6a8e0f747e71f38a3e53106b` |
| 83 | Biologie cellulaire | Ch6–Ch7 Organites | Peroxysome versus mitochondrie | QRP | H | — | — | `6a6fa34f5b1a508a2191a53b` |
| 84 | Biologie cellulaire | Ch7 Mitochondrie | Membranes et import des protéines | QRM | M | — | — | `6a8e0f897e71f38a3e5310f2` |
| 85 | Biologie cellulaire | Ch7 Mitochondrie | Cyanure et complexe IV | QRM | H | — | oui | `6a6fa5613f91c6201e5dd8d7` |
| 86 | Biologie cellulaire | Ch7 Mitochondrie | Génome mitochondrial | QRU | E | — | — | `6a6fa5613f91c6201e5dd8d7` |
| 87 | Biologie cellulaire | Ch7 Mitochondrie | Force motrice de l’ATP synthase | QROC | H | — | — | `6a8e0f8a7e71f38a3e5310f3` |
| 88 | Biologie cellulaire | Ch7 Mitochondrie | TOM et TIM | QRP | M | — | — | `6a8e0f897e71f38a3e5310f2` |
| 89 | Biologie cellulaire | Ch8 Noyau | Enveloppe nucléaire et pores | QRM | M | — | — | `6a8e0f9f7e71f38a3e531179` |
| 90 | Biologie cellulaire | Ch9 Cycle cellulaire | Kinétochore | QZONE | M | — | — | `6a6faa839a5abf9bf4c72763` |
| 91 | Biologie cellulaire | Ch8 Noyau | Lamina et chromatine périphérique | QRM | E | — | — | `6a8e0f9f7e71f38a3e53117a` |
| 92 | Biologie cellulaire | Ch8 Noyau | Signal NLS et import nucléaire | QRU | M | — | — | `6a6fa88b82070d802a35975d` |
| 93 | Biologie cellulaire | Ch9 Cycle cellulaire | Dommages ADN et arrêt G1/S | QRM | M | G4 | — | `6a6faa829a5abf9bf4c72760` |
| 94 | Biologie cellulaire | Ch9 Cycle cellulaire | Rb-E2F et complexes cycline-CDK | QRM | M | G4 | — | `6a6faa839a5abf9bf4c72762`, `6a6faa839a5abf9bf4c72761` |
| 95 | Biologie cellulaire | Ch9 Cycle cellulaire | Fuseau et bi-orientation | QRP | M | — | — | `6a6faa839a5abf9bf4c72763` |
| 96 | Biologie cellulaire | Ch9 Cycle cellulaire | Quantité d’ADN en G2 | QROC | M | — | — | `6a6faa829a5abf9bf4c72760` |
| 97 | Biologie cellulaire | Ch9 Cycle cellulaire | Quiescence G0 | QRU | E | — | — | `6a6faa829a5abf9bf4c72760` |
| 98 | Biologie cellulaire | Ch8 Noyau + Ch9 Cycle | Synthèse noyau et cycle | QRPL | H | — | — | `6a6fa88b82070d802a359760`, `6a6faa839a5abf9bf4c72764` |
| 99 | Biologie cellulaire | Ch4–Ch5 Système endomembranaire | Synthèse trafic et adressage | QRPL | M | — | — | `6a6fa05eb4071341bc2beac6` |
| 100 | Biologie cellulaire | Ch6–Ch8 Organites | Synthèse mitochondrie / peroxysome / noyau | QRPL | H | — | — | `6a6fa5613f91c6201e5dd8da`, `6a6fa34f5b1a508a2191a53b` |

## 8. Différenciation voulue par rapport à EB01

- aucun stem repris à l’identique ;
- quatre mini-dossiers différents : SN2, cinétique avec inhibiteur, endocytose LDL, checkpoint G1/S ;
- six QZONE différentes de celles d’EB01 ;
- exemples/molécules et enchaînements renouvelés ;
- les pièges classiques restent volontairement réutilisables lorsque pédagogiquement pertinents.

## 9. Gate éditorial

```text
100/100 questions définitives
0 placeholder
0 stem EB01 repris à l’identique
0 question inter-EC
38/20/18/12/6/6 formats conformes
18/56/26 difficultés conformes
4 groupes / 11 questions liées
6 QZONE validées visuellement
6 contextes médicalisés/pharmacologiques
100/100 questions thémées
80 mono-Theme / 20 bi-Theme / 120 relations
0 correction générique connue
0 anomalie TeX/KaTeX connue
```

