import React, { useState } from 'react'
import Button from './Button'
import { ArrowDown2, Message2 } from 'iconsax-reactjs'

const ChatBox = () => {
  const [openChatBox, setOpenChatBox] = useState(false)
  return (
    <div className='w-fit'>
      {openChatBox && (
        <div className='flex flex-col justify-between h-[350px] md:h-[500px] w-[295px] rounded-[8px] border-t-4 border-b-4 border-[#FDC344]'>
          <div className='border-b-1 border-neutral-300 p-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src='/assets/icons/chatgpt.svg' alt='chatgpt' className='w-6 h-6' />
              <span className='text-xs text-neutral-600 font-sans font-semibold'>Chat GPT</span>
            </div>
            <button
              className='w-6 h-6 rounded-full bg-neutral-50 flex items-center justify-center cursor-pointer'
              onClick={() => setOpenChatBox(false)}
            >
              <ArrowDown2 size='20' color='#666D80' />
            </button>
          </div>
          {/* <div id='list-chat'></div> */}
          <div className='bg-neutral-25 border-t-1 border-neutral-300'>
            <textarea
              name=''
              className='block p-2.5 w-full text-sm text-neutral-600'
              placeholder='メッセージを入力し、Enterキーを押して送信します'
            />
          </div>
        </div>
      )}
      <Button
        background='primary'
        variant='contained'
        className='w-12 h-12 rounded-full flex items-center justify-center'
      >
        <Message2 size='24' color='#FFFFFF' />
      </Button>
    </div>
  )
}

export default ChatBox
