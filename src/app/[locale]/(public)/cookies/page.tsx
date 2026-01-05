import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique cookies",
  description: "Informations sur l'usage des cookies et traceurs sur My Exams.",
};

const CookiesPolicyPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-heading">Politique cookies</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Cette page explique comment My Exams utilise les cookies et autres traceurs.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Cookies strictement nécessaires</h2>
          <p className="text-sm text-body">
            Le site utilise des cookies indispensables au fonctionnement du service, notamment
            pour l&apos;authentification, la sécurité et la continuité de navigation. Ces cookies ne
            peuvent pas être désactivés depuis le site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Mesure d&apos;audience</h2>
          <p className="text-sm text-body">
            My Exams peut utiliser un outil de mesure d&apos;audience en mode respectueux de la vie
            privée (statistiques agrégées, sans cookies publicitaires). Lorsque cette mesure
            d&apos;audience est utilisée dans le cadre de l&apos;exemption CNIL, aucun bandeau de
            consentement n&apos;est requis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Stockage local</h2>
          <p className="text-sm text-body">
            Certaines préférences peuvent être stockées localement dans votre navigateur (ex :
            thème d&apos;affichage, favoris). Ce stockage est distinct des cookies et sert uniquement à
            améliorer l&apos;expérience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Mise à jour</h2>
          <p className="text-sm text-body">
            Cette politique peut être modifiée à tout moment. La version en ligne fait foi.
          </p>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/privacy"
            className="text-sm font-semibold text-fg-brand hover:text-fg-brand-strong"
          >
            Politique de confidentialité
          </Link>
          <Link href="/" className="text-sm font-semibold text-fg-brand hover:text-fg-brand-strong">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
