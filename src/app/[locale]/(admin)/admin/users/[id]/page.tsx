import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Calendar, CheckCircle2, History, Lock, ShieldCheck, UserCheck, AlertCircle } from "lucide-react";

import { fetchUserAdminDetail } from "@/core/user";
import { formatDateTime } from "@/lib/utils";
import { getRoleLabel } from "@/lib/auth/roles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AdminEnrollmentCorrectionDialog } from "../_components/admin-enrollment-correction-dialog";
import { AdminEnrollmentCreationDialog } from "../_components/admin-enrollment-creation-dialog";
import { ImpersonateButton } from "../_components/impersonate-button";

export const metadata: Metadata = {
  title: "Fiche utilisateur & affectations",
};

interface UserDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const { id } = await params;
  const detail = await fetchUserAdminDetail(id);

  if (!detail) {
    redirect("/admin/users");
  }

  const { user, activeYear, activeEnrollment, allEnrollments, corrections, availableOptions } = detail;
  const roleLabel = getRoleLabel(user.roles);
  const roleVariant = user.roles === "ADMIN" ? "default" : "secondary";

  return (
    <div className="w-full space-y-6 p-6">
      {/* En-tête */}
      <AdminPageHeading
        title={user.name || user.email || "Utilisateur"}
        description={`Administration du compte et historique annuel des affectations pédagogiques.`}
        actions={
          <div className="flex items-center gap-2">
            <ImpersonateButton targetUserId={user.id} />
            <Link href="/admin/users">
              <Button variant="secondary" size="sm">
                Retour à la liste
              </Button>
            </Link>
          </div>
        }
      />

      {/* Section 1 : Compte (Identité) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-brand" />
            Informations du compte
          </CardTitle>
          <CardDescription>Identité, contact et métadonnées du profil.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">ID utilisateur</h3>
              <p className="text-sm font-mono break-all text-body">{user.id}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Nom</h3>
              <p className="text-sm font-medium text-body">{user.name || "Non renseigné"}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Email</h3>
              <p className="text-sm text-body">{user.email || "Non renseigné"}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Rôle technique</h3>
              <div className="mt-0.5">
                <Badge variant={roleVariant}>{roleLabel}</Badge>
              </div>
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

      {/* Section 2 : Affectation active */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand" />
              Affectation active {activeYear ? `(${activeYear.code})` : ""}
            </CardTitle>
            <CardDescription>
              Périmètre pédagogique appliqué pour l&apos;année scolaire courante.
            </CardDescription>
          </div>

          <div>
            {activeEnrollment ? (
              <AdminEnrollmentCorrectionDialog
                enrollmentId={activeEnrollment.id}
                expectedUpdatedAt={activeEnrollment.expectedUpdatedAt}
                currentAudience={activeEnrollment.audience}
                currentSecondaryGradeId={activeEnrollment.secondaryGradeId}
                currentHealthProgramVersionId={activeEnrollment.healthProgramVersionId}
                currentHealthPathwayId={activeEnrollment.healthPathwayId}
                currentScopeLabel={activeEnrollment.scopeLabel}
                academicYearCode={activeYear?.code || "En cours"}
                hasPedagogicalActivity={activeEnrollment.hasPedagogicalActivity}
                activityCounts={activeEnrollment.activityCounts}
                availableOptions={availableOptions}
              />
            ) : activeYear ? (
              <AdminEnrollmentCreationDialog
                userId={user.id}
                userName={user.name}
                academicYearCode={activeYear.code}
                availableOptions={availableOptions}
              />
            ) : null}
          </div>
        </CardHeader>
        <CardContent>
          {activeEnrollment ? (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-lg border bg-muted/20 p-4">
                <div>
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground">Filière</h3>
                  <div className="mt-1">
                    <Badge variant={activeEnrollment.audience === "HEALTH" ? "duration" : "default"}>
                      {activeEnrollment.audience === "HEALTH" ? "Santé" : "Secondaire"}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground">Niveau / Formation</h3>
                  <p className="text-sm font-semibold text-body mt-1">{activeEnrollment.scopeLabel}</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground">Source</h3>
                  <p className="text-sm text-body mt-1">
                    {activeEnrollment.createdBy === "ADMIN" ? (
                      <span className="font-medium text-purple-700 dark:text-purple-400">
                        ADMIN {activeEnrollment.createdByActorName ? `(${activeEnrollment.createdByActorName})` : ""}
                      </span>
                    ) : (
                      activeEnrollment.createdBy
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground">Statut</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>Verrouillé {activeEnrollment.lockedAt ? `le ${formatDateTime(activeEnrollment.lockedAt)}` : ""}</span>
                  </div>
                </div>
              </div>

              {activeEnrollment.hasPedagogicalActivity ? (
                <div className="rounded-md border border-brand/30 bg-brand/5 p-3 text-xs text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  <span>
                    Activité annuelle enregistrée : <strong>{activeEnrollment.activityCounts.attempts}</strong> quiz réalisé(s),{" "}
                    <strong>{activeEnrollment.activityCounts.progress}</strong> progression(s) de chapitre,{" "}
                    <strong>{activeEnrollment.activityCounts.mockExams}</strong> épreuve(s) blanche(s).
                  </span>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border p-6 text-center space-y-2">
              <AlertCircle className="h-8 w-8 text-amber-500 mx-auto" />
              <h3 className="font-semibold text-sm">Aucune affectation active</h3>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                Cet utilisateur n&apos;est pas encore inscrit pour l&apos;année scolaire{" "}
                <strong>{activeYear?.code || "en cours"}</strong>. Il sera invité à réaliser son onboarding lors de sa prochaine connexion,
                ou vous pouvez créer son affectation directement.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Section 3 : Historique annuel des affectations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-brand" />
            Historique des affectations annuelles
          </CardTitle>
          <CardDescription>
            Toutes les inscriptions pédagogiques de ce compte par année scolaire (lecture seule).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Année scolaire</TableHead>
                  <TableHead>Filière</TableHead>
                  <TableHead>Niveau / Formation</TableHead>
                  <TableHead>Inscription</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allEnrollments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                      Aucune affectation enregistrée.
                    </TableCell>
                  </TableRow>
                ) : (
                  allEnrollments.map((enrollment) => (
                    <TableRow key={enrollment.id} className={enrollment.isCurrent ? "bg-muted/30" : ""}>
                      <TableCell className="font-semibold text-body">
                        {enrollment.academicYearCode}
                        {enrollment.isCurrent ? (
                          <span className="ml-2 text-xs text-brand font-normal">(Année active)</span>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        <Badge variant={enrollment.audience === "HEALTH" ? "duration" : "default"}>
                          {enrollment.audience === "HEALTH" ? "Santé" : "Secondaire"}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium text-body">{enrollment.scopeLabel}</TableCell>
                      <TableCell className="text-sm text-body">{formatDateTime(enrollment.createdAt)}</TableCell>
                      <TableCell className="text-sm text-body font-mono text-xs">{enrollment.createdBy}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Lock className="h-3 w-3" />
                          Verrouillé
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 : Journal des rectifications administratives */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <History className="h-5 w-5 text-brand" />
            Journal des rectifications administratives
          </CardTitle>
          <CardDescription>
            Historique immuable (append-only) des corrections d&apos;affectation effectuées par les administrateurs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Administrateur</TableHead>
                  <TableHead>Année</TableHead>
                  <TableHead>Avant</TableHead>
                  <TableHead>Après</TableHead>
                  <TableHead>Motif de rectification</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {corrections.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                      Aucune rectification administrative enregistrée pour ce compte.
                    </TableCell>
                  </TableRow>
                ) : (
                  corrections.map((correction) => (
                    <TableRow key={correction.id}>
                      <TableCell className="text-sm text-body whitespace-nowrap">
                        {formatDateTime(correction.createdAt)}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-body">
                        {correction.actorAdminName}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground font-mono text-xs">
                        {correction.academicYearCode}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {correction.beforeLabel}
                      </TableCell>
                      <TableCell className="text-sm font-semibold text-fg-brand">
                        {correction.afterLabel}
                      </TableCell>
                      <TableCell className="text-sm text-body max-w-xs break-words">
                        &ldquo;{correction.reason}&rdquo;
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetailPage;
