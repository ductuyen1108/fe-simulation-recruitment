import { type ReactNode } from 'react'
import clsx from 'clsx'
import { CloseCircle } from 'iconsax-reactjs'

type ModalProps = {
  title: string
  leftTitle?: boolean
  open: boolean
  onClose: () => void
  children?: ReactNode
}

const Modal = ({ title, leftTitle, children, open, onClose }: ModalProps) => {
  if (!open) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-between'>
      <div className='absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center h-screen w-screen'>
        <div className='relative z-10 bg-white p-6 max-w-[512px] max-h-[405px] flex flex-col w-full rounded-[8px] border-t-4 [border-image-source:linear-gradient(270deg,#FE8B7C_0%,#FDC344_100%)] [border-image-slice:1]'>
          <span
            className={clsx(
              'text-xl text-neutral-600 font-semibold font-heading leading-[30px]',
              leftTitle ? 'text-left' : 'text-center'
            )}
          >
            {title}
          </span>
          <div onClick={onClose} className='absolute top-4 right-4 cursor-pointer'>
            <CloseCircle variant='Outline' size='24' color='#36394A' />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
