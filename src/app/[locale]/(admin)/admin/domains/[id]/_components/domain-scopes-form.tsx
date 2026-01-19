"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Plus, Save, Trash2 } from "lucide-react";

import { updateDomainScopes } from "@/core/domain";
import type { Option } from "@/types/option";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DomainScopeForm = {
  diplomaId?: string | null;
  gradeId?: string | null;
  divisionId?: string | null;
  teachingId?: string | null;
  curriculumId?: string | null;
  labelOverride?: string | null;
  order?: number | null;
  isActive?: boolean;
};

interface DomainScopesFormProps {
  domainId: string;
  scopes: DomainScopeForm[];
  diplomas: Option[];
  grades: Option[];
  divisions: Option[];
  teachings: Option[];
  curriculums: Option[];
}

export const DomainScopesForm = ({
  domainId,
  scopes,
  diplomas,
  grades,
  divisions,
  teachings,
  curriculums,
}: DomainScopesFormProps) => {
  const [rows, setRows] = useState<DomainScopeForm[]>(
    scopes.map((scope) => ({
      ...scope,
      labelOverride: scope.labelOverride ?? "",
      order: scope.order ?? null,
      isActive: scope.isActive ?? true,
    }))
  );
  const [isSaving, setIsSaving] = useState(false);

  const addScope = () => {
    setRows((prev) => [
      ...prev,
      {
        diplomaId: null,
        gradeId: null,
        divisionId: null,
        teachingId: null,
        curriculumId: null,
        labelOverride: "",
        order: null,
        isActive: true,
      },
    ]);
  };

  const updateScope = (index: number, updates: Partial<DomainScopeForm>) => {
    setRows((prev) =>
      prev.map((scope, idx) => (idx === index ? { ...scope, ...updates } : scope))
    );
  };

  const removeScope = (index: number) => {
    setRows((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("scopes", JSON.stringify(rows));

    try {
      setIsSaving(true);
      await updateDomainScopes(domainId, formData);
      toast.success("Scopes mis à jour");
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "digest" in error &&
        String(error.digest).startsWith("NEXT_REDIRECT")
      ) {
        throw error;
      }
      toast.error("Erreur lors de la mise à jour des scopes");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader className="mb-2">
        <CardTitle>Portée du domaine</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            Définis où ce domaine s&apos;applique (diplôme, niveau, enseignement, programme).
          </p>
          <Button type="button" variant="success" size="sm" onClick={addScope}>
            <Plus className="h-4 w-4" />
            Ajouter un scope
          </Button>
        </div>

        {rows.length === 0 ? (
          <p className="text-xs text-muted-foreground">Aucun scope défini.</p>
        ) : (
          <div className="space-y-3">
            {rows.map((scope, index) => (
              <div
                key={`scope-${index}`}
                className="space-y-3 rounded-base border border-default bg-neutral-primary-medium p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-heading">
                    Scope #{index + 1}
                  </span>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeScope(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Diplôme</span>
                    <Select
                      value={scope.diplomaId ?? "none"}
                      onValueChange={(value) =>
                        updateScope(index, { diplomaId: value === "none" ? null : value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tous les diplômes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Tous les diplômes</SelectItem>
                        {diplomas.map((diploma) => (
                          <SelectItem key={diploma.value} value={diploma.value}>
                            {diploma.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Niveau</span>
                    <Select
                      value={scope.gradeId ?? "none"}
                      onValueChange={(value) =>
                        updateScope(index, { gradeId: value === "none" ? null : value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tous les niveaux" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Tous les niveaux</SelectItem>
                        {grades.map((grade) => (
                          <SelectItem key={grade.value} value={grade.value}>
                            {grade.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Filière</span>
                    <Select
                      value={scope.divisionId ?? "none"}
                      onValueChange={(value) =>
                        updateScope(index, { divisionId: value === "none" ? null : value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Toutes les filières" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Toutes les filières</SelectItem>
                        {divisions.map((division) => (
                          <SelectItem key={division.value} value={division.value}>
                            {division.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Enseignement</span>
                    <Select
                      value={scope.teachingId ?? "none"}
                      onValueChange={(value) =>
                        updateScope(index, { teachingId: value === "none" ? null : value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tous les enseignements" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Tous les enseignements</SelectItem>
                        {teachings.map((teaching) => (
                          <SelectItem key={teaching.value} value={teaching.value}>
                            {teaching.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Programme</span>
                    <Select
                      value={scope.curriculumId ?? "none"}
                      onValueChange={(value) =>
                        updateScope(index, { curriculumId: value === "none" ? null : value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tous les programmes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Tous les programmes</SelectItem>
                        {curriculums.map((curriculum) => (
                          <SelectItem key={curriculum.value} value={curriculum.value}>
                            {curriculum.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  <div className="space-y-1 md:col-span-2">
                    <span className="text-xs font-semibold text-muted-foreground">Libellé (optionnel)</span>
                    <Input
                      type="text"
                      placeholder="Libellé surchargé"
                      value={scope.labelOverride ?? ""}
                      onChange={(event) => updateScope(index, { labelOverride: event.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Ordre</span>
                    <Input
                      type="number"
                      placeholder="1"
                      value={scope.order ?? ""}
                      onChange={(event) =>
                        updateScope(index, {
                          order: event.target.value ? parseInt(event.target.value, 10) : null,
                        })
                      }
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-brand"
                    checked={scope.isActive ?? true}
                    onChange={(event) => updateScope(index, { isActive: event.target.checked })}
                  />
                  Actif dans ce scope
                </label>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <Button type="button" onClick={handleSave} disabled={isSaving} className="gap-2">
            <Save className="h-4 w-4" />
            Enregistrer les scopes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
