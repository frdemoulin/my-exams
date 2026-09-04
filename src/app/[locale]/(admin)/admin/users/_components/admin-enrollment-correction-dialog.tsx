"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, CheckCircle2, RefreshCw, ShieldAlert } from "lucide-react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  correctUserAcademicEnrollmentByAdminAction,
  type getAvailableAcademicEnrollmentOptions,
} from "@/core/academic-enrollment";

interface AdminEnrollmentCorrectionDialogProps {
  enrollmentId: string;
  expectedUpdatedAt: string;
  currentAudience: "SECONDARY" | "HEALTH";
  currentSecondaryGradeId?: string | null;
  currentHealthProgramVersionId?: string | null;
  currentHealthPathwayId?: string | null;
  currentScopeLabel: string;
  academicYearCode: string;
  hasPedagogicalActivity: boolean;
  activityCounts: {
    attempts: number;
    progress: number;
    mockExams: number;
  };
  availableOptions: Awaited<ReturnType<typeof getAvailableAcademicEnrollmentOptions>>;
}

export function AdminEnrollmentCorrectionDialog({
  enrollmentId,
  expectedUpdatedAt,
  currentAudience,
  currentSecondaryGradeId,
  currentHealthProgramVersionId,
  currentHealthPathwayId,
  currentScopeLabel,
  academicYearCode,
  hasPedagogicalActivity,
  activityCounts,
  availableOptions,
}: AdminEnrollmentCorrectionDialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const [step, setStep] = React.useState<"CONFIG" | "CONFIRM">("CONFIG");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  // Form state
  const [audience, setAudience] = React.useState<"SECONDARY" | "HEALTH">(currentAudience);
  const [secondaryGradeId, setSecondaryGradeId] = React.useState<string>(
    currentSecondaryGradeId || (availableOptions.secondary.grades[0]?.id ?? "")
  );

  // Health state
  const initialInstitutionId =
    availableOptions.health.institutions.find((inst) =>
      inst.programVersions.some((v) => v.id === currentHealthProgramVersionId)
    )?.id || availableOptions.health.institutions[0]?.id || "";

  const [institutionId, setInstitutionId] = React.useState<string>(initialInstitutionId);

  const selectedInstitution = availableOptions.health.institutions.find(
    (inst) => inst.id === institutionId
  );
  const versionsForInst = selectedInstitution?.programVersions || [];

  const initialVersionId =
    versionsForInst.find((v) => v.id === currentHealthProgramVersionId)?.id ||
    versionsForInst[0]?.id ||
    "";
  const [programVersionId, setProgramVersionId] = React.useState<string>(initialVersionId);

  const selectedVersion = versionsForInst.find((v) => v.id === programVersionId);
  const pathwaysForVersion = selectedVersion?.pathways || [];

  const initialPathwayId =
    pathwaysForVersion.find((p) => p.id === currentHealthPathwayId)?.id ||
    (pathwaysForVersion.length === 1 ? pathwaysForVersion[0].id : "") ||
    "";
  const [pathwayId, setPathwayId] = React.useState<string>(initialPathwayId);

  // Reason state
  const [reason, setReason] = React.useState("");

  // Sync version and pathway when institution changes
  const handleInstitutionChange = (newInstId: string) => {
    setInstitutionId(newInstId);
    const inst = availableOptions.health.institutions.find((i) => i.id === newInstId);
    const firstVersion = inst?.programVersions[0];
    if (firstVersion) {
      setProgramVersionId(firstVersion.id);
      setPathwayId(firstVersion.pathways.length === 1 ? firstVersion.pathways[0].id : "");
    } else {
      setProgramVersionId("");
      setPathwayId("");
    }
  };

  // Sync pathway when version changes
  const handleVersionChange = (newVersionId: string) => {
    setProgramVersionId(newVersionId);
    const v = versionsForInst.find((ver) => ver.id === newVersionId);
    if (v && v.pathways.length === 1) {
      setPathwayId(v.pathways[0].id);
    } else {
      setPathwayId("");
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setStep("CONFIG");
      setErrorMsg(null);
    }
    setOpen(newOpen);
  };

  // Calcul du nouveau libellé pour la confirmation
  const getTargetScopeLabel = (): string => {
    if (audience === "SECONDARY") {
      const g = availableOptions.secondary.grades.find((grade) => grade.id === secondaryGradeId);
      return g ? g.longDescription || g.shortDescription : "Secondaire";
    }
    if (audience === "HEALTH") {
      const v = versionsForInst.find((ver) => ver.id === programVersionId);
      const p = pathwaysForVersion.find((path) => path.id === pathwayId);
      if (v && selectedInstitution) {
        return `${v.program.label} — ${selectedInstitution.name}${p ? ` (${p.name})` : ""}`;
      }
      return "Santé";
    }
    return "Inconnu";
  };

  const trimmedReason = reason.trim();
  const isReasonValid = trimmedReason.length >= 5 && trimmedReason.length <= 500;

  let isScopeSelectionValid = false;
  if (audience === "SECONDARY") {
    isScopeSelectionValid = Boolean(secondaryGradeId);
  } else if (audience === "HEALTH") {
    if (programVersionId) {
      if (pathwaysForVersion.length > 1) {
        isScopeSelectionValid = Boolean(pathwayId);
      } else {
        isScopeSelectionValid = true;
      }
    }
  }

  const handleProceedToConfirm = () => {
    if (!isReasonValid || !isScopeSelectionValid) return;
    setErrorMsg(null);
    setStep("CONFIRM");
  };

  const handleConfirmSubmit = () => {
    setErrorMsg(null);

    startTransition(async () => {
      try {
        if (audience === "SECONDARY") {
          await correctUserAcademicEnrollmentByAdminAction({
            enrollmentId,
            expectedUpdatedAt,
            reason: trimmedReason,
            audience: "SECONDARY",
            secondaryGradeId,
          });
        } else {
          await correctUserAcademicEnrollmentByAdminAction({
            enrollmentId,
            expectedUpdatedAt,
            reason: trimmedReason,
            audience: "HEALTH",
            healthProgramVersionId: programVersionId,
            healthPathwayId: pathwayId || null,
          });
        }

        toast.success("Affectation rectifiée avec succès");
        setOpen(false);
        setStep("CONFIG");
        router.refresh();
      } catch (err: any) {
        const msg =
          err?.message ||
          "Une erreur est survenue lors de la rectification administrative.";
        setErrorMsg(msg);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <RefreshCw className="h-4 w-4" />
          Corriger l&apos;affectation
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Rectifier l&apos;affectation ({academicYearCode})</DialogTitle>
          <DialogDescription>
            Modification administrative avec traçabilité obligatoire et contrôle de version.
          </DialogDescription>
        </DialogHeader>

        {errorMsg ? (
          <div className="rounded-md border border-danger/40 bg-danger/10 p-3 text-sm text-danger flex items-start gap-2.5">
            <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold">Erreur de rectification</p>
              <p>{errorMsg}</p>
            </div>
          </div>
        ) : null}

        {step === "CONFIG" ? (
          <div className="space-y-4 py-2">
            {/* Choix de l'audience */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Filière d&apos;enseignement</Label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAudience("SECONDARY")}
                  className={`rounded-md border p-3 text-left transition-all ${
                    audience === "SECONDARY"
                      ? "border-brand bg-brand/10 text-fg-brand font-medium shadow-xs ring-1 ring-brand"
                      : "border-border hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <p className="text-sm font-semibold">Secondaire</p>
                  <p className="text-xs">Collège / Lycée</p>
                </button>

                <button
                  type="button"
                  onClick={() => setAudience("HEALTH")}
                  className={`rounded-md border p-3 text-left transition-all ${
                    audience === "HEALTH"
                      ? "border-brand bg-brand/10 text-fg-brand font-medium shadow-xs ring-1 ring-brand"
                      : "border-border hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <p className="text-sm font-semibold">Santé</p>
                  <p className="text-xs">PASS / LAS / L.AS</p>
                </button>
              </div>
            </div>

            {/* Scope Secondaire */}
            {audience === "SECONDARY" ? (
              <div className="space-y-2">
                <Label htmlFor="gradeSelect">Niveau scolaire</Label>
                <select
                  id="gradeSelect"
                  value={secondaryGradeId}
                  onChange={(e) => setSecondaryGradeId(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {availableOptions.secondary.grades.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.longDescription} ({grade.shortDescription})
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {/* Scope Santé */}
            {audience === "HEALTH" ? (
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="instSelect">Établissement universitaire</Label>
                  <select
                    id="instSelect"
                    value={institutionId}
                    onChange={(e) => handleInstitutionChange(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-1 focus:ring-ring"
                  >
                    {availableOptions.health.institutions.map((inst) => (
                      <option key={inst.id} value={inst.id}>
                        {inst.name}{inst.shortName ? ` (${inst.shortName})` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="versionSelect">Maquette de formation</Label>
                  <select
                    id="versionSelect"
                    value={programVersionId}
                    onChange={(e) => handleVersionChange(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-1 focus:ring-ring"
                  >
                    {versionsForInst.map((ver) => (
                      <option key={ver.id} value={ver.id}>
                        {ver.program.label} — {ver.label}
                      </option>
                    ))}
                  </select>
                </div>

                {pathwaysForVersion.length > 1 ? (
                  <div className="space-y-2">
                    <Label htmlFor="pathwaySelect">Parcours spécifique</Label>
                    <select
                      id="pathwaySelect"
                      value={pathwayId}
                      onChange={(e) => setPathwayId(e.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="">Sélectionnez un parcours...</option>
                      {pathwaysForVersion.map((path) => (
                        <option key={path.id} value={path.id}>
                          {path.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Motif obligatoire avec compteur */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <Label htmlFor="reasonInput" className="font-semibold">
                  Motif de la correction <span className="text-danger">*</span>
                </Label>
                <span
                  className={`text-xs ${
                    trimmedReason.length > 500 || (trimmedReason.length > 0 && trimmedReason.length < 5)
                      ? "text-danger font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {trimmedReason.length} / 500 (min. 5)
                </span>
              </div>

              <Textarea
                id="reasonInput"
                placeholder="Explication claire et professionnelle du motif de cette intervention..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                className="resize-none"
              />
            </div>
          </div>
        ) : (
          /* Étape 2 : Confirmation explicite avant écriture */
          <div className="space-y-4 py-2">
            <div className="rounded-lg border bg-muted/40 p-4 space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Affectation actuelle :</span>
                <span className="font-medium text-body">{currentScopeLabel}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Nouvelle affectation :</span>
                <span className="font-bold text-fg-brand">{getTargetScopeLabel()}</span>
              </div>

              <div className="space-y-1">
                <span className="text-muted-foreground text-xs uppercase font-semibold">
                  Motif enregistré dans le journal :
                </span>
                <p className="italic bg-background p-2.5 rounded-md border border-border text-xs text-body break-words">
                  &ldquo;{trimmedReason}&rdquo;
                </p>
              </div>
            </div>

            {/* Avertissement d'audit */}
            <div className="rounded-md border border-border bg-background p-3 text-xs text-muted-foreground flex items-start gap-2">
              <ShieldAlert className="h-4 w-4 shrink-0 text-brand mt-0.5" />
              <span>
                Cette correction modifiera l&apos;affectation pédagogique de l&apos;utilisateur pour l&apos;année{" "}
                <strong>{academicYearCode}</strong>. L&apos;opération sera enregistrée de manière immuable dans le journal d&apos;audit.
              </span>
            </div>

            {/* Avertissement activité existante (Section 13) */}
            {hasPedagogicalActivity ? (
              <div className="rounded-md border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 p-3 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">Activité pédagogique existante détectée</p>
                  <p>
                    Cet utilisateur possède déjà une activité pour cette année ({activityCounts.attempts} tentative(s), {activityCounts.progress} progression(s), {activityCounts.mockExams} épreuve(s)).
                    La correction modifiera les contenus auxquels il peut accéder, mais son historique existant sera intégralement conservé.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        )}

        <DialogFooter className="gap-2 sm:gap-0">
          {step === "CONFIG" ? (
            <>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Annuler
              </Button>
              <Button
                type="button"
                onClick={handleProceedToConfirm}
                disabled={!isReasonValid || !isScopeSelectionValid}
              >
                Vérifier et confirmer
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep("CONFIG")}
                disabled={isPending}
              >
                Modifier les choix
              </Button>
              <Button
                type="button"
                onClick={handleConfirmSubmit}
                disabled={isPending}
                className="gap-1.5"
              >
                {isPending ? "Enregistrement..." : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Confirmer la correction
                  </>
                )}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
