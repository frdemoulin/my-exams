# OCR texte + image : pdf-parse et Tesseract

## pdf-parse (PDF texte)
- Dépendance installée : `pdf-parse`.
- Utilisé dans `PdfParseOcrService` pour extraire le texte directement (PDF “texte”).
- Pas de dépendance native lourde.

## Fallback Tesseract (PDF scannés)
- Objectif : quand le PDF est scanné (peu ou pas de texte pour pdf-parse), on convertit le PDF en images puis on applique Tesseract.
- Implémentation : `TesseractOcrService` (utilise `pdftoppm` + `tesseract` via la CLI).

### Prérequis systèmes
- Installer Tesseract :
  - macOS : `brew install tesseract` (+ `brew install tesseract-lang` si besoin du modèle fra)
  - Debian/Ubuntu : `apt-get install tesseract-ocr tesseract-ocr-fra`
- Installer Poppler (pour `pdftoppm`) :
  - macOS : `brew install poppler`
  - Debian/Ubuntu : `apt-get install poppler-utils`
- Modèle langue : `fra` (option `-l fra` dans la commande).

### Comment ça marche
1) Le PDF est écrit dans un répertoire temporaire.
2) `pdftoppm -png input.pdf prefix` convertit chaque page en PNG.
3) `tesseract pageX.png stdout -l fra` extrait le texte de chaque page, concaténé.

### Activation du fallback
- Dans le batch d’enrichissement : `USE_TESSERACT_FALLBACK=true` (déclenché si `pdf-parse` renvoie peu de texte).
- Dans `PdfParseOcrService`, seuil par défaut : 200 caractères ; si moins et fallback activé, on tente Tesseract.

### Limitations
- Dépend de la présence des binaires `pdftoppm` et `tesseract` dans le PATH.
- Plus lent que `pdf-parse`, consomme CPU.
- Pas de gestion avancée des images (ex: rotation, bruit).
