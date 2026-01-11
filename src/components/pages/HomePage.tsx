'use client';

import { useState, FormEvent, useEffect, useMemo, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import type { Diploma, Subject } from '@prisma/client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
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
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { ExerciseCard } from '@/components/exercises/ExerciseCard';
import type { ExerciseWithRelations } from '@/core/exercise';
import { normalizeExamPaperLabel } from '@/lib/utils';
import { RESUME_ACTIVITY_TTL_DAYS } from '@/config/app';

// Types importés depuis @/core/exercise

interface HomePageProps {
  initialSubjects: Subject[];
  initialDiplomas: Diploma[];
}

type ResumeActivity = {
  kind: 'exercise' | 'examPaper';
  href: string;
  title: string;
  context?: string;
};

const RESUME_DISMISS_TTL_MS = RESUME_ACTIVITY_TTL_DAYS * 24 * 60 * 60 * 1000;

export default function HomePage({
  initialSubjects,
  initialDiplomas,
}: HomePageProps) {
  const { data: session } = useSession();
  const SEARCH_STATE_KEY = 'my-exams:search-state';
  const SEARCH_RESTORE_KEY = 'my-exams:search-restore';
  const RESUME_DISMISS_KEY = 'my-exams:resume-dismissed';
  const [search, setSearch] = useState('');
  const [selectedDiploma, setSelectedDiploma] = useState<string | undefined>();
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>();
  const [selectedTeaching, setSelectedTeaching] = useState<string | undefined>();
  const [selectedSessionYear, setSelectedSessionYear] = useState<number | null | undefined>();
  const [selectedThemes, setSelectedThemes] = useState<Array<{ id: string; label: string }>>([]);
  const [domainOptions, setDomainOptions] = useState<
    Array<{
      id: string;
      label: string;
      shortLabel?: string | null;
      order?: number | null;
      themes: Array<{ id: string; label: string; shortLabel?: string | null }>;
    }>
  >([]);
  const [themeSearch, setThemeSearch] = useState('');
  const [isDomainsLoading, setIsDomainsLoading] = useState(false);
  const [filteredExercises, setFilteredExercises] = useState<ExerciseWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [hasUserSearched, setHasUserSearched] = useState(false);
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
  const [resumeActivity, setResumeActivity] = useState<ResumeActivity | null>(null);
  const [isResumeLoading, setIsResumeLoading] = useState(false);
  const [isResumeDismissed, setIsResumeDismissed] = useState(false);
  const [teachingOptions, setTeachingOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [isTeachingLoading, setIsTeachingLoading] = useState(false);
  const baseSessionOptions = useMemo<number[]>(() => [], []);
  const [sessionOptions, setSessionOptions] = useState<number[]>(() => baseSessionOptions);
  const [isSessionLoading, setIsSessionLoading] = useState(false);
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
  const selectedThemeIds = useMemo(
    () => new Set(selectedThemes.map((theme) => theme.id)),
    [selectedThemes]
  );
  const availableThemeIds = useMemo(() => {
    return new Set(
      domainOptions.flatMap((domain) => domain.themes.map((theme) => theme.id))
    );
  }, [domainOptions]);

  // Initialisation locale (favoris)
  useEffect(() => {
    // Charger les favoris depuis localStorage
    try {
      const savedFavorites = localStorage.getItem('exercise-favorites');
      if (savedFavorites) {
        setFavorites(new Set(JSON.parse(savedFavorites)));
      }
      const resumeDismissed = localStorage.getItem(RESUME_DISMISS_KEY);
      if (resumeDismissed) {
        const dismissedAt = Number(resumeDismissed);
        const effectiveTimestamp = Number.isFinite(dismissedAt)
          ? dismissedAt
          : Date.now();
        if (!Number.isFinite(dismissedAt)) {
          localStorage.setItem(RESUME_DISMISS_KEY, String(effectiveTimestamp));
        }
        if (Date.now() - effectiveTimestamp < RESUME_DISMISS_TTL_MS) {
          setIsResumeDismissed(true);
        } else {
          localStorage.removeItem(RESUME_DISMISS_KEY);
        }
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setResumeActivity(null);
      return;
    }

    setIsResumeLoading(true);
    fetch('/api/user-activity')
      .then((res) => res.json())
      .then((data) => {
        setResumeActivity(data.activity ?? null);
        setIsResumeLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user activity:', error);
        setIsResumeLoading(false);
      });
  }, [session?.user]);

  const hasActiveSearch = Boolean(
    search.trim() ||
    selectedDiploma ||
    selectedSubject ||
    selectedTeaching ||
    selectedSessionYear != null ||
    selectedThemes.length > 0
  );

  // Fonction de recherche réutilisable (appel API avec filtres)
  const performSearch = useCallback(() => {
    if (!hasActiveSearch && !hasUserSearched) {
      setIsSearching(false);
      setShowResults(false);
      setFilteredExercises([]);
      setTotal(0);
      return;
    }

    setIsSearching(true);

    // Construction des query params
    const params = new URLSearchParams();

    if (search.trim()) params.append('search', search.trim());
    if (selectedDiploma) params.append('diploma', selectedDiploma);
    if (selectedSubject) params.append('subject', selectedSubject);
    if (selectedTeaching) params.append('teachingId', selectedTeaching);
    if (selectedSessionYear != null) params.append('year', selectedSessionYear.toString());
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
    hasActiveSearch,
    hasUserSearched,
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

  useEffect(() => {
    if (!isClient) return;
    try {
      const shouldRestore = sessionStorage.getItem(SEARCH_RESTORE_KEY) === '1';
      if (!shouldRestore) return;
      const savedState = sessionStorage.getItem(SEARCH_STATE_KEY);
      if (!savedState) {
        sessionStorage.removeItem(SEARCH_RESTORE_KEY);
        return;
      }
      const parsed = JSON.parse(savedState) as {
        search?: string;
        selectedDiploma?: string;
        selectedSubject?: string;
        selectedTeaching?: string;
        selectedSessionYear?: number | null;
        selectedThemes?: Array<{ id: string; label: string }>;
        sortBy?: 'year' | 'difficulty' | 'duration' | null;
        sortOrder?: 'asc' | 'desc';
        page?: number;
      };

      if (typeof parsed.search === 'string') setSearch(parsed.search);
      if (typeof parsed.selectedDiploma === 'string') setSelectedDiploma(parsed.selectedDiploma);
      if (typeof parsed.selectedSubject === 'string') setSelectedSubject(parsed.selectedSubject);
      if (typeof parsed.selectedTeaching === 'string') setSelectedTeaching(parsed.selectedTeaching);
      if (typeof parsed.selectedSessionYear === 'number' || parsed.selectedSessionYear === null) {
        setSelectedSessionYear(parsed.selectedSessionYear);
      }
      if (Array.isArray(parsed.selectedThemes)) {
        setSelectedThemes(parsed.selectedThemes);
      }
      if (parsed.sortBy === 'year' || parsed.sortBy === 'difficulty' || parsed.sortBy === 'duration') {
        setSortBy(parsed.sortBy);
      } else if (parsed.sortBy === null) {
        setSortBy(undefined);
      }
      if (parsed.sortOrder === 'asc' || parsed.sortOrder === 'desc') {
        setSortOrder(parsed.sortOrder);
      }
      if (typeof parsed.page === 'number' && parsed.page > 0) {
        setPage(parsed.page);
      }
      setHasUserSearched(true);
    } catch (error) {
      console.error('Error restoring search state:', error);
    } finally {
      sessionStorage.removeItem(SEARCH_RESTORE_KEY);
    }
  }, [isClient]);

  // Recherche instantanée pour les filtres/pagination (pas de debounce)
  useEffect(() => {
    if (!loading) {
      performSearch();
    }
  }, [performSearch, loading]);

  useEffect(() => {
    if (!isClient) return;
    if (!hasActiveSearch && !hasUserSearched) return;
    try {
      sessionStorage.setItem(
        SEARCH_STATE_KEY,
        JSON.stringify({
          search,
          selectedDiploma,
          selectedSubject,
          selectedTeaching,
          selectedSessionYear: selectedSessionYear ?? null,
          selectedThemes,
          sortBy: sortBy ?? null,
          sortOrder,
          page,
        })
      );
    } catch (error) {
      console.error('Error saving search state:', error);
    }
  }, [
    isClient,
    hasActiveSearch,
    hasUserSearched,
    search,
    selectedDiploma,
    selectedSubject,
    selectedTeaching,
    selectedSessionYear,
    selectedThemes,
    sortBy,
    sortOrder,
    page,
  ]);

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
    setHasUserSearched(true);
    setPage(1);
    if (hasActiveSearch) {
      performSearch();
    }
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
    setThemeSearch('');
    setSearch('');
    setPage(1);
    setShowResults(false);
    setHasUserSearched(false);
    try {
      sessionStorage.removeItem(SEARCH_STATE_KEY);
    } catch (error) {
      console.error('Error clearing search state:', error);
    }
  };

  const hasNextPage = page * pageSize < total;
  const hasPrevPage = page > 1;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const resultsCountLabel =
    totalPages > 1
      ? `${total} exercice${total > 1 ? 's' : ''} · page ${page}/${totalPages}`
      : `${total} exercice${total > 1 ? 's' : ''}`;
  const resultsFilterBadges = [
    selectedDiploma
      ? {
          id: "diploma",
          label: `🎓 ${selectedDiploma}`,
          onRemove: () => {
            setSelectedDiploma(undefined);
            setPage(1);
          },
        }
      : null,
    selectedSubject
      ? {
          id: "subject",
          label: `📖 ${selectedSubject}`,
          onRemove: () => {
            setSelectedSubject(undefined);
            setPage(1);
          },
        }
      : null,
    selectedSessionYear != null
      ? {
          id: "session",
          label: `📅 ${selectedSessionYear}`,
          onRemove: () => {
            setSelectedSessionYear(null);
            setPage(1);
          },
        }
      : null,
    selectedTeaching
      ? {
          id: "teaching",
          label: `🧭 ${
            teachingOptions.find((opt) => opt.value === selectedTeaching)?.label || selectedTeaching
          }`,
          onRemove: () => {
            setSelectedTeaching(undefined);
            setPage(1);
          },
        }
      : null,
    ...(selectedThemes.length > 0
      ? selectedThemes.map((theme) => ({
          id: `theme-${theme.id}`,
          label: `🏷️ ${theme.label}`,
          onRemove: () => {
            setSelectedThemes((prev) => prev.filter((item) => item.id !== theme.id));
            setPage(1);
          },
        }))
      : []),
    search.trim()
      ? {
          id: "search",
          label: `🔎 ${search.trim()}`,
          onRemove: () => {
            setSearch("");
            setPage(1);
          },
        }
      : null,
  ].filter(Boolean) as Array<{ id: string; label: string; onRemove: () => void }>;

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

  const toggleThemeSelection = (theme: { id: string; label: string }) => {
    setSelectedThemes((prev) => {
      if (prev.some((item) => item.id === theme.id)) {
        return prev.filter((item) => item.id !== theme.id);
      }
      return [...prev, theme];
    });
    setPage(1);
  };

  // Compter les filtres actifs
  const activeFiltersCount =
    [selectedDiploma, selectedSubject, selectedTeaching, selectedSessionYear].filter(Boolean)
      .length + selectedThemes.length;
  const hasDomainFilters = Boolean(
    selectedDiploma || selectedSubject || selectedTeaching || selectedSessionYear != null
  );

  const diplomaOptions = useMemo(() => {
    return initialDiplomas
      .map((d) => d.shortDescription || d.longDescription)
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));
  }, [initialDiplomas]);

  const showTeachingFilter = true;

  useEffect(() => {
    const hasFilters =
      selectedDiploma ||
      selectedSubject ||
      selectedTeaching ||
      selectedSessionYear != null;

    if (!hasFilters) {
      setDomainOptions([]);
      setIsDomainsLoading(false);
      return;
    }

    const params = new URLSearchParams();
    if (selectedDiploma) params.append('diploma', selectedDiploma);
    if (selectedSubject) params.append('subject', selectedSubject);
    if (selectedTeaching) params.append('teachingId', selectedTeaching);
    if (selectedSessionYear != null) {
      params.append('session', selectedSessionYear.toString());
    }

    setIsDomainsLoading(true);
    fetch(`/api/domains?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setDomainOptions(Array.isArray(data.domains) ? data.domains : []);
      })
      .catch((error) => {
        console.error('Error fetching domains/themes:', error);
        setDomainOptions([]);
      })
      .finally(() => {
        setIsDomainsLoading(false);
      });
  }, [selectedDiploma, selectedSubject, selectedTeaching, selectedSessionYear]);

  useEffect(() => {
    if (!hasDomainFilters || domainOptions.length === 0 || selectedThemes.length === 0) {
      return;
    }
    const next = selectedThemes.filter((theme) => availableThemeIds.has(theme.id));
    if (next.length === selectedThemes.length) return;
    setSelectedThemes(next);
  }, [availableThemeIds, domainOptions.length, hasDomainFilters, selectedThemes]);

  const filteredDomainOptions = useMemo(() => {
    if (!themeSearch.trim()) return domainOptions;
    const normalized = themeSearch.trim().toLowerCase();
    return domainOptions
      .map((domain) => {
        const themes = domain.themes.filter((theme) => {
          const label = theme.label.toLowerCase();
          const shortLabel = theme.shortLabel?.toLowerCase() ?? '';
          return label.includes(normalized) || shortLabel.includes(normalized);
        });
        return { ...domain, themes };
      })
      .filter((domain) => domain.themes.length > 0);
  }, [domainOptions, themeSearch]);

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
    if (selectedSessionYear != null) {
      params.append('session', selectedSessionYear.toString());
    }

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

  useEffect(() => {
    if (!selectedDiploma && !selectedSubject) {
      setSessionOptions(baseSessionOptions);
      setIsSessionLoading(false);
      return;
    }

    const params = new URLSearchParams();
    if (selectedDiploma) params.append('diploma', selectedDiploma);
    if (selectedSubject) params.append('subject', selectedSubject);

    setSessionOptions([]);
    setIsSessionLoading(true);

    fetch(`/api/sessions?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        const sessions: number[] = Array.isArray(data.sessions)
          ? data.sessions.filter((year: unknown) => typeof year === 'number')
          : [];
        setSessionOptions(sessions.sort((a, b) => b - a));
      })
      .catch((error) => {
        console.error('Error fetching sessions:', error);
        setSessionOptions(baseSessionOptions);
      })
      .finally(() => {
        setIsSessionLoading(false);
      });
  }, [selectedDiploma, selectedSubject, baseSessionOptions]);

  useEffect(() => {
    if (selectedSessionYear == null) return;
    if (sessionOptions.includes(selectedSessionYear)) return;
    setSelectedSessionYear(undefined);
    setPage(1);
  }, [selectedSessionYear, sessionOptions]);

  const HeroEyebrow = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4 inline-flex items-center gap-2 rounded-base border border-default bg-neutral-primary-soft px-3 py-1 text-[11px] font-semibold tracking-tight text-body shadow-xs">
      <span className="h-2 w-2 rounded-full bg-success" />
      <span>{children}</span>
    </div>
  );

  const HERO = {
    eyebrow: "📚 Base d’annales en construction, contenus enrichis avec l'IA",
    titlePrefix: "Des exercices d’annales officiels, indexés pour réviser",
    titleEmphasis: "efficacement",
    subtitle: "Brevet des collèges, baccalauréat, BTS. Toutes matières.",
  };
  const domainFiltersPanel = (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Affiner par domaines et thèmes
          </p>
          <p className="text-xs text-muted-foreground">
            Choisis un thème pour affiner ta recherche.
          </p>
        </div>
        {selectedThemes.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedThemes([]);
              setPage(1);
            }}
            className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
          >
            Tout effacer
          </Button>
        )}
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-muted-foreground">
            <Search className="h-4 w-4" />
          </span>
          <Input
            value={themeSearch}
            onChange={(e) => setThemeSearch(e.target.value)}
            placeholder="Chercher un thème..."
            className="ps-10 text-sm"
          />
        </div>

        {!hasDomainFilters && (
          <div className="rounded-lg border border-dashed border-border bg-neutral-primary-soft p-3 text-xs text-muted-foreground">
            Sélectionne un diplôme, une matière ou une session pour afficher les thèmes.
          </div>
        )}

        {hasDomainFilters && isDomainsLoading && (
          <div className="space-y-2">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="h-12 w-full animate-pulse rounded-lg bg-muted" />
            ))}
          </div>
        )}

        {hasDomainFilters && !isDomainsLoading && filteredDomainOptions.length === 0 && (
          <div className="rounded-lg border border-dashed border-border bg-neutral-primary-soft p-3 text-xs text-muted-foreground">
            Aucun thème disponible pour ces filtres.
          </div>
        )}

        {hasDomainFilters && !isDomainsLoading && filteredDomainOptions.length > 0 && (
          <div className="space-y-3">
            {filteredDomainOptions.map((domain) => (
              <details
                key={domain.id}
                open={Boolean(themeSearch.trim())}
                className="rounded-lg border border-border bg-neutral-primary-soft/60 px-3 py-2"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-heading">
                  <div className="flex items-center justify-between">
                    <span>{domain.shortLabel || domain.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {domain.themes.length} thème{domain.themes.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </summary>
                <div className="mt-3 flex flex-wrap gap-2">
                  {domain.themes.map((theme) => {
                    const isSelected = selectedThemeIds.has(theme.id);
                    return (
                      <Button
                        key={theme.id}
                        type="button"
                        size="xs"
                        variant={isSelected ? "default" : "outline"}
                        className="h-7 rounded-full px-3 text-[11px] font-semibold"
                        aria-pressed={isSelected}
                        onClick={() =>
                          toggleThemeSelection({
                            id: theme.id,
                            label: theme.label,
                          })
                        }
                      >
                        {theme.shortLabel || theme.label}
                      </Button>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />

      {/* MAIN */}
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-4">
        {/* HERO + FILIÈRES */}
        <section className="grid items-start">
          {/* HERO GAUCHE */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <HeroEyebrow>{HERO.eyebrow}</HeroEyebrow>

            <h1 className="mb-3 text-balance text-3xl font-extrabold tracking-tight text-heading md:text-4xl lg:text-5xl">
              {HERO.titlePrefix}{" "}
              <span className="text-fg-brand">{HERO.titleEmphasis}</span>
            </h1>

            <p className="mb-5 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
              {HERO.subtitle}
            </p>

            <div className="grid w-full grid-cols-2 gap-3 pt-1 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
              <Button
                type="button"
                size="lg"
                className="w-full cursor-default font-semibold hover:bg-brand sm:w-auto"
              >
                <span className="inline-flex items-center">📚 Sujets d’annales</span>
              </Button>
              <Button
                type="button"
                variant="success"
                size="lg"
                className="w-full cursor-default font-semibold hover:bg-success sm:w-auto"
              >
                📝 Corrections
              </Button>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-3 pt-4 text-center text-xs text-muted-foreground sm:flex sm:flex-wrap sm:gap-6 sm:text-left sm:text-sm">
              <div className="space-y-1">
                <div className="font-semibold text-heading">Base en construction</div>
                <div className="text-[11px] sm:text-xs">Exercices ajoutés régulièrement</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-heading">Filtres rapides</div>
                <div className="text-[11px] sm:text-xs">Diplôme, matière, session, spécialité</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-heading">Expérience premium</div>
                <div className="text-[11px] sm:text-xs">Navigation intuitive et ergonomique</div>
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
                    placeholder="Ex : titrage acide-base, loi binomiale, équations horaires du mouvement…"
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
                                  {s.subject} · {normalizeExamPaperLabel(s.examPaperLabel) ?? s.examPaperLabel} · {s.sessionYear}
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
                  className="rounded-xl px-4 py-2.5 text-sm font-medium shadow-sm sm:min-w-30"
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

            </form>

            {/* FILTRES RAPIDES */}
            <div className="mt-6 w-full space-y-4">
              {/* EN-TÊTE AVEC BOUTON RÉINITIALISER */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Filtres rapides
                    {activeFiltersCount > 0 && (
                      <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-2xs font-bold text-white">
                        {activeFiltersCount}
                      </span>
                    )}
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    Quelques clics pour filtrer un sujet d&apos;examen :{' '}
                    <span className="font-medium text-foreground">Diplôme → Matière → Session → Spécialité</span>.
                  </span>
                </div>
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
                        value={selectedSessionYear == null ? 'all' : selectedSessionYear.toString()}
                        disabled={isSessionLoading}
                        onValueChange={(value) => {
                          setSelectedSessionYear(value === 'all' ? null : Number(value));
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

                    {/* SPÉCIALITÉ */}
                    {showTeachingFilter && (
                      <div className="space-y-1.5 md:flex-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          🧭 Spécialité
                        </label>
                        {isTeachingLoading ? (
                          <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
                        ) : (
                          <Select
                            value={selectedTeaching || 'all'}
                            disabled={teachingOptions.length === 0}
                            onValueChange={(value) => {
                              setSelectedTeaching(value === 'all' ? undefined : value);
                              setPage(1);
                            }}
                          >
                            <SelectTrigger aria-label="Filtrer par spécialité" className="h-9 text-sm">
                              <SelectValue placeholder={teachingOptions.length === 0 ? 'Aucune spécialité' : 'Toutes les spécialités'} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Toutes les spécialités</SelectItem>
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
                          🧭 Spécialité
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
              <div className="hidden sm:block lg:hidden">
                {domainFiltersPanel}
              </div>
            </div>
          </div>

        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            {session?.user && !isResumeDismissed && (resumeActivity || isResumeLoading) && (
              <section className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg">🧭</span>
                    <h2 className="text-lg font-semibold">Continuer l&agrave; o&ugrave; je me suis arr&ecirc;t&eacute;</h2>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                      onClick={() => {
                        setIsResumeDismissed(true);
                        try {
                          localStorage.setItem(RESUME_DISMISS_KEY, String(Date.now()));
                        } catch {
                          // Ignore localStorage errors.
                        }
                    }}
                    aria-label="Masquer ce bloc"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                {isResumeLoading ? (
                  <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                      <Skeleton className="h-9 w-32" />
                    </div>
                  </div>
                ) : resumeActivity ? (
                  <Card>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-base">{resumeActivity.title}</CardTitle>
                      {resumeActivity.context && (
                        <CardDescription>{resumeActivity.context}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="flex justify-end">
                      <Button asChild variant="default">
                        <Link href={resumeActivity.href}>Continuer</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="py-4 text-sm text-muted-foreground">
                      Aucune activit&eacute; r&eacute;cente enregistr&eacute;e.
                    </CardContent>
                  </Card>
                )}
              </section>
            )}
            {/* SECTION : RÉSULTATS DE RECHERCHE */}
            {showResults && (
              <section className="space-y-6">
                {/* EN-TÊTE AVEC COMPTEUR ET TRI */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xl">📚</span>
                      <h2 className="text-lg font-semibold">Résultats</h2>
                      <span
                        className="rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-fg-brand"
                        aria-live="polite"
                      >
                        {resultsCountLabel}
                      </span>
                    </div>
                    {resultsFilterBadges.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        {resultsFilterBadges.map((badge) => (
                          <Badge key={badge.id} variant="outline" className="flex items-center gap-1">
                            {badge.label}
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                badge.onRemove();
                              }}
                              className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                              aria-label={`Retirer le filtre ${badge.label}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleResetFilters}
                          className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
                        >
                          Tout effacer
                        </Button>
                      </div>
                    )}
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

                {loading || isSearching ? (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="rounded-2xl border border-border bg-card p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="space-y-2">
                            <Skeleton className="h-5 w-40" />
                            <Skeleton className="h-4 w-56" />
                          </div>
                          <div className="flex gap-2">
                            <Skeleton className="h-7 w-16 rounded-full" />
                            <Skeleton className="h-7 w-20 rounded-full" />
                            <Skeleton className="h-7 w-24 rounded-full" />
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Skeleton className="h-6 w-24 rounded-full" />
                          <Skeleton className="h-6 w-20 rounded-full" />
                          <Skeleton className="h-6 w-28 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : filteredExercises.length === 0 ? (
                  <div className="flex min-h-100 items-center justify-center rounded-2xl border border-border bg-card">
                    <div className="text-center space-y-3">
                      <div className="mb-4 text-5xl">🤷</div>
                      <p className="mb-2 text-lg font-medium">
                        Aucun exercice trouvé
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Essaye de modifier tes filtres de recherche
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {selectedThemes.length > 0 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedThemes([]);
                              setPage(1);
                            }}
                          >
                            Retirer les thèmes
                          </Button>
                        )}
                        {selectedSessionYear != null && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedSessionYear(null);
                              setPage(1);
                            }}
                          >
                            Toutes les sessions
                          </Button>
                        )}
                        {(activeFiltersCount > 0 || search) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleResetFilters}
                          >
                            Réinitialiser
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
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
                          Page {page} / {totalPages} · {total} exercices
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

          <aside className="hidden self-start lg:block lg:sticky lg:top-24">
            {domainFiltersPanel}
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
