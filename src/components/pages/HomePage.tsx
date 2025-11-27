'use client';

import { useState, FormEvent, useEffect } from 'react';
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
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { ExamPaperCard } from '@/components/exam-papers/ExamPaperCard';

interface Correction {
  id: string;
  source: string;
  url: string;
  type: string;
  quality: number | null;
}

interface Theme {
  id: string;
  shortDescription: string;
  longDescription: string;
}

interface ExamPaperData {
  id: string;
  label: string;
  sessionYear: number;
  diploma: { longDescription: string };
  teaching: { subject: { shortDescription: string } };
  subjectUrl: string | null;
  estimatedDuration: number | null;
  estimatedDifficulty: number | null;
  summary: string | null;
  themes: Theme[];
  corrections: Correction[];
}

interface HomePageProps {
  initialSubjects: Subject[];
  specialties: TeachingWithRelations[];
}

export default function HomePage({ initialSubjects, specialties }: HomePageProps) {
  const [search, setSearch] = useState('');
  const [selectedDiploma, setSelectedDiploma] = useState<string | undefined>('bac-general');
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | undefined>();
  const [examPapers, setExamPapers] = useState<ExamPaperData[]>([]);
  const [filteredPapers, setFilteredPapers] = useState<ExamPaperData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState<'year' | 'difficulty' | 'duration'>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // desc par défaut (plus récent/difficile/long en premier)
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Fetch exam papers on mount
  useEffect(() => {
    // Charger les favoris depuis localStorage
    try {
      const savedFavorites = localStorage.getItem('exam-favorites');
      if (savedFavorites) {
        setFavorites(new Set(JSON.parse(savedFavorites)));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }

    fetch('/api/exam-papers/search')
      .then(res => res.json())
      .then(data => {
        setExamPapers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching exam papers:', err);
        setLoading(false);
      });
  }, []);

  // Fonction de filtrage réutilisable
  const performSearch = () => {
    setIsSearching(true);
    
    setTimeout(() => {
      let results = [...examPapers];

      // Filtre par recherche textuelle (label, summary, dipôme, matière)
      if (search.trim()) {
        const searchLower = search.toLowerCase();
        results = results.filter(paper => 
          paper.label.toLowerCase().includes(searchLower) ||
          paper.summary?.toLowerCase().includes(searchLower) ||
          paper.diploma.longDescription.toLowerCase().includes(searchLower) ||
          paper.teaching.subject.shortDescription.toLowerCase().includes(searchLower)
        );
      }

      // Filtre par diplôme
      if (selectedDiploma) {
        const diplomaMap: Record<string, string[]> = {
          'brevet': ['brevet', 'diplôme national du brevet'],
          'bac-general': ['baccalauréat général', 'bac général'],
          'bac-techno': ['baccalauréat technologique', 'bac technologique'],
          'bts': ['bts', 'brevet de technicien supérieur'],
        };
        
        const keywords = diplomaMap[selectedDiploma] || [];
        results = results.filter(paper => 
          keywords.some(keyword => 
            paper.diploma.longDescription.toLowerCase().includes(keyword)
          )
        );
      }

      // Filtre par matière
      if (selectedSubject) {
        const subjectMap: Record<string, string[]> = {
          'mathematiques': ['mathématiques', 'maths'],
          'physique-chimie': ['physique-chimie', 'physique', 'chimie'],
          'francais': ['français'],
          'anglais': ['anglais'],
          'histoire-geo': ['histoire', 'géographie', 'histoire-géo'],
          'svt': ['svt', 'sciences de la vie', 'sciences de la terre'],
        };
        
        const keywords = subjectMap[selectedSubject] || [];
        results = results.filter(paper => 
          keywords.some(keyword => 
            paper.teaching.subject.shortDescription.toLowerCase().includes(keyword)
          )
        );
      }

      // Filtre par difficulté
      if (selectedDifficulty && results.length > 0) {
        const difficultyMap: Record<string, [number, number]> = {
          'easy': [1, 2],
          'medium': [3, 4],
          'hard': [5, 5],
        };
        
        const [min, max] = difficultyMap[selectedDifficulty] || [1, 5];
        results = results.filter(paper => 
          paper.estimatedDifficulty !== null && 
          paper.estimatedDifficulty >= min && 
          paper.estimatedDifficulty <= max
        );
      }

      // Tri selon le critère sélectionné et l'ordre
      const multiplier = sortOrder === 'asc' ? 1 : -1;
      
      switch (sortBy) {
        case 'year':
          results.sort((a, b) => multiplier * (b.sessionYear - a.sessionYear));
          break;
        case 'difficulty':
          results.sort((a, b) => {
            const diffA = a.estimatedDifficulty || 0;
            const diffB = b.estimatedDifficulty || 0;
            return multiplier * (diffB - diffA);
          });
          break;
        case 'duration':
          results.sort((a, b) => {
            const durA = a.estimatedDuration || 0;
            const durB = b.estimatedDuration || 0;
            return multiplier * (durB - durA);
          });
          break;
      }

      setFilteredPapers(results);
      setShowResults(true);
      setIsSearching(false);
    }, 300);
  };

  // Debounce pour la recherche textuelle
  useEffect(() => {
    if (!loading && examPapers.length > 0) {
      const timer = setTimeout(() => {
        performSearch();
      }, 500); // 500ms de debounce pour la saisie textuelle

      return () => clearTimeout(timer);
    }
  }, [search, examPapers, loading]);

  // Recherche instantanée pour les filtres (pas de debounce)
  useEffect(() => {
    if (!loading && examPapers.length > 0) {
      performSearch();
    }
  }, [selectedDiploma, selectedSubject, selectedDifficulty, sortBy, sortOrder, examPapers, loading]);

  const diplomas = [
    { value: 'brevet', label: 'Brevet' },
    { value: 'bac-general', label: 'Bac Général' },
    { value: 'bac-techno', label: 'Bac Techno' },
    { value: 'bts', label: 'BTS' },
  ];

  const subjects = [
    { value: 'mathematiques', label: 'Mathématiques', emoji: '🔢' },
    { value: 'physique-chimie', label: 'Physique-Chimie', emoji: '🧪' },
    { value: 'francais', label: 'Français', emoji: '📖' },
    { value: 'anglais', label: 'Anglais', emoji: '🇬🇧' },
    { value: 'histoire-geo', label: 'Histoire-Géo', emoji: '🌍' },
    { value: 'svt', label: 'SVT', emoji: '🧬' },
  ];

  const difficulties = [
    { value: 'easy', label: 'Facile', emoji: '😊' },
    { value: 'medium', label: 'Moyen', emoji: '😐' },
    { value: 'hard', label: 'Difficile', emoji: '😵' },
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
    setShowResults(false);
  };

  const toggleFavorite = (paperId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(paperId)) {
        newFavorites.delete(paperId);
      } else {
        newFavorites.add(paperId);
      }
      // Sauvegarder dans localStorage
      try {
        localStorage.setItem('exam-favorites', JSON.stringify(Array.from(newFavorites)));
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
            <a href="/dashboard" className="hover:text-foreground">
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
              📚 Plus de 1000 annales indexées
            </Badge>

            <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Trouve le bon sujet d'examen
              <span className="block text-primary">en quelques secondes. 🎯</span>
            </h1>

            <p className="mb-6 max-w-xl text-sm text-muted-foreground md:text-base">
              Moteur de recherche d'annales du Brevet au BTS. 
              Chaque sujet est enrichi avec sa durée, difficulté, thématiques et corrections multiples provenant des meilleures sources (APMEP, LaboLycée, YouTube...).
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
                    placeholder="Ex : bac général maths 2024, BTS SIO E4…"
                    className="py-2.5 pl-9 text-sm"
                  />
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
                  "Maths bac général 2024 métropole"
                </span>{' '}
                ou{' '}
                <span className="font-medium text-foreground">
                  "BTS SIO E4 base de données"
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

              {/* DIPLÔME */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Diplôme
                </span>
                <div className="flex flex-wrap gap-2">
                  {diplomas.map((diploma) => (
                    <Badge
                      key={diploma.value}
                      variant={selectedDiploma === diploma.value ? 'default' : 'outline'}
                      className="cursor-pointer rounded-full px-3 py-1 text-xs"
                      onClick={() => setSelectedDiploma(selectedDiploma === diploma.value ? undefined : diploma.value)}
                    >
                      {diploma.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* MATIÈRE */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Matière
                </span>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Badge
                      key={subject.value}
                      variant={selectedSubject === subject.value ? 'default' : 'outline'}
                      className="cursor-pointer rounded-full px-3 py-1 text-xs"
                      onClick={() => setSelectedSubject(selectedSubject === subject.value ? undefined : subject.value)}
                    >
                      <span className="mr-1">{subject.emoji}</span>
                      {subject.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* DIFFICULTÉ */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Difficulté
                </span>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <Badge
                      key={difficulty.value}
                      variant={selectedDifficulty === difficulty.value ? 'default' : 'outline'}
                      className="cursor-pointer rounded-full px-3 py-1 text-xs"
                      onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty.value ? undefined : difficulty.value)}
                    >
                      <span className="mr-1">{difficulty.emoji}</span>
                      {difficulty.label}
                    </Badge>
                  ))}
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
                  <li>🔍 <strong>Recherche</strong> ton sujet par diplôme, matière ou année</li>
                  <li>📊 <strong>Compare</strong> les métadonnées (durée, difficulté, thèmes)</li>
                  <li>📖 <strong>Accède</strong> au PDF du sujet + liens vers plusieurs corrections</li>
                </ol>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  💡 Tous les sujets sont enrichis automatiquement via OCR + IA
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
                  {filteredPapers.length} sujet{filteredPapers.length > 1 ? 's' : ''} trouvé{filteredPapers.length > 1 ? 's' : ''}
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
                  <p className="text-muted-foreground">Chargement des sujets...</p>
                </div>
              </div>
            ) : filteredPapers.length === 0 ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-border bg-card">
                <div className="text-center">
                  <div className="mb-4 text-5xl">🤷</div>
                  <p className="mb-2 text-lg font-medium">
                    Aucun sujet trouvé
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Essaye de modifier tes filtres de recherche
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredPapers.map((paper) => (
                  <ExamPaperCard
                    key={paper.id}
                    id={paper.id}
                    label={paper.label}
                    sessionYear={paper.sessionYear}
                    diploma={paper.diploma.longDescription}
                    subject={paper.teaching.subject.shortDescription}
                    subjectUrl={paper.subjectUrl || undefined}
                    estimatedDuration={paper.estimatedDuration || undefined}
                    estimatedDifficulty={paper.estimatedDifficulty || undefined}
                    summary={paper.summary || undefined}
                    themes={paper.themes.map(t => t.shortDescription)}
                    corrections={paper.corrections}
                    isFavorite={favorites.has(paper.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* SECTION : ANNALES POPULAIRES */}
        {!showResults && (
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
