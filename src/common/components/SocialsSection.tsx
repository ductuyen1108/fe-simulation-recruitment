const SocialsSection = () => {
  return (
    <div className='w-full bg-[#F6F6F7] flex flex-col items-center justify-center py-[125px] gap-6'>
      <h2 className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text text-5xl font-heading font-semibold'>
        1.6M
      </h2>
      <p className='text-yellow font-sans'>SHARE</p>
      <div className='flex gap-3 items-center'>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-[#0021F5] flex items-center justify-center cursor-pointer'>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20 10.0251C20 4.49123 15.52 0 10 0C4.48 0 0 4.49123 0 10.0251C0 14.8772 3.44 18.9173 8 19.8496V13.0326H6V10.0251H8V7.5188C8 5.58396 9.57 4.01003 11.5 4.01003H14V7.01754H12C11.45 7.01754 11 7.46867 11 8.02005V10.0251H14V13.0326H11V20C16.05 19.4987 20 15.2281 20 10.0251Z'
              fill='#0021F5'
            />
          </svg>
        </div>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-[#000000] flex items-center justify-center cursor-pointer'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <rect width='20' height='20' fill='url(#pattern0_322_6679)' />
            <defs>
              <pattern id='pattern0_322_6679' patternContentUnits='objectBoundingBox' width='1' height='1'>
                <use xlinkHref='#image0_322_6679' transform='scale(0.0104167)' />
              </pattern>
              <image
                id='image0_322_6679'
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqklEQVR4nO2ca6gVVRTHf9ZNU3v5Jol8lFaYRCWJUVJ+yAdyQT+UKIqZFQQpESJkpRbiB6Oih3WtiHwgKuKDICg0lVQUtD5k9jCi8pFKaRa+PSc2zYGLHO5dc85de++ZWT/Y387MXnv/z8ys/8xeGwzDMAzDMAzDMAzDMAyjOvcA54CyUlsU2cRfC3wjjP01X0HNURTgEjCCOLgS2CiM+9Pk9164AtiiKMLvQBfC844w3j1AZ9/B9QP+VhRhGWF5ThjnIeCmUEFOUxSgDEwINK4xwEVBfP8AdxGY1YoCnABu9jyeu5OJbS02J1AjEdAdOKwowhdAO09j6Z08fyRxPUtEPAKUFEWY6WEM1wBfC+NpIkLeVRTgLDBYMXaXPm4QxvIZ0ECEXA18qyjCXqC9UuxvCWNw47ueArvkhQoxzxD2fThAQlATLyq75IfaMNbRwAVBv6eBoWQE55K3KorwC3BdG8R5J3BSKPo4MoZzyacURfi4zvhuBH4T9vU8GeUJRQHKwKM1xtUJ2CXs40MyjqZLPp78k9PeHtcLz/+lYtaVG5f8eUqX/KbwvN8BN5ATtF3yM8I4nkxxZd1KzlisKMAZYFAr/Y8SppvuXMPIIe7B972iCHtauF8PEqab7iqdSI5xLvm8ogivVunTPaR/FR7/AgXgJUUBLgHDm/XVMUW6Wa+vyAzaLvnnZBWD62ed8JhtQAcKRH9ll/wB8LrwtweSVLlwTFcUoFzkdDMNawJO/jngYQqOu/SPBJh8l25ODj34WBip7JKrtXmhBx0b73mc/FUeV1hkhk7KLrnSvipaupmG+4Tvampth4qabqbhZUUBLmTpm24oGoAdiiIcSBZfGQFd8mKb/bAuuQSMNRHCuuSjQC8TIaxLXm8ChHfJ00yE1nlfUYB/gQEmQss0KgpQccfeKhuzxh1JiVJZuRXiW3AtD+GfPEx+xSW7VyFGs0IPTUdcre1PXgoWnnbACs+TX2lvF372+b8CphyolZL64MLyeMDJb/7auhsFZIRw1dzFxEAdVRTBvQYpFLcDfwknxxXUVRbbarrkKRSEbinSzSWXHdukKIDbhKQvBUg3t9dRHO22h/lBUYRcu2SXbi4XTsS+Foqj71VecT2bnLJAOAFHBMXRcxUFcOIOIWdMFQ7+tPBDurs17VQUYV+y1D0XDE823pCs9R8f0bfkN8gBt6VIN2fVcP6nFAUoJdsaZDrd/FE42I/q6Ee6w2Et7SDQlQzSPil6lgxyS53F0T2UvyWvJYPp5rIUxdFd2qBPbZecqUrKVwJVqzQpCuBKXvuQASYI/4lngPvbuG9tl7wtdpf8oDDdLAGTlGLQdsnRbmNzC3BMOIg5yrHMUxTgbAybtlZLN6WX/koP1SoNHlyye6kYBS593JziHtrB4xV5Ku/b7bt/8tIU1ewuX/fJ03nfbl96r/0TGBgoxo153W7/MWG6eT5wcXQP4A9FEdz3De88kCLdjOE762hll+x1u/3+KdLN+cTDkjxst981RW3v6siKozsru2T17favAjYJg9kd6ZrLIcouWW27fafsJym2GO5JvMzP8Hb7hmEYhmEYhmEYhmEYBtnkP7yN9LQHlLUWAAAAAElFTkSuQmCC'
              />
            </defs>
          </svg>
        </div>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-[#EB3223] flex items-center justify-center cursor-pointer'>
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <rect width='22' height='22' fill='url(#pattern0_322_6682)' />
            <defs>
              <pattern id='pattern0_322_6682' patternContentUnits='objectBoundingBox' width='1' height='1'>
                <use xlinkHref='#image0_322_6682' transform='scale(0.0104167)' />
              </pattern>
              <image
                id='image0_322_6682'
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,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'
              />
            </defs>
          </svg>
        </div>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-neutral-400 flex items-center justify-center cursor-pointer'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
              stroke='#818898'
              stroke-width='1.5'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9'
              stroke='#818898'
              stroke-width='1.5'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SocialsSection
