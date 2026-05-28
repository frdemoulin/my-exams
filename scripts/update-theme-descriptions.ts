import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

async function main() {
  console.log(
    "Script obsolète: update-theme-descriptions.ts ne s'applique plus car Theme.description a été supprimé."
  );
}

main().catch((error) => {
  console.error("Erreur durant la mise à jour des thèmes :", error);
  process.exit(1);
});
