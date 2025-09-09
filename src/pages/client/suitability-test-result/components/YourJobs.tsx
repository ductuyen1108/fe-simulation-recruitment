import JobDetailItem from './items/JobDetailItem'

const YourJobs = () => {
  return (
    <div>
      <div className='space-y-3'>
        <h2 className='text-xl text-neutral-600 font-semibold '>あなたの仕事</h2>
        <p className='text-[14px] leading-5 text-neutral-600 '>
          <strong>あなたのホランドコードAICESR</strong>
          に適合する職業のリストです。このリストは、あなたの性格に合う職業の一部に過ぎません。この職業リストは、典型的な例としてご利用ください。あなたのスコアに基づいて、合計20の職業が提案されます。
        </p>
      </div>
      <JobDetailItem
        title='辞書編集者'
        educationRequirement='通常、学士号以上が必要'
        description='辞書編集者は、辞書のコンテンツを作成し、編集します。また、どの新語が一般的に使用され、用語集に含めるべきかを決定します。'
        skills={[
          {
            label: '必須スキル',
            quantity: 4,
            items: ['定義を作成する', 'データベースを検索する', '文法とスペルのルールを適用する', '情報源を参照する']
          },
          {
            label: 'より幅広いスキル',
            quantity: 4,
            items: ['約束を守る', '好奇心を示す', '品質管理', 'ウェブ検索を行う']
          }
        ]}
      />
      <JobDetailItem
        title='辞書編集者'
        educationRequirement='通常、学士号以上が必要'
        description='辞書編集者は、辞書のコンテンツを作成し、編集します。また、どの新語が一般的に使用され、用語集に含めるべきかを決定します。'
        skills={[
          {
            label: '必須スキル',
            quantity: 4,
            items: ['定義を作成する', 'データベースを検索する', '文法とスペルのルールを適用する', '情報源を参照する']
          },
          {
            label: 'より幅広いスキル',
            quantity: 4,
            items: ['約束を守る', '好奇心を示す', '品質管理', 'ウェブ検索を行う']
          }
        ]}
      />
      <JobDetailItem
        title='辞書編集者'
        educationRequirement='通常、学士号以上が必要'
        description='辞書編集者は、辞書のコンテンツを作成し、編集します。また、どの新語が一般的に使用され、用語集に含めるべきかを決定します。'
        skills={[
          {
            label: '必須スキル',
            quantity: 4,
            items: ['定義を作成する', 'データベースを検索する', '文法とスペルのルールを適用する', '情報源を参照する']
          },
          {
            label: 'より幅広いスキル',
            quantity: 4,
            items: ['約束を守る', '好奇心を示す', '品質管理', 'ウェブ検索を行う']
          }
        ]}
      />
    </div>
  )
}

export default YourJobs
