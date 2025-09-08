import SuitabilityResultItem from './items/SuitabilityResultItem'

const topskills = [
  { skill: '約束を守る', description: '自制心を持ち、信頼性が高く、目標志向の姿勢で自分の仕事を遂行します。' },
  {
    skill: '好奇心を示す',
    description:
      '新しいものに対して活発な興味を示し、経験に対してオープンな姿勢で、主題やトピックに興味を持ち、積極的に新しい分野を探求し発見します。'
  },
  {
    skill: '情報、オブジェクト、リソースを整理する',
    description:
      '自分のタスクとそれに伴うプロセスを理解し、体系的な方法と定められた基準に従って情報、オブジェクト、リソースを整理し、タスクを確実に遂行できるようにします。'
  },
  { skill: '品質管理', description: '職場のプロセス、製品、活動における卓越性を追求します。' },
  { skill: '変化に適応する', description: '職場の変化に合わせて自分の態度や行動を変える。' },
  { skill: '他の人にアドバイスする', description: '最善の行動方針についての提案を提供します。' },
  {
    skill: 'ウェブ検索を行う',
    description: 'デジタル環境での簡単な検索を通じて、データ、情報、コンテンツを検索します。'
  },
  {
    skill: '守秘義務を尊重する',
    description: '機密情報、秘密情報、または不快な情報を取り扱うときは、必要な慎重さと自制心を守ってください。'
  },
  { skill: '決断を下す', description: 'いくつかの代替可能性の中から選択してください。' },
  { skill: '心を開いて', description: '他人の問題に興味を持ち、オープンな姿勢を持ちましょう。。' }
]

const TopCoreSkills = () => {
  return (
    <div className='space-y-6'>
      <SuitabilityResultItem
        title='あなたのトップ10のコアスキル'
        description='以下に、あなたに本質的に適した10個のコアスキルを厳選してリストアップしました。これらは、あなたの性格に合った仕事における普及率に基づいてランク付けされています。'
      />
      {topskills.map((item, index) => (
        <div key={item.skill} className='flex items-start gap-2'>
          <p className='font-sans font-semibold text-neutral-600 mt-2'>{index + 1}.</p>
          <div className='space-y-2'>
            <div className='py-1.5 px-4 w-fit rounded-[36px] bg-gradient-to-r from-salmon to-yellow text-white text-xs font-sans font-semibold'>
              {item.skill}
            </div>
            <p className='text-[14px] leading-5 font-sans text-neutral-600'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopCoreSkills
