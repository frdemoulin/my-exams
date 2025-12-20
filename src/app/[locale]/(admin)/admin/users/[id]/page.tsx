import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { fetchUserById } from "@/core/user";
import { formatDateTime } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Détails utilisateur",
};

interface UserDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const formatOptionalDate = (value?: Date | null) => {
  return value ? formatDateTime(value) : "Non renseigné";
};

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const { id } = await params;
  const user = await fetchUserById(id);

  if (!user) {
    redirect("/admin/users");
  }

  const roleLabel = user.roles === "ADMIN" ? "Administrateur" : "Utilisateur";
  const roleVariant = user.roles === "ADMIN" ? "default" : "secondary";

  return (
    <div className="w-full space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-heading">Détails utilisateur</h1>
          <p className="text-sm text-muted-foreground">Toutes les informations disponibles sur ce compte.</p>
        </div>
        <Link href="/admin/users">
          <Button variant="secondary">Retour à la liste</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Informations générales</CardTitle>
          <CardDescription>Identité, contact et métadonnées du compte.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">ID</h3>
              <p className="text-sm font-mono break-all text-body">{user.id}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Nom</h3>
              <p className="text-sm text-body">{user.name || "Non renseigné"}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Email</h3>
              <p className="text-sm text-body">{user.email || "Non renseigné"}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Rôle</h3>
              <Badge variant={roleVariant}>{roleLabel}</Badge>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Email vérifié</h3>
              <p className="text-sm text-body">{formatOptionalDate(user.emailVerified)}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Avatar</h3>
              {user.image ? (
                <a
                  href={user.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fg-brand hover:underline break-all"
                >
                  Ouvrir l&apos;image
                </a>
              ) : (
                <p className="text-sm text-body">Non renseigné</p>
              )}
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Créé le</h3>
              <p className="text-sm text-body">{formatDateTime(user.createdAt)}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Dernière mise à jour</h3>
              <p className="text-sm text-body">{formatDateTime(user.updatedAt)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Comptes OAuth</CardTitle>
          <CardDescription>Providers connectés au compte.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Provider</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Compte provider</TableHead>
                <TableHead>Créé le</TableHead>
                <TableHead>Mise à jour</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.accounts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    Aucun compte OAuth lié
                  </TableCell>
                </TableRow>
              ) : (
                user.accounts.map((account) => (
                  <TableRow key={account.id}>
                    <TableCell className="text-sm text-body">{account.provider}</TableCell>
                    <TableCell className="text-sm text-body">{account.type}</TableCell>
                    <TableCell className="text-sm font-mono break-all text-body">{account.providerAccountId}</TableCell>
                    <TableCell className="text-sm text-body">{formatDateTime(account.createdAt)}</TableCell>
                    <TableCell className="text-sm text-body">{formatDateTime(account.updatedAt)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sessions actives</CardTitle>
          <CardDescription>Dernières sessions connues pour ce compte.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Expire le</TableHead>
                <TableHead>Créée le</TableHead>
                <TableHead>Mise à jour</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.sessions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    Aucune session active
                  </TableCell>
                </TableRow>
              ) : (
                user.sessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="text-sm text-body">{formatDateTime(session.expires)}</TableCell>
                    <TableCell className="text-sm text-body">{formatDateTime(session.createdAt)}</TableCell>
                    <TableCell className="text-sm text-body">{formatDateTime(session.updatedAt)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">WebAuthn / Passkeys</CardTitle>
          <CardDescription>Appareils d&apos;authentification enregistrés.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Compte provider</TableHead>
                <TableHead>Type d&apos;appareil</TableHead>
                <TableHead>Sauvegardé</TableHead>
                <TableHead>Compteur</TableHead>
                <TableHead>Transports</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.Authenticator.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    Aucune passkey enregistrée
                  </TableCell>
                </TableRow>
              ) : (
                user.Authenticator.map((authenticator) => (
                  <TableRow key={authenticator.credentialID}>
                    <TableCell className="text-sm text-body">{authenticator.providerAccountId}</TableCell>
                    <TableCell className="text-sm text-body">{authenticator.credentialDeviceType}</TableCell>
                    <TableCell className="text-sm text-body">
                      {authenticator.credentialBackedUp ? "Oui" : "Non"}
                    </TableCell>
                    <TableCell className="text-sm text-body">{authenticator.counter}</TableCell>
                    <TableCell className="text-sm text-body">{authenticator.transports || "Non renseigné"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetailPage;
