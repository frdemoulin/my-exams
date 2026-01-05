import { Metadata } from "next";

import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacte l'equipe My Exams pour une question ou un retour.",
};

const ContactPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-heading">Contact</h1>
          <p className="text-sm text-muted-foreground">
            Une question, un bug ou un retour ? Écris-nous via ce formulaire.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
