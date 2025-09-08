import type { ReactNode, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Variant = 'contained' | 'outlined'
type Background = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  background?: Background
}

const Button = ({ children, variant = 'contained', background = 'primary', className, ...props }: ButtonProps) => {
  const variantClass = `btn-${variant}-${background}`

  return (
    <button
      className={clsx(
        'cursor-pointer transition-all duration-150 ease-in-out active:translate-y-[2px] active:shadow-sm',
        variantClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
