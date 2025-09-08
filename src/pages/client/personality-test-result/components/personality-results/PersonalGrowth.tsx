import CircleProgressItem from '../items/CircleProgressItem'
import { Lock1 } from 'iconsax-reactjs'
import UnlockBox from '../items/UnlockBox'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import WeaknessesStrengths from '../items/WeaknessesStrengths'
import { Element } from 'react-scroll'

const itemsCircleProgress = [
  { percent: 100, color: 'text-mbti-blue', label: 'レジリエンス' },
  { percent: 100, color: 'text-mbti-yellow', label: '自信' },
  { percent: 100, color: 'text-mbti-green', label: '根性⁠' },
  { percent: 100, color: 'text-mbti-purple', label: 'コントロール感⁠' }
]

const strengths = [
  { title: '成長への献身', description: '自己理解を深め、人間性を高める努力を続けます。' },
  { title: '豊かな想像力', description: '意味ある変化を思い描く力が、成長への原動力になります。' },
  { title: '新しい経験への挑戦', description: '自分を広げる未知の機会を積極的に求めます。' },
  { title: '感情への直感力', description: '心の声を信じ、本物志向の道を選びます。' },
  { title: '楽観的な姿勢', description: '苦境でも希望や可能性を見いだすことができます。' },
  { title: '丁寧な自己振り返り', description: '定期的に自分の行動や決断を見直し、成長を重ねます。' }
]

const weaknesses = [
  { title: '非現実的な期待', description: '自分に厳しい目標を課し、達成できないと落ち込むことがあります。' },
  { title: '他者に流されやすい', description: '成長を求めるあまり、自分の願いを見失いがちです。' },
  { title: '結果を急ぎすぎる', description: '自己改善への焦りが、余計な負担やイライラの原因になることがあります。' },
  { title: '休息を後回しにする', description: '成長を優先し、十分な休養やリフレッシュを疎かにしがちです。' },
  { title: '限界の受け入れが苦手', description: '前向きな性格から、自分の限界を現実的に認めづらい傾向です。' },
  { title: '厳しすぎる自己評価', description: '自分の進歩を認めず、過剰に自分を責めてしまうことがあります。' }
]

const PersonalGrowth = () => {
  const { isMd } = useMediaQuery()
  return (
    <Element name='personal-growth'>
      <div className='space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='circle w-10 h-10 flex items-center justify-center text-2xl  text-neutral-600 font-semibold'>
            3
          </div>
          <h2 className='text-[30px] text-neutral-600  font-semibold'>あなたのキャリアパス</h2>
        </div>
        <p className='text-[14px] leading-5 text-neutral-600 '>
          あなたの自己成長プロセスは、自己改善への飽くなき欲求と、「最高の自分になる」という心からのコミットメントに支えられています。自分の行動に高い基準を課し、厳しく自己批判することも少なくないでしょう。このような姿勢は目覚ましい自己啓発につながりますが、より現実に沿った期待を抱き、セルフコンパッションを実践して、バランスを取ることが大切です。
          あなたの成長に重要なのは、健全な境界線（バウンダリー）を引き、セルフケアを優先する習慣をつけることです。自分のニーズよりも他者のニーズを優先してしまう気質を放っておくと、燃え尽き症候群を引き起こしかねません。理想主義的な傾向を補うために実用的なスキルを身につけ、独りの時間と内省を大切にするようになれば、あなたの自己進化と全体的な幸福度は大きく改善するでしょう。
        </p>
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
              btnContent='今すぐアクセス'
            />
          </div>
        </div>
        <WeaknessesStrengths type='strengths' heading='あなたの強み ' items={strengths} />
        <WeaknessesStrengths type='weaknesses' heading='あなたの強み' items={weaknesses} />
        <WeaknessesStrengths
          type='strengths'
          heading='あなたを元気にするもの'
          items={strengths}
          unlock={false}
          unlockContent={
            <UnlockBox
              title='今すぐロックを解除'
              description='フルレポートを取得して、本来のエネルギーを引き出す6つの方法を知りましょう。'
              btnContent='すべての結果のロックを解除'
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
              description='フルレポートを取得して、本来のエネルギーを引き出す6つの方法を知りましょう。'
              btnContent='すべての結果のロックを解除'
            />
          }
        />
      </div>
    </Element>
  )
}

export default PersonalGrowth
