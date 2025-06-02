
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-95 hover:scale-[1.02] max-w-full overflow-hidden relative perspective-1000",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        divine: cn(
          "bg-gradient-to-r from-resurrection-primary via-divine-purple to-resurrection-accent text-white font-bold",
          "shadow-[0_0_30px_rgba(245,158,11,0.6),0_0_60px_rgba(233,53,193,0.4),0_0_90px_rgba(168,85,247,0.3)]",
          "border border-white/20 backdrop-blur-sm relative overflow-hidden",
          "hover:shadow-[0_0_50px_rgba(245,158,11,0.8),0_0_100px_rgba(233,53,193,0.6),0_0_150px_rgba(168,85,247,0.5)]",
          "hover:scale-105 active:scale-95 transition-all duration-700",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-white/10",
          "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700",
          "after:absolute after:inset-0 after:bg-gradient-to-45 after:from-transparent after:via-white/20 after:to-transparent",
          "after:transform after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-1000"
        ),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 sm:h-14 rounded-md px-6 sm:px-10 text-base sm:text-lg",
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
