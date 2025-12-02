import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Flowbite Primary
        default:
          "border-transparent bg-blue-100 text-blue-800 shadow dark:bg-blue-900 dark:text-blue-300",
        // Flowbite Secondary
        secondary:
          "border-transparent bg-gray-100 text-gray-800 shadow dark:bg-gray-700 dark:text-gray-300",
        // Flowbite Theme badge (Gris foncé)
        theme:
          "border-transparent bg-gray-600 text-white shadow hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700",
        // Flowbite Destructive
        destructive:
          "border-transparent bg-red-100 text-red-800 shadow dark:bg-red-900 dark:text-red-300",
        // Flowbite Outline
        outline: "border border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-300",
        points:
          "border-transparent bg-amber-500 text-white shadow hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700",
        duration:
          "border-transparent bg-purple-600 text-white shadow hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800",
        difficulty:
          "border-transparent bg-amber-500 text-white shadow hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700",
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
