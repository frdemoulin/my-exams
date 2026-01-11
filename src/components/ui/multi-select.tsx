'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface MultiSelectProps {
  options: { value: string; label: string; description?: string }[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  contentClassName?: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = 'Sélectionner...',
  searchPlaceholder = 'Rechercher...',
  emptyText = 'Aucun résultat.',
  contentClassName,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleUnselect = (value: string) => {
    onChange(selected.filter((s) => s !== value));
  };

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((s) => s !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  // Normaliser une chaîne (enlever les accents)
  const normalizeString = (str: string) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  // Filtrage personnalisé (recherche stricte dans le label) + tri alphabétique
  const filteredOptions = React.useMemo(() => {
    const toFilter = searchQuery ? options.filter((option) =>
      normalizeString(option.label).includes(normalizeString(searchQuery))
    ) : options;
    
    return toFilter.sort((a, b) =>
      a.label.localeCompare(b.label, 'fr', { sensitivity: 'base', numeric: true })
    );
  }, [options, searchQuery]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="flex flex-wrap gap-1">
            {selected.length === 0 && (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
            {selected.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {selected.slice(0, 3).map((value) => {
                  const option = options.find((opt) => opt.value === value);
                  return (
                    <Badge
                      variant="secondary"
                      key={value}
                      className="mr-1 mb-1"
                    >
                      {option?.label}
                      <span
                        className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            e.stopPropagation();
                            handleUnselect(value);
                          }
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleUnselect(value);
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                      </span>
                    </Badge>
                  );
                })}
                {selected.length > 3 && (
                  <Badge variant="secondary" className="mr-1 mb-1">
                    +{selected.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn('w-[--radix-popover-trigger-width] p-0', contentClassName)}
        align="start"
      >
        <TooltipProvider>
          <Command shouldFilter={false}>
          <CommandInput
            placeholder={searchPlaceholder}
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            {filteredOptions.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                {emptyText}
              </div>
            ) : (
              <CommandGroup className="max-h-64 overflow-auto">
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        selected.includes(option.value) ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    <div className="flex w-full items-center justify-between gap-2">
                      <span>{option.label}</span>
                      {option.description && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-default bg-neutral-primary-soft text-xs text-muted-foreground hover:text-foreground hover:border-foreground"
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.stopPropagation();
                                  e.preventDefault();
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label="Afficher la description du thème"
                            >
                              <Info className="h-3 w-3" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>{option.description}</TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
        </TooltipProvider>
      </PopoverContent>
    </Popover>
  );
}
