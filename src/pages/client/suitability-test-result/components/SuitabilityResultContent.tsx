import React from 'react'
import PersonalScores from './PersonalScores'
import TopCoreSkills from './TopCoreSkills'
import SuitabilityResultItem from './items/SuitabilityResultItem'
import StickyControl from './StickyControl'

const SuitabilityResultContent = () => {
  return (
    <div className='py-12 px-2 max-w-[980px] flex items-start justify-between mx-auto'>
      <div className='flex flex-col gap-6 max-w-[650px] w-full'>
        <h2 className='text-3xl text-neutral-600 font-semibold font-heading'>レポート情報</h2>
        <div className='gap-5 flex flex-col text-[14px] leading-5 text-neutral-600 font-sans'>
          <p>
            このテストでは、特定の職業活動を描いた絵の中から選択する必要がありました。それぞれの絵は、特定の性格タイプに関連付けられた仕事を描いています。これらの性格タイプは、ジョン・ホランド博士のキャリアと職業選択理論、いわゆるホランド・コードに基づいています。
          </p>
          <p>ホランドのモデルには 6 つの性格タイプがあります。</p>
          <ul className='list-disc pl-5'>
            <li>現実的：実用的、物理的、具体的、実践的、機械、ツール指向</li>
            <li>調査的：分析的、知的、科学的、探究的、思想家</li>
            <li>芸術的：創造的、独創的、独立的、混沌、独創的、メディア、グラフィック、テキスト</li>
            <li>社会的：協力的、支援的、援助的、癒し／育成的、指導的</li>
            <li>進取的：競争的な環境、リーダーシップ、説得力、地位</li>
            <li>慣習的：細部にこだわり、組織的、事務的</li>
          </ul>
        </div>
        <SuitabilityResultItem
          title='性格タイプとホランドコード'
          description={
            <>
              ホランド博士は、人はこれらのタイプのうちの1つに過ぎないとは言っていません。そうであれば、世界には6つのタイプの人間しかいないことになります。そうではなく、人は6つのタイプすべてに関連する興味を持つことができるのです。最も興味のあるタイプから最も興味の薄いタイプまで、タイプを順位付けすると、あなた独自のホランド・コードが出来上がります。
              <br />
              ISERAC、AIRSEC、CSERIAなど、約720通りの組み合わせが可能です。しかし、一般的には、SC、IRC、AICなど、2～3文字で適切な説明を作成できます。このような説明は、個人と職場環境の両方に当てはまる場合があります。ホランドコードを用いて個人と職場環境の両方を類型化することで、それらの適合性を計算することができます。これは、将来のキャリアや職業選択を判断するのに役立ちます。
            </>
          }
        />
        <PersonalScores
          artistic={30}
          investigative={22}
          conventional={13}
          enterprising={13}
          realistic={12}
          social={13}
        />
        <SuitabilityResultItem
          title='あなたの個人的なホランドコード'
          description='特定のタイプをどれだけ強く好むかによって、あなただけのホランドコードを作ることができます。最も好むタイプの頭文字を取って作ります。あなたの場合は、A、I、Cです。そうすると、あなただけのホランドコードはAIC、AI、IA、あるいはIACのいずれかになります。'
        />
        <SuitabilityResultItem
          title='コアスキル'
          description={
            <>
              コアスキルとは、あなたの性格に自然に合致する一連のスキルと定義されます。これらのスキルは通常、より高度なレベルで、習得が容易ではなく、測定が難しい場合が多いです。これらのスキルは様々な仕事で役立つため、横断的スキルまたは転用可能スキルとも呼ばれます。
              <br />
              <br />
              コアスキルは履歴書の素晴らしい出発点となり、キャリアの選択肢を探り、面接の準備に役立ちます。さらに、コアスキルはより具体的で習得可能な多くのスキルにつながるため、成長に合わせた学習パスを容易にカスタマイズできます。
            </>
          }
        />
        <TopCoreSkills />
      </div>
      <StickyControl />
    </div>
  )
}

export default SuitabilityResultContent
