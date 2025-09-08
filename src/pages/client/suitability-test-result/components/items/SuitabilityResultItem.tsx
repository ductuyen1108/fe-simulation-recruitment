import { type ReactNode } from 'react'

type SuitabilityResultItemProps = {
  title: string
  description: ReactNode
  children?: ReactNode
}

const SuitabilityResultItem = ({ title, description, children }: SuitabilityResultItemProps) => {
  return (
    <>
      <div className='space-y-3'>
        <h2 className='text-xl text-neutral-600 font-semibold '>{title}</h2>
        <p className='text-[14px] leading-5 text-neutral-600 '>{description}</p>
      </div>
      {children}
    </>
  )
}

export default SuitabilityResultItem
