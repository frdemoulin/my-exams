import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Flowbite Primary (Blue)
        default:
          "bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-4 focus-visible:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-800",

        // Flowbite Success (Green)
        success:
          "bg-green-500 text-white hover:bg-green-600 focus-visible:ring-4 focus-visible:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus-visible:ring-green-800",

        // Flowbite Destructive (Red)
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-4 focus-visible:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus-visible:ring-red-900",

        // Flowbite Secondary (Gray)
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-4 focus-visible:ring-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus-visible:ring-gray-700",

        // Flowbite Outline
        outline:
          "border border-gray-300 bg-background text-foreground hover:bg-gray-100 focus-visible:ring-4 focus-visible:ring-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-700",

        // Flowbite Ghost
        ghost:
          "hover:bg-gray-50 hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",

        // Flowbite Link
        link: "text-blue-600 underline-offset-4 hover:underline dark:text-blue-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
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
