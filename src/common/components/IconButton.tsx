import clsx from 'clsx'
import React, { type ButtonHTMLAttributes } from 'react'

type IconButtonProps = {
  icon: React.ReactElement
} & ButtonHTMLAttributes<HTMLButtonElement>

const IconButton = ({ className, icon, ...props }: IconButtonProps) => {
  return (
    <button
      className={clsx(
        'cursor-pointer flex items-center justify-center rounded-full border transition-colors duration-20 hover:text-white',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton
