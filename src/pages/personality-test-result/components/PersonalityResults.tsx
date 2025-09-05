import Button from '@/common/components/Button'
import { ExportCurve, Sms } from 'iconsax-reactjs'
import PersonalityTraits from './PersonalittyTraits'
import CareerPath from './CareerPath'

const PersonalityResults = () => {
  return (
    <div className='flex justify-between max-w-[985px] w-full mx-auto py-12'>
      <div className='max-w-[650px]'>
        <PersonalityTraits />
        <CareerPath />
      </div>
      <div className='hidden md:block w-fit h-fit shadow-xl sticky top-[100px]'>
        <div className='relative w-[290px] rounded-[8px] py-4 bg-white overflow-hidden'>
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
          <div className='p-6 space-y-6 mx-auto'>
            <div className='flex items-center gap-3'>
              <img src='/assets/avatars/erik.svg' alt='user-avatar' className='w-16 h-16 rounded-full' />
              <div className='flex flex-col'>
                <span className='text-xs text-neutral-300 font-sans'>あなたの性格タイプ:</span>
                <span className='text-neutral-600 font-sans font-semibold'>主人公</span>
                <span className='text-xs bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text'>
                  ENFJ-T
                </span>
              </div>
            </div>
            <p className='text-xs text-neutral-300 font-sans font-semibold'>このページ内</p>
          </div>
          <ul className=''>
            <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
              性格特性
            </li>
            <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
              あなたのキャリアパス
            </li>
            <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
              あなたの自己成長
            </li>
            <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
              あなたの人間関係
            </li>
          </ul>
          <div className='mx-auto p-6 flex flex-col max-w-60 gap-2'>
            <Button
              variant='outlined'
              className='py-2 px-4 rounded-[36px] flex items-center justify-center gap-2 text-xs text-neutral-600 font-sans'
            >
              <ExportCurve size='16' /> 性格タイプ
            </Button>
            <Button
              variant='outlined'
              className='py-2 px-4 rounded-[36px] flex items-center justify-center gap-2 text-xs text-neutral-600 font-sans'
            >
              <Sms size='16' /> 性格タイプ
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalityResults
