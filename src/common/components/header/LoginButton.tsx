import React, { useState } from 'react'
import Modal from '../Modal'

const LoginButton = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <>
      <button className='px-4 py-1.5 text-[14px] font-sans cursor-pointer' onClick={() => setOpenModal(true)}>
        ログイン
      </button>
      <Modal title='ログイン' open={openModal} onClose={handleCloseModal}>
        <div className='flex flex-col mt-4 gap-6'>
          <span className='text-xs text-neutral-600 font-sans text-center'>
            まだメンバーではありませんか？当社の性格テストを受けるか、ご自身で結果を入力して、無料プロフィールを作成してください。
          </span>
        </div>
      </Modal>
    </>
  )
}

export default LoginButton
