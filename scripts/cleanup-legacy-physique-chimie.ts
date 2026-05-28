import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

async function main() {
  console.log(
    "Script obsolète: cleanup-legacy-physique-chimie.ts ciblait l'ancien modèle Theme (descriptions + domainId)."
  );
  console.log(
    "Aucune action exécutée. Utiliser un script dédié si un nouveau nettoyage legacy est nécessaire sur domainIds/chapterIds."
  );
}

main().catch((error) => {
  console.error('Erreur lors du nettoyage legacy Physique-Chimie :', error);
  process.exit(1);
});
