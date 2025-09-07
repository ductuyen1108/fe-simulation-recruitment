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
  lg: 'w-[42px] h-[42px] sm:w-[48px] sm:h-[48px]',
  md: 'w-[34px] h-[34px] sm:w-[38px] sm:h-[38px]',
  xs: 'w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]',
  neutral: 'w-[22px] h-[22px] sm:w-7 sm:h-7'
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

export const QUESTIONS_PER_PAGE = 6

export const personalityQuestionList = [
  { name: 'q1', title: 'あなたは定期的に新しい友達を作ります。' },
  { name: 'q2', title: '複雑で斬新なアイデアは、単純で単純なものよりもあなたを興奮させます。' },
  { name: 'q3', title: 'あなたは通常、事実に基づく議論よりも感情的に共鳴するものによって説得されるように感じます。' },
  { name: 'q4', title: '生活空間と仕事空間は清潔で整頓されています。' },
  { name: 'q5', title: 'あなたは、大きなプレッシャーを受けても、たいてい冷静さを保っています。' },
  {
    name: 'q6',
    title: 'ネットワークを構築したり、見知らぬ人に自分を宣伝したりするのは非常に気が重いことだと思います。'
  },
  { name: 'q7', title: 'タスクの優先順位をつけて効果的に計画し、期限よりかなり前に完了することがよくあります。' },
  { name: 'q8', title: '人々の物語や感情は、数字やデータよりも雄弁に語りかけます。' },
  { name: 'q9', title: 'スケジュールやリストなどの整理ツールを使うのが好きです' },
  { name: 'q10', title: '小さなミスでも、自分の能力や知識全体に疑問を抱く原因になります。' },
  { name: 'q11', title: '仕事に優先順位をつけ、効率的に計画を立て、期限よりかなり前に完了させることが多い。' },
  { name: 'q12', title: '数字やデータより、人々の物語や感情の方があなたに力強く響く。' },
  { name: 'q13', title: '予定表やリストなどの整理・管理ツールを使うのが好き。' },
  { name: 'q14', title: '些細なことでも間違えると、自分の能力と知識全般を疑ってしまう。' },
  { name: 'q15', title: '事前のアレンジなしに、自分が興味のある人のところに行って話しかけるのは簡単。' },
  { name: 'q16', title: 'クリエイティブな作品のさまざまな解釈についての議論には、興味がない。' },
  { name: 'q17', title: '行動方針を決めるとき、あなたは他の人の感情より事実を大切にします。' },
  { name: 'q18', title: '何も計画を立てずに一日を過ごすことがよくある。' },
  { name: 'q19', title: '会う人に好印象を残すかどうかは、ほとんど気にしない。' },
  { name: 'q20', title: 'チームで何かをするのが好き。' },
  { name: 'q21', title: '未経験の新しいアプローチを試すのは楽しいと感じる。' },
  { name: 'q22', title: '完全に正直であることよりも、思いやりを持つことを優先する。' },
  { name: 'q23', title: '新しい経験や知識を積極的に追求する。' },
  { name: 'q24', title: '物事が悪い方向に向かうのではないかと心配しがち。' },
  { name: 'q25', title: 'グループで行う趣味やアクティビティより、一人で行うものの方が楽しい。' },
  { name: 'q26', title: '仕事として架空の物語を書いている自分は想像できない。' },
  { name: 'q27', title: '感情的な面を多少無視してでも、効率的な決断を好む。' },
  { name: 'q28', title: 'やらなければいけないことをしてからリラックスするのが好き。' },
  { name: 'q29', title: '意見の相違がある場合、他人の感情をいたわるよりも自分の主張を証明することを優先する。' },
  { name: 'q30', title: '社交の場では大抵、最初に他の人が自己紹介するのを待つ。' },
  { name: 'q31', title: 'とても急に機嫌が変わることがある。' },
  { name: 'q32', title: '感情的な議論には簡単に動かされない。' },
  { name: 'q33', title: 'ギリギリのタイミングで最後にやっと何かを行うことが多い。' },
  { name: 'q34', title: '倫理的なジレンマについて議論するのが好き。' },
  { name: 'q35', title: '一人でいるより、人と一緒にいる方が好き。' },
  { name: 'q36', title: '議論がとても理論的になると、退屈に感じたり興味を失ったりする。' },
  { name: 'q37', title: '事実と感情が相反する場合、たいていは自分の心に従う。' },
  { name: 'q38', title: '仕事や勉強のために一定のスケジュールを維持するのは難しいと感じる。' },
  { name: 'q39', title: '一度決めたら、その決断を疑うことはほとんどない。' },
  { name: 'q40', title: '文章を書くなど、さまざまな創造的表現に惹かれる。' },
  { name: 'q41', title: '通常、感情的な印象よりも客観的な事実に基づいて物事を決める。' },
  { name: 'q42', title: '1日ごとの「やることリスト」を作るのが好き。' },
  { name: 'q43', title: '不安はほとんど感じない。' },
  { name: 'q44', title: '電話はかけないようにしている。' },
  { name: 'q45', title: '馴染みのないアイデアや視点の探求は楽しい。' }
]
