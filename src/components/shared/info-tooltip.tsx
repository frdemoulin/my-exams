"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function FlowbiteInfoCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-4 h-4 shrink-0", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

type InfoTooltipProps = {
  content: string;
  label?: string;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
};

export function InfoTooltip({
  content,
  label = "Informations",
  className,
  side = "top",
}: InfoTooltipProps) {
  return (
    <TooltipProvider delayDuration={120}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={label}
            className={cn(
              "inline-flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground focus:outline-none focus:ring-2 focus:ring-brand/30",
              className
            )}
          >
            <FlowbiteInfoCircleIcon className="h-3.5 w-3.5" />
          </button>
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-xs text-xs font-normal leading-relaxed">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
