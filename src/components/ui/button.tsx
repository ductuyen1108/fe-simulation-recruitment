import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-[36px] text-sm font-medium transition-all active:translate-y-[1px] active:shadow-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        contained: 'font-semibold hover:brightness-110 hover:shadow-lg',
        outlined: 'font-semibold border'
      },
      background: {
        primary: '',
        secondary: '',
        tertiary: ''
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-[36px] gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-[36px] px-6 has-[>svg]:px-4',
        icon: 'size-9'
      }
    },
    compoundVariants: [
      {
        variant: 'contained',
        background: 'primary',
        className: 'bg-gradient-to-r from-[#fe8b7c] to-[#fdc344] text-white'
      },
      {
        variant: 'contained',
        background: 'secondary',
        className: 'bg-gradient-to-r from-[#fe8b7c] to-[#fdc344] bg-blend-lighten text-white'
      },
      {
        variant: 'contained',
        background: 'tertiary',
        className: 'bg-gradient-to-r from-[#fe8b7c] to-[#fdc344] bg-blend-darken text-white'
      },
      {
        variant: 'outlined',
        background: 'primary',
        className: 'bg-neutral-0 text-neutral-600 border-neutral-300 hover:bg-neutral-50'
      },
      {
        variant: 'outlined',
        background: 'secondary',
        className:
          'text-neutral-600 border-salmon hover:bg-[#FF9E2C]/10 bg-gradient-to-r from-[rgba(254,139,124,0.2)] to-[rgba(253,195,68,0.2)]'
      },
      {
        variant: 'outlined',
        background: 'tertiary',
        className:
          'text-neutral-600 border-salmon hover:bg-[#FF9E2C]/10 bg-gradient-to-r from-[rgba(254,139,124,0.5)] to-[rgba(253,195,68,0.5)] bg-blend-darken'
      }
    ],
    defaultVariants: {
      variant: 'contained',
      background: 'primary',
      size: 'default'
    }
  }
)

export interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, background, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, background, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
