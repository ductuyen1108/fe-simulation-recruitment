import { useEffect, type ReactNode } from 'react'
import clsx from 'clsx'
import { CloseCircle } from 'iconsax-reactjs'
import { createPortal } from 'react-dom'

type ModalProps = {
  title: string
  leftTitle?: boolean
  open: boolean
  onClose: () => void
  children?: ReactNode
}

const Modal = ({ title, leftTitle, children, open, onClose }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      className='fixed inset-0 z-150 flex items-center justify-center animate-in fade-in-0 duration-300'
      onClick={onClose}
    >
      <div className='absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center h-screen w-screen'>
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            'relative z-10 bg-white p-6 max-w-[512px] max-h-[405px] flex flex-col w-full rounded-[8px] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300'
          }
        >
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
          <h2
            className={clsx(
              'text-xl text-neutral-600 font-semibold leading-[30px]',
              leftTitle ? 'text-left' : 'text-center'
            )}
          >
            {title}
          </h2>
          <div
            onClick={onClose}
            className='absolute top-4 right-4 cursor-pointer opacity-70 transition-opacity hover:opacity-100'
          >
            <CloseCircle variant='Outline' size='24' color='#36394A' />
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
