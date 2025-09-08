import Modal from '../Modal'
import Button from '../Button'
import TextField from '@/common/components/form/TextField'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Lock1, Sms } from 'iconsax-reactjs'

type FormValues = {
  email: string
  password: string
}

const LoginButton = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <>
      <button className='px-4 py-1.5 text-[14px]  cursor-pointer' onClick={() => setOpenModal(true)}>
        ログイン
      </button>
      <Modal title='ログイン' open={openModal} onClose={handleCloseModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col mt-4 gap-6'>
            <span className='text-xs text-neutral-600  text-center'>
              まだメンバーではありませんか？当社の性格テストを受けるか、ご自身で結果を入力して、無料プロフィールを作成してください。
            </span>
            <div className='space-y-4'>
              <TextField
                name='email'
                register={register}
                placeholder='email@email.com'
                label={<p className=' font-semibold text-xs text-neutral-600'>あなたの性格タイプの詳細</p>}
                startIcon={<Sms size='16' />}
                error={errors.email?.message}
              />
              <TextField
                name='password'
                type='password'
                placeholder='********'
                register={register}
                label={<p className=' font-semibold text-xs text-neutral-600'>パスワード</p>}
                startIcon={<Lock1 size='16' />}
                error={errors.password?.message}
              />
            </div>
            <Button className='rounded-[36px] px-4 py-2' type='submit'>
              ログイン
            </Button>
            <div className='flex items-center justify-between'>
              <span className='text-xs text-[#26A9F1] font-semibold  cursor-pointer'>パスワード</span>
              <span className='text-xs text-[#26A9F1] font-semibold  cursor-pointer'>パスワードをお忘れですか？</span>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default LoginButton
