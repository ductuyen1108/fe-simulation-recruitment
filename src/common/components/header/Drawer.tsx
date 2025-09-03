import { NavLink } from 'react-router-dom'
import { ArrowRight, CloseCircle } from 'iconsax-reactjs'
import Button from '../Button'
import SearchButton from './SearchButton'
import clsx from 'clsx'
import Accordion from '../Accordion'
import Divider from '../Divider'

type DrawerProps = {
  open: boolean
  onClose: () => void
}

const Drawer = ({ open, onClose }: DrawerProps) => {
  if (!open) return null

  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 backdrop-blur-[1px] z-40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      <div
        className={clsx(
          'fixed p-4 top-0 right-0 h-fit w-[270px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex justify-between items-center h-[62px]'>
          <Button className='flex items-center gap-2 rounded-[36px] px-4 py-2' onClick={onClose}>
            性格タイプ <ArrowRight size='24' />
          </Button>
          <CloseCircle className='w-12 h-12' color='#A4ACB9' cursor='pointer' onClick={onClose} />
        </div>
        <div className='flex flex-col gap-4 px-4 mt-2'>
          <Divider />
          {/* Client */}
          <>
            <NavLink to='#' className='text-[14px leading-5 text-neutral-600 font-sans' onClick={onClose}>
              性格タイプ
            </NavLink>
            <NavLink to='#' className='text-[14px leading-5 text-neutral-600 font-sans' onClick={onClose}>
              適性試験
            </NavLink>
          </>
          {/* Admin  */}
          <>
            <Accordion title='質問を編集'>
              <div className='flex flex-col gap-2'>
                <p className='text-[14px] leading-5 font-sans text-neutral-600'>性格タイプ</p>
                <p className='text-[14px] leading-5 font-sans text-neutral-600'>適性試験</p>
              </div>
            </Accordion>
            <Divider />
            <Accordion title='診断オプションを変更する'>
              <div className='flex flex-col gap-2'>
                <p className='text-[14px] leading-5 font-sans text-neutral-600'>性格タイプ</p>
                <p className='text-[14px] leading-5 font-sans text-neutral-600'>適性試験</p>
              </div>
            </Accordion>
          </>
          <Divider />
          <SearchButton text={<p className='text-[14px] leading-5 font-sans'>検索</p>} />
          <Divider />
          <button
            className='px-4 py-2 rounded-[36px] bg-[#F8FAFB] text-[14px] leading-5 font-sans border border-amber-400 cursor-pointer'
            onClick={onClose}
          >
            <p className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text'>ログイン</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Drawer
