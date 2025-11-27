"use client";

import React from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  onSearch?: (query: string) => void;
  onDiplomaChange?: (diplomaId: string) => void;
  onSubjectChange?: (subjectId: string) => void;
  onYearChange?: (year: string) => void;
  onDifficultyChange?: (difficulty: string) => void;
}

export function SearchFilters({
  onSearch,
  onDiplomaChange,
  onSubjectChange,
  onYearChange,
  onDifficultyChange,
}: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-xl backdrop-blur md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="🔎 Recherche par mot-clé (ex : fonctions, probabilités, 2023)…"
            className="pl-9"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <Button className="shrink-0" variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filtrer
        </Button>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <Select onValueChange={onDiplomaChange}>
          <SelectTrigger>
            <SelectValue placeholder="🎓 Diplôme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les diplômes</SelectItem>
            <SelectItem value="brevet">Brevet</SelectItem>
            <SelectItem value="bac-general">Bac général</SelectItem>
            <SelectItem value="bac-techno">Bac technologique</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onSubjectChange}>
          <SelectTrigger>
            <SelectValue placeholder="📖 Matière" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les matières</SelectItem>
            <SelectItem value="maths">Mathématiques</SelectItem>
            <SelectItem value="physique">Physique-Chimie</SelectItem>
            <SelectItem value="svt">SVT</SelectItem>
            <SelectItem value="philo">Philosophie</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onYearChange}>
          <SelectTrigger>
            <SelectValue placeholder="📅 Année" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les années</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onDifficultyChange}>
          <SelectTrigger>
            <SelectValue placeholder="⚡ Difficulté" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes difficultés</SelectItem>
            <SelectItem value="1">😌 Très facile (1/5)</SelectItem>
            <SelectItem value="2">🙂 Facile (2/5)</SelectItem>
            <SelectItem value="3">😐 Moyen (3/5)</SelectItem>
            <SelectItem value="4">😅 Difficile (4/5)</SelectItem>
            <SelectItem value="5">🤯 Très difficile (5/5)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
