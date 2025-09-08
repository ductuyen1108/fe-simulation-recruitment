import clsx from 'clsx'

type TraitBarProps = {
  leftLabel: string
  rightLabel: string
  value: number
  color?: 'blue' | 'yellow' | 'green' | 'purple' | 'red'
  align?: 'left' | 'right'
  className?: string
}

const COLOR = {
  blue: { fill: 'bg-mbti-blue', textValue: 'text-mbti-blue' },
  yellow: { fill: 'bg-mbti-yellow', textValue: 'text-mbti-yellow' },
  green: { fill: 'bg-mbti-green', textValue: 'text-mbti-green' },
  purple: { fill: 'bg-mbti-purple', textValue: 'text-mbti-purple' },
  red: { fill: 'bg-mbti-red', textValue: 'text-mbti-red' }
} as const

const ILLUSTRATIONBOX = {
  blue: {
    title: 'エネルギー',
    image: '/assets/personality-test/step1_illustration.svg',
    description:
      '外向型の人はグループで行う活動が好きで、人との交流を大切にします。また、自分の熱意や興奮感を表に出す傾向があります。'
  },
  yellow: {
    title: 'エネルギー',
    image: '/assets/personality-test/step2_illustration.svg',
    description:
      '外向型の人はグループで行う活動が好きで、人との交流を大切にします。また、自分の熱意や興奮感を表に出す傾向があります。'
  },
  green: {
    title: 'エネルギー',
    image: '/assets/personality-test/step3_illustration.svg',
    description:
      '外向型の人はグループで行う活動が好きで、人との交流を大切にします。また、自分の熱意や興奮感を表に出す傾向があります。'
  },
  purple: {
    title: 'エネルギー',
    image: '/assets/personality-test/step1_illustration.svg',
    description:
      '外向型の人はグループで行う活動が好きで、人との交流を大切にします。また、自分の熱意や興奮感を表に出す傾向があります。'
  },
  red: {
    title: 'エネルギー',
    image: '/assets/personality-test/step2_illustration.svg',
    description:
      '外向型の人はグループで行う活動が好きで、人との交流を大切にします。また、自分の熱意や興奮感を表に出す傾向があります。'
  }
}

const clamp = (n: number) => Math.min(100, Math.max(0, n))

const TraitBar = ({ leftLabel, rightLabel, value, color = 'blue', align = 'left', className }: TraitBarProps) => {
  const v = clamp(value)

  return (
    <div className={clsx('w-full h-fit rounded-tl-[8px] rounded-bl-[8px] pt-7 pb-3 px-4 cursor-pointer', className)}>
      <div className='relative'>
        <div className={clsx('h-3 w-full rounded-full', COLOR[color].fill)} />
        {align === 'left' ? (
          <div
            className={clsx('absolute top-0 left-0 h-3 rounded-full', COLOR[color].fill)}
            style={{ width: `${v}%` }}
          />
        ) : (
          <div
            className={clsx('absolute top-0 right-0 h-3 rounded-full', COLOR[color].fill)}
            style={{ width: `${v}%` }}
          />
        )}

        {align === 'left' ? (
          <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2' style={{ left: `${v}%` }} aria-hidden>
            <div className={clsx('w-3.5 h-3.5 rounded-full ring-2 ring-white shadow', COLOR[color].fill)} />
          </div>
        ) : (
          <div className='absolute top-1/2 -translate-y-1/2 translate-x-1/2' style={{ right: `${v}%` }} aria-hidden>
            <div className={clsx('w-3.5 h-3.5 rounded-full ring-2 ring-white shadow', COLOR[color].fill)} />
          </div>
        )}

        {align === 'left' ? (
          <span
            className={clsx(
              'absolute -top-5 -translate-x-2/3 pointer-events-none whitespace-nowrap',
              'flex gap-1 text-xs font-sans font-semibold text-neutral-600'
            )}
            style={{ left: `${v}%` }}
          >
            <span className={clsx(COLOR[color].textValue)}>{v}%</span> {leftLabel}
          </span>
        ) : (
          <span
            className={clsx(
              'absolute -top-5 translate-x-2/3 pointer-events-none whitespace-nowrap',
              'flex gap-1 text-xs font-sans font-semibold text-neutral-600'
            )}
            style={{ right: `${v}%` }}
          >
            <span className={clsx(COLOR[color].textValue)}>{v}%</span> {rightLabel}
          </span>
        )}
      </div>
      <div className='flex justify-between text-xs text-neutral-600 font-sans mt-2'>
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  )
}

export default TraitBar
