import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

async function main() {
  console.log(
    "Script obsolète: cleanup-mechanics-overlap.ts ciblait l'ancien modèle Theme avec domainId unique."
  );
  console.log(
    "Aucune action exécutée. Prévoir un nouveau script si un nettoyage équivalent est requis sur domainIds."
  );
}

main().catch((error) => {
  console.error(
    'Erreur lors du nettoyage du chevauchement Mouvement et interactions :',
    error
  );
  process.exit(1);
});
