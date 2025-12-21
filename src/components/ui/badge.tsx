import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-base border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        default:
          "box-border border border-brand bg-brand/10 text-fg-brand shadow-xs hover:bg-brand/20",
        secondary:
          "box-border border border-default bg-neutral-secondary-soft text-body shadow-xs hover:bg-neutral-tertiary-soft hover:text-heading",
        theme:
          "box-border border border-default bg-neutral-primary-soft text-body shadow-xs hover:bg-neutral-secondary-soft",
        destructive:
          "box-border border border-transparent bg-danger text-white shadow-xs hover:bg-danger-strong focus-visible:ring-danger-medium",
        outline:
          "box-border border border-default text-heading shadow-xs hover:bg-neutral-secondary-soft hover:text-heading",
        points:
          "box-border border border-transparent bg-amber-500 text-white shadow-xs hover:bg-amber-600",
        duration:
          "box-border border border-transparent bg-purple-600 text-white shadow-xs hover:bg-purple-700",
        difficulty:
          "box-border border border-transparent bg-amber-500 text-white shadow-xs hover:bg-amber-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
