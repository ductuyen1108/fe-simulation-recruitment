import { useMemo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import SliceIcon from './items/SliceIcon'
import { COLORSCHART, LABELS_JP } from '../constants'

type PersonalScoresProps = {
  artistic: number
  investigative: number
  conventional: number
  enterprising: number
  social: number
  realistic: number
}

const PersonalScores = ({
  artistic,
  investigative,
  conventional,
  enterprising,
  social,
  realistic
}: PersonalScoresProps) => {
  const raw = useMemo(
    () =>
      [
        { key: 'artistic', value: artistic },
        { key: 'investigative', value: investigative },
        { key: 'conventional', value: conventional },
        { key: 'enterprising', value: enterprising },
        { key: 'social', value: social },
        { key: 'realistic', value: realistic }
      ] as const,
    [artistic, investigative, conventional, enterprising, social, realistic]
  )

  const data = useMemo(() => {
    const total = raw.reduce((s, i) => s + (Number.isFinite(i.value) ? i.value : 0), 0)
    if (total <= 0) {
      return raw.map((r) => ({ ...r, pct: Math.round(100 / raw.length) }))
    }
    return raw.map((r) => ({ ...r, pct: Math.round((r.value / total) * 100) }))
  }, [raw])

  return (
    <div className='space-y-4'>
      <h2 className='text-xl text-neutral-600 font-semibold '>あなたの性格タイプ</h2>
      <p className='text-[14px] leading-5 text-neutral-600 '>
        あなたは「<strong>芸術的</strong>」を最も好み、次いで「<strong>探究的</strong>」と「<strong>慣習的</strong>
        」でした。あなたの6文字の性格タイプは「<strong>AICESR</strong>
        」です。あなたの個人的な好みは、下のグラフにも示されています。
      </p>
      <div className='flex gap-2'>
        <div className='hidden sm:block space-y-2 max-w-30'>
          <div className='px-3 py-1 bg-neutral-600 rounded-[8px] text-white text-xs'>
            <p>Fig. 1</p>
            <p>FAVORITE TYPE OF WORK</p>
          </div>
          <div className='border-gradient rounded-[8px] p-1 gap-1 flex flex-col items-center justify-center'>
            <img src='/assets/avatars/nicole.svg' alt='' className='w-9 h-9 rounded-full' />
            <div className='text-xs  text-neutral-600'>
              <p>GENDER: FEMALE</p>
              <p>AGE: 24</p>
            </div>
          </div>
        </div>
        <div className='border-gradient rounded-[8px] p-4 flex items-center w-full'>
          <div className='space-y-2 w-full'>
            <span className='text-xs font-semibold  bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text'>
              PERSONAL SCORES
            </span>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
              <div className='w-60 h-60 mx-auto'>
                <ResponsiveContainer width='100%' height='100%' className='pointer-events-none'>
                  <PieChart>
                    <defs>
                      <linearGradient id='pieBorder' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor='#fe8b7c' />
                        <stop offset='100%' stopColor='#fdc344' />
                      </linearGradient>
                    </defs>
                    <Pie
                      data={[{ value: 1 }]}
                      dataKey='value'
                      cx='50%'
                      cy='50%'
                      innerRadius='98%'
                      outerRadius='100%'
                      fill='url(#pieBorder)'
                      stroke='none'
                      isAnimationActive={false}
                    />
                    <Pie
                      data={data}
                      dataKey='pct'
                      nameKey='key'
                      cx='50%'
                      cy='50%'
                      innerRadius='0%'
                      outerRadius='95%'
                      stroke='none'
                      paddingAngle={0}
                      startAngle={90}
                      endAngle={-270}
                      isAnimationActive
                    >
                      {data.map((entry) => (
                        <Cell key={entry.key} fill={(COLORSCHART as any)[entry.key]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-1 gap-2.5 justify-between'>
                {data.map((d) => (
                  <li key={d.key} className='flex items-center gap-3'>
                    <SliceIcon color={(COLORSCHART as any)[d.key]} />
                    <div className='flex flex-col justify-start text-xs text-neutral-600  font-semibold'>
                      <span className='text-[13px] md:text-[14px] font-medium text-neutral-800'>
                        {LABELS_JP[d.key as keyof typeof LABELS_JP]}
                      </span>
                      <span className='text-[13px] text-neutral-600'>{d.pct}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalScores
