# Tests toasts CRUD (Next.js 16)

Objectif : vérifier que les toasts CRUD utilisent les traductions i18n et s’affichent après les redirections.

## État actuel et prérequis
- Le dépôt inclut aujourd’hui uniquement des tests E2E Playwright (`npm run test:e2e`) qui valident le toast de suppression des centres d’examen (`tests/e2e/admin-examination-centers.spec.ts`).
- `tests/e2e/global-setup.ts` crée un admin (via Prisma) et génère le `storageState` Playwright à partir de `AUTH_SECRET`. Ce secret **doit** être présent dans `.env.local`, tout comme `DATABASE_URL`.
- Préparer la base avant les tests : lancer MongoDB, puis au choix `npm run db:seed` (une fois) ou `E2E_RESET_DB=true npm run test:e2e` pour reset + seed automatique avant chaque run.
- Vitest / Testing Library / MSW ne sont pas installés par défaut : ajouter les dépendances ci-dessous si l’on commence les tests unitaires/intégration.

## Lancer les tests E2E (Playwright)
1. Vérifier la présence de `.env.local` avec `DATABASE_URL` et `AUTH_SECRET`, et que MongoDB tourne.
2. (Optionnel) Choisir le scénario de base de données :  
   - `npm run db:seed` pour un seeding manuel une fois pour toutes.  
   - `E2E_RESET_DB=true npm run test:e2e` pour reset+seed automatique avant chaque run.
3. Exécuter `npm run test:e2e`. Par défaut, Playwright démarre `npm run dev` sur `http://localhost:${E2E_PORT:-3000}`.

Variables utiles :
- `E2E_BASE_URL` pour pointer vers un serveur déjà lancé (ex : staging).
- `E2E_SKIP_SERVER=true` si le serveur Next est déjà démarré.
- `E2E_AUTH_STATE` (défaut `playwright/.auth/admin.json`) pour l’emplacement du storage state généré en setup.
- `E2E_TEST_EMAIL` / `E2E_TEST_NAME` pour personnaliser l’utilisateur admin de test.

Notes :
- Les traces/vidéos sont conservées sur échec (`test-results/`).
- La route `/api/test-login` reste disponible pour créer un cookie de session en envoyant un POST avec le header `x-e2e-test-login: ${E2E_TEST_LOGIN_SECRET}`, mais la suite Playwright actuelle n’en dépend pas.

## Stack recommandée
- **Vitest** + **@testing-library/react** + **@testing-library/jest-dom** (unitaires/intégration).
- **MSW** pour mocker `/api/toast` dans les tests d’intégration client.
- **Playwright** pour un test fonctionnel bout-en-bout (optionnel).
- **next-intl/test** pour mocker les traductions (ou mocks maison de `getTranslations`).

## Pré-requis (devDependencies)
```
npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event msw
```
Ajouter dans `vite.config.ts` (ou `vitest.config.ts`) : `test: { environment: "jsdom", globals: true, setupFiles: "./vitest.setup.ts" }`.  
Dans `vitest.setup.ts` :
```ts
import "@testing-library/jest-dom";
```

## Tests unitaires : génération des messages
But : `setCrudSuccessToast` retourne un message traduit à partir de `messages.success.*` et `entities.*.singular`.

Principes :
- Mock de `next-intl/server` pour retourner des fonctions de traduction déterministes.
- Mock de `next/headers` pour capturer `cookies().set`.

Exemple (pseudocode vitest) :
```ts
vi.mock("next-intl/server", () => ({
  getTranslations: vi.fn(async (ns: string) => {
    const dict = {
      "messages.success": (key: string, { entity }: any) =>
        `${key.toUpperCase()} ${entity}`,
      "entities.theme": (key: string) => (key === "singular" ? "Thème" : ""),
    };
    return dict[ns];
  }),
}));

const setMock = vi.fn();
vi.mock("next/headers", () => ({
  cookies: async () => ({ set: setMock, get: vi.fn(), delete: vi.fn() }),
}));

it("compose un message de succès traduit", async () => {
  await setCrudSuccessToast("theme", "created");
  expect(setMock).toHaveBeenCalledWith(
    "toast-message",
    JSON.stringify({ type: "success", message: "CREATED Thème" }),
    expect.any(Object)
  );
});
```

