import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Flowbite Primary (Brand)
        default:
          "box-border border border-transparent bg-brand text-white shadow-xs hover:bg-brand-strong focus-visible:ring-4 focus-visible:ring-brand-medium",

        // Flowbite Success (Green)
        success:
          "box-border border border-transparent bg-success text-white shadow-xs hover:bg-success-strong focus-visible:ring-4 focus-visible:ring-success-medium",

        // Flowbite Destructive (Red)
        destructive:
          "box-border border border-transparent bg-danger text-white shadow-xs hover:bg-danger-strong focus-visible:ring-4 focus-visible:ring-danger-medium",

        // Flowbite Warning (Yellow)
        warning:
          "box-border border border-transparent bg-yellow-500 text-white shadow-xs hover:bg-yellow-600 focus-visible:ring-4 focus-visible:ring-yellow-400",

        // Flowbite Secondary (Gray)
        secondary:
          "box-border border border-default bg-neutral-secondary-medium text-body shadow-xs hover:bg-neutral-tertiary-medium hover:text-heading focus-visible:ring-4 focus-visible:ring-neutral-tertiary",

        // Flowbite Muted (Gray plus marqué)
        muted:
          "box-border border border-default bg-neutral-primary-medium text-heading shadow-xs hover:bg-neutral-secondary-medium focus-visible:ring-4 focus-visible:ring-neutral-tertiary",

        // Flowbite Outline
        outline:
          "border border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-soft hover:text-heading focus-visible:ring-4 focus-visible:ring-neutral-tertiary",

        // Flowbite Ghost
        ghost:
          "text-body hover:text-heading hover:bg-neutral-secondary-soft",

        // Flowbite Link
        link: "text-fg-brand underline-offset-4 hover:underline hover:text-fg-brand-strong",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        xs: "h-8 rounded-md px-3 py-2 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
