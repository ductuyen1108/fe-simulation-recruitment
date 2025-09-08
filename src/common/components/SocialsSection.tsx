type Props = {
  color: string
  size?: number
  ariaLabel?: string
  children: React.ReactNode
}

const SocialButton: React.FC<Props> = ({ color, size = 45, ariaLabel, children }) => {
  return (
    <button
      aria-label={ariaLabel}
      style={{ ['--c' as any]: color, width: size, height: size }}
      className='
        group rounded-full border flex items-center justify-center cursor-pointer
        transition-colors duration-200
        [border-color:var(--c)] hover:[background-color:var(--c)]
      '
    >
      <span className='transition-colors duration-200 [color:var(--c)] group-hover:[color:white]'>{children}</span>
    </button>
  )
}

const SocialsSection = () => {
  return (
    <div className='w-full bg-[#F6F6F7] flex flex-col items-center justify-center py-[125px] gap-6'>
      <h2 className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text text-5xl font-semibold'>
        1.6M
      </h2>
      <p className='text-yellow'>SHARE</p>
      <div className='flex gap-3 items-center'>
        <SocialButton color='#0021F5' ariaLabel='Share to Facebook'>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M20 10.0251C20 4.49123 15.52 0 10 0S0 4.49123 0 10.0251C0 14.8772 3.44 18.9173 8 19.8496V13.0326H6V10.0251H8V7.5188C8 5.58396 9.57 4.01003 11.5 4.01003H14V7.01754H12C11.45 7.01754 11 7.46867 11 8.02005V10.0251H14V13.0326H11V20C16.05 19.4987 20 15.2281 20 10.0251Z' />
          </svg>
        </SocialButton>
        <SocialButton color='#000000' ariaLabel='Share to X'>
          <svg viewBox='0 0 24 24' width='20' height='20' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M18.244 2H21.5l-7.5 8.5L22 22h-6.373l-5.083-6.048L4.6 22H1.333l8.028-9.106L2 2h6.373l4.546 5.419L18.244 2zm-1.12 18h2.044L7.89 4H5.846l11.278 16z' />
          </svg>
        </SocialButton>
        <SocialButton color='#EB3223' ariaLabel='Share to Pinterest'>
          <svg viewBox='0 0 24 24' width='22' height='22' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 2c5.177 0 9 3.68 9 8.6 0 4.277-2.417 7.2-5.84 7.2-1.27 0-2.462-.69-2.87-1.472l-.8 3.08c-.29 1.122-1.07 2.518-1.27 2.936-.2.416-.64.28-.69-.156-.08-.646-.67-4.1-.53-4.93.1-.55.7-3.51.7-3.51s-.18-.36-.18-.9c0-.84.49-1.48 1.1-1.48.52 0 .77.39.77.85 0 .53-.34 1.33-.52 2.07-.15.63.33 1.15.98 1.15 1.17 0 2.06-1.24 2.06-3.03 0-1.58-1.14-2.69-2.77-2.69-1.89 0-3.01 1.42-3.01 2.88 0 .57.22 1.19.5 1.53.06.07.07.13.05.2-.05.22-.17.69-.19.79-.03.12-.1.16-.24.1-.9-.42-1.45-1.74-1.45-2.8 0-2.28 1.66-4.37 4.8-4.37 2.52 0 4.49 1.8 4.49 4.2 0 2.51-1.58 4.53-3.78 4.53-.74 0-1.44-.38-1.68-.83l-.46 1.75c-.17.67-.63 1.51-.93 2.03.7.22 1.43.34 2.2.34 4.49 0 8.1-3.49 8.1-8.1C20.1 5.48 16.49 2 12 2z' />
          </svg>
        </SocialButton>
        <SocialButton color='#818898' ariaLabel='Share via Email'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </SocialButton>
      </div>
    </div>
  )
}

export default SocialsSection
