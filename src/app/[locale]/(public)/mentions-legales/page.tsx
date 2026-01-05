import Link from "next/link";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { getInternalOrigin, isExternalUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations légales et mentions obligatoires du site My Exams.",
};

const LegalMentionsPage = () => {
  const internalOrigin = getInternalOrigin();
  const renderUrl = "https://render.com";
  const renderUrlIsExternal = isExternalUrl(renderUrl, internalOrigin);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-heading">
            Mentions légales
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Informations légales établies conformément à la loi n°2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique (LCEN).
          </p>
        </div>

        {/* Éditeur */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">
            Éditeur du site
          </h2>
          <p className="text-sm text-body">
            Le site <strong>My Exams</strong> est édité par une personne physique.
            <br /><br />
            <strong>Nom et prénom</strong> : Frédéric Demoulin<br />
            <strong>Adresse postale</strong> : 6 rue de La-Rochefoucauld, 08200 Sedan (France)<br />
            <strong>Adresse email</strong> :{" "}
            <a
              href="mailto:contact@my-exams.fr"
              className="text-fg-brand hover:text-fg-brand-strong"
            >
              contact@my-exams.fr
            </a><br />
            <strong>Directeur de la publication</strong> : Frédéric Demoulin
            <br /><br />
            Le site est exploité à titre personnel. Aucune activité commerciale déclarée
            n&apos;est exercée à ce jour.
          </p>
        </section>

        {/* Hébergeur */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Hébergeur</h2>
          <p className="text-sm text-body">
            <strong>Render Services, Inc.</strong><br />
            525 Brannan St, Suite 300<br />
            San Francisco, CA 94107, États-Unis<br />
            <a
              href={renderUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-fg-brand hover:text-fg-brand-strong"
            >
              https://render.com
              {renderUrlIsExternal && <ExternalLink className="h-4 w-4" />}
            </a>
          </p>
        </section>

        {/* Objet */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Objet du site</h2>
          <p className="text-sm text-body">
            My Exams est une plateforme pédagogique permettant de centraliser,
            organiser et faciliter l&apos;accès à des sujets d&apos;examens officiels
            et à des ressources associées.
          </p>
        </section>

        {/* Sujets hébergés */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">
            Sujets d&apos;examen hébergés
          </h2>
          <p className="text-sm text-body">
            My Exams héberge et met à disposition des <strong>sujets d&apos;examen officiels</strong> (brevet des collèges, baccalauréat, examens nationaux), tels que publiés par les autorités compétentes (ministère de l&apos;Éducation nationale, académies, organismes publics).
          </p>
          <p className="text-sm text-body">
            Ces documents constituent des <strong>documents administratifs publics</strong> et sont diffusés à l&apos;identique, sans modification.
            Leur reproduction et leur diffusion sont autorisées par la réglementation
            applicable.
          </p>
          <p className="text-sm text-body">
            La source institutionnelle (session, année, académie ou autorité émettrice)
            est systématiquement indiquée lorsqu&apos;elle est connue.
          </p>
        </section>

        {/* Liens externes */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">
            Ressources externes et liens hypertextes
          </h2>
          <p className="text-sm text-body">
            My Exams propose également des liens hypertextes vers des ressources externes,
            notamment des corrections d&apos;annales diffusées par des organismes tiers
            (associations, sites pédagogiques, institutions).
          </p>
          <p className="text-sm text-body">
            Les ressources provenant de sites tiers (par exemple Labolycée, APMEP, autres
            services pédagogiques) sont des contenus créés par leurs éditeurs respectifs.
          </p>
          <p className="text-sm text-body">
            My Exams n&apos;héberge pas ces ressources et se contente de proposer des liens
            hypertextes vers ces services externes.
          </p>
          <p className="text-sm text-body">
            Lorsque vous suivez ces liens, vous quittez le site My Exams et accédez à un
            contenu édité, contrôlé et publié par ces tiers.
          </p>
          <p className="text-sm text-body">
            L&apos;éditeur du site ne saurait être tenu responsable du contenu,
            de la disponibilité ou des modifications des ressources externes ainsi référencées.
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">
            Propriété intellectuelle
          </h2>
          <p className="text-sm text-body">
            La structure du site, son interface, son graphisme ainsi que les contenus
            originaux produits par My Exams (métadonnées, indexations, résumés,
            classifications, éléments éditoriaux) sont protégés par le droit
            de la propriété intellectuelle.
          </p>
          <p className="text-sm text-body">
            Toute reproduction ou exploitation non autorisée de ces éléments est interdite.
            Les documents officiels d&apos;examen et les contenus tiers restent soumis
            à leur régime juridique propre.
          </p>
        </section>

        {/* IA */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">
            Intelligence artificielle
          </h2>
          <p className="text-sm text-body">
            My Exams utilise des outils d&apos;intelligence artificielle afin de produire
            des résumés descriptifs et des métadonnées pédagogiques à partir
            des sujets d&apos;examen.
          </p>
          <p className="text-sm text-body">
            Ces contenus sont fournis à titre informatif et ne se substituent pas
            aux documents officiels, lesquels font seuls foi.
          </p>
        </section>

        {/* Données personnelles */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">
            Données personnelles
          </h2>
          <p className="text-sm text-body">
            Les données personnelles collectées sont strictement nécessaires
            au fonctionnement du service.
          </p>
          <p className="text-sm text-body">
            Conformément au RGPD, vous disposez de droits que vous pouvez exercer
            en contactant{" "}
            <a
              href="mailto:contact@my-exams.fr"
              className="text-fg-brand hover:text-fg-brand-strong"
            >
              contact@my-exams.fr
            </a>
            , ou en saisissant la CNIL.
          </p>
          <p className="text-sm text-body">
            Pour plus d&apos;informations, consultez la{" "}
            <Link href="/privacy" className="text-fg-brand hover:text-fg-brand-strong">
              Politique de confidentialité
            </Link>.
          </p>
        </section>

        {/* Cookies */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Cookies</h2>
          <p className="text-sm text-body">
            Le site utilise uniquement des cookies strictement nécessaires
            à son fonctionnement.
          </p>
          <p className="text-sm text-body">
            Pour en savoir plus, consultez la{" "}
            <Link href="/cookies" className="text-fg-brand hover:text-fg-brand-strong">
              Politique cookies
            </Link>.
          </p>
        </section>

        {/* Responsabilité */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Responsabilité</h2>
          <p className="text-sm text-body">
            L&apos;éditeur ne saurait être tenu responsable des dommages résultant
            de l&apos;utilisation du site, sous réserve des dispositions légales impératives.
          </p>
        </section>

        {/* Mise à jour */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">
            Mise à jour des mentions légales
          </h2>
          <p className="text-sm text-body">
            Les présentes mentions légales peuvent être modifiées à tout moment.
            La version en ligne fait foi.
          </p>
        </section>

        <div>
          <Link
            href="/"
            className="text-sm font-semibold text-fg-brand hover:text-fg-brand-strong"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalMentionsPage;
