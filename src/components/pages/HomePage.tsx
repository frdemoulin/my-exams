'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Search } from 'lucide-react';
import type { Subject } from '@prisma/client';
import type { TeachingWithRelations } from '@/core/teaching';

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
import { ExerciseCard } from '@/components/exercises/ExerciseCard';
import type { ExerciseWithRelations } from '@/core/exercise';

// Types importés depuis @/core/exercise

interface HomePageProps {
  initialSubjects: Subject[];
  specialties: TeachingWithRelations[];
}

export default function HomePage({ initialSubjects, specialties }: HomePageProps) {
  const [search, setSearch] = useState('');
  const [selectedDiploma, setSelectedDiploma] = useState<string | undefined>('Bac général');
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>();
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | undefined>();
  const [exercises, setExercises] = useState<ExerciseWithRelations[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<ExerciseWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState<'year' | 'difficulty' | 'duration'>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // desc par défaut (plus récent/difficile/long en premier)
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [suggestions, setSuggestions] = useState<
    Array<{ id: string; title: string; label: string | null; examPaperLabel: string; sessionYear: number; subject: string }>
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
  const performSearch = () => {
    setIsSearching(true);
    
    // Construction des query params
    const params = new URLSearchParams();
    
    if (search.trim()) params.append('search', search.trim());
    if (selectedDiploma) params.append('diploma', selectedDiploma);
    if (selectedSubject) params.append('subject', selectedSubject);
    if (selectedDifficulty) params.append('difficulty', selectedDifficulty.toString());
    params.append('sortBy', sortBy);
    params.append('sortOrder', sortOrder);
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
  };

  // Debounce pour la recherche textuelle
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setPage(1); // reset page quand la recherche texte change
        performSearch();
      }, 500); // 500ms de debounce pour la saisie textuelle

      return () => clearTimeout(timer);
    }
  }, [search, loading]);

  // Recherche instantanée pour les filtres/pagination (pas de debounce)
  useEffect(() => {
    if (!loading) {
      performSearch();
    }
  }, [selectedDiploma, selectedSubject, selectedDifficulty, sortBy, sortOrder, page, loading]);

  const diplomas = [
    { value: 'DNB', label: 'Brevet' },
    { value: 'Bac général', label: 'Bac Général' },
    { value: 'Bac techno', label: 'Bac Techno' },
    { value: 'BTS', label: 'BTS' },
  ];

  const subjects = [
    { value: 'Maths', label: 'Mathématiques', emoji: '🔢' },
    { value: 'Sciences physiques', label: 'Physique-Chimie', emoji: '🧪' },
    { value: 'Français', label: 'Français', emoji: '📖' },
    { value: 'Histoire-Géo', label: 'Histoire-Géo', emoji: '🌍' },
    { value: 'SVT', label: 'SVT', emoji: '🧬' },
    { value: 'SES', label: 'SES', emoji: '💼' },
  ];

  const difficulties = [
    { value: 1, label: 'Très facile', emoji: '😊' },
    { value: 2, label: 'Facile', emoji: '🙂' },
    { value: 3, label: 'Moyen', emoji: '😐' },
    { value: 4, label: 'Difficile', emoji: '😰' },
    { value: 5, label: 'Très difficile', emoji: '😵' },
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
    // La recherche se fait automatiquement, on empêche juste le reload de la page
  };

  const handleSortChange = (newSortBy: 'year' | 'difficulty' | 'duration') => {
    if (sortBy === newSortBy) {
      // Toggle l'ordre si on clique sur le même critère
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      // Nouveau critère : ordre par défaut selon le type
      setSortBy(newSortBy);
      setSortOrder('desc'); // desc par défaut pour tous
    }
  };

  const handleResetFilters = () => {
    setSelectedDiploma(undefined);
    setSelectedSubject(undefined);
    setSelectedDifficulty(undefined);
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
  const activeFiltersCount = [selectedDiploma, selectedSubject, selectedDifficulty].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground">
              SA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight">
                My exams
              </span>
              <span className="text-xs text-muted-foreground">
                Annales d'examens, gratuites et triées.
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="/admin" className="hover:text-foreground">
              Administration
            </a>
            <a href="/annales" className="hover:text-foreground">
              Annales
            </a>
            <a href="/notions" className="hover:text-foreground">
              Notions
            </a>
            <a href="/a-propos" className="hover:text-foreground">
              À propos
            </a>
            <ThemeToggle />
            <Button variant="outline" size="sm">
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
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge
              variant="outline"
              className="mb-4 text-xs"
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              📚 Plus de 1000 exercices d'annales indexés
            </Badge>

            <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Trouve le bon exercice d'annales
              <span className="block text-primary">en quelques secondes 🎯</span>
            </h1>

            <p className="mb-6 max-w-xl text-sm text-muted-foreground md:text-base">
              Moteur de recherche d'exercices d'annales du Brevet au BTS. 
              Chaque exercice est enrichi avec sa durée estimée, difficulté, thématiques ciblées et corrections multiples provenant des meilleures sources (APMEP, LaboLycée, YouTube...).
            </p>

            {/* FORMULAIRE DE RECHERCHE */}
            <form onSubmit={handleSearchSubmit} className="w-full space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Search className="h-4 w-4" />
                  </span>
                  <Input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Ex : titrage acide-base, loi normale, base de données…"
                    className="py-2.5 pl-9 text-sm"
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
                                setSearch(s.title);
                                setShowSuggestions(false);
                                setPage(1);
                                performSearch();
                              }}
                            >
                              <span className="font-medium">{s.title}</span>
                              <span className="text-xs text-muted-foreground">
                                {s.subject} · {s.examPaperLabel} · {s.sessionYear}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSearching}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium shadow-sm sm:min-w-[120px]"
                >
                  {isSearching ? (
                    <div className="flex items-center justify-center">
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
                  "titrage acide-base"
                </span>{' '}
                ou{' '}
                <span className="font-medium text-foreground">
                  "probabilités loi normale"
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
                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
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
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* DIPLÔME */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    🎓 Diplôme
                  </label>
                  <Select
                    value={selectedDiploma || 'all'}
                    onValueChange={(value) => {
                      setSelectedDiploma(value === 'all' ? undefined : value);
                      setPage(1);
                    }}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous</SelectItem>
                      {diplomas.map((diploma) => (
                        <SelectItem key={diploma.value} value={diploma.value}>
                          {diploma.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* MATIÈRE */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    📖 Matière
                  </label>
                  <Select
                    value={selectedSubject || 'all'}
                    onValueChange={(value) => {
                      setSelectedSubject(value === 'all' ? undefined : value);
                      setPage(1);
                    }}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.value} value={subject.value}>
                          {subject.emoji} {subject.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* DIFFICULTÉ */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    ⚡ Difficulté
                  </label>
                  <Select
                    value={selectedDifficulty?.toString() || 'all'}
                    onValueChange={(value) => {
                      setSelectedDifficulty(value === 'all' ? undefined : Number(value));
                      setPage(1);
                    }}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty.value} value={difficulty.value.toString()}>
                          {difficulty.emoji} {difficulty.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* PANNEAU DROIT : COMMENT ÇA MARCHE */}
          <div className="space-y-4">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background text-xs">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">
                  ✨ Comment ça marche ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ol className="list-inside list-decimal space-y-1.5 text-xs">
                  <li>🔍 <strong>Recherche</strong> un exercice par diplôme, thème ou difficulté</li>
                  <li>📊 <strong>Trie</strong> par année, durée ou difficulté</li>
                  <li>📖 <strong>Accède</strong> à l'énoncé de l'exercice + plusieurs corrections</li>
                </ol>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  💡 Tous les exercices sont enrichis automatiquement avec l'IA
                </p>
              </CardContent>
            </Card>
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
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  {total} exercice{total > 1 ? 's' : ''} · page {page}/{Math.max(1, Math.ceil(total / pageSize))}
                </span>
              </div>
              
              {/* SÉLECTEUR DE TRI */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Trier par :</span>
                <div className="flex gap-1">
                  <Button
                    variant={sortBy === 'year' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleSortChange('year')}
                    className="h-auto rounded-lg px-3 py-1.5 text-xs"
                  >
                    Année {sortBy === 'year' && (sortOrder === 'desc' ? '↓' : '↑')}
                  </Button>
                  <Button
                    variant={sortBy === 'difficulty' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleSortChange('difficulty')}
                    className="h-auto rounded-lg px-3 py-1.5 text-xs"
                  >
                    Difficulté {sortBy === 'difficulty' && (sortOrder === 'desc' ? '↓' : '↑')}
                  </Button>
                  <Button
                    variant={sortBy === 'duration' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleSortChange('duration')}
                    className="h-auto rounded-lg px-3 py-1.5 text-xs"
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
                className="h-auto px-0 text-xs text-primary hover:text-primary/80"
                onClick={() => setShowResults(true)}
              >
                Voir toutes les annales →
              </Button>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {trendingPapers.map((paper, idx) => (
                <Card
                  key={idx}
                  className="text-xs hover:border-primary"
                >
                  <CardContent className="p-3">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
                        {paper.grade}
                      </span>
                      <Badge
                        variant="outline"
                        className="px-2 py-0.5 text-[10px]"
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
                          className="px-2 py-0.5 text-[10px]"
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
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Site d'annales — plateforme de
            révision.
          </p>
          <div className="flex gap-4">
            <a href="/mentions-legales" className="hover:text-foreground">
              Mentions légales
            </a>
            <a href="/contact" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
