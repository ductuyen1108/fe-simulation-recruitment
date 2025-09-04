import QuestItem from './QuestItem'
import { useForm } from 'react-hook-form'
import Button from '@/common/components/Button'
import { ArrowRight } from 'iconsax-reactjs'

const questions = [
  { name: 'q1', title: 'あなたは定期的に新しい友達を作ります。' },
  { name: 'q2', title: '複雑で斬新なアイデアは、単純で単純なものよりもあなたを興奮させます。' },
  { name: 'q3', title: 'あなたは通常、事実に基づく議論よりも感情的に共鳴するものによって説得されるように感じます。' },
  { name: 'q4', title: '生活空間と仕事空間は清潔で整頓されています。' },
  { name: 'q5', title: 'あなたは、大きなプレッシャーを受けても、たいてい冷静さを保っています。' },
  {
    name: 'q6',
    title: 'ネットワークを構築したり、見知らぬ人に自分を宣伝したりするのは非常に気が重いことだと思います。'
  }
]

type FormValues = Record<string, number>

const PersonalityForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: Object.fromEntries(questions.map((q) => [q.name, undefined]))
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form Values:', data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10 py-20'>
      {/* Progress */}
      {/* <div className='py-4 px-5 flex items-center justify-between shadow-[0_0_10px_rgba(29,36,50,.1)]'>
        <button>Previous step</button>
        <div className='flex items-center gap-3 w-fit '>
          <div className='w-[120px] md:w-[300px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
            <div className=' bg-gradient-to-r from-salmon to-yellow h-2.5 rounded-full' style={{ width: '45%' }}></div>
          </div>
          <span className='hidden md:block text-neutral-600 font-sans'>Step 2 of 10</span>
        </div>
      </div> */}
      {questions.map((q) => (
        <QuestItem key={q.name} title={q.title} name={q.name} control={control} />
      ))}
      {/* Next step page */}
      {/* <Button className='px-4 py-2 rounded-[36px] w-fit flex items-center gap-2 font-sans'>
        Next <ArrowRight size='24' />
      </Button> */}
      <div className='mx-auto w-full max-w-[820px] p-6 rounded-[8px] space-y-6 shadow-[2px_4px_18px_0px_#00000040]'>
        <div className='space-y-1.5'>
          <span className='text-neutral-600 font-sans font-semibold'>あなたの性別</span>
          <p className='text-[14px] leading-5 text-neutral-600'>
            オプション。これにより、結果画面に表示されるアバターが決まります。
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-3'>
            <input type='radio' className='w-[22px] h-[22px]' />
            <p className='text-[14px] leading-5 font-sans text-neutral-600'>男</p>
          </div>
          <div className='flex items-center gap-3'>
            <input type='radio' className='w-[22px] h-[22px]' />
            <p className='text-[14px] leading-5 font-sans text-neutral-600'>女性</p>
          </div>
          <div className='flex items-center gap-3'>
            <input type='radio' className='w-[22px] h-[22px]' />
            <p className='text-[14px] leading-5 font-sans text-neutral-600'>他の</p>
          </div>
        </div>
        <Button type='submit' className='flex items-center gap-2 rounded-[36px] py-2 px-4'>
          性格タイプ <ArrowRight size='24' />
        </Button>
      </div>
    </form>
  )
}

export default PersonalityForm
