import { redirect } from "next/navigation";
import Image from "next/image";
import { AuthError } from "next-auth";

import facebookIcon from "@/assets/images/facebook.svg";
import googleIcon from "@/assets/images/google.svg";
import spotifyIcon from "@/assets/images/spotify.svg";
import gitHubIcon from "@/assets/images/git-hub.svg";
import { signIn, auth, providerMap } from "@/lib/auth/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export async function LogIn() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px] flex items-center flex-col">
        <CardHeader className="space-y-6">
          <div className="flex justify-center">
            <Image src="next.svg" width={100} height={100} alt="logo" />
          </div>
          <CardTitle className="flex justify-center">Connexion à l&apos;application</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center">
            <p className="mr-2 text-sm">Se connecter avec</p>
            {Object.values(providerMap).map((provider) => (
              <form
                className="mx-2 flex items-center"
                key={provider.id}
                action={async () => {
                  "use server";

                  try {
                    await signIn(provider.id)
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
                    throw error
                  }
                }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="submit">
                        {provider.name === "GitHub" && <Image src={gitHubIcon} width={25} alt="GitHub logo" />}
                        {provider.name === "Facebook" && <Image src={facebookIcon} width={20} alt="Facebook logo" />}
                        {provider.name === "Google" && <Image src={googleIcon} width={20} alt="Google logo" />}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {provider.name}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </form>
            ))}
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
              <input
                type="email"
                name="email"
                placeholder="mail@example.com"
                className="mt-2 h-10 w-full rounded-base border border-default bg-neutral-primary-soft px-3 text-sm text-body placeholder:text-body/70 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand focus:ring-offset-1"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-base border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-strong focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
              >
                Envoyer l&apos;email
              </button>
            </form>
          </div>
          {/* signup link */}
          <div className="text-center text-sm mt-4">
            Pas de compte ? <a className="text-fg-brand hover:text-fg-brand-strong" href="/signup">Créer un compte</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
