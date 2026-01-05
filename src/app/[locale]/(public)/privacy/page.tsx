import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Informations sur la collecte et l'utilisation des données personnelles.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-heading">Politique de confidentialité</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Cette politique décrit quelles données sont collectées et comment elles sont utilisées.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Responsable de traitement</h2>
          <p className="text-sm text-body">
            Le responsable de traitement est l&apos;éditeur du site My Exams. Pour toute demande liée
            à vos données personnelles, contactez{" "}
            <a
              href="mailto:contact@my-exams.fr"
              className="text-fg-brand hover:text-fg-brand-strong"
            >
              contact@my-exams.fr
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Données collectées</h2>
          <p className="text-sm text-body">
            Nous collectons uniquement les données nécessaires au fonctionnement du service :
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-body">
            <li>Informations de compte (email, nom si fourni).</li>
            <li>Données d&apos;authentification et de sécurité.</li>
            <li>Historique minimal d&apos;usage pour assurer la continuité (ex : dernier sujet consulté).</li>
            <li>Données techniques de navigation et de performance (mesure d&apos;audience).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Finalités</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-body">
            <li>Fournir l&apos;accès au service et gérer les comptes.</li>
            <li>Assurer la sécurité, prévenir les abus et résoudre les incidents.</li>
            <li>Améliorer l&apos;expérience utilisateur et la qualité des contenus.</li>
            <li>Mesurer l&apos;audience de manière agrégée.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Durées de conservation</h2>
          <p className="text-sm text-body">
            Les données sont conservées le temps nécessaire aux finalités décrites ci-dessus. Les
            journaux techniques et statistiques sont conservés pour une durée limitée et
            proportionnée.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Destinataires</h2>
          <p className="text-sm text-body">
            Les données sont traitées par My Exams et ses prestataires techniques (hébergement,
            email, analytics) strictement pour le fonctionnement du service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Vos droits</h2>
          <p className="text-sm text-body">
            Vous disposez des droits d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition et de
            limitation. Pour les exercer, contactez{" "}
            <a
              href="mailto:contact@my-exams.fr"
              className="text-fg-brand hover:text-fg-brand-strong"
            >
              contact@my-exams.fr
            </a>
            . Vous pouvez également déposer une réclamation auprès de la CNIL.
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
            href="/mentions-legales"
            className="text-sm font-semibold text-fg-brand hover:text-fg-brand-strong"
          >
            Mentions légales
          </Link>
          <Link href="/" className="text-sm font-semibold text-fg-brand hover:text-fg-brand-strong">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
