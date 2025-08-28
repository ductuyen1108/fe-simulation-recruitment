import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen bg-neutral-600 py-12'>
      <div className='max-w-[985px] m-auto flex flex-col gap-8'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-[72px]'>
          <div>
            <h3 className='font-semibold mb-2 text-xs font-sans text-yellow'>製品</h3>
            <ul className='space-y-1.5 text-sm font-sans text-neutral-50'>
              <li>プレミアムプロフィール</li>
              <li>チーム評価</li>
              <li>専門家向けレポート</li>
              <li>お客様の声</li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-2 text-xs font-sans text-yellow'>リソース</h3>
            <ul className='space-y-1.5 text-sm font-sans text-neutral-50'>
              <li>性格テスト</li>
              <li>性格タイプ</li>
              <li>記事</li>
              <li>私たちのフレームワーク</li>
              <li>国際プロファイル</li>
            </ul>
          </div>
          <div className='md:col-span-1 sm:col-span-2 order-last md:order-none'>
            <h3 className='font-semibold mb-2 text-xs font-sans text-yellow'>ヘルプ</h3>
            <ul className='space-y-1.5 text-sm font-sans text-neutral-50'>
              <li>お問い合わせ</li>
              <li>よくある質問</li>
              <li>言語を変更</li>
            </ul>
          </div>
        </div>
        <div className='w-full h-0 border-[0.5px] border-[#EEEFF1]' />
        <span className='text-xs font-sans text-neutral-300'>© 2025 A&B</span>
      </div>
    </div>
  )
}

export default Footer
