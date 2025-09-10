import Divider from '@/components/Divider'
import CheckItem from './CheckItem'
import { Controller, type Control } from 'react-hook-form'
import { optionsCheckItem } from '../constants'

type QuestItemProps = {
  title: string
  name: string
  control: Control<any>
  leftLable?: string
  rightLabel?: string
}

const QuestItem = ({ title, name, control, leftLable = 'Agree', rightLabel = 'Disagree' }: QuestItemProps) => {
  return (
    <div className='flex flex-col gap-7 mx-auto max-w-[820px] w-full'>
      <h2 className=' font-semibold text-neutral-600'>{title}</h2>
      <div className='flex items-center gap-[42px] justify-center'>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-[42px] justify-center'>
                <span className='hidden md:inline-block bg-linear-270 from-salmon to-yellow text-transparent bg-clip-text text-[14px] leading-5 '>
                  {leftLable}
                </span>
                <div className='flex items-center gap-3 sm:gap-[40px]'>
                  {optionsCheckItem.map((opt) => (
                    <CheckItem
                      key={opt.val}
                      name={name}
                      value={opt.val}
                      type={opt.type}
                      size={opt.size}
                      checked={field.value === opt.val}
                      onChange={field.onChange}
                    />
                  ))}
                </div>
                <span className='hidden md:block text-[14px] leading-5 text-neutral-600 '>{rightLabel}</span>
              </div>
              <div className='flex md:hidden justify-between items-center w-full'>
                <p className='inline-block bg-linear-270 from-salmon to-yellow text-transparent bg-clip-text text-[14px] leading-5 '>
                  {leftLable}
                </p>
                <p className='text-[14px] leading-5 text-neutral-600 '>{rightLabel}</p>
              </div>
            </div>
          )}
        />
      </div>
      <Divider />
    </div>
  )
}

export default QuestItem
