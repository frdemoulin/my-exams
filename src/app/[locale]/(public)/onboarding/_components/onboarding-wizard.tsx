'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from 'lucide-react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import type {
  AvailableAcademicEnrollmentOptions,
  AvailableGradeOption,
  OnboardingEnrollmentChoicesInput,
} from '@/core/academic-enrollment';
import { createCurrentUserAcademicEnrollmentFromOnboarding } from '@/core/academic-enrollment/academic-enrollment.actions';
import { OnboardingShell } from './onboarding-shell';

type OnboardingWizardProps = {
  initialOptions: AvailableAcademicEnrollmentOptions;
  callbackUrl?: string | null;
};

type ChosenVertical = 'COLLEGE' | 'LYCEE' | 'HEALTH' | null;

export function OnboardingWizard({ initialOptions, callbackUrl }: OnboardingWizardProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Étape courante (1: Situation, 2: Détail, 3: Confirmation)
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Choix Étape 1
  const [vertical, setVertical] = useState<ChosenVertical>(null);

  // Choix Étape 2 Secondaire
  const [selectedGradeId, setSelectedGradeId] = useState<string | null>(null);

  // Choix Étape 2 Santé
  const [selectedInstitutionId, setSelectedInstitutionId] = useState<string | null>(
    initialOptions.health.institutions[0]?.id ?? null
  );
  const [selectedProgramVersionId, setSelectedProgramVersionId] = useState<string | null>(null);
  const [selectedPathwayId, setSelectedPathwayId] = useState<string | null>(null);

  // Dérivations Santé
  const currentInstitution = initialOptions.health.institutions.find(
    (inst) => inst.id === selectedInstitutionId
  );
  const availableVersions = currentInstitution?.programVersions ?? [];
  const currentVersion = availableVersions.find((v) => v.id === selectedProgramVersionId);
  const availablePathways = currentVersion?.pathways ?? [];

  // Grade sélectionné
  const selectedGrade: AvailableGradeOption | undefined = initialOptions.secondary.grades.find(
    (g) => g.id === selectedGradeId
  );

  // Navigation Étape 1 -> Étape 2
  const handleSelectVertical = (chosen: 'COLLEGE' | 'LYCEE' | 'HEALTH') => {
    setVertical(chosen);
    setSelectedGradeId(null);
    setSelectedProgramVersionId(null);
    setSelectedPathwayId(null);

    // Pré-sélection pour santé si 1 seule version
    if (chosen === 'HEALTH') {
      const defaultInst = initialOptions.health.institutions[0];
      if (defaultInst) {
        setSelectedInstitutionId(defaultInst.id);
        if (defaultInst.programVersions.length === 1) {
          const singleVersion = defaultInst.programVersions[0];
          setSelectedProgramVersionId(singleVersion.id);
          if (singleVersion.pathways.length === 1) {
            setSelectedPathwayId(singleVersion.pathways[0].id);
          }
        }
      }
    }
    setStep(2);
  };

  // Validation Étape 2 -> Étape 3
  const handleProceedToConfirmation = () => {
    if (vertical === 'COLLEGE' || vertical === 'LYCEE') {
      if (!selectedGradeId) {
        toast.error('Veuillez sélectionner un niveau scolaire.');
        return;
      }
    } else if (vertical === 'HEALTH') {
      if (!selectedInstitutionId) {
        toast.error('Veuillez sélectionner un établissement.');
        return;
      }
      if (!selectedProgramVersionId) {
        toast.error('Veuillez sélectionner une formation santé.');
        return;
      }
      if (availablePathways.length > 1 && !selectedPathwayId) {
        toast.error('Veuillez sélectionner un parcours.');
        return;
      }
    }
    setStep(3);
  };

  // Soumission finale (Étape 3)
  const handleFinalSubmit = () => {
    let payload: OnboardingEnrollmentChoicesInput;

    if (vertical === 'COLLEGE' || vertical === 'LYCEE') {
      if (!selectedGradeId) return;
      payload = {
        audience: 'SECONDARY',
        secondaryGradeId: selectedGradeId,
      };
    } else if (vertical === 'HEALTH') {
      if (!selectedProgramVersionId) return;
      payload = {
        audience: 'HEALTH',
        healthProgramVersionId: selectedProgramVersionId,
        healthPathwayId: selectedPathwayId ?? null,
      };
    } else {
      return;
    }

    startTransition(async () => {
      try {
        await createCurrentUserAcademicEnrollmentFromOnboarding(payload);
        toast.success('Affectation pédagogique enregistrée avec succès !');

        // Réorientation via le point de continuation post-authentification
        const targetUrl = `/auth/continue${
          callbackUrl ? `?callbackUrl=${encodeURIComponent(callbackUrl)}` : ''
        }`;
        router.refresh();
        router.push(targetUrl);
      } catch (err: any) {
        toast.error(
          err.message ||
            'Une erreur est survenue lors de l’enregistrement de votre affectation.'
        );
      }
    });
  };

  return (
    <>
      {/* ÉTAPE 1 : SITUATION SCOLAIRE */}
      {step === 1 && (
        <OnboardingShell
          step={1}
          academicYearCode={initialOptions.academicYear.code}
          badge="Affectation annuelle"
          badgeVariant="secondary"
          title={`Quelle est votre situation pour l'année ${initialOptions.academicYear.code} ?`}
          description="Sélectionnez votre univers d'études. Cette affectation permettra de vous proposer les contenus adaptés à votre niveau."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2">
            <button
              type="button"
              onClick={() => handleSelectVertical('COLLEGE')}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-background hover:border-brand hover:bg-brand/5 transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shadow-xs hover:shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-fg-brand group-hover:scale-105 transition-transform">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-fg-brand group-hover:translate-x-1 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-heading group-hover:text-fg-brand">
                    Collège
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Classes de 6e, 5e, 4e et 3e — Préparation au Diplôme National du Brevet (DNB).
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-fg-brand">
                <span>Choisir le Collège</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleSelectVertical('LYCEE')}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-background hover:border-brand hover:bg-brand/5 transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shadow-xs hover:shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-fg-brand group-hover:scale-105 transition-transform">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-fg-brand group-hover:translate-x-1 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-heading group-hover:text-fg-brand">
                    Lycée
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Classes de Seconde, Première et Terminale — Annales et quiz du Baccalauréat.
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-fg-brand">
                <span>Choisir le Lycée</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleSelectVertical('HEALTH')}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-background hover:border-brand hover:bg-brand/5 transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shadow-xs hover:shadow-sm md:col-span-2 lg:col-span-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-fg-brand group-hover:scale-105 transition-transform">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-fg-brand group-hover:translate-x-1 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-heading group-hover:text-fg-brand">
                    L1 Santé
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    PASS et L.AS — Entraînements par UE, colles régulières et examens blancs.
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-fg-brand">
                <span>Choisir la L1 Santé</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </OnboardingShell>
      )}

      {/* ÉTAPE 2 : CHOIX DU NIVEAU OU CURSUS */}
      {step === 2 && (
        <OnboardingShell
          step={2}
          academicYearCode={initialOptions.academicYear.code}
          badge={
            vertical === 'COLLEGE'
              ? 'Collège'
              : vertical === 'LYCEE'
                ? 'Lycée'
                : 'L1 Santé'
          }
          badgeVariant="outline"
          title={
            vertical === 'COLLEGE' || vertical === 'LYCEE'
              ? 'Choisissez votre classe'
              : 'Choisissez votre formation Santé'
          }
          description={
            vertical === 'COLLEGE' || vertical === 'LYCEE'
              ? 'Sélectionnez votre niveau scolaire pour accéder aux épreuves et entraînements dédiés.'
              : 'Indiquez votre université, votre programme (PASS / L.AS) et votre parcours.'
          }
          footer={
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>

              <Button
                type="button"
                onClick={handleProceedToConfirmation}
                disabled={
                  vertical === 'COLLEGE' || vertical === 'LYCEE'
                    ? !selectedGradeId
                    : !selectedProgramVersionId ||
                      (availablePathways.length > 1 && !selectedPathwayId)
                }
                className="gap-2 font-semibold"
              >
                Continuer
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          }
        >
          <div className="space-y-6">
            {/* Cas Secondaire : Choix de classe */}
            {(vertical === 'COLLEGE' || vertical === 'LYCEE') && (
              <div
                className={`grid gap-3 sm:grid-cols-2 ${
                  vertical === 'COLLEGE' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                }`}
              >
                {(vertical === 'COLLEGE'
                  ? initialOptions.secondary.collegeGrades
                  : initialOptions.secondary.lyceeGrades
                ).map((grade) => {
                  const isSelected = selectedGradeId === grade.id;
                  return (
                    <button
                      key={grade.id}
                      type="button"
                      onClick={() => setSelectedGradeId(grade.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                        isSelected
                          ? 'border-brand bg-brand/10 text-heading ring-1 ring-brand'
                          : 'border-border bg-background hover:bg-neutral-primary-soft text-body'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-sm block">
                          {grade.longDescription}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Classe de {grade.shortDescription}
                        </span>
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="h-5 w-5 text-brand shrink-0 ml-2" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border border-border shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Cas Santé : Établissement -> Programme -> Parcours */}
            {vertical === 'HEALTH' && (
              <div className="space-y-6">
                {/* 1. Établissement */}
                <div className="space-y-2.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    1. Établissement
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {initialOptions.health.institutions.map((inst) => {
                      const isSelected = selectedInstitutionId === inst.id;
                      return (
                        <button
                          key={inst.id}
                          type="button"
                          onClick={() => {
                            setSelectedInstitutionId(inst.id);
                            setSelectedProgramVersionId(null);
                            setSelectedPathwayId(null);
                          }}
                          className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                            isSelected
                              ? 'border-brand bg-brand/10 ring-1 ring-brand'
                              : 'border-border bg-background hover:bg-neutral-primary-soft'
                          }`}
                        >
                          <span className="font-medium text-sm text-heading">
                            {inst.name}
                          </span>
                          {isSelected && <CheckCircle2 className="h-4 w-4 text-brand shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Formation / Programme */}
                {currentInstitution && (
                  <div className="space-y-2.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      2. Formation / Programme
                    </label>
                    {availableVersions.length === 0 ? (
                      <p className="text-xs text-muted-foreground italic">
                        Aucune maquette disponible pour cette université sur l&apos;année {initialOptions.academicYear.code}.
                      </p>
                    ) : (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {availableVersions.map((version) => {
                          const isSelected = selectedProgramVersionId === version.id;
                          return (
                            <button
                              key={version.id}
                              type="button"
                              onClick={() => {
                                setSelectedProgramVersionId(version.id);
                                if (version.pathways.length === 1) {
                                  setSelectedPathwayId(version.pathways[0].id);
                                } else {
                                  setSelectedPathwayId(null);
                                }
                              }}
                              className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                                isSelected
                                  ? 'border-brand bg-brand/10 ring-1 ring-brand'
                                  : 'border-border bg-background hover:bg-neutral-primary-soft'
                              }`}
                            >
                              <div className="space-y-0.5">
                                <span className="font-semibold text-sm text-heading">
                                  {version.program.label || version.label}
                                </span>
                                <span className="text-xs text-muted-foreground block">
                                  {version.studyLevel} · Année {version.academicYear}
                                </span>
                              </div>
                              {isSelected && <CheckCircle2 className="h-4 w-4 text-brand shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Parcours éventuel */}
                {currentVersion && availablePathways.length > 1 && (
                  <div className="space-y-2.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      3. Parcours / Option
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {availablePathways.map((pathway) => {
                        const isSelected = selectedPathwayId === pathway.id;
                        return (
                          <button
                            key={pathway.id}
                            type="button"
                            onClick={() => setSelectedPathwayId(pathway.id)}
                            className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                              isSelected
                                ? 'border-brand bg-brand/10 ring-1 ring-brand'
                                : 'border-border bg-background hover:bg-neutral-primary-soft'
                            }`}
                          >
                            <span className="text-sm font-medium text-heading">
                              {pathway.campus ? `${pathway.name} — ${pathway.campus}` : pathway.name}
                            </span>
                            {isSelected && <CheckCircle2 className="h-4 w-4 text-brand shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </OnboardingShell>
      )}

      {/* ÉTAPE 3 : CONFIRMATION OBLIGATOIRE */}
      {step === 3 && (
        <OnboardingShell
          step={3}
          academicYearCode={initialOptions.academicYear.code}
          badge="Dernière étape"
          badgeVariant="secondary"
          title="Confirmez votre affectation"
          description="Veuillez vérifier les informations ci-dessous avant de valider votre inscription pédagogique."
        >
          <div className="space-y-6">
            {/* RÉCAPITULATIF */}
            <div className="p-6 rounded-2xl border border-border bg-background space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Année
                </span>
                <span className="text-sm font-bold text-heading">
                  {initialOptions.academicYear.label || initialOptions.academicYear.code}
                </span>
              </div>

              {vertical === 'COLLEGE' || vertical === 'LYCEE' ? (
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Niveau scolaire
                  </span>
                  <div className="text-right">
                    <span className="text-sm font-bold text-heading block">
                      {selectedGrade?.longDescription}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Classe de {selectedGrade?.shortDescription} ({vertical === 'COLLEGE' ? 'Collège' : 'Lycée'})
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Établissement
                    </span>
                    <span className="text-sm font-bold text-heading text-right">
                      {currentInstitution?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Formation
                    </span>
                    <span className="text-sm font-bold text-heading text-right">
                      {currentVersion?.program.label || currentVersion?.label}
                    </span>
                  </div>
                  {currentVersion && availablePathways.length > 0 && selectedPathwayId && (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Parcours
                      </span>
                      <span className="text-sm font-bold text-heading text-right">
                        {availablePathways.find((p) => p.id === selectedPathwayId)?.name}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* AVERTISSEMENT DE VERROUILLAGE */}
            <div className="p-4 sm:p-5 rounded-2xl border border-warning/30 bg-warning/10 flex items-start gap-3 text-sm">
              <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
              <div className="space-y-1 text-warning-foreground">
                <p className="font-semibold text-xs uppercase tracking-wider text-heading">
                  Verrouillage annuel
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Ce choix détermine les contenus auxquels vous aurez accès pendant toute l&apos;année. <strong>Vous ne pourrez pas le modifier vous-même après validation.</strong>
                </p>
              </div>
            </div>

            {/* BOUTONS D'ACTION */}
            <div className="space-y-3 pt-2">
              <Button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isPending}
                className="w-full font-bold py-6 text-base gap-2"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enregistrement de votre niveau...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Confirmer mon niveau
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                disabled={isPending}
                className="w-full"
              >
                Modifier mon choix
              </Button>
            </div>

            {/* ASSISTANCE CONTACT */}
            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">
                Vous avez fait une erreur lors du choix de votre niveau ?{' '}
                <Link href="/contact" className="underline hover:text-foreground">
                  Contactez-nous
                </Link>
                .
              </p>
            </div>
          </div>
        </OnboardingShell>
      )}
    </>
  );
}
