import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold h-8 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border border-black bg-transparent text-secondary rounded-full font-gotham",
        secondary:
          "font---font-clash-display border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        violetBeta:
          "font-clash-display text-lg font-medium border-transparent rounded-3xl text-lg bg-violetBeta text-white hover:bg-violetBeta/80",
        orange:
        "font-clash-display text-lg font-medium border-transparent rounded-3xl text-lg bg-orange text-white hover:bg-orange/80",
        rose:
        "font-clash-display text-lg font-medium border-transparent rounded-3xl text-lg bg-rose text-white hover:bg-rose/80",
        transparent:
            "font-archivo text-sm font-medium bg-badge bg-opacity-20 text-white rounded-full font-semibold",
        destructive:
          "border border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
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
