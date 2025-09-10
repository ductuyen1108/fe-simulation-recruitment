import { SearchNormal1 } from 'iconsax-reactjs'
import React, { useState, type ReactNode } from 'react'
import Modal from '../Modal'
import TextField from '../form/TextField'
import Button from '../Button'

const SearchButton = ({ text }: { text?: ReactNode }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='flex gap-4 items-center cursor-pointer' onClick={() => setOpenModal(true)}>
        <SearchNormal1 size='24' color='#1A1B25' />
        {text}
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} title='検索'>
        <form className='space-y-6 mt-6'>
          <TextField name='searchText' label='' placeholder='' endIcon={<SearchNormal1 size='16' />} />
          <Button className='px-4 py-2 rounded-[36px] w-full'>検索</Button>
        </form>
      </Modal>
    </>
  )
}

export default SearchButton
