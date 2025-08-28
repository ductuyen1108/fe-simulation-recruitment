import { type ReactNode } from 'react'
import clsx from 'clsx'

type ButtonBackground = 'primary' | 'secondary' | 'tertiary' | 'neutral'

type ButtonProps = {
  children?: ReactNode
  background: ButtonBackground
  variant: 'contained' | 'outlined'
  className?: string
}

const backgroundStyles: Record<ButtonBackground, { contained: string; outlined: string }> = {
  primary: {
    contained: 'bg-linear-270 from-salmon to-yellow text-white',
    outlined: 'border border-neutral-300 text-neutral-600 bg-white hover:bg-neutral-300/10'
  },
  secondary: {
    contained: 'bg-gradient-to-r from-[#FFD56F] to-[#FF9E2C] text-white',
    outlined: 'border border-[#FF9E2C] text-neutral-600 bg-transparent hover:bg-[#FF9E2C]/10'
  },
  tertiary: {
    contained: 'bg-gradient-to-r from-[#8B5E3C] to-[#C97E48] text-white',
    outlined: 'border border-[#8B5E3C] text-neutral-600 bg-transparent hover:bg-[#8B5E3C]/10'
  },
  neutral: {
    contained: 'bg-neutral-100 text-neutral-300',
    outlined: 'border-2 border-[#9CA3AF] text-neutral-300 bg-transparent hover:bg-[#9CA3AF]/10'
  }
}

const Button = ({ variant, background, children, className }: ButtonProps) => {
  return (
    <button
      className={clsx('font-heading font-semibold cursor-pointer', backgroundStyles[background][variant], className)}
    >
      {children}
    </button>
  )
}

export default Button
