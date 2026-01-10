import { Metadata } from "next";

import { PublicHeader } from "@/components/shared/public-header";
import { buildCanonicalUrl } from "@/lib/seo";
import ContactForm from "./_components/contact-form";

const canonical = buildCanonicalUrl("/contact");

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacte l'équipe My Exams pour une question ou un retour.",
  alternates: canonical ? { canonical } : undefined,
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto w-full max-w-4xl px-4 py-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-heading">Contact</h1>
            <p className="text-sm text-muted-foreground">
              Une question, un bug ou un retour ? Écris-nous via ce formulaire.
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
