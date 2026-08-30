"use client";

import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HEALTH_EVALUATION_COLOR_LEGEND } from "@/core/health-mock-exam/health-evaluation-colors";
import { cn } from "@/lib/utils";

type HealthEvaluationColorLegendProps = {
  className?: string;
  triggerLabel?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
};

export function HealthEvaluationColorLegend({
  className,
  triggerLabel = "Code couleur",
  align = "end",
  side = "bottom",
}: HealthEvaluationColorLegendProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={cn(
            "h-8 gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border-border/80 focus-visible:ring-2 focus-visible:ring-brand shrink-0",
            className
          )}
          aria-label="Code couleur des évaluations Santé"
          data-testid="health-evaluation-color-legend-trigger"
        >
          <Info className="h-3.5 w-3.5 text-brand shrink-0" aria-hidden="true" />
          <span>{triggerLabel}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={align}
        side={side}
        className="w-80 p-4 space-y-3 shadow-lg z-50 bg-popover text-popover-foreground border border-border rounded-xl"
        data-testid="health-evaluation-color-legend-content"
      >
        <div className="flex items-center justify-between border-b border-border pb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-heading flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            Code couleur des évaluations
          </h4>
        </div>

        <div className="space-y-2.5">
          {HEALTH_EVALUATION_COLOR_LEGEND.map((item) => (
            <div key={item.state} className="flex items-start gap-2.5 text-xs">
              <span
                className={cn("mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full", item.dotClassName)}
                aria-hidden="true"
              />
              <div className="space-y-0.5 min-w-0">
                <p className="font-semibold text-heading leading-tight">
                  <span className="text-muted-foreground font-medium mr-1">
                    {item.colorName} :
                  </span>
                  {item.label}
                </p>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
