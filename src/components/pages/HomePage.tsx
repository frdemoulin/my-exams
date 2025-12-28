'use client';

import { useState, FormEvent, useEffect, useMemo, useCallback } from 'react';
import { ArrowRight, LogIn, Search, X } from 'lucide-react';
import type { Diploma, Subject } from '@prisma/client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { SiteFooter } from '@/components/shared/site-footer';
import { ExerciseCard } from '@/components/exercises/ExerciseCard';
import type { ExerciseWithRelations } from '@/core/exercise';
import { useSession } from 'next-auth/react';
import { APP_NAME } from '@/config/app';

// Types importés depuis @/core/exercise

interface HomePageProps {
  initialSubjects: Subject[];
  initialDiplomas: Diploma[];
}

export default function HomePage({
  initialSubjects,
  initialDiplomas,
}: HomePageProps) {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "ADMIN";

  const [search, setSearch] = useState('');
  const [selectedDiploma, setSelectedDiploma] = useState<string | undefined>();
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>();
  const [selectedTeaching, setSelectedTeaching] = useState<string | undefined>();
  const [selectedSessionYear, setSelectedSessionYear] = useState<number | undefined>();
  const [selectedThemes, setSelectedThemes] = useState<Array<{ id: string; label: string }>>([]);
  const [exercises, setExercises] = useState<ExerciseWithRelations[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<ExerciseWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState<'year' | 'difficulty' | 'duration' | undefined>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // desc par défaut (plus récent/difficile/long en premier)
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [suggestions, setSuggestions] = useState<
    Array<
      | { type: 'exercise'; id: string; title: string; label: string | null; examPaperLabel: string; sessionYear: number; subject: string }
      | { type: 'theme'; id: string; title: string }
    >
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [teachingOptions, setTeachingOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [isTeachingLoading, setIsTeachingLoading] = useState(false);
  const baseSubjectOptions = useMemo(() => {
    return initialSubjects
      .filter((s) => s.isActive)
      .map((s) => ({
        value: s.shortDescription || s.longDescription,
        label: s.longDescription,
      }))
      .filter((s) => Boolean(s.value))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [initialSubjects]);
  const [subjectOptions, setSubjectOptions] = useState(() => baseSubjectOptions);
  const [isSubjectLoading, setIsSubjectLoading] = useState(false);

  // Fetch exercises on mount
  useEffect(() => {
    // Charger les favoris depuis localStorage
    try {
      const savedFavorites = localStorage.getItem('exercise-favorites');
      if (savedFavorites) {
        setFavorites(new Set(JSON.parse(savedFavorites)));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }

    fetch('/api/exercises/search')
      .then(res => res.json())
      .then(data => {
        setExercises(data.exercises || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching exercises:', err);
        setLoading(false);
      });
  }, []);

  // Fonction de recherche réutilisable (appel API avec filtres)
  const performSearch = useCallback(() => {
    setIsSearching(true);

    // Construction des query params
    const params = new URLSearchParams();

    if (search.trim()) params.append('search', search.trim());
    if (selectedDiploma) params.append('diploma', selectedDiploma);
    if (selectedSubject) params.append('subject', selectedSubject);
    if (selectedTeaching) params.append('teachingId', selectedTeaching);
    if (selectedSessionYear) params.append('year', selectedSessionYear.toString());
    if (selectedThemes.length > 0) {
      params.append(
        'themes',
        selectedThemes.map((theme) => theme.id).join(',')
      );
    }
    if (sortBy) {
      params.append('sortBy', sortBy);
      params.append('sortOrder', sortOrder);
    }
    params.append('page', page.toString());
    params.append('pageSize', pageSize.toString());

    fetch(`/api/exercises/search?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setFilteredExercises(data.exercises || []);
        setTotal(data.count || 0);
        setShowResults(true);
        setIsSearching(false);
      })
      .catch(err => {
        console.error('Error searching exercises:', err);
        setIsSearching(false);
      });
  }, [
    search,
    selectedDiploma,
    selectedSubject,
    selectedTeaching,
    selectedSessionYear,
    selectedThemes,
    sortBy,
    sortOrder,
    page,
    pageSize,
  ]);

  // Debounce pour la recherche textuelle
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setPage(1); // reset page quand la recherche texte change
        performSearch();
      }, 500); // 500ms de debounce pour la saisie textuelle

      return () => clearTimeout(timer);
    }
  }, [search, loading, performSearch]);

  // Marquer le montage client pour éviter les warnings d'hydratation (Radix Select)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Recherche instantanée pour les filtres/pagination (pas de debounce)
  useEffect(() => {
    if (!loading) {
      performSearch();
    }
  }, [performSearch, loading]);

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
    // La recherche se fait automatiquement, on empêche juste le reload de la page
  };

  const handleSortChange = (newSortBy: 'year' | 'difficulty' | 'duration') => {
    if (sortBy === newSortBy) {
      // Cycle : desc -> asc -> off
      if (sortOrder === 'desc') {
        setSortOrder('asc');
      } else {
        setSortBy(undefined);
      }
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
  };

  const handleResetFilters = () => {
    setSelectedDiploma(undefined);
    setSelectedSubject(undefined);
    setSelectedTeaching(undefined);
    setSelectedSessionYear(undefined);
    setSelectedThemes([]);
    setSearch('');
    setPage(1);
    setShowResults(false);
  };

  const hasNextPage = page * pageSize < total;
  const hasPrevPage = page > 1;

  // Suggestions (autocomplete léger)
  useEffect(() => {
    const controller = new AbortController();
    const run = async () => {
      if (search.trim().length < 2) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }
      try {
        const params = new URLSearchParams();
        params.append('q', search.trim());
        params.append('limit', '8');
        const res = await fetch(`/api/exercises/suggest?${params.toString()}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setSuggestions(data.suggestions || []);
        setShowSuggestions(true);
      } catch (err) {
        if ((err as any).name !== 'AbortError') {
          console.error('Error fetching suggestions:', err);
        }
      }
    };

    const t = setTimeout(run, 250); // debounce suggestions
    return () => {
      controller.abort();
      clearTimeout(t);
    };
  }, [search]);

  const toggleFavorite = (exerciseId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(exerciseId)) {
        newFavorites.delete(exerciseId);
      } else {
        newFavorites.add(exerciseId);
      }
      // Sauvegarder dans localStorage
      try {
        localStorage.setItem('exercise-favorites', JSON.stringify(Array.from(newFavorites)));
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
      return newFavorites;
    });
  };

  // Compter les filtres actifs
  const activeFiltersCount =
    [selectedDiploma, selectedSubject, selectedTeaching, selectedSessionYear].filter(Boolean)
      .length + selectedThemes.length;

  const diplomaOptions = useMemo(() => {
    if (initialDiplomas.length > 0) {
      return initialDiplomas
        .map((d) => d.shortDescription || d.longDescription)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
    }

    const set = new Set<string>();
    exercises.forEach((ex) => {
      const label = ex.examPaper.diploma.shortDescription;
      if (label) set.add(label);
    });
    return Array.from(set).sort();
  }, [exercises, initialDiplomas]);

  const showTeachingFilter = isTeachingLoading || teachingOptions.length > 0;

  useEffect(() => {
    if (!selectedDiploma) {
      setSubjectOptions(baseSubjectOptions);
      setIsSubjectLoading(false);
      return;
    }

    const params = new URLSearchParams();
    params.append('diploma', selectedDiploma);

    setIsSubjectLoading(true);

    fetch(`/api/subjects?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        const options: Array<{ value: string; label: string }> =
          data.subjects?.map((subject: { shortDescription: string; longDescription: string }) => ({
            value: subject.shortDescription || subject.longDescription,
            label: subject.longDescription,
          })) ?? [];
        options.sort((a, b) => a.label.localeCompare(b.label));
        setSubjectOptions(options);
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
        setSubjectOptions(baseSubjectOptions);
      })
      .finally(() => {
        setIsSubjectLoading(false);
      });
  }, [selectedDiploma, baseSubjectOptions]);

  useEffect(() => {
    if (!selectedSubject) return;
    if (subjectOptions.some((opt) => opt.value === selectedSubject)) return;
    setSelectedSubject(undefined);
    setSelectedTeaching(undefined);
    setPage(1);
  }, [selectedSubject, subjectOptions]);

  useEffect(() => {
    if (!selectedSubject) {
      setTeachingOptions([]);
      setIsTeachingLoading(false);
      return;
    }

    const params = new URLSearchParams();
    if (selectedDiploma) params.append('diploma', selectedDiploma);
    if (selectedSubject) params.append('subject', selectedSubject);
    if (selectedSessionYear)
      params.append('session', selectedSessionYear.toString());

    setTeachingOptions([]);
    setIsTeachingLoading(true);

    fetch(`/api/teachings?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setTeachingOptions(data.options || []);
      })
      .catch((error) => {
        console.error('Error fetching teachings:', error);
        setTeachingOptions([]);
      })
      .finally(() => {
        setIsTeachingLoading(false);
      });
  }, [selectedDiploma, selectedSubject, selectedSessionYear]);

  useEffect(() => {
    if (!selectedTeaching) return;
    if (teachingOptions.some((opt) => opt.value === selectedTeaching)) return;
    setSelectedTeaching(undefined);
  }, [selectedTeaching, teachingOptions]);

  useEffect(() => {
    if (teachingOptions.length !== 1) return;
    const onlyOption = teachingOptions[0]?.value;
    if (!onlyOption || selectedTeaching === onlyOption) return;
    setSelectedTeaching(onlyOption);
    setPage(1);
  }, [selectedTeaching, teachingOptions]);

  const sessionOptions = useMemo(() => {
    const set = new Set<number>();
    exercises.forEach((ex) => {
      if (ex.examPaper.sessionYear) set.add(ex.examPaper.sessionYear);
    });
    return Array.from(set).sort((a, b) => b - a);
  }, [exercises]);

  useEffect(() => {
    if (selectedSessionYear || sessionOptions.length === 0) return;
    setSelectedSessionYear(sessionOptions[0]);
    setPage(1);
  }, [selectedSessionYear, sessionOptions]);

  const HeroEyebrow = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4 inline-flex items-center gap-2 rounded-base border border-default bg-neutral-primary-soft px-3 py-1 text-[11px] font-semibold tracking-tight text-body shadow-xs">
      <span className="h-2 w-2 rounded-full bg-success" />
      <span>{children}</span>
      </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-xs font-bold text-white">
              SA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight">
                {APP_NAME}
              </span>
              <span className="text-xs text-muted-foreground">
                Annales d&apos;examens, gratuites et triées.
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {session?.user && (
              <Link href="/admin" className="hover:text-foreground">
                Administration
              </Link>
            )}
            <ThemeToggle />
            {!session?.user && (
              <Link
                href="/log-in"
                className="inline-flex h-9 items-center gap-2 rounded-base border border-transparent bg-success px-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-success-strong focus:outline-none focus:ring-4 focus:ring-success-medium focus:ring-offset-1"
              >
                <LogIn className="h-4 w-4" />
                <span>Se connecter</span>
              </Link>
            )}
            {session?.user && (
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="inline-flex h-9 items-center gap-2 rounded-base border border-default-medium bg-neutral-secondary-medium px-3 text-sm font-semibold text-body shadow-xs transition-colors hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.75A2.75 2.75 0 0 0 13 3H6.75A2.75 2.75 0 0 0 4 5.75v12.5A2.75 2.75 0 0 0 6.75 21H13a2.75 2.75 0 0 0 2.75-2.75V15M10 12h10m0 0-3-3m3 3-3 3" />
                </svg>
                <span>Se déconnecter</span>
              </button>
            )}
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            {session?.user && (
              <Link href="/admin" className="text-sm font-semibold text-fg-brand hover:text-heading">
                Admin
              </Link>
            )}
            <ThemeToggle />
            {session?.user ? (
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="inline-flex h-9 items-center gap-2 rounded-base border border-default-medium bg-neutral-secondary-medium px-3 text-sm font-semibold text-body shadow-xs transition-colors hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
              >
                <span className="sr-only">Se déconnecter</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.75A2.75 2.75 0 0 0 13 3H6.75A2.75 2.75 0 0 0 4 5.75v12.5A2.75 2.75 0 0 0 6.75 21H13a2.75 2.75 0 0 0 2.75-2.75V15M10 12h10m0 0-3-3m3 3-3 3" />
                </svg>
              </button>
            ) : (
              <Link
                href="/log-in"
                className="inline-flex h-9 items-center gap-2 rounded-base border border-transparent bg-success px-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-success-strong focus:outline-none focus:ring-4 focus:ring-success-medium focus:ring-offset-1"
              >
                <LogIn className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10">
        {/* HERO + FILIÈRES */}
        <section className="grid items-start gap-8">
          {/* HERO GAUCHE */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <HeroEyebrow>📚 Plus de 1000 exercices d&apos;annales indexés</HeroEyebrow>

            <h1 className="mb-3 text-balance text-3xl font-extrabold tracking-tight text-heading md:text-4xl lg:text-5xl">
              Révise tes annales <span className="text-fg-brand">plus efficacement</span>.
            </h1>

            <p className="mb-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
              Cherche un sujet par diplôme, session, matière, option/spécialité, thème ou durée.
              <br/>En un coup d’œil, vois ceux qui collent à ton niveau et à ton planning, et ouvre en 1 clic les sujets et corrections complètes sur les meilleurs sites d’annales.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button size="lg" className="font-semibold">
                <span className="mr-2 inline-flex items-center">
                  <ArrowRight className="mr-1 h-4 w-4" />
                  📚 Sujets d’annales
                </span>
              </Button>
              <Button variant="success" size="lg" className="font-semibold">
                📝 Corrections de référence
              </Button>
            </div>

            <div className="mb-6 flex flex-wrap gap-6 pt-4 text-xs text-muted-foreground sm:text-sm">
              <div className="space-y-1">
                <div className="font-semibold text-heading">+1000 exercices</div>
                <div className="text-[11px] sm:text-xs">Annales récentes et classées par thème</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-heading">Filtres avancés</div>
                <div className="text-[11px] sm:text-xs">Diplôme, session, matière, option</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-heading">Pensé pour le bac</div>
                <div className="text-[11px] sm:text-xs">Interface claire pour les lycéens</div>
              </div>
            </div>

            {/* FORMULAIRE DE RECHERCHE */}
            <form onSubmit={handleSearchSubmit} className="w-full space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-muted-foreground">
                    <Search className="h-4 w-4" />
                  </span>
                  <Input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Ex : titrage acide-base, loi normale, base de données…"
                    className="ps-10 pe-4 text-sm"
                    onFocus={() => {
                      if (suggestions.length > 0) setShowSuggestions(true);
                    }}
                    onBlur={() => {
                      // petit délai pour laisser le temps de cliquer
                      setTimeout(() => setShowSuggestions(false), 200);
                    }}
                  />
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-border bg-background shadow-lg">
                      <ul className="max-h-64 overflow-auto py-1 text-sm">
                        {suggestions.map((s) => (
                          <li key={s.id}>
                            <button
                              type="button"
                              className="flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left hover:bg-muted"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => {
                                if (s.type === 'theme') {
                                  const themeId = s.id.replace(/^theme:/, '');
                                  setSelectedThemes((prev) => {
                                    if (prev.some((theme) => theme.id === themeId)) {
                                      return prev;
                                    }
                                    return [...prev, { id: themeId, label: s.title }];
                                  });
                                  setSearch('');
                                } else {
                                  setSearch(s.title);
                                }
                                setShowSuggestions(false);
                                setPage(1);
                              }}
                            >
                              <span className="font-medium">{s.title}</span>
                              {s.type === 'exercise' ? (
                                <span className="text-xs text-muted-foreground">
                                  {s.subject} · {s.examPaperLabel} · {s.sessionYear}
                                </span>
                              ) : (
                                <span className="text-xs text-muted-foreground">
                                  Thème
                                </span>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  aria-label="Rechercher"
                  disabled={isSearching}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium shadow-sm sm:min-w-[120px]"
                >
                  {isSearching ? (
                    <div className="flex items-center justify-center">
                      <span className="sr-only">Rechercher</span>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    </div>
                  ) : (
                    'Rechercher'
                  )}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground lg:text-left">
                Suggestion :{' '}
                <span className="font-medium text-foreground">
                  &quot;titrage acide-base&quot;
                </span>{' '}
                ou{' '}
                <span className="font-medium text-foreground">
                  &quot;probabilités loi normale&quot;
                </span>
              </p>
            </form>

            {/* FILTRES RAPIDES */}
            <div className="mt-6 w-full space-y-4">
              {/* EN-TÊTE AVEC BOUTON RÉINITIALISER */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Filtres rapides
                  {activeFiltersCount > 0 && (
                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-2xs font-bold text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </span>
                {(activeFiltersCount > 0 || search) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleResetFilters}
                    className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    🔄 Réinitialiser
                  </Button>
                )}
              </div>

              {/* FILTRES EN LIGNE */}
              <div className="flex flex-col gap-3 md:flex-row md:flex-nowrap">
                {isClient ? (
                  <>
                    {/* DIPLÔME */}
                    <div className="space-y-1.5 md:flex-1">
                      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        🎓 Diplôme
                      </label>
                      <Select
                        value={selectedDiploma || 'all'}
                        onValueChange={(value) => {
                          setSelectedDiploma(value === 'all' ? undefined : value);
                          setSelectedTeaching(undefined);
                          setPage(1);
                        }}
                      >
                        <SelectTrigger aria-label="Filtrer par diplôme" className="h-9 text-sm">
                          <SelectValue placeholder="Tous les diplômes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous les diplômes</SelectItem>
                          {diplomaOptions.map((label) => (
                            <SelectItem key={label} value={label}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* MATIÈRE */}
                    <div className="space-y-1.5 md:flex-1">
                      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        📖 Matière
                      </label>
                      <Select
                        value={selectedSubject || 'all'}
                        disabled={isSubjectLoading}
                        onValueChange={(value) => {
                          setSelectedSubject(value === 'all' ? undefined : value);
                          setSelectedTeaching(undefined);
                          setPage(1);
                        }}
                      >
                        <SelectTrigger aria-label="Filtrer par matière" className="h-9 text-sm">
                          <SelectValue placeholder="Toutes les matières" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes les matières</SelectItem>
                          {subjectOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* SESSION */}
                    <div className="space-y-1.5 md:flex-1">
                      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        📅 Session
                      </label>
                      <Select
                        value={selectedSessionYear?.toString() || 'all'}
                        onValueChange={(value) => {
                          setSelectedSessionYear(value === 'all' ? undefined : Number(value));
                          setPage(1);
                        }}
                      >
                        <SelectTrigger aria-label="Filtrer par session" className="h-9 text-sm">
                          <SelectValue placeholder="Toutes les sessions" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes les sessions</SelectItem>
                          {sessionOptions.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* OPTION / SPÉCIALITÉ */}
                    {showTeachingFilter && (
                      <div className="space-y-1.5 md:flex-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          🧭 Option / Spécialité
                        </label>
                        {isTeachingLoading ? (
                          <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
                        ) : (
                          <Select
                            value={selectedTeaching || 'all'}
                            onValueChange={(value) => {
                              setSelectedTeaching(value === 'all' ? undefined : value);
                              setPage(1);
                            }}
                          >
                            <SelectTrigger aria-label="Filtrer par option ou spécialité" className="h-9 text-sm">
                              <SelectValue placeholder="Toutes les options" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Toutes les options</SelectItem>
                              {teachingOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="space-y-1.5 md:flex-1">
                      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        🎓 Diplôme
                      </label>
                      <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
                    </div>
                    <div className="space-y-1.5 md:flex-1">
                      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        📖 Matière
                      </label>
                      <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
                    </div>
                    <div className="space-y-1.5 md:flex-1">
                      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        📅 Session
                      </label>
                      <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
                    </div>
                    {showTeachingFilter && (
                      <div className="space-y-1.5 md:flex-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          🧭 Option / Spécialité
                        </label>
                        <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
                      </div>
                    )}
                  </>
                )}
              </div>
              {selectedThemes.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {selectedThemes.map((theme) => (
                    <Badge key={theme.id} variant="outline" className="flex items-center gap-1">
                      Thème : {theme.label}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedThemes((prev) =>
                            prev.filter((item) => item.id !== theme.id)
                          );
                          setPage(1);
                        }}
                        className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                        aria-label={`Retirer le thème ${theme.label}`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedThemes([]);
                      setPage(1);
                    }}
                    className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Retirer tous les thèmes
                  </Button>
                </div>
              )}
            </div>
          </div>

        </section>

        {/* SECTION : RÉSULTATS DE RECHERCHE */}
        {showResults && (
          <section className="space-y-6">
            {/* EN-TÊTE AVEC COMPTEUR ET TRI */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <h2 className="text-lg font-semibold">
                  Résultats
                </h2>
                <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-fg-brand">
                  {total} exercice{total > 1 ? 's' : ''} · page {page}/{Math.max(1, Math.ceil(total / pageSize))}
                </span>
              </div>

              {/* SÉLECTEUR DE TRI */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Trier par :</span>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSortChange('year')}
                    className={`h-auto rounded-base px-3 py-1.5 text-xs font-semibold ${sortBy === 'year'
                        ? 'border-default-medium bg-neutral-secondary-medium text-heading hover:bg-neutral-tertiary-medium hover:text-heading'
                        : 'border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-soft hover:text-heading'
                      }`}
                  >
                    Session {sortBy === 'year' && (sortOrder === 'desc' ? '↓' : '↑')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSortChange('difficulty')}
                    className={`h-auto rounded-base px-3 py-1.5 text-xs font-semibold ${sortBy === 'difficulty'
                        ? 'border-default-medium bg-neutral-secondary-medium text-heading hover:bg-neutral-tertiary-medium hover:text-heading'
                        : 'border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-soft hover:text-heading'
                      }`}
                  >
                    Difficulté {sortBy === 'difficulty' && (sortOrder === 'desc' ? '↓' : '↑')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSortChange('duration')}
                    className={`h-auto rounded-base px-3 py-1.5 text-xs font-semibold ${sortBy === 'duration'
                        ? 'border-default-medium bg-neutral-secondary-medium text-heading hover:bg-neutral-tertiary-medium hover:text-heading'
                        : 'border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-soft hover:text-heading'
                      }`}
                  >
                    Durée {sortBy === 'duration' && (sortOrder === 'desc' ? '↓' : '↑')}
                  </Button>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="flex min-h-[400px] items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-4xl">⏳</div>
                  <p className="text-muted-foreground">Chargement des exercices...</p>
                </div>
              </div>
            ) : filteredExercises.length === 0 ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-border bg-card">
                <div className="text-center">
                  <div className="mb-4 text-5xl">🤷</div>
                  <p className="mb-2 text-lg font-medium">
                    Aucun exercice trouvé
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Essaye de modifier tes filtres de recherche
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredExercises.map((exercise) => (
                  <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    isFavorite={favorites.has(exercise.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
                {total > pageSize && (
                  <div className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm">
                    <span className="text-muted-foreground">
                      Page {page} / {Math.max(1, Math.ceil(total / pageSize))} · {total} exercices
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!hasPrevPage || isSearching}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                      >
                        ← Précédent
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!hasNextPage || isSearching}
                        onClick={() => setPage((p) => p + 1)}
                      >
                        Suivant →
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* SECTION : EXERCICES POPULAIRES - TODO: À implémenter avec les vraies données */}
        {false && !showResults && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">
                Annales les plus consultées
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto px-0 text-xs text-fg-brand hover:text-fg-brand/80"
                onClick={() => setShowResults(true)}
              >
                Voir toutes les annales →
              </Button>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {trendingPapers.map((paper, idx) => (
                <Card
                  key={idx}
                  className="text-xs hover:border-brand"
                >
                  <CardContent className="p-3">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
                        {paper.grade}
                      </span>
                      <Badge
                        variant="outline"
                        className="px-2 py-0.5 text-2xs"
                      >
                        {paper.year}
                      </Badge>
                    </div>
                    <p className="mb-1 text-sm font-medium">
                      {paper.course}
                    </p>
                    <p className="mb-2 text-[11px] text-muted-foreground">
                      {paper.label}
                    </p>
                    <div className="mb-2 flex flex-wrap gap-1">
                      {paper.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="px-2 py-0.5 text-2xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-1 w-full text-[11px]"
                      onClick={() => setShowResults(true)}
                    >
                      Ouvrir cette annale
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
