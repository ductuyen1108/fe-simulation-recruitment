const HeroSTSection = () => {
  return (
    <div className='mb-12'>
      <div className='relative mb-25 sm:mb-0'>
        <svg
          viewBox='0 0 1440 339'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          className='w-full h-[100px] sm:h-[250px] md:h-[340px]'
        >
          <path
            d='M303.5 322C182.158 319.061 0 255 0 255V0H1440V268.5C1440 268.5 1336.9 318.923 1265.5 326C1187.79 333.703 1144.3 283.835 1067.5 298C1024.17 305.992 1005.96 335.059 962 338C922.033 340.674 901.233 322.575 861.5 317.5C769.989 305.811 717.667 332.035 625.5 328C560.764 325.166 525.292 311.402 460.5 310.5C399.029 309.645 364.959 323.488 303.5 322Z'
            fill='url(#paint0_linear_278_3572)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_278_3572'
              x1='1440'
              y1='169.134'
              x2='-4.6924e-06'
              y2='169.134'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FE8B7C' />
              <stop offset='1' stopColor='#FDC344' />
            </linearGradient>
          </defs>
        </svg>
        <div className='absolute w-full top-12 md:top-[100px] left-1/2 -translate-x-1/2  flex flex-col gap-[124px]'>
          <div className='flex flex-col justify-center items-center text-center gap-6'>
            <span className='text-[18px] leading-7 text-neutral-800  font-semibold'>LOGO</span>
            <h2 className='text-4xl text-neutral-600  font-semibold'>適性試験</h2>
            <p className='text-[14px] leading-5 text-neutral-600 '>NERIS Type Explorer®</p>
          </div>
        </div>
      </div>
      <img src='/assets/illustration_mental_health.svg' alt='' className='mx-auto' />
    </div>
  )
}

export default HeroSTSection
