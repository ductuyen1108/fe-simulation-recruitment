import type { InputHTMLAttributes, ReactNode } from 'react'
import type { UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

type TextFieldProps = {
  name: string
  label?: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  register?: UseFormRegister<any>
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function TextField({
  name,
  startIcon,
  endIcon,
  label,
  error,
  className,
  register,
  ...props
}: TextFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      {label}
      <div className='relative flex items-center'>
        {startIcon && <span className='absolute left-3 text-gray-400 pointer-events-none'>{startIcon}</span>}
        <input
          {...(register ? register(name) : {})}
          className={clsx(
            'w-full border rounded-lg px-3 h-10 focus:outline-none placeholder-neutral-400 placeholder:text-xs text-xs',
            startIcon ? 'pl-10' : '',
            endIcon ? 'pr-10' : '',
            error
              ? 'border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-neutral-200 focus:ring-1 focus:ring-yellow focus:border-yellow',
            className
          )}
          {...props}
        />
        {endIcon && <span className='absolute right-3 text-gray-400 cursor-pointer'>{endIcon}</span>}
      </div>
      {error && <p className='text-xs text-red-500 mt-1'>{error}</p>}
    </div>
  )
}
