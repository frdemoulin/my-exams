import Link from "next/link";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { getInternalOrigin, isExternalUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const LegalMentionsPage = () => {
  const internalOrigin = getInternalOrigin();
  const renderUrl = "https://render.com";
  const renderUrlIsExternal = isExternalUrl(renderUrl, internalOrigin);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-heading">Mentions légales</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Informations légales relatives à l&#39;éditeur, à l&#39;hébergement et au fonctionnement du site.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Éditeur du site</h2>
          <p className="text-sm text-body">
            Nom / Raison sociale : à compléter
            <br />
            Statut (ex. EI, micro-entreprise, société) : à compléter
            <br />
            Adresse : à compléter
            <br />
            Email : contact@my-exams.fr
            <br />
            SIREN/SIRET (si applicable) : à compléter
            <br />
            Directeur de la publication : à compléter
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Hébergeur</h2>
          <p className="text-sm text-body">
            Render
            <br />
            525 Brannan St, Suite 300, San Francisco, CA 94107, USA
            <br />
            <a
              href={renderUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-fg-brand hover:text-fg-brand-strong"
            >
              render.com
              {renderUrlIsExternal && <ExternalLink className="h-4 w-4" />}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Propriété intellectuelle</h2>
          <p className="text-sm text-body">
            La structure du site, les éléments graphiques, le logo, ainsi que les contenus et
            données produits par My Exams (notamment les résumés, métadonnées, indexations et
            éléments éditoriaux) sont protégés par le droit de la propriété intellectuelle.
            Toute reproduction, représentation ou exploitation non autorisée de ces éléments est
            interdite.
          </p>
          <p className="text-sm text-body">
            Les sujets, énoncés, documents et marques provenant de tiers restent la propriété de
            leurs auteurs/éditeurs respectifs. My Exams ne revendique aucun droit de propriété sur
            ces contenus tiers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Intelligence artificielle</h2>
          <p className="text-sm text-body">
            Dans le cadre de son fonctionnement, le site My Exams utilise des outils
            d&#39;intelligence artificielle afin de générer des résumés descriptifs
            d&#39;exercices à partir des énoncés correspondants.
          </p>
          <p className="text-sm text-body">
            Ces résumés sont générés à l&#39;aide d&#39;une intelligence artificielle et relus
            par l&#39;équipe My Exams. Ils sont fournis à titre indicatif et ne se
            substituent pas à la lecture de l&#39;énoncé officiel, lequel fait seul foi.
          </p>
          <p className="text-sm text-body">
            My Exams ne peut garantir ni l&#39;exhaustivité ni l&#39;absence d&#39;erreurs dans ces
            résumés et décline toute responsabilité quant à leur interprétation ou à
            l&#39;usage qui pourrait en être fait dans un cadre pédagogique ou d&#39;évaluation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Données personnelles</h2>
          <p className="text-sm text-body">
            Les données personnelles collectées sur le site sont utilisées uniquement pour le
            fonctionnement du service (création et gestion de compte, authentification, support et
            sécurité). Le responsable de traitement est l&#39;éditeur du site.
          </p>
          <p className="text-sm text-body">
            Vous pouvez exercer vos droits d&#39;accès, de rectification, d&#39;effacement, d&#39;opposition et
            de limitation en contactant l&#39;éditeur à l&#39;adresse{" "}
            <a
              href="mailto:contact@my-exams.fr"
              className="text-fg-brand hover:text-fg-brand-strong"
            >
              contact@my-exams.fr
            </a>
            . Vous disposez également du droit d&#39;introduire une réclamation auprès de la CNIL.
          </p>
          <p className="text-sm text-body">
            Pour en savoir plus, consultez notre{" "}
            <Link
              href="/privacy"
              className="text-fg-brand hover:text-fg-brand-strong"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Cookies</h2>
          <p className="text-sm text-body">
            Le site utilise des cookies strictement nécessaires à son fonctionnement (par exemple,
            pour l&#39;authentification et la sécurité). Selon les choix d&#39;implémentation, des cookies de
            mesure d&#39;audience peuvent également être utilisés, le cas échéant dans les conditions
            prévues par la réglementation applicable.
          </p>
          <p className="text-sm text-body">
            Pour en savoir plus, consultez notre{" "}
            <Link
              href="/cookies"
              className="text-fg-brand hover:text-fg-brand-strong"
            >
              Politique cookies
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Responsabilité</h2>
          <p className="text-sm text-body">
            L&#39;éditeur ne peut être tenu responsable des dommages directs ou indirects liés à
            l&#39;usage du site ou à l&#39;impossibilité d&#39;y accéder, sous réserve des dispositions légales
            impératives applicables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Mise à jour</h2>
          <p className="text-sm text-body">
            Les présentes mentions légales peuvent être modifiées à tout moment. La version en
            ligne fait foi.
          </p>
        </section>

        <div>
          <Link href="/" className="text-sm font-semibold text-fg-brand hover:text-fg-brand-strong">
            Retour à l&#39;accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalMentionsPage;
