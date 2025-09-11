import SearchButton from './SearchButton'
import LoginButton from './LoginButton'
import { Button } from '../ui/button'
import { useI18n } from '@/common/lib/i18n'

const DesktopMenu = () => {
  const { t } = useI18n()
  return (
    <div className='hidden md:flex gap-3 items-center'>
      <SearchButton />
      <LoginButton />
      <div className='relative'>
        <Button className='py-5 px-6 rounded-3xl'>
          <img src='/assets/icons/japan_rectangle.svg' alt='japan-flag' className='w-6 h-4' />
          <h2 className='text-xl font-semibold text-white '>{t('header.language.label')}</h2>
        </Button>
      </div>
    </div>
  )
}

export default DesktopMenu
