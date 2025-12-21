"use client";

import { ReactNode, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ConfirmDeleteDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  confirmLabel?: string;
  confirmLoadingLabel?: string;
  confirmVariant?: ButtonProps["variant"];
  cancelLabel?: string;
  tooltip?: string;
  tooltipSide?: "top" | "right" | "bottom" | "left";
  onConfirm: () => Promise<void> | void;
}

export function ConfirmDeleteDialog({
  trigger,
  title = "Confirmer la suppression",
  description = "Cette action est définitive et ne peut pas être annulée.",
  confirmLabel = "Supprimer",
  confirmLoadingLabel = "Suppression...",
  confirmVariant = "destructive",
  cancelLabel = "Annuler",
  tooltip,
  tooltipSide = "top",
  onConfirm,
}: ConfirmDeleteDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await onConfirm();
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  return (
    <AlertDialog>
      {tooltip ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
            </TooltipTrigger>
            <TooltipContent side={tooltipSide}>{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            onClick={handleConfirm}
            className={cn(buttonVariants({ variant: confirmVariant }))}
          >
            {isLoading ? confirmLoadingLabel : confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