## Tests d’intégration client : affichage ToastDisplay
But : `ToastDisplay` appelle `/api/toast`, efface le cookie côté API et déclenche le bon toast (success/error/info) à la navigation.

Principes :
- Rendu avec React Testing Library.
- Mock `react-hot-toast` pour tracer `success/error`.
- MSW pour répondre sur `/api/toast`.
- Mock léger de `next/navigation` (`usePathname`) si nécessaire.

Exemple :
```ts
vi.mock("react-hot-toast", () => ({
  success: vi.fn(),
  error: vi.fn(),
  default: vi.fn(),
}));

server.use(
  rest.get("/api/toast", (_req, res, ctx) =>
    res(ctx.json({ type: "success", message: "Thème créé" }))
  )
);

it("affiche un toast success depuis le cookie", async () => {
  render(<ToastDisplay />);
  await waitFor(() => expect(toast.success).toHaveBeenCalledWith("Thème créé"));
});
```

## Tests fonctionnels (Playwright)
But : valider le flux réel (formulaire -> redirection -> toast) dans un vrai navigateur, à la manière de Panther.

### Mise en place
- Dépendances et binaire : `npm i -D @playwright/test` puis `npx playwright install chromium`.
- Script : `"test:e2e": "playwright test"`.
- Config : `playwright.config.ts` (baseURL `E2E_BASE_URL` ou `http://localhost:${E2E_PORT:-3000}`, webServer `PORT=${E2E_PORT} npm run dev` sauf si `E2E_SKIP_SERVER=true`, `globalSetup` qui peut reset DB si `E2E_RESET_DB=true`).
- Login auto e2e : `globalSetup` appelle `/api/test-login` avec le header `x-e2e-test-login`. Paramètres :
  - `E2E_TEST_LOGIN_SECRET` (obligatoire pour activer la route de login test).
  - `E2E_TEST_EMAIL` (par défaut `admin-e2e@example.com`), `E2E_TEST_NAME` optionnel.
  - `E2E_AUTH_STATE` (chemin du storage state Playwright, défaut `playwright/.auth/admin.json`).
- Test existant : `tests/e2e/admin-examination-centers.spec.ts` (suppression -> toast “Centre d'examen supprimé avec succès”).

### Exemple de test E2E (pseudo-code)
```ts
import { test, expect } from "@playwright/test";

test.use({ storageState: "playwright/.auth/admin.json" });

test("suppression de thème -> toast traduit", async ({ page }) => {
  await page.goto("http://localhost:3000/admin/themes");

  // Ouvre le menu Actions de la première ligne
  await page.getByRole("button", { name: "Actions" }).first().click();
  await page.getByRole("menuitem", { name: "Supprimer" }).click();

  // Modale de confirmation
  await expect(page.getByText("Confirmer la suppression")).toBeVisible();
  await page.getByRole("button", { name: "Supprimer" }).click();

  // Vérifie le toast (DOM rendu par react-hot-toast)
  await expect(page.getByText("Thème supprimé avec succès")).toBeVisible();
});
```

### Bonnes pratiques
- **Isolation** : créer/seed une entité dédiée et la supprimer dans le test; nettoyer après si nécessaire.
- **Réseau** : pour ce scénario, ne pas mocker `/api/toast` afin de valider la chaîne complète (action serveur -> cookie -> fetch client -> toast).
- **Flakiness** : préférer `expect(...).toBeVisible()` aux `waitForTimeout`.

## Points d’attention
- Les actions serveur redirigent : dans les tests unitaires on ne suit pas la redirection, on vérifie seulement le set du cookie.
- Nettoyer les mocks entre tests (`vi.clearAllMocks()`).
- Garder les tests hermétiques : pas de dépendance à la vraie base; préférer les mocks MSW ou des adaptateurs en mémoire.
