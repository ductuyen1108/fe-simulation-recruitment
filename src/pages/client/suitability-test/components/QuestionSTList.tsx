import QuestItem from '@/pages/client/personality-test/components/QuestItem'
import { useForm } from 'react-hook-form'
import Button from '@/common/components/Button'
import { ArrowRight, ArrowLeft } from 'iconsax-reactjs'
import { useState, useMemo, useRef, useEffect } from 'react'
import { suitabilityQuestionList, QUESTIONS_PER_PAGE } from '../constants'
import GenderRadioGroup from '@/pages/client/personality-test/components/GenderRadioGroup'

type FormValues = Record<string, number>

const QuestionSTList = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: Object.fromEntries(suitabilityQuestionList.map((q) => [q.name, undefined]))
  })

  const [pageIndex, setPageIndex] = useState(0)
  const totalPages = Math.ceil(suitabilityQuestionList.length / QUESTIONS_PER_PAGE)

  const progressRef = useRef<HTMLDivElement | null>(null)

  const visibleQuestions = useMemo(() => {
    const start = pageIndex * QUESTIONS_PER_PAGE
    return suitabilityQuestionList.slice(start, start + QUESTIONS_PER_PAGE)
  }, [pageIndex])

  const onSubmit = (data: FormValues) => {
    console.log('Form Values:', data)
  }

  const handleNext = () => {
    if (pageIndex < totalPages - 1) {
      setPageIndex((p) => p + 1)
    }
  }

  const handlePrev = () => {
    if (pageIndex > 0) {
      setPageIndex((p) => p - 1)
    }
  }

  const progress = ((pageIndex + 1) / totalPages) * 100

  useEffect(() => {
    if (pageIndex > 0 && progressRef.current) {
      const offset = 80
      const top = progressRef.current.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [pageIndex])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex px-2 flex-col gap-10 pb-16'>
      {pageIndex > 0 && (
        <div
          ref={progressRef}
          className='md:max-w-[990px] w-full mx-auto py-4 px-5 flex items-center justify-between shadow-[0_0_10px_rgba(29,36,50,.1)]'
        >
          <div className='flex items-center gap-3  text-neutral-600 cursor-pointer' onClick={handlePrev}>
            <ArrowLeft size='20' /> Previous
          </div>
          <div className='flex items-center gap-3 w-fit '>
            <div className='w-[120px] md:w-[300px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
              <div
                className='bg-gradient-to-r from-salmon to-yellow h-2.5 rounded-full'
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className='hidden md:block text-neutral-600 '>
              Step {pageIndex + 1} of {totalPages}
            </span>
          </div>
        </div>
      )}

      {visibleQuestions.map((q) => (
        <div key={q.name}>
          <QuestItem title={q.title} name={q.name} control={control} leftLable='Like' rightLabel='Not Like' />
        </div>
      ))}

      {pageIndex === totalPages - 1 ? (
        <div className='mx-auto w-full max-w-[820px] p-6 rounded-[8px] space-y-6 shadow-[2px_4px_18px_0px_#00000040]'>
          <span className='text-neutral-600  font-semibold'>あなたの性別</span>
          <p className='text-[14px] leading-5 text-neutral-600'>
            オプション。これにより、結果画面に表示されるアバターが決まります。
          </p>
          <GenderRadioGroup name='gender' control={control} />
          <Button type='submit' className='flex items-center gap-2 rounded-[36px] py-2 px-4'>
            性格タイプ <ArrowRight size='24' />
          </Button>
        </div>
      ) : (
        <div className='flex justify-start px-4 mx-auto w-full max-w-[820px]'>
          <Button
            type='button'
            onClick={handleNext}
            className='px-4 py-2 rounded-[36px] w-full md:w-fit flex items-center justify-center gap-2 '
          >
            Next <ArrowRight size='24' />
          </Button>
        </div>
      )}
    </form>
  )
}

export default QuestionSTList
