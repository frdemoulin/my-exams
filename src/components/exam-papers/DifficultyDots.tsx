import React from "react";

interface DifficultyDotsProps {
  value: number; // 1-5
  max?: number;
}

export function DifficultyDots({ value, max = 5 }: DifficultyDotsProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, i) => (
        <span
          key={i}
          className={
            "h-2 w-2 rounded-full " +
            (i < value ? "bg-primary" : "bg-muted border border-border")
          }
        />
      ))}
      <span className="ml-2 text-xs text-muted-foreground">
        Difficulté : {value}/{max}
      </span>
    </div>
  );
}
