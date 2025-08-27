import { type ReactNode } from 'react'
import {ArrowRight2} from 'iconsax-reactjs'


type ButtonProps = {
  startIcon?: ReactNode
  endIcon?: ReactNode
  children?: ReactNode
  variant?: 'contained' | 'outlined'
  background?: 'primary' | 'secondary'
}

const Button = ({variant, startIcon, endIcon}: ButtonProps) => {
  const primary = 'bg-linear-270 from-salmon to-yellow'
  const secondary = 'bg-linear-0 from-rgba(255, 255, 255, 0.2) to-rgba(255, 255, 255, 0.2)'
  return (
    <button className='px-4 py-4 rounded-[36px] flex items-center text-white  bg-linear-270 from-salmon to-yellow font-heading font-semibold gap-3'>
      性格タイプ
    </button>
  )
}

export default Button