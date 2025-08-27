import { type ReactNode } from 'react'
import { CloseCircle } from 'iconsax-reactjs'

type AlertProps = {
  children?: ReactNode
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className='bg-white p-6 max-w-[512px] max-h-[405px] flex flex-col gap-4 border-t-4 [border-image-source:linear-gradient(270deg,#FE8B7C_0%,#FDC344_100%)] [border-image-slice:1] rounded-[8px] w-full relative'>
      <span className='text-xl text-neutral-600 font-semibold font-heading leading-[30px]'>プロフィールを共有する</span>
      <CloseCircle variant="Outline" size="24" color="#36394A" className="absolute top-6 right-6 cursor-pointer"/>
      {children}
    </div>
  )
}

export default Alert