import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Flowbite Primary (Blue)
        default:
          "bg-blue-700 text-white shadow-xs hover:bg-blue-800 focus-visible:ring-4 focus-visible:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-800",

        // Flowbite Success (Green)
        success:
          "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700 focus-visible:ring-4 focus-visible:ring-emerald-200 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus-visible:ring-emerald-800",

        // Flowbite Destructive (Red)
        destructive:
          "bg-red-600 text-white shadow-xs hover:bg-red-700 focus-visible:ring-4 focus-visible:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus-visible:ring-red-900",

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
          "hover:bg-gray-50 hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",

        // Flowbite Link
        link: "text-fg-brand underline-offset-4 hover:underline",
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
