import { NavLink } from 'react-router-dom'
import { ArrowRight, CloseCircle } from 'iconsax-reactjs'
import Button from '../Button'
import SearchButton from './SearchButton'
import clsx from 'clsx'
import Accordion from '../Accordion'
import Divider from '../Divider'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import { createPortal } from 'react-dom'

type DrawerProps = {
  open: boolean
  onClose: () => void
}

const menuItems = [
  {
    title: '性格タイプ',
    path: '#',
    type: 'client'
  },
  {
    title: '適性試験',
    path: '#',
    type: 'client'
  },
  {
    title: 'メッセージ',
    path: '/dashboard/message',
    type: 'admin'
  },
  {
    title: '質問を編集',
    subItems: [
      { name: '性格タイプ', path: '/dashboard/personality-type' },
      { name: '適性試験', path: '/dashboard/aptitude-test' }
    ],
    type: 'admin'
  },
  {
    title: '診断オプションを変更する',
    subItems: [
      { name: '性格タイプ', path: '/dashboard/personality-type' },
      { name: '適性試験', path: '/dashboard/aptitude-test' }
    ],
    type: 'admin'
  }
]

const Drawer = ({ open, onClose }: DrawerProps) => {
  const { isMd } = useMediaQuery()
  if (!open || isMd) return null

  const renderMenuItems = (items: any[]) => {
    return items.map((item, index) => {
      if (item.subItems) {
        return (
          <Accordion key={index} title={item.title}>
            <div className='flex flex-col gap-2'>
              {item.subItems.map((subItem: any, subIndex: any) => (
                <NavLink
                  key={subIndex}
                  to={subItem.path}
                  className='text-[14px] leading-5 text-neutral-600'
                  onClick={onClose}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          </Accordion>
        )
      } else {
        return (
          <NavLink key={index} to={item.path} className='text-[14px] leading-5 text-neutral-600' onClick={onClose}>
            {item.title}
          </NavLink>
        )
      }
    })
  }

  return createPortal(
    <>
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 backdrop-blur-[1px] z-110 transition-opacity duration-500',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      <div
        className={clsx(
          'fixed p-4 top-0 right-0 h-full w-[270px] bg-white shadow-lg z-150 transform transition-transform duration-300 ease-in-out'
        )}
      >
        <div className='flex justify-between items-center h-[62px]'>
          <Button className='flex items-center gap-2 rounded-[36px] px-4 py-2' onClick={onClose}>
            性格タイプ <ArrowRight size='24' />
          </Button>
          <button onClick={onClose} className='w-12 h-12 cursor-pointer text-neutral-500'>
            <CloseCircle size='40' />
          </button>
        </div>
        <div className='flex flex-col gap-4 px-4 mt-2'>
          <Divider />
          {renderMenuItems(menuItems.filter((item) => item.type === 'client'))}
          <Divider />
          {renderMenuItems(menuItems.filter((item) => item.type === 'admin'))}
          <Divider />
          <SearchButton text={<p className='text-[14px] leading-5 '>検索</p>} />
          <Divider />
          <button
            className='px-4 py-2 rounded-[36px] bg-[#F8FAFB] text-[14px] leading-5  border border-amber-400 cursor-pointer'
            onClick={onClose}
          >
            <p className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text'>ログイン</p>
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}

export default Drawer
