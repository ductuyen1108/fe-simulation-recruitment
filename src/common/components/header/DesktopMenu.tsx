import SearchButton from './SearchButton'
import LoginButton from './LoginButton'
import Button from '../Button'

const DesktopMenu = () => {
  return (
    <div className='hidden md:flex gap-3 items-center'>
      <SearchButton />
      <LoginButton />
      <div className='relative'>
        <Button className='flex items-center gap-3 py-2 px-6 rounded-3xl'>
          <img src='/assets/icons/japan_rectangle.svg' alt='japan-flag' />
          <span className='text-xl font-semibold text-white font-heading'>日本語</span>
        </Button>
      </div>
    </div>
  )
}

export default DesktopMenu
