import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

async function main() {
  console.log(
    "Script obsolète: remediate-sciences-physiques-taxonomy.ts ciblait l'ancien modèle Theme avec descriptions et domainId unique."
  );
  console.log(
    "Aucune action exécutée. Prévoir une remédiation dédiée si la taxonomie doit encore être ajustée sur domainIds/chapterIds."
  );
}

main().catch((error) => {
  console.error('Erreur lors de la remédiation de la taxonomie Sciences physiques :', error);
  process.exit(1);
});
