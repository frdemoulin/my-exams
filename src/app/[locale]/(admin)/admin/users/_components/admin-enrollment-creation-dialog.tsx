"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, CheckCircle2, PlusCircle, ShieldAlert } from "lucide-react";
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
import {
  createUserAcademicEnrollmentByAdminAction,
  type getAvailableAcademicEnrollmentOptions,
} from "@/core/academic-enrollment";

interface AdminEnrollmentCreationDialogProps {
  userId: string;
  userName?: string | null;
  academicYearCode: string;
  availableOptions: Awaited<ReturnType<typeof getAvailableAcademicEnrollmentOptions>>;
}

export function AdminEnrollmentCreationDialog({
  userId,
  userName,
  academicYearCode,
  availableOptions,
}: AdminEnrollmentCreationDialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const [step, setStep] = React.useState<"CONFIG" | "CONFIRM">("CONFIG");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  // Form state
  const [audience, setAudience] = React.useState<"SECONDARY" | "HEALTH">("SECONDARY");
  const [secondaryGradeId, setSecondaryGradeId] = React.useState<string>(
    availableOptions.secondary.grades[0]?.id ?? ""
  );

  // Health state
  const initialInstitutionId = availableOptions.health.institutions[0]?.id || "";
  const [institutionId, setInstitutionId] = React.useState<string>(initialInstitutionId);

  const selectedInstitution = availableOptions.health.institutions.find(
    (inst) => inst.id === institutionId
  );
  const versionsForInst = selectedInstitution?.programVersions || [];

  const initialVersionId = versionsForInst[0]?.id || "";
  const [programVersionId, setProgramVersionId] = React.useState<string>(initialVersionId);

  const selectedVersion = versionsForInst.find((v) => v.id === programVersionId);
  const pathwaysForVersion = selectedVersion?.pathways || [];

  const initialPathwayId = pathwaysForVersion.length === 1 ? pathwaysForVersion[0].id : "";
  const [pathwayId, setPathwayId] = React.useState<string>(initialPathwayId);

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

  const handleConfirmSubmit = () => {
    setErrorMsg(null);

    startTransition(async () => {
      try {
        if (audience === "SECONDARY") {
          await createUserAcademicEnrollmentByAdminAction({
            userId,
            audience: "SECONDARY",
            secondaryGradeId,
          });
        } else {
          await createUserAcademicEnrollmentByAdminAction({
            userId,
            audience: "HEALTH",
            healthProgramVersionId: programVersionId,
            healthPathwayId: pathwayId || null,
          });
        }

        toast.success("Affectation administrative créée avec succès");
        setOpen(false);
        setStep("CONFIG");
        router.refresh();
      } catch (err: any) {
        const msg =
          err?.message || "Une erreur est survenue lors de la création de l'affectation.";
        setErrorMsg(msg);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="gap-1.5">
          <PlusCircle className="h-4 w-4" />
          Créer l&apos;affectation
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Créer l&apos;affectation ({academicYearCode})</DialogTitle>
          <DialogDescription>
            Affectation directe d&apos;un compte sans Enrollment par un administrateur.
          </DialogDescription>
        </DialogHeader>

        {errorMsg ? (
          <div className="rounded-md border border-danger/40 bg-danger/10 p-3 text-sm text-danger flex items-start gap-2.5">
            <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold">Erreur de création</p>
              <p>{errorMsg}</p>
            </div>
          </div>
        ) : null}

        {step === "CONFIG" ? (
          <div className="space-y-4 py-2">
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

            {audience === "SECONDARY" ? (
              <div className="space-y-2">
                <Label htmlFor="gradeSelectCreate">Niveau scolaire</Label>
                <select
                  id="gradeSelectCreate"
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

            {audience === "HEALTH" ? (
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="instSelectCreate">Établissement universitaire</Label>
                  <select
                    id="instSelectCreate"
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
                  <Label htmlFor="versionSelectCreate">Maquette de formation</Label>
                  <select
                    id="versionSelectCreate"
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
                    <Label htmlFor="pathwaySelectCreate">Parcours spécifique</Label>
                    <select
                      id="pathwaySelectCreate"
                      value={pathwayId}
                      onChange={(e) => setPathwayId(e.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="">Sélectionnez un parcours...</option>
                      {pathwaysForVersion.map((path) => (
                        <option key={path.id} value={path.id}>
                          {path.campus ? `${path.name} — ${path.campus}` : path.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="space-y-4 py-2">
            <div className="rounded-lg border bg-muted/40 p-4 space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Utilisateur :</span>
                <span className="font-medium text-body">{userName || userId}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Année scolaire :</span>
                <span className="font-medium text-body">{academicYearCode}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Affectation retenue :</span>
                <span className="font-bold text-fg-brand">{getTargetScopeLabel()}</span>
              </div>
            </div>

            <div className="rounded-md border border-border bg-background p-3 text-xs text-muted-foreground flex items-start gap-2">
              <ShieldAlert className="h-4 w-4 shrink-0 text-brand mt-0.5" />
              <span>
                Cette création sera enregistrée avec <strong>createdBy = ADMIN</strong> et votre identifiant
                d&apos;administrateur. L&apos;utilisateur accèdera immédiatement à ses contenus sans passer par
                l&apos;onboarding.
              </span>
            </div>
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
                onClick={() => {
                  if (isScopeSelectionValid) setStep("CONFIRM");
                }}
                disabled={!isScopeSelectionValid}
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
                Modifier
              </Button>
              <Button
                type="button"
                onClick={handleConfirmSubmit}
                disabled={isPending}
                className="gap-1.5"
              >
                {isPending ? "Création..." : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Confirmer la création
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
