import Link from "next/link";
import Image from "next/image";
import { AuthError } from "next-auth";

import facebookIcon from "@/assets/images/facebook.svg";
import googleIcon from "@/assets/images/google.svg";
import spotifyIcon from "@/assets/images/spotify.svg";
import gitHubIcon from "@/assets/images/git-hub.svg";
import { signIn, providerMap } from "@/lib/auth/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { APP_NAME } from "@/config/app";

export async function LogIn() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md flex items-center flex-col hover:bg-neutral-primary-soft hover:shadow-xs">
        <CardHeader className="space-y-6">
          <div className="flex justify-center">
            <div className="text-xl font-extrabold uppercase text-heading">{APP_NAME}</div>
          </div>
          <CardTitle className="flex justify-center">Connexion à l&apos;application</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <p className="text-sm text-body">Se connecter avec</p>
            <TooltipProvider>
              {Object.values(providerMap).map((provider) => (
                <form
                  className="flex items-center"
                  key={provider.id}
                  action={async () => {
                    "use server";

                    try {
                      await signIn(provider.id);
                    } catch (error) {
                      // Signin can fail for a number of reasons, such as the user
                      // not existing, or the user not having the correct role.
                      // In some cases, you may want to redirect to a custom error
                      if (error instanceof AuthError) {
                        // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                      }

                      // Otherwise if a redirects happens NextJS can handle it
                      // so you can just re-thrown the error and let NextJS handle it.
                      // Docs:
                      // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                      throw error;
                    }
                  }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="submit"
                        variant="outline"
                        size="icon"
                        aria-label={`Se connecter avec ${provider.name}`}
                      >
                        {provider.name === "GitHub" && <Image src={gitHubIcon} width={25} alt="GitHub logo" />}
                        {provider.name === "Facebook" && <Image src={facebookIcon} width={20} alt="Facebook logo" />}
                        {provider.name === "Google" && <Image src={googleIcon} width={20} alt="Google logo" />}
                        {provider.name === "Spotify" && <Image src={spotifyIcon} width={20} alt="Spotify logo" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {provider.name}
                    </TooltipContent>
                  </Tooltip>
                </form>
              ))}
            </TooltipProvider>
          </div>
          {/* Separator between social media sign in and magic link sign in */}
          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-default after:mt-0.5 after:flex-1 after:border-t after:border-default">
            <p
              className="mx-4 mb-0 text-center font-semibold text-heading">
              Ou
            </p>
          </div>
          {/* lien magique */}
          <div>
            <p className="text-body text-sm">Recevoir un lien de connexion par email</p>
            <form action={async (formData) => {
              "use server";
              try {
                await signIn("resend", formData);
              } catch (error) {
                // Signin can fail for a number of reasons, such as the user
                // not existing, or the user not having the correct role.
                // In some cases, you may want to redirect to a custom error
                if (error instanceof AuthError) {
                  // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                }
              }
            }}
            >
              <Input
                type="email"
                name="email"
                placeholder="mail@example.com"
                className="mt-2 h-10"
              />
              <Button
                type="submit"
                className="mt-2 w-full font-semibold"
              >
                Envoyer l&apos;email
              </Button>
            </form>
          </div>
          {/* signup link */}
          <div className="text-center text-sm mt-4">
            Pas de compte ?{" "}
            <Link className="text-fg-brand hover:text-fg-brand-strong" href="/signup">
              Créer un compte
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
