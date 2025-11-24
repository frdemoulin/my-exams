"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MonthPickerProps {
  date?: Date;
  onDateChange: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function MonthPicker({
  date,
  onDateChange,
  placeholder = "Sélectionner mois/année",
  disabled = false,
  className,
}: MonthPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedYear, setSelectedYear] = React.useState<number>(
    date ? date.getFullYear() : new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = React.useState<number>(
    date ? date.getMonth() : new Date().getMonth()
  );

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  // Générer une plage d'années (de 1990 à 2050)
  const years = Array.from({ length: 61 }, (_, i) => 1990 + i);

  const handleMonthChange = (month: string) => {
    const monthIndex = parseInt(month);
    setSelectedMonth(monthIndex);
    const newDate = new Date(selectedYear, monthIndex, 1);
    onDateChange(newDate);
  };

  const handleYearChange = (year: string) => {
    const yearValue = parseInt(year);
    setSelectedYear(yearValue);
    const newDate = new Date(yearValue, selectedMonth, 1);
    onDateChange(newDate);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "MMMM yyyy", { locale: fr }) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Mois</label>
            <Select
              value={selectedMonth.toString()}
              onValueChange={handleMonthChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Année</label>
            <Select
              value={selectedYear.toString()}
              onValueChange={handleYearChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Confirmer
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
