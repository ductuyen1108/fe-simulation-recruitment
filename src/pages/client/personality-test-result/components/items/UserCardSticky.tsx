import Button from '@/common/components/Button'
import Modal from '@/common/components/Modal'
import { ExportCurve, Facebook, Sms, Unlock } from 'iconsax-reactjs'
import { useState } from 'react'
import { Link } from 'react-scroll'

const list = [
  { id: 1, title: '性格特性', scrollTo: 'personality-traits' },
  { id: 2, title: 'あなたのキャリアパス', scrollTo: 'career-path' },
  { id: 3, title: 'あなたの自己成長', scrollTo: 'personal-growth' },
  { id: 4, title: 'あなたの人間関係', scrollTo: 'relationships' }
]
const HEADER_OFFSET = 100

const UserCardSticky = () => {
  const [openShareFbModal, setOpenShareFbModal] = useState(false)
  const [openMailModal, setOpenMailModal] = useState(false)
  return (
    <div className='hidden md:block w-fit h-fit shadow-xl sticky top-[100px]'>
      <div className='relative w-[290px] rounded-[8px] py-4 bg-white overflow-hidden'>
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
        <div className='p-6 space-y-6 mx-auto'>
          <div className='flex items-center gap-3'>
            <img src='/assets/avatars/erik.svg' alt='user-avatar' className='w-16 h-16 rounded-full' />
            <div className='flex flex-col'>
              <span className='text-xs text-neutral-300 '>あなたの性格タイプ:</span>
              <span className='text-neutral-600  font-semibold'>主人公</span>
              <span className='text-xs bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text'>
                ENFJ-T
              </span>
            </div>
          </div>
          <p className='text-xs text-neutral-300  font-semibold'>このページ内</p>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id} className='border-t border-neutral-200'>
              <Link
                to={item.scrollTo}
                spy
                smooth
                offset={-HEADER_OFFSET}
                duration={400}
                spyThrottle={100}
                activeClass='text-neutral-600 bg-neutral-50'
                className='block p-2 cursor-pointer bg-neutral-0 text-xs  font-semibold text-neutral-400 hover:text-neutral-600 transition-colors'
              >
                {`${item.id}. ${item.title}`}
              </Link>
            </li>
          ))}
          <li className='p-2 cursor-pointer text-xs  font-semibold border-t border-neutral-200'>
            <Link
              to={'unlock-all-results'}
              spy
              smooth
              offset={-HEADER_OFFSET}
              duration={400}
              spyThrottle={100}
              activeClass='text-neutral-600 bg-neutral-50 bg-neutral-50'
              className='flex gap-1.5 items-center text-neutral-400 hover:text-neutral-600 transition-colors'
            >
              <Unlock size='16' color='#fe8b7c' /> 今すぐロックを解除
            </Link>
          </li>
        </ul>
        <div className='mx-auto p-6 flex flex-col max-w-60 gap-2'>
          <Button
            variant='outlined'
            onClick={() => setOpenShareFbModal(true)}
            className='py-2 px-4 rounded-[36px] flex items-center justify-center gap-2 text-xs text-neutral-600 '
          >
            <ExportCurve size='16' /> 性格タイプ
          </Button>
          <Button
            variant='outlined'
            onClick={() => setOpenMailModal(true)}
            className='py-2 px-4 rounded-[36px] flex items-center justify-center gap-2 text-xs text-neutral-600 '
          >
            <Sms size='16' /> 性格タイプ
          </Button>
        </div>
      </div>
      <Modal
        open={openShareFbModal}
        leftTitle
        title='プロフィールを共有する'
        onClose={() => setOpenShareFbModal(false)}
      >
        <div className='space-y-6 mt-4'>
          <div className='flex flex-col w-fit justify-center items-center gap-1'>
            <div className='text-system-info p-3 border border-system-info rounded-full'>
              <Facebook size='20' variant='Bold' />
            </div>
            <p className='text-[8px] leading-4 text-neutral-600'>Facebook</p>
          </div>
          <div className='space-y-4 bg-[url(/assets/personality-test/step3_illustration.svg)] bg-no-repeat bg-right-bottom'>
            <div className='space-y-1 flex flex-col'>
              <span className='text-xs font-semibold text-neutral-600'>あなたの性格タイプの詳細</span>
              <span className='text-xs text-neutral-600'>
                あなたの特性スコアは含まれていません。SNS用にオススメです。
              </span>
              <div className='py-2.5 px-3 rounded-[4px] border border-neutral-200 items-center'>
                <div className='flex justify-between items-center'>
                  <p className='text-xs text-neutral-600'>https://www.16personalities.com/ja/enfj型の性格</p>
                  <div className='p-1 rounded-full cursor-pointer border border-neutral-300 text-neutral-300'>
                    <ExportCurve size='16' />
                  </div>
                </div>
              </div>
            </div>
            <div className='space-y-1 flex flex-col'>
              <span className='text-xs font-semibold text-neutral-600'>あなたの結果</span>
              <span className='text-xs text-neutral-600'>
                あなたの特性スコアが含まれています。友だちや家族との共有に最適です。
              </span>
              <div className='py-2.5 px-3 rounded-[4px] border border-neutral-200 items-center'>
                <div className='flex justify-between items-center'>
                  <p className='text-xs text-neutral-600'>https://www.16personalities.com/ja/結果/enfj-t/m/5odnsd5l4</p>
                  <div className='p-1 rounded-full cursor-pointer border border-neutral-300 text-neutral-300'>
                    <ExportCurve size='16' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal title='あなたの結果' open={openMailModal} onClose={() => setOpenMailModal(false)}>
        <div className='py-4 flex flex-col gap-4'>
          <p className='text-xs text-neutral-600 text-center'>
            性格概要に移る前に、結果をあなたのメールアドレスに送りましょうか？
          </p>
          <div className='flex gap-2.5 py-2.5 px-3 items-center text-xs text-neutral-600 border border-neutral-200 rounded-[4px]'>
            <Sms size='24' />
            Email@Email.com
          </div>
          <Button className='w-full px-4 py-2 rounded-[36px]'>キャリアテスト</Button>
        </div>
      </Modal>
    </div>
  )
}

export default UserCardSticky
