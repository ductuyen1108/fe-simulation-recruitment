import clsx from 'clsx'
import { bgTypeCheckItemMap, sizeCheckItemMap } from '../constants'

type CheckItemProps = {
  name: string
  value: number
  checked: boolean
  type: 'agree' | 'neutral' | 'disagree'
  size?: 'lg' | 'md' | 'xs'
  onChange: (value: number) => void
}

const CheckItem = ({ name, value, checked, type, size = 'md', onChange }: CheckItemProps) => {
  return (
    <label className={clsx('rounded-full p-0.5 cursor-pointer', bgTypeCheckItemMap[type])}>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className='hidden'
      />
      <div
        className={clsx(
          'flex items-center justify-center rounded-full',
          type === 'neutral' ? 'w-8 h-8' : sizeCheckItemMap[size],
          checked ? 'bg-transparent' : 'bg-white'
        )}
      >
        <svg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M27.3798 13.4248L17.5998 23.2048C16.4448 24.3598 14.5548 24.3598 13.3998 23.2048L8.50975 18.3148'
            stroke='white'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </label>
  )
}

export default CheckItem
