"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormStatus = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const router = useRouter();
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const getReturnHref = () => {
    if (typeof window === "undefined") return "/";
    const referrer = document.referrer;
    if (!referrer) return "/";
    try {
      const refUrl = new URL(referrer);
      if (refUrl.origin !== window.location.origin) return "/";
      const path = `${refUrl.pathname}${refUrl.search}${refUrl.hash}`;
      return path && path !== window.location.pathname ? path : "/";
    } catch {
      return "/";
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue.");
      }

      form.reset();
      setStatus("success");
      toast.success("Message envoyé. Merci pour votre retour.");
      router.push(getReturnHref());
    } catch (error) {
      setStatus("error");
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue."
      );
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-heading"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="prenom.nom@exemple.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-heading"
        >
          Nom (optionnel)
        </label>
        <Input id="name" name="name" type="text" placeholder="Votre nom" />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-heading"
        >
          Sujet
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Sujet de votre message"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-heading"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Décrivez votre demande..."
          required
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Envoi en cours..." : "Envoyer"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
