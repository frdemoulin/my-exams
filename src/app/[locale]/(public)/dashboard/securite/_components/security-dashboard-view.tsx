'use client';

import { useState } from 'react';
import { Shield, Key, Smartphone, Trash2, AlertTriangle, CheckCircle2 } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

import {
  revokeOtherSessionsAction,
  revokeAllSessionsAction,
  deleteUserAccountAction,
} from '../actions';

type SecurityDashboardViewProps = {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    role: string;
  };
  linkedOAuthProviders: string[];
  isEmailProviderEnabled: boolean;
  activeSessionsCount: number;
  currentSession: {
    createdAt: string;
    expiresAt: string;
  };
  isImpersonating: boolean;
  isAdmin: boolean;
};

export function SecurityDashboardView({
  user,
  linkedOAuthProviders,
  isEmailProviderEnabled,
  activeSessionsCount,
  currentSession,
  isImpersonating,
  isAdmin,
}: SecurityDashboardViewProps) {
  const [sessionsCount, setSessionsCount] = useState(activeSessionsCount);
  const [sessionMessage, setSessionMessage] = useState<string | null>(null);
  const [sessionError, setSessionError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);

  async function handleRevokeOtherSessions() {
    setIsRevoking(true);
    setSessionMessage(null);
    setSessionError(null);

    const res = await revokeOtherSessionsAction();
    setIsRevoking(false);

    if (res.success) {
      setSessionsCount(1);
      setSessionMessage(
        res.count !== undefined && res.count > 0
          ? `${res.count} autre(s) session(s) déconnectée(s) avec succès.`
          : 'Aucune autre session active à déconnecter.'
      );
    } else {
      setSessionError(res.error ?? 'Erreur lors de la déconnexion des sessions.');
    }
  }

  async function handleDeleteAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDeleteError(null);
    setIsDeleting(true);

    const formData = new FormData(e.currentTarget);
    const res = await deleteUserAccountAction(formData);

    if (!res.success) {
      setIsDeleting(false);
      setDeleteError(res.error ?? 'Erreur lors de la suppression.');
    }
  }

  return (
    <div className="space-y-8">
      {/* 1. Informations du compte */}
      <Card className="border-border bg-card">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg text-heading">Informations du compte</CardTitle>
          </div>
          <CardDescription className="text-xs text-muted-foreground">
            Coordonnées associées à votre profil My Exams.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase">Nom</span>
              <p className="font-medium text-heading">{user.name ?? 'Non renseigné'}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase">Adresse email</span>
              <p className="font-medium text-heading">{user.email ?? 'Non renseignée'}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Méthodes de connexion */}
      <Card className="border-border bg-card">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg text-heading">Méthodes de connexion</CardTitle>
          </div>
          <CardDescription className="text-xs text-muted-foreground">
            Modes d&apos;authentification disponibles pour accéder à votre compte.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase">
              Comptes tiers liés (OAuth)
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {linkedOAuthProviders.length > 0 ? (
                linkedOAuthProviders.map((provider) => (
                  <Badge key={provider} variant="secondary" className="capitalize">
                    {provider}
                  </Badge>
                ))
              ) : (
                <span className="text-xs text-muted-foreground">Aucun compte tiers lié.</span>
              )}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase">
              Connexion par e-mail
            </span>
            <div className="mt-2">
              {isEmailProviderEnabled ? (
                <Badge variant="outline" className="border-emerald-500/40 text-emerald-700 dark:text-emerald-300">
                  Lien magique actif
                </Badge>
              ) : (
                <span className="text-xs text-muted-foreground">Désactivé</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Sessions actives */}
      <Card className="border-border bg-card">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg text-heading">Sessions actives</CardTitle>
          </div>
          <CardDescription className="text-xs text-muted-foreground">
            Gérez vos sessions connectées sur vos différents appareils.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-border p-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-heading">Appareil actuel</span>
                <Badge variant="default" className="text-[10px]">Session courante</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Connecté depuis le {new Date(currentSession.createdAt).toLocaleString('fr-FR')} · Expire le{' '}
                {new Date(currentSession.expiresAt).toLocaleString('fr-FR')}
              </p>
            </div>
            <div className="text-sm font-medium text-heading">
              {sessionsCount} session(s) active(s) au total
            </div>
          </div>

          {sessionMessage && (
            <div className="flex items-center gap-2 rounded-md bg-emerald-500/10 p-3 text-xs text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{sessionMessage}</span>
            </div>
          )}

          {sessionError && (
            <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-xs text-destructive">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              <span>{sessionError}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRevokeOtherSessions}
              disabled={isRevoking || sessionsCount <= 1}
            >
              {isRevoking ? 'Déconnexion...' : 'Déconnecter mes autres sessions'}
            </Button>

            <form action={revokeAllSessionsAction}>
              <Button variant="ghost" size="sm" type="submit">
                Déconnecter toutes mes sessions
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      {/* 4. Suppression définitive du compte (RGPD) */}
      <Card className="border-destructive/40 bg-card">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 text-destructive">
            <Trash2 className="h-5 w-5" />
            <CardTitle className="text-lg">Zone de danger : Suppression du compte</CardTitle>
          </div>
          <CardDescription className="text-xs text-muted-foreground">
            Conformément au RGPD, vous pouvez demander la suppression définitive de l&apos;ensemble de vos données personnelles.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {isAdmin ? (
            <div className="rounded-md border border-border bg-muted/40 p-4 text-xs text-muted-foreground">
              Les comptes administrateurs ne peuvent pas être supprimés en libre-service. Veuillez contacter l&apos;équipe technique pour un traitement dédié.
            </div>
          ) : isImpersonating ? (
            <div className="rounded-md border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-800 dark:text-amber-200">
              La suppression de compte est strictement désactivée lors d&apos;une session de support (impersonation).
            </div>
          ) : (
            <form onSubmit={handleDeleteAccount} className="space-y-4">
              <div className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-xs text-destructive space-y-2">
                <p className="font-semibold">Attention : cette action est irréversible.</p>
                <p>
                  Toutes vos données (historique de révision, tentatives d&apos;examen, progressions et comptes liés) seront définitivement supprimées.
                </p>
                <p>
                  Pour des raisons de sécurité, cette action exige que vous soyez connecté depuis moins de 15 minutes.
                </p>
              </div>

              {deleteError && (
                <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-xs text-destructive">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <span>{deleteError}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">
                  Pour confirmer, saisissez le mot <strong className="text-heading">SUPPRIMER</strong> ci-dessous :
                </label>
                <Input
                  name="confirmation"
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  placeholder="SUPPRIMER"
                  required
                  className="max-w-xs"
                />
              </div>

              <Button
                type="submit"
                variant="destructive"
                size="sm"
                disabled={deleteConfirmation !== 'SUPPRIMER' || isDeleting}
              >
                {isDeleting ? 'Suppression en cours...' : 'Supprimer définitivement mon compte'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
