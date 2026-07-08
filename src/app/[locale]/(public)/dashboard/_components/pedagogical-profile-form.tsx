'use client';

import Link from 'next/link';
import { useMemo, useState, useTransition, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import MultipleSelector from '@/components/ui/multiple-selector';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { saveCurrentUserPedagogicalProfile } from '@/core/user/user-profile.actions';
import type { UserPedagogicalProfileContext } from '@/core/user/user-profile.types';
import { cn } from '@/lib/utils';

type PedagogicalProfileFormProps = {
  context: UserPedagogicalProfileContext;
};

export function PedagogicalProfileForm({
  context,
}: PedagogicalProfileFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [profile, setProfile] = useState(context.profile);
  const [selectedSchoolLevelValue, setSelectedSchoolLevelValue] = useState(
    context.profile.audience === 'SECONDARY'
      ? context.profile.secondaryGradeId
      : ''
  );

  const schoolLevelOptions = useMemo(
    () => [
      ...context.options.grades,
      {
        value: '__health_l1',
        label: 'L1 Santé',
        longLabel: 'L1 Santé',
        shortLabel: 'L1 Santé',
      },
    ],
    [context.options.grades]
  );

  const teachingOptions = useMemo(
    () =>
      profile.secondaryGradeId
        ? context.options.teachings.filter(
            (teaching) => teaching.gradeId === profile.secondaryGradeId
          )
        : [],
    [context.options.teachings, profile.secondaryGradeId]
  );

  const selectedTeachingOptions = useMemo(
    () =>
      teachingOptions.filter((teaching) =>
        profile.secondaryTeachingIds.includes(teaching.value)
      ),
    [profile.secondaryTeachingIds, teachingOptions]
  );

  const healthProgramVersionOptions = useMemo(
    () =>
      profile.healthInstitutionId
        ? context.options.healthProgramVersions.filter(
            (version) => version.institutionId === profile.healthInstitutionId
          )
        : [],
    [context.options.healthProgramVersions, profile.healthInstitutionId]
  );

  const healthPathwayOptions = useMemo(
    () => {
      if (!profile.healthProgramVersionId) {
        return [];
      }

      const matchingPathways = context.options.healthPathways.filter(
        (pathway) => pathway.programVersionId === profile.healthProgramVersionId
      );

      const dedupedPathways = new Map<string, (typeof matchingPathways)[number]>();

      for (const pathway of matchingPathways) {
        const existingPathway = dedupedPathways.get(pathway.label);

        if (!existingPathway || pathway.value === profile.healthPathwayId) {
          dedupedPathways.set(pathway.label, pathway);
        }
      }

      return Array.from(dedupedPathways.values());
    },
    [
      context.options.healthPathways,
      profile.healthPathwayId,
      profile.healthProgramVersionId,
    ]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        await saveCurrentUserPedagogicalProfile(formData);
        toast.success('Profil pédagogique enregistré.');
        router.push('/dashboard');
        router.refresh();
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : 'Impossible d’enregistrer le profil.'
        );
      }
    });
  };

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="space-y-5">
        <input type="hidden" name="audience" value={profile.audience} />
        <input
          type="hidden"
          name="secondaryGradeId"
          value={profile.secondaryGradeId}
        />
        <input
          type="hidden"
          name="healthInstitutionId"
          value={profile.healthInstitutionId}
        />
        <input
          type="hidden"
          name="healthProgramVersionId"
          value={profile.healthProgramVersionId}
        />
        <input
          type="hidden"
          name="healthPathwayId"
          value={profile.healthPathwayId}
        />
        {profile.secondaryTeachingIds.map((teachingId) => (
          <input
            key={teachingId}
            type="hidden"
            name="secondaryTeachingIds"
            value={teachingId}
          />
        ))}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="pedagogical-grade">Niveau scolaire</Label>
            <Select
              value={selectedSchoolLevelValue || undefined}
              onValueChange={(value) => {
                setSelectedSchoolLevelValue(value);

                if (value === '__health_l1') {
                  setProfile((current) => ({
                    ...current,
                    audience: 'HEALTH',
                    secondaryGradeId: '',
                    secondaryTeachingIds: [],
                  }));

                  return;
                }

                setProfile((current) => ({
                  ...current,
                  audience: 'SECONDARY',
                  secondaryGradeId: value,
                  secondaryTeachingIds: [],
                  healthInstitutionId: '',
                  healthProgramVersionId: '',
                  healthPathwayId: '',
                  healthCourseUnitId: '',
                  healthTeachingElementId: '',
                }));
              }}
            >
              <SelectTrigger id="pedagogical-grade">
                <SelectValue placeholder="Choisir un niveau" />
              </SelectTrigger>
              <SelectContent>
                {schoolLevelOptions.map((grade) => (
                  <SelectItem key={grade.value} value={grade.value}>
                    {grade.longLabel}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedSchoolLevelValue === '__health_l1' ? (
            <SearchableSelectField
              id="pedagogical-health-institution"
              label="Faculté"
              options={context.options.healthInstitutions}
              placeholder="Choisir une faculté"
              searchPlaceholder="Rechercher une faculté"
              value={profile.healthInstitutionId}
              onValueChange={(value) => {
                setSelectedSchoolLevelValue('__health_l1');
                setProfile((current) => ({
                  ...current,
                  audience: 'HEALTH',
                  secondaryGradeId: '',
                  secondaryTeachingIds: [],
                  healthInstitutionId: value,
                  healthProgramVersionId: '',
                  healthPathwayId: '',
                  healthCourseUnitId: '',
                  healthTeachingElementId: '',
                }));
              }}
            />
          ) : null}
        </div>
      </div>

      {profile.audience === 'SECONDARY' ? (
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="pedagogical-teachings">
                Enseignements / spécialités
              </Label>
              <MultipleSelector
                value={selectedTeachingOptions}
                options={teachingOptions}
                groupBy="subjectLabel"
                disabled={!profile.secondaryGradeId}
                placeholder={
                  profile.secondaryGradeId
                    ? 'Ajouter un ou plusieurs enseignements'
                    : 'Choisis d’abord un niveau'
                }
                emptyIndicator={
                  <p className="text-center text-sm">
                    Aucun enseignement disponible
                  </p>
                }
                onChange={(options) =>
                  setProfile((current) => ({
                    ...current,
                    secondaryTeachingIds: options.map((option) => option.value),
                  }))
                }
              />
              <p className="text-xs leading-5 text-muted-foreground">
                Optionnel. Utile surtout pour 1re / Terminale afin de
                recommander les bons contenus.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {profile.audience === 'HEALTH' ? (
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <SelectField
              id="pedagogical-health-program-version"
              label="Maquette"
              options={healthProgramVersionOptions}
              placeholder={
                profile.healthInstitutionId
                  ? 'Choisir une maquette'
                  : 'Choisis d’abord une faculté'
              }
              value={profile.healthProgramVersionId}
              disabled={!profile.healthInstitutionId}
              onValueChange={(value) =>
                setProfile((current) => ({
                  ...current,
                  healthProgramVersionId: value,
                  healthPathwayId: '',
                }))
              }
            />

            <SearchableSelectField
              id="pedagogical-health-pathway"
              label="Parcours"
              options={healthPathwayOptions}
              placeholder={
                profile.healthProgramVersionId
                  ? 'Choisir un parcours'
                  : 'Choisis d’abord une maquette'
              }
              searchPlaceholder="Rechercher un parcours"
              value={profile.healthPathwayId}
              disabled={!profile.healthProgramVersionId}
              onValueChange={(value) =>
                setProfile((current) => ({
                  ...current,
                  healthPathwayId: value,
                }))
              }
            />
          </div>
        </div>
      ) : null}

      <div className="flex justify-end border-t border-border pt-4">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline">
            <Link href="/dashboard">Annuler</Link>
          </Button>
          <Button
            type="submit"
            disabled={
              !profile.audience ||
              (profile.audience === 'SECONDARY' && !profile.secondaryGradeId) ||
              (profile.audience === 'HEALTH' && !profile.healthInstitutionId) ||
              isPending
            }
          >
            {isPending ? 'Enregistrement...' : 'Enregistrer le profil'}
          </Button>
        </div>
      </div>
    </form>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  value: string;
  disabled?: boolean;
  onValueChange: (value: string) => void;
};

function SelectField({
  id,
  label,
  options,
  placeholder,
  value,
  disabled,
  onValueChange,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select
        value={value || undefined}
        disabled={disabled}
        onValueChange={(nextValue) =>
          onValueChange(nextValue === '__none' ? '' : nextValue)
        }
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="__none">Aucun</SelectItem>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

type SearchableSelectFieldProps = SelectFieldProps & {
  searchPlaceholder: string;
  emptyMessage?: string;
};

function SearchableSelectField({
  id,
  label,
  options,
  placeholder,
  searchPlaceholder,
  value,
  disabled,
  onValueChange,
  emptyMessage = 'Aucun résultat.',
}: SearchableSelectFieldProps) {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className="w-full justify-between font-normal"
          >
            <span className={cn('truncate', !selectedOption && 'text-muted-foreground')}>
              {selectedOption?.label ?? placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  value="__none"
                  onSelect={() => {
                    onValueChange('');
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn('mr-2 h-4 w-4', !value ? 'opacity-100' : 'opacity-0')}
                  />
                  Aucun
                </CommandItem>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => {
                      onValueChange(option.value);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        option.value === value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
