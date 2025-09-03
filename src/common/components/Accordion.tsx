import { useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { ArrowDown2 } from 'iconsax-reactjs'

type AccordionProps = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

const Accordion = ({ title, children, defaultOpen = false }: AccordionProps) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className='space-y-2'>
      <button
        className='w-full flex justify-between items-center text-left cursor-pointer'
        onClick={() => setOpen(!open)}
      >
        <span className='text-[14px] leading-5 font-sans font-semibold text-neutral-600'>{title}</span>
        <ArrowDown2
          size={20}
          className={clsx('transition-transform duration-300', open && 'rotate-180')}
          color='#292D32'
        />
      </button>
      <div
        className={clsx(
          'grid transition-all duration-300 ease-in-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className='overflow-hidden'>
          <div className='pt-2 text-sm text-neutral-600'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
