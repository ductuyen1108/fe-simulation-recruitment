export const optionsCheckItem = [
  { type: 'agree', size: 'lg', val: 3 },
  { type: 'agree', size: 'md', val: 2 },
  { type: 'agree', size: 'xs', val: 1 },
  { type: 'neutral', size: 'xs', val: 0 },
  { type: 'disagree', size: 'xs', val: -1 },
  { type: 'disagree', size: 'md', val: -2 },
  { type: 'disagree', size: 'lg', val: -3 }
] as const

export const sizeCheckItemMap = {
  lg: 'w-[52px] h-[52px]',
  md: 'w-[42px] h-[42px]',
  xs: 'w-[36px] h-[36px]'
}

export const bgTypeCheckItemMap = {
  agree: 'bg-linear-270 from-salmon to-yellow',
  neutral: 'bg-neutral-300',
  disagree: 'bg-neutral-600'
}

export const stepsPersonalityTest = [
  {
    numberStep: 1,
    title: 'テストを完了する',
    description: '自分らしく正直に答えて、あなたの性格タイプを見つけてください。',
    image: '/assets/personality-test/step1_illustration.svg'
  },
  {
    numberStep: 2,
    title: '詳細な結果を表示',
    description: 'あなたの性格タイプが人生のさまざまな領域にどのように影響するかを学びます。',
    image: '/assets/personality-test/step2_illustration.svg'
  },
  {
    numberStep: 3,
    title: 'あなたの可能性を解き放つ',
    description: 'オプションのプレミアム スイートで、なりたい自分へと成長しましょう。',
    image: '/assets/personality-test/step3_illustration.svg'
  }
]
