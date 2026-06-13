"use client";

import { HiOutlineInformationCircle } from "react-icons/hi2";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

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
              "inline-flex h-5 w-5 items-center justify-center rounded-full text-fg-brand transition hover:bg-brand/10 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/30",
              className
            )}
          >
            <HiOutlineInformationCircle className="h-4 w-4" aria-hidden="true" />
          </button>
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-xs text-xs font-normal leading-relaxed">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
