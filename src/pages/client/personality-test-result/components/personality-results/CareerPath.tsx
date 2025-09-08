import UnlockBox from '../items/UnlockBox'
import CircleProgressItem from '../items/CircleProgressItem'
import { Lock1, Send2 } from 'iconsax-reactjs'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import WeaknessesStrengths from '../items/WeaknessesStrengths'
import { Element } from 'react-scroll'

const itemsCircleProgress = [
  { percent: 100, color: 'text-mbti-blue', label: '完璧主義⁠' },
  { percent: 100, color: 'text-mbti-yellow', label: '野心' },
  { percent: 100, color: 'text-mbti-green', label: 'モチベーション' },
  { percent: 100, color: 'text-mbti-purple', label: '人や物事をリードしたいという気持ち⁠' }
]

const strengths = [
  { title: '信頼関係の構築', description: 'あなたの誠実な関心が、自然と人々の心を開かせます。' },
  { title: 'チームワークの推進', description: '誰もが受け入れられ、大切にされる雰囲気を生み出します。' },
  { title: '洞察力ある問題解決', description: '本質をすぐに見抜き、思いやりと賢さで解決策を提案できます。' },
  { title: '効果的なコミュニケーション', description: '明確に考えを伝え、相手に自信と活力を与えます。' },
  { title: 'やる気を引き出す指導力', description: '本質をすぐに見抜き、思いやりと賢さで解決策を提案できます。' },
  { title: '柔軟な発想力', description: '新しい発想や創造的な方法を模索することで、仕事に意欲が湧きます。' }
]

const weaknesses = [
  { title: '自己犠牲的になりがち', description: '他者のために尽力するあまり、自分を消耗してしまうことがあります。' },
  { title: '批判に敏感', description: '建設的な指摘でも、気にしすぎてしまうことがあります。' },
  { title: '現実的な限界を見落としやすい', description: '高い理想から、現実的な制約を軽視してしまうことがあります。' },
  { title: '必要な対立を回避', description: '調和を優先し、必要な議論を避けてしまいがちです。' },
  { title: '委任への抵抗感', description: '仕事の質を重視するあまり、重要な任務を他人に任せづらい傾向です。' },
  { title: '失敗を個人的に受け止める', description: '仕事上の壁も、自分自身の欠点と感じてしまうことがあります。' }
]

const CareerPath = () => {
  const { isMd } = useMediaQuery()
  return (
    <Element name='career-path'>
      <div className='space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='circle w-10 h-10 flex items-center justify-center text-2xl  text-neutral-600 font-semibold'>
            2
          </div>
          <h2 className='text-[30px] text-neutral-600  font-semibold'>あなたのキャリアパス</h2>
        </div>
        <div className='space-y-3'>
          <h2 className='text-xl  font-semibold text-neutral-600'>影響力のある特性</h2>
          <div className='flex flex-col items-center justify-center gap-6'>
            <div className='flex justify-center md:justify-between w-full md:max-w-[560px] gap-6 md:gap-0'>
              {itemsCircleProgress.map((it) => (
                <CircleProgressItem
                  key={it.color}
                  value={it.percent}
                  colorClass={it.color}
                  label={it.label}
                  once
                  size={isMd ? 94 : 64}
                  stroke={4}
                >
                  <Lock1 size='24' className='text-neutral-300' />
                </CircleProgressItem>
              ))}
            </div>
            <UnlockBox
              title='今すぐロックを解除'
              description='完全版のレポートを入手して、これらの結果を見てみましょう。さらなる性格分析と提案について学べます。'
              btnContent={
                <>
                  <Send2 size='16' /> 結果を送る
                </>
              }
            />
          </div>
        </div>
        <WeaknessesStrengths type='strengths' heading='あなたの強み' items={strengths} />
        <WeaknessesStrengths type='weaknesses' heading='あなたの強み' items={weaknesses} />
        <WeaknessesStrengths
          type='strengths'
          heading='あなたを元気にするもの'
          items={strengths}
          unlock={false}
          unlockContent={
            <UnlockBox
              title='今すぐロックを解除'
              description='完全版のレポートを入手して、これらの結果を見てみましょう。さらなる性格分析と提案について学べます。'
              btnContent={
                <>
                  <Send2 size='16' /> 結果を送る
                </>
              }
            />
          }
        />
        <WeaknessesStrengths
          type='strengths'
          heading='っと好きになるキャリアのアイデア'
          items={strengths}
          unlock={false}
          unlockContent={
            <UnlockBox
              title='今すぐロックを解除'
              description='完全版のレポートを入手して、これらの結果を見てみましょう。さらなる性格分析と提案について学べます。'
              btnContent={
                <>
                  <Send2 size='16' /> 結果を送る
                </>
              }
            />
          }
        />
      </div>
    </Element>
  )
}

export default CareerPath
