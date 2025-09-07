import Button from '@/common/components/Button'
import { ArrowRight, ExportCurve, Sms, Unlock } from 'iconsax-reactjs'
import PersonalityTraits from './PersonalityTraits'
import CareerPath from './CareerPath'
import PersonalGrowth from './PersonalGrowth'
import Relationships from './Relationships'
import { useRef } from 'react'

const PersonalityResults = () => {
  const upgradeResultsRef = useRef<HTMLDivElement>(null)
  return (
    <div className='max-w-[1000px] w-full mx-auto py-12 px-4 space-y-5'>
      <div className='flex justify-between w-full'>
        <div className='max-w-[650px] space-y-6'>
          <PersonalityTraits refElement={upgradeResultsRef} />
          <CareerPath refElement={upgradeResultsRef} />
          <PersonalGrowth refElement={upgradeResultsRef} />
          <Relationships refElement={upgradeResultsRef} />
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
            <ul>
              <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
                1. 性格特性
              </li>
              <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
                2. あなたのキャリアパス
              </li>
              <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
                3. あなたの自己成長
              </li>
              <li className='flex items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
                4. あなたの人間関係
              </li>
              <li className='flex gap-1.5 items-center p-2 cursor-pointer bg-neutral-0 text-xs font-sans font-semibold border-t border-neutral-200'>
                <Unlock size='16' color='#fe8b7c' /> 今すぐロックを解除
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
      <div
        ref={upgradeResultsRef}
        className='bg-neutral-50 py-6 px-4 md:py-10 md:px-20 rounded-[8px] flex flex-col md:flex-row md:gap-6 items-center justify-between'
      >
        <img src='/assets/home/personality_illustration.svg' alt='' className='w-full md:max-w-[300px]' />
        <div className='space-y-4'>
          <div className='space-y-1.5'>
            <div className='w-fit py-1 px-2 rounded-2xl bg-gradient-to-r from-salmon to-yellow text-white text-[10px] font-sans font-semibold'>
              今すぐロックを解除
            </div>
            <h2 className='text-xl text-neutral-600 font-heading font-semibold'>あなたの物語はまだ完結していません</h2>
            <p className='text-xs text-neutral-600 font-sans'>
              完璧主義、レジリエンス、感情的知性など、あなた独自の特性についてさらに深掘りしてみましょう。プレミアムレポートのロックを解除すると、あなたの性格の隠れた側面、および自己成長のための個別の洞察とヒントについて学べます。
            </p>
            <span className='text-xl text-neutral-600 font-heading font-semibold'>139,000đ</span>
          </div>
          <div className='flex flex-col gap-2 items-center justify-center md:items-start md:justify-items-start'>
            <Button className='flex items-center gap-2 rounded-[36px]'>
              すべての結果のロックを解除 <ArrowRight size='24' />
            </Button>
            <p className='text-xs text-neutral-400 font-sans'>万が一ご満足いただけない場合は、30日間の返金保証あり。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalityResults
