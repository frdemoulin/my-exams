'use client';

import { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';
import type { Subject } from '@prisma/client';
import type { TeachingWithRelations } from '@/core/teaching';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group';
import { getRecentYears } from '@/lib/utils';

interface HomePageProps {
  initialSubjects: Subject[];
  specialties: TeachingWithRelations[];
}

export default function HomePage({ initialSubjects, specialties }: HomePageProps) {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | undefined>('lycee');
  const [selectedYear, setSelectedYear] = useState<string | undefined>('2024');

  const levels = [
    { value: 'college', label: 'Collège' },
    { value: 'lycee', label: 'Lycée' },
    { value: 'bts', label: 'BTS' },
    { value: 'concours', label: 'Concours' },
  ];

  const years = getRecentYears();

  const filieres = [
    {
      title: 'Bac Général',
      subtitle: 'Spécialités, tronc commun',
      description: 'Maths, Physique-Chimie, SES, HGGSP, LLCE…',
      query: { level: 'lycee', track: 'general' } as Record<string, string>,
    },
    {
      title: 'Bac Technologique',
      subtitle: 'STMG, STI2D, STL…',
      description: 'Épreuves technologiques et enseignements spécifiques.',
      query: { level: 'lycee', track: 'technologique' } as Record<string, string>,
    },
    {
      title: 'BTS',
      subtitle: 'BTS SIO, NDRC, MCO…',
      description: 'Annales pro pour préparer les épreuves écrites.',
      query: { level: 'bts' } as Record<string, string>,
    },
  ];

  const trendingPapers = [
    {
      level: 'Lycée',
      course: 'Spécialité Mathématiques',
      grade: 'Terminale',
      subject: 'Mathématiques',
      year: '2024',
      label: 'Sujet Métropole – Juin 2024',
      tags: ['Suites', 'Probabilités', 'Dérivation'],
    },
    {
      level: 'Lycée',
      course: 'Spécialité Physique-Chimie',
      grade: 'Première',
      subject: 'Sciences physiques',
      year: '2024',
      label: 'Sujet Métropole – Juin 2024',
      tags: ['Mécanique', 'Électricité', 'Ondes'],
    },
    {
      level: 'Lycée',
      course: 'Tronc Commun - Français',
      grade: 'Première',
      subject: 'Français',
      year: '2023',
      label: 'Écrit – Séries générales',
      tags: ['Dissertation', 'Commentaire', 'Invention'],
    },
  ];

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO : remplacer par un router.push quand tu brancheras la page /annales
    // router.push({
    //   pathname: '/annales',
    //   query: {
    //     q: search,
    //     level: selectedLevel,
    //     year: selectedYear,
    //   },
    // });
    console.log('Recherche', { search, selectedLevel, selectedYear });
  };

  const handleFiliereClick = (query: Record<string, string>) => {
    // TODO : router.push vers /annales avec les bons query params
    console.log('Filière choisie', query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold">
              SA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight">
                My exams
              </span>
              <span className="text-xs text-slate-400">
                Annales d'examens, gratuites et triées.
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="/dashboard" className="hover:text-white">
              Administration
            </a>
            <a href="/annales" className="hover:text-white">
              Annales
            </a>
            <a href="/notions" className="hover:text-white">
              Notions
            </a>
            <a href="/a-propos" className="hover:text-white">
              À propos
            </a>
            <Button variant="outline" size="sm" className="border-slate-700">
              Se connecter
            </Button>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10">
        {/* HERO + FILIÈRES */}
        <section className="grid items-start gap-8 lg:grid-cols-[3fr,2fr]">
          {/* HERO GAUCHE */}
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-slate-700 bg-slate-900/70 text-xs text-slate-200"
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Plateforme de révision 100% gratuite
            </Badge>

            <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Toutes tes annales
              <span className="block text-blue-400">au même endroit.</span>
            </h1>

            <p className="mb-6 max-w-xl text-sm text-slate-300 md:text-base">
              Recherche par filière, matière, année ou notion.
              En quelques secondes, tu trouves le sujet – et sa correction – pour réviser efficacement.
            </p>

            {/* FORMULAIRE DE RECHERCHE */}
            <form onSubmit={handleSearchSubmit} className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Search className="h-4 w-4" />
                  </span>
                  <Input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Ex : bac général maths 2024, BTS SIO E4…"
                    className="border-slate-700 bg-slate-900/70 py-2.5 pl-9 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:ring-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-blue-500 active:bg-blue-600 sm:min-w-[120px]"
                >
                  Rechercher
                </Button>
              </div>

              <p className="text-xs text-slate-400">
                Suggestion :{' '}
                <span className="font-medium text-slate-300">
                  "Maths bac général 2024 métropole"
                </span>{' '}
                ou{' '}
                <span className="font-medium text-slate-300">
                  "BTS SIO E4 base de données"
                </span>
              </p>
            </form>

            {/* FILTRES RAPIDES */}
            <div className="mt-6 space-y-4">
              {/* NIVEAU */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Niveau
                </span>
                <ToggleGroup
                  type="single"
                  value={selectedLevel}
                  onValueChange={(val) =>
                    setSelectedLevel(val || undefined)
                  }
                  className="flex flex-wrap gap-2"
                >
                  {levels.map((level) => (
                    <ToggleGroupItem
                      key={level.value}
                      value={level.value}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200 data-[state=on]:border-blue-500 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
                    >
                      {level.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              {/* SPÉCIALITÉS POPULAIRES */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Spécialités & Enseignements populaires
                </span>
                <div className="flex flex-wrap gap-2">
                  {specialties.slice(0, 8).map((course) => (
                    <Button
                      key={course.id}
                      type="button"
                      variant="outline"
                      size="sm"
                      className="rounded-full border-slate-700 bg-slate-900/70 text-xs text-slate-200 hover:border-blue-500 hover:text-blue-200"
                      onClick={() => setSearch((prev) =>
                        prev ? `${prev} ${course.shortName || ''}` : course.shortName || ''
                      )}
                    >
                      {course.shortName} • {course.grade.shortDescription}
                    </Button>
                  ))}
                </div>
              </div>

              {/* ANNÉES RÉCENTES */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Années récentes
                </span>
                <ToggleGroup
                  type="single"
                  value={selectedYear}
                  onValueChange={(val) =>
                    setSelectedYear(val || undefined)
                  }
                  className="flex flex-wrap gap-2"
                >
                  {years.map((year) => (
                    <ToggleGroupItem
                      key={year}
                      value={year}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200 data-[state=on]:border-blue-500 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
                    >
                      {year}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </div>

          {/* PANNEAU DROIT : FILIÈRES + COMMENT ÇA MARCHE */}
          <div className="space-y-4">
            <Card className="border-slate-800 bg-slate-950/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-slate-100">
                  Commence par ta filière
                </CardTitle>
                <CardDescription className="text-xs text-slate-400">
                  Un clic sur une filière te pré-filtre les annales par
                  niveau, série et matières principales.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {filieres.map((filiere) => (
                  <button
                    key={filiere.title}
                    type="button"
                    onClick={() => handleFiliereClick(filiere.query)}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-left text-sm transition hover:border-blue-500 hover:bg-slate-900"
                  >
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="font-medium text-slate-100">
                        {filiere.title}
                      </span>
                      <span className="text-[10px] uppercase tracking-wide text-blue-300">
                        Explorer
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {filiere.subtitle}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {filiere.description}
                    </p>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="border-emerald-600/30 bg-gradient-to-br from-emerald-900/40 via-slate-950 to-slate-950 text-xs">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-emerald-100">
                  Comment ça marche ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-emerald-50/90">
                <ol className="list-inside list-decimal space-y-1">
                  <li>Tu cherches ton examen (filière, matière, année).</li>
                  <li>Tu ouvres le sujet et la correction.</li>
                  <li>Tu ajoutes l'annale à ta liste de révision.</li>
                </ol>
                <p className="mt-2 text-[11px] text-emerald-200/80">
                  Pas besoin de compte pour commencer à consulter les sujets.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION : ANNALES POPULAIRES */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-100">
              Annales les plus consultées
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-0 text-xs text-blue-300 hover:text-blue-200"
            >
              Voir toutes les annales →
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {trendingPapers.map((paper, idx) => (
              <Card
                key={idx}
                className="border-slate-800 bg-slate-950/70 text-xs hover:border-blue-500 hover:bg-slate-900/80"
              >
                <CardContent className="p-3">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wide text-slate-400">
                      {paper.grade}
                    </span>
                    <Badge
                      variant="outline"
                      className="border-slate-700 bg-slate-900 px-2 py-0.5 text-[10px] text-slate-300"
                    >
                      {paper.year}
                    </Badge>
                  </div>
                  <p className="mb-1 text-sm font-medium text-slate-100">
                    {paper.course}
                  </p>
                  <p className="mb-2 text-[11px] text-slate-400">
                    {paper.label}
                  </p>
                  <div className="mb-2 flex flex-wrap gap-1">
                    {paper.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-slate-800 bg-slate-900 px-2 py-0.5 text-[10px] text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-1 w-full border-slate-700 bg-slate-900/70 text-[11px] text-blue-300 hover:border-blue-500 hover:text-blue-200"
                  >
                    Ouvrir cette annale
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/60 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Site d'annales — plateforme de
            révision.
          </p>
          <div className="flex gap-4">
            <a href="/mentions-legales" className="hover:text-slate-300">
              Mentions légales
            </a>
            <a href="/contact" className="hover:text-slate-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
