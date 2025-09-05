import Button from '@/common/components/Button'
import { Lock1, Send2 } from 'iconsax-reactjs'

const UnlockBox = () => {
  return (
    <div className='relative max-w-[485px]'>
      <div className='rounded-full absolute z-5 top-[-12px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-salmon to-yellow text-white p-1.5'>
        <Lock1 size='16' />
      </div>
      <div className='relative overflow-hidden rounded-[8px] py-6 px-20 border-neutral-300 border-l border-r border-b'>
        <div className='absolute z-1 top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
        <div className='flex flex-col items-center justify-center gap-2.5'>
          <span className='text-xs font-sans font-semibold text-neutral-600'>今すぐロックを解除</span>
          <p className='text-xs font-sans text-neutral-600'>
            完全版のレポートを入手して、これらの結果を見てみましょう。さらなる性格分析と提案について学べます。
          </p>
          <Button className='flex items-center gap-2 rounded-[36px] w-fit text-xs font-sans font-semibold'>
            <Send2 size='16' /> 結果を送る
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UnlockBox
