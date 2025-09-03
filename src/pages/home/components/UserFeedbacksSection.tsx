import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs'
import { userFeedbacks } from '../constants'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'

type UserFeedbackItemProps = {
  color: string
  avatarUrl: string
  name: string
  position: string
  description: string
}

const UserFeedbackItem = ({ color, avatarUrl, name, position, description }: UserFeedbackItemProps) => {
  return (
    <div
      className={'w-full md:w-[275px] flex flex-col gap-3 p-4 border-t-2 rounded-[8px] bg-white'}
      style={{ borderTopColor: color }}
    >
      <div className='flex items-center gap-3 h-14'>
        <div className='relative pl-2'>
          <img src={avatarUrl} alt={name} className='w-[48px] h-[48px] rounded-full' />
          <p
            className='absolute bottom-[-10px] left-0 flex text-white text-[20px] justify-center w-6 h-6 rounded-full border-2 border-neutral-0'
            style={{ backgroundColor: color }}
          >
            “
          </p>
        </div>
        <div className='space-y-1'>
          <span className='text-xs text-neutral-600 font-sans font-semibold'>{name}</span>
          <p className='text-xs font-sans' style={{ color: color }}>
            {position}
          </p>
        </div>
      </div>
      <p className='text-neutral-600 text-xs font-sans'>{description}</p>
    </div>
  )
}

const MOBILE_PAGE_SIZE = 5
const DESKTOP_STEP = 2

const UserFeedbacksSection = () => {
  const { isMd } = useMediaQuery()
  const total = userFeedbacks.length

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const firstItemRef = useRef<HTMLDivElement | null>(null)

  const [itemWidthPx, setItemWidthPx] = useState<number>(0)
  const [visibleWidthPx, setVisibleWidthPx] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const pagesCount = useMemo(() => Math.ceil(total / MOBILE_PAGE_SIZE), [total])

  useLayoutEffect(() => {
    function measure() {
      const wrapper = wrapperRef.current
      const first = firstItemRef.current
      const vw = wrapper ? wrapper.clientWidth : Math.min(window.innerWidth, 1480)
      setVisibleWidthPx(vw)

      if (first) {
        setItemWidthPx(first.offsetWidth)
      } else {
        setItemWidthPx(275 + 16)
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [isMd, total])

  useEffect(() => {
    if (isMd) {
      const visibleSlots = itemWidthPx > 0 ? Math.max(1, Math.floor(visibleWidthPx / itemWidthPx)) : Math.min(5, total)
      const maxIndexDesktop = Math.max(0, total - visibleSlots)
      setCurrentIndex((prev) => Math.min(prev, maxIndexDesktop))
    } else {
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, pagesCount - 1)))
    }
  }, [isMd, itemWidthPx, visibleWidthPx, pagesCount, total])

  const handleNext = () => {
    if (isMd) {
      const visibleSlots = itemWidthPx > 0 ? Math.max(1, Math.floor(visibleWidthPx / itemWidthPx)) : Math.min(5, total)
      const maxIndexDesktop = Math.max(0, total - visibleSlots)
      setCurrentIndex((i) => Math.min(i + DESKTOP_STEP, maxIndexDesktop))
    } else {
      setCurrentIndex((i) => Math.min(i + 1, pagesCount - 1))
    }
  }

  const handlePrev = () => {
    if (isMd) {
      setCurrentIndex((i) => Math.max(i - DESKTOP_STEP, 0))
    } else {
      setCurrentIndex((i) => Math.max(i - 1, 0))
    }
  }

  const canPrev = currentIndex > 0
  const canNext = isMd
    ? (() => {
        const visibleSlots =
          itemWidthPx > 0 ? Math.max(1, Math.floor(visibleWidthPx / itemWidthPx)) : Math.min(5, total)
        const maxIndexDesktop = Math.max(0, total - visibleSlots)
        return currentIndex < maxIndexDesktop
      })()
    : currentIndex < pagesCount - 1

  const desktopTranslateX = useMemo(() => {
    if (!isMd) return 0
    const raw = currentIndex * itemWidthPx
    const maxTranslate = Math.max(0, total * itemWidthPx - visibleWidthPx)
    return Math.min(raw, maxTranslate)
  }, [isMd, currentIndex, itemWidthPx, total, visibleWidthPx])

  const mobileTranslatePercent = useMemo(() => {
    if (isMd) return 0
    if (pagesCount <= 1) return 0

    if (currentIndex === pagesCount - 1) {
      const lastPageItemCount = total % MOBILE_PAGE_SIZE || MOBILE_PAGE_SIZE
      return ((total - lastPageItemCount) / total) * 100
    }

    return ((currentIndex * MOBILE_PAGE_SIZE) / total) * 100
  }, [isMd, currentIndex, total, pagesCount])

  const mobilePages = useMemo(() => {
    if (isMd) return []
    const pages: (typeof userFeedbacks)[] = []
    for (let p = 0; p < pagesCount; p++) {
      pages.push(userFeedbacks.slice(p * MOBILE_PAGE_SIZE, p * MOBILE_PAGE_SIZE + MOBILE_PAGE_SIZE))
    }
    return pages
  }, [pagesCount, isMd])

  return (
    <div className='bg-[#F8F8F8] rounded-[40px] py-12 px-4 flex flex-col justify-center items-center gap-8'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <img src='/assets/home/user_feedbacks_illustration.svg' alt='quotes' className='w-[120px] h-auto' />
        <span className='text-xs text-yellow font-sans font-semibold'>証言</span>
        <h2 className='text-[30px] md:text-4xl text-neutral-600 font-heading font-semibold'>他の人の意見を見る</h2>
      </div>

      <div className='flex flex-col gap-4 justify-center items-center w-full'>
        <div
          ref={wrapperRef}
          className='overflow-hidden w-full'
          style={{ maxWidth: '1480px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {isMd ? (
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${desktopTranslateX}px)` }}
            >
              {userFeedbacks.map((item, index) => (
                <div
                  key={item.name + index}
                  ref={index === 0 ? firstItemRef : undefined}
                  className='px-2 flex-shrink-0'
                >
                  <UserFeedbackItem {...item} />
                </div>
              ))}
            </div>
          ) : (
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ width: `${mobilePages.length * 100}%`, transform: `translateX(-${mobileTranslatePercent}%)` }}
            >
              {mobilePages.map((pageItems, index) => (
                <div
                  key={`page-${index}`}
                  className='px-2 flex-shrink-0'
                  style={{ width: `${100 / mobilePages.length}%` }}
                >
                  <div className='flex flex-col gap-4'>
                    {pageItems.map((item, index) => (
                      <div key={item.name + index}>
                        <UserFeedbackItem {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              canPrev ? 'bg-white cursor-pointer' : 'bg-neutral-100 opacity-50'
            }`}
          >
            <ArrowLeft2 size='20' color='#818898' />
          </button>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              canNext ? 'bg-white cursor-pointer' : 'bg-neutral-100 opacity-50'
            }`}
          >
            <ArrowRight2 size='20' color='#818898' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserFeedbacksSection
