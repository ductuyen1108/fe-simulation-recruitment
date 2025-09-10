import Button from '@/components/Button'

const StickyControl = () => {
  return (
    <div className='space-y-6 max-w-[290px] hidden md:block self-start md:sticky md:top-[80px]'>
      <div className='relative space-y-4 py-6 px-2 rounded-[8px] overflow-hidden bg-neutral-25'>
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
        <p className='text-xs text-neutral-600 '>
          結果を保存して保管したり、電子メールで送信したり、印刷したりできます。
        </p>
        <Button className='rounded-[36px] px-4 py-2 w-full text-xs  font-semibold'>レポートを保存</Button>
      </div>
      <div className='relative space-y-4 py-6 px-2 rounded-[8px] overflow-hidden bg-neutral-25'>
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FE8B7C] to-[#FDC344]' />
        <h3 className='font-semibold bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text'>
          テスト
        </h3>
        <div>
          <div className='cursor-pointer p-2 border-t border-neutral-200'>
            <p className='text-xs text-neutral-600 font-semibold'>性格テスト</p>
          </div>
          <div className='cursor-pointer p-1 border-t border-neutral-200 bg-neutral-50'>
            <p className='text-xs font-semibold bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text'>
              キャリアテスト
            </p>
          </div>
        </div>
        <Button className='rounded-[36px] px-4 py-2 w-full text-xs  font-semibold'>レポートを保存</Button>
      </div>
    </div>
  )
}

export default StickyControl
