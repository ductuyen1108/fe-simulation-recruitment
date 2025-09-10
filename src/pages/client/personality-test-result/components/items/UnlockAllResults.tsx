import Button from '@/components/Button'
import { ArrowRight } from 'iconsax-reactjs'
import { Element } from 'react-scroll'

const UnlockAllResults = () => {
  return (
    <Element name='unlock-all-results'>
      <div className='bg-neutral-50 py-6 px-4 md:py-10 md:px-20 rounded-[8px] flex flex-col md:flex-row md:gap-6 items-center justify-between'>
        <img src='/assets/home/personality_illustration.svg' alt='' className='w-full md:max-w-[300px]' />
        <div className='space-y-4'>
          <div className='space-y-1.5'>
            <div className='w-fit py-1 px-2 rounded-2xl bg-gradient-to-r from-salmon to-yellow text-white text-[10px]  font-semibold'>
              今すぐロックを解除
            </div>
            <h2 className='text-xl text-neutral-600  font-semibold'>あなたの物語はまだ完結していません</h2>
            <p className='text-xs text-neutral-600 '>
              完璧主義、レジリエンス、感情的知性など、あなた独自の特性についてさらに深掘りしてみましょう。プレミアムレポートのロックを解除すると、あなたの性格の隠れた側面、および自己成長のための個別の洞察とヒントについて学べます。
            </p>
            <h3 className='text-xl text-neutral-600 font-semibold'>139,000đ</h3>
          </div>
          <div className='flex flex-col gap-2 items-center justify-center md:items-start md:justify-items-start'>
            <Button className='px-4 py-2 flex items-center gap-2 rounded-[36px]'>
              すべての結果のロックを解除 <ArrowRight size='24' />
            </Button>
            <p className='text-xs text-neutral-400 '>万が一ご満足いただけない場合は、30日間の返金保証あり。</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default UnlockAllResults
