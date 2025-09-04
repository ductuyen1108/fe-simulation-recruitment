const SocialsSection = () => {
  return (
    <div className='w-full bg-[#F6F6F7] flex flex-col items-center justify-center py-[125px] gap-6'>
      <h2 className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text text-5xl font-heading font-semibold'>
        1.6M
      </h2>
      <p className='text-yellow font-sans'>SHARE</p>
      <div className='flex gap-3 items-center'>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-[#0021F5] flex items-center justify-center cursor-pointer'>
          <img src='/assets/icons/facebook.svg' alt='' className='w-5 h-5' />
        </div>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-[#000000] flex items-center justify-center cursor-pointer'>
          <img src='/assets/icons/x.svg' alt='' className='w-5 h-5' />
        </div>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-[#EB3223] flex items-center justify-center cursor-pointer'>
          <img src='/assets/icons/pinterest.svg' alt='' className='w-5 h-5' />
        </div>
        <div className='w-[45px] h-[45px] rounded-full bg-transparent border border-neutral-400 flex items-center justify-center cursor-pointer'>
          <img src='/assets/icons/sms.svg' alt='' className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default SocialsSection
