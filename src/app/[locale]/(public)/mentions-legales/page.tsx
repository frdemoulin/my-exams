import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const LegalMentionsPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-heading">Mentions légales</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Informations légales relatives à l&#39;éditeur et à l&#39;hébergement du site.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Éditeur du site</h2>
          <p className="text-sm text-body">
            Nom : à compléter<br />
            Adresse : à compléter<br />
            Email : contact@my-exams.fr
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Hébergeur</h2>
          <p className="text-sm text-body">
            Render<br />
            525 Brannan St, Suite 300, San Francisco, CA 94107, USA<br />
            https://render.com
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Propriété intellectuelle</h2>
          <p className="text-sm text-body">
            Le contenu (textes, éléments graphiques, logo, structure du site) est protégé par le droit
            de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Données personnelles</h2>
          <p className="text-sm text-body">
            Les données personnelles collectées sur ce site sont utilisées uniquement pour le
            fonctionnement du service. Vous pouvez exercer vos droits d&#39;accès, de rectification et de
            suppression en contactant l&#39;éditeur.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Cookies</h2>
          <p className="text-sm text-body">
            Le site peut utiliser des cookies strictement nécessaires au fonctionnement et à
            l&#39;amélioration de l&#39;expérience utilisateur.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Responsabilité</h2>
          <p className="text-sm text-body">
            L&#39;éditeur ne peut être tenu responsable des dommages directs ou indirects liés à l&#39;usage du
            site ou à l&#39;impossibilité d&#39;y accéder.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-heading">Mise à jour</h2>
          <p className="text-sm text-body">
            Les présentes mentions légales peuvent être modifiées à tout moment. La version en ligne
            fait foi.
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
