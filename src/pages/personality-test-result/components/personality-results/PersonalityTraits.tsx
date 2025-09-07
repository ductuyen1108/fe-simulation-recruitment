import Button from '@/common/components/Button'
import { Send2 } from 'iconsax-reactjs'
import TraitBar from '../items/TraitBar'
import type { RefElement } from '../../types'

const PersonalityTraits = ({ refElement }: RefElement) => {
  const handleClick = () => {
    if (refElement.current) refElement?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <>
      <p className='text-[14px] leading-5 font-sans text-neutral-600'>
        ENFJ（主人公）のあなたは、カリスマ性・共感力・理想主義という独特な気質の組み合わせを備えていて、どんな場面でも際立った存在感を示す傾向があります。他者を鼓舞し導く才能があり、周囲にプラスの影響を与えたいという強い願望を抱いているでしょう。また、あなたには人の感情や動機を不思議なほど正確に理解する能力があり、他者が必要としているものを、本人が気づく前に察知することもよくあります。
        <br />
        さらにコミュニケーションの面でも才能があるので、情熱と信念をもって先見の明のあるアイデアを明確に示し、他者を巻き込み、やる気を起こさせることができます。あなたは人との有意義なつながりを大切にするだけでなく、周りの人の長所を難なく引き出せるでしょう。ただし、理想主義的な気質があるので、現実があなたの高い期待にそぐわないと、落胆してしまうこともあります。
      </p>
      <div className='space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='circle w-10 h-10 flex items-center justify-center text-2xl font-heading text-neutral-600 font-semibold'>
            1
          </div>
          <h2 className='text-[30px] text-neutral-600 font-heading font-semibold'>性格特性</h2>
        </div>
        <div className='border border-neutral-300 rounded-[8px]'>
          <div className='flex w-full p-4'>
            <div className='w-full flex flex-col'>
              <TraitBar
                leftLabel='外向型'
                rightLabel='内向型'
                value={70}
                color='blue'
                align='right'
                className='bg-neutral-50'
              />
              <TraitBar leftLabel='外向型' rightLabel='内向型' value={50} color='yellow' align='left' />
              <TraitBar leftLabel='外向型' rightLabel='内向型' value={40} color='green' align='right' />
              <TraitBar leftLabel='外向型' rightLabel='内向型' value={60} color='purple' align='left' />
              <TraitBar leftLabel='外向型' rightLabel='内向型' value={75} color='red' align='right' />
            </div>
            <div className='bg-neutral-50 rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] p-4 flex flex-col gap-1 max-w-[150px] md:max-w-[215px]'>
              <div className='text-center w-full'>
                <p className='text-xs text-neutral-600 font-sans'>エネルギー</p>
                <span className='text-neutral-600 font-sans font-semibold'>
                  <p className=''>58%</p> 外向型
                </span>
              </div>
              <img src='/assets/personality-test/step1_illustration.svg' alt='' />
              <p className='text-xs text-neutral-600 font-sans'>
                外向型の人はグループで行う活動が好きで、人との交流を大切にします。また、自分の熱意や興奮感を表に出す傾向があります。
              </p>
            </div>
          </div>
          <div className='bg-neutral-50 p-4 rounded-bl-[8px] rounded-br-[8px] flex flex-col gap-2'>
            <span className='text-xs text-neutral-600 font-sans font-semibold'>
              性格概要に移る前に、結果をあなたのメールアドレスに送りましょうか？
            </span>
            <Button
              onClick={handleClick}
              className='flex items-center gap-2 rounded-[36px] w-fit text-xs font-sans font-semibold'
            >
              <Send2 size='16' /> 結果を送る
            </Button>
          </div>
        </div>
        <div>
          <span className='text-[14px] leading-5 font-sans text-neutral-600'>
            共感力はあなたの最大の長所であると同時に、潜在的な短所でもあります。あなたは共感力のおかげで他者と偽りのない深いつながりを築ける反面、感情面で疲弊を感じがちです。他者の問題を自分の問題として抱え込み、時には自分の幸福を犠牲にしてしまうこともあるでしょう。
            <br />
            あなたは生まれつきのリーダーなので、共通の目標達成に向けて人々を集結させる天性の才能があります。あなたは調和のとれた生産的な環境づくりが得意で、あなたの熱意に周りの人は感化されるでしょう。でも調和を求めるあまり必要な対立を避けてしまうことがあるので、批判や衝突が苦手かもしれません。持ち前の「理想主義」と「実践主義」だけでなく、「他者への配慮」と「セルフケア」も大切にする習得を作れば、公私ともに充実するでしょう。
          </span>
        </div>
      </div>
    </>
  )
}

export default PersonalityTraits
