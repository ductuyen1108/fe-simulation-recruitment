import Button from '@/common/components/Button'
import { ArrowRight } from 'iconsax-reactjs'
import Container from '@/common/components/Container'

const HeroSection = () => {
  return (
    <div className='py-6 md:py-18'>
      <Container>
        <div className='w-full mx-auto md:px-0 grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 md:auto-rows-auto gap-6 md:gap-[60px]'>
          <div className='md:space-y-25 col-span-1 md:col-span-2 md:row-span-3 order-2 md:order-none'>
            <div className='flex flex-col justify-center md:justify-normal items-center md:items-start space-y-8'>
              <h1 className='text-4xl md:text-5xl font-semibold'>「やっと自分のことを理解してもらえました」</h1>
              <p className='text-[14px] md:text-[16px] text-neutral-600  leading-5 md:leading-6'>
                たった10分で、自分がどんな人間か、自らの態度や行動の理由について、不思議なくらい正確な説明を手に入れられます。
              </p>
              <Button
                background='primary'
                variant='contained'
                className='flex items-center gap-3 rounded-[36px] px-6 py-2 w-fit'
              >
                性格タイプ
                <ArrowRight size='32' />
              </Button>
            </div>
            <div className='hidden md:flex md:items-end bg-[url(/assets/home/hero-illustration2.svg)] bg-no-repeat bg-contain w-full h-[250px]'>
              <div className='flex items-center gap-2'>
                <h2 className='text-[#FDC345] text-xl '>91.2%</h2>
                <p className='text-neutral-500 text-xs '>正確または非常に正確であると評価された結果</p>
              </div>
            </div>
          </div>
          <img
            src='/assets/home/hero_illustration1.svg'
            alt='Hero illustration'
            className='w-full h-auto col-span-1 md:col-span-3 md:row-span-2 order-1 md:order-none'
          />
          <div className='col-span-1 md:col-span-3 order-3 md:order-none'>
            <div className='flex justify-between items-center gap-3'>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className='max-w-[212px] w-full max-h-[130px] border-[12px] border-neutral-50 shadow-[0px 4px 4px 0px #5F5F5F0D] rounded-[12px]'
                >
                  <div className='w-full h-full rounded-[8px] py-5'>
                    <div className='flex flex-col gap-1 items-center justify-center'>
                      <h2 className='bg-linear-270 from-salmon to-yellow inline-block text-transparent bg-clip-text text-2xl md:text-4xl  font-semibold'>
                        112K+
                      </h2>
                      <span className='text-xs text-neutral-500 '>今日受けたテスト</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default HeroSection
