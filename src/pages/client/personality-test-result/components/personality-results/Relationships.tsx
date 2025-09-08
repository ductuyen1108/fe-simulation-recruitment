import CircleProgressItem from '../items/CircleProgressItem'
import { Lock1 } from 'iconsax-reactjs'
import UnlockBox from '../items/UnlockBox'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import WeaknessesStrengths from '../items/WeaknessesStrengths'
import { Element } from 'react-scroll'

const itemsCircleProgress = [
  { percent: 100, color: 'text-mbti-blue', label: '自分らしさ⁠' },
  { percent: 100, color: 'text-mbti-yellow', label: '忠誠心' },
  { percent: 100, color: 'text-mbti-green', label: '利他主義⁠' },
  { percent: 100, color: 'text-mbti-purple', label: '感情知能⁠' }
]

const strengths = [
  { title: '心を開く空気づくり', description: '周囲の人が自分の本音を安心して話せる雰囲気を自然に生み出します。' },
  { title: '調和への献身', description: '対立を和らげ、関係に平和と理解をもたらします。' },
  { title: '相手を思いやる気配り', description: '身近な人が支えを感じるために何が必要かを常に考えています。' },
  { title: '温かさの表現', description: '相手の価値を素直に認めて伝えることで、安心感を与えます。' },
  { title: '成長を後押し', description: '身近な人たちが自らの目標や幸福を目指すよう励まします。' },
  { title: '信頼関係の育成', description: '誠実さと優しさで、困難にも強い絆を築きます。' }
]

const weaknesses = [
  { title: '期待に応えられない不安', description: '他人の期待に応えられず悩み過ぎてしまうことがあります。' },
  { title: '他人の悩みへの過度な関与', description: '思いやりが強いため、友人や家族の悩みに深く巻き込まれがちです。' },
  { title: '自身の願いを抑えがち', description: '調和を優先して、自分の本当の思いを伝えにくくなることがあります。' },
  { title: '見返りを求めてしまう', description: '惜しみなく支える分、同じだけ返されないと傷つくことがあります。' },
  { title: '警告サインを見落とす', description: '人の善意を信じすぎて、不健全な関係の兆候を見過ごすことがあります。' },
  { title: '境界線の設定が苦手', description: '相手の要求で心が疲れても、はっきりと距離を取るのが難しい傾向です。' }
]

const Relationships = () => {
  const { isMd } = useMediaQuery()
  return (
    <Element name='relationships'>
      <div className='space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='circle w-10 h-10 flex items-center justify-center text-2xl  text-neutral-600 font-semibold'>
            4
          </div>
          <h2 className='text-[30px] text-neutral-600  font-semibold'>あなたの人間関係</h2>
        </div>
        <p className='text-[14px] leading-5 text-neutral-600 '>
          恋愛関係、家族関係、プラトニックな関係で、あなたはとても献身的かつ直感力があるパートナーとして輝く傾向があります。他者の感情的なニーズを理解し、それに応えることができるので、身近な人から秘密を打ち明けられたり、良き友人とみなされたりするでしょう。あなたには有意義で深いつながりを築き、他の人が安心して自分らしく振る舞えるような環境を育む才能があるのです。
          <br />
          しかし調和を保ちたいという願望と、過剰なまでに人に合わせようとする傾向のせいで、自分自身のニーズをないがしろにしてしまう場合もあります。人間関係において自分の欲求を伝えて、自分らしさを保つ習慣の構築のは、あなたの心の健康を維持するためには欠かせません。最も充実した人間関係とは、お互いが等しく大切にされ、理解されていると感じられる関係であることを忘れないでください。あなたの場合、人間関係の面では、生まれつき寛大な気質を大切にしながらも、善意やサポートを人から受けるようにすることが重要です。
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
                  <Lock1 size='24' className='text-neutral-300 shrink-0' />
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

export default Relationships
