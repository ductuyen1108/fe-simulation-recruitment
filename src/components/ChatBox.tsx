import { useRef, useState } from 'react'
import Button from './Button'
import { ArrowDown2, EmojiHappy, Message2, Paperclip2 } from 'iconsax-reactjs'
import clsx from 'clsx'

const messages = [
  { id: 'm1', content: 'こんにちは。何かご用でしょうか？', sentAt: '05/08/2025 - 07:01', sender: 'assistant' },
  { id: 'm2', content: 'こんにちは。何かご用でしょうか？', sentAt: '05/08/2025 - 07:02', sender: 'client' },
  {
    id: 'm3',
    content: 'もちろん、現在東京には介護士関連の求人が4件あります。ぜひチェックしてみてはいかがでしょうか？',
    sentAt: '05/08/2025 - 07:03',
    sender: 'assistant'
  },
  { id: 'm4', content: 'はい、どこで見れますか？', sentAt: '05/08/2025 - 07:04', sender: 'client' },
  {
    id: 'm5',
    content: '東京の介護職の求人情報はこちらです：www.webb/search/Tokyo/caregiver',
    sentAt: '05/08/2025 - 07:05',
    sender: 'assistant'
  },
  { id: 'm6', content: '見ました、ありがとう。', sentAt: '05/08/2025 - 07:06', sender: 'client' },
  {
    id: 'm7',
    content: 'はい、何かご不明な点がございましたら、お気軽にメッセージをお送りください。良い一日をお過ごしください。',
    sentAt: '05/08/2025 - 07:07',
    sender: 'assistant'
  },
  { id: 'm8', content: 'こんにちは。何かご用でしょうか？', sentAt: '05/08/2025 - 07:01', sender: 'assistant' },
  { id: 'm9', content: 'こんにちは。何かご用でしょうか？', sentAt: '05/08/2025 - 07:02', sender: 'client' },
  {
    id: 'm10',
    content: 'もちろん、現在東京には介護士関連の求人が4件あります。ぜひチェックしてみてはいかがでしょうか？',
    sentAt: '05/08/2025 - 07:03',
    sender: 'assistant'
  },
  { id: 'm11', content: 'はい、どこで見れますか？', sentAt: '05/08/2025 - 07:04', sender: 'client' },
  {
    id: 'm12',
    content: '東京の介護職の求人情報はこちらです：www.webb/search/Tokyo/caregiver',
    sentAt: '05/08/2025 - 07:05',
    sender: 'assistant'
  },
  { id: 'm13', content: '見ました、ありがとう。', sentAt: '05/08/2025 - 07:06', sender: 'client' },
  {
    id: 'm14',
    content: 'はい、何かご不明な点がございましたら、お気軽にメッセージをお送りください。良い一日をお過ごしください。',
    sentAt: '05/08/2025 - 07:07',
    sender: 'assistant'
  }
]

const ChatBox = () => {
  const [openChatBox, setOpenChatBox] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClickIcon = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = () => {}
  return (
    <div className='w-fit fixed top-[450px] md:top-[585px] right-0 translate-x-[-10px] md:translate-x-[-50px] xl:translate-x-[-150px] z-50'>
      <div className='relative'>
        {openChatBox && (
          <div className='absolute bg-white bottom-14 right-0 flex flex-col h-[350px] md:h-[500px] w-[295px] rounded-[8px] border-t-4 border-b-4 border-[#FDC344]'>
            <div className='border-b-1 border-neutral-300 p-4 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img src='/assets/icons/chatgpt.svg' alt='chatgpt' className='w-6 h-6' />
                <span className='text-xs text-neutral-600  font-semibold'>Chat GPT</span>
              </div>
              <button
                className='w-6 h-6 rounded-full bg-neutral-50 flex items-center justify-center cursor-pointer'
                onClick={() => setOpenChatBox(false)}
              >
                <ArrowDown2 size='20' color='#666D80' />
              </button>
            </div>
            <div className='flex flex-col py-4 gap-3 h-full overflow-y-auto scrollbar-hide'>
              {messages.map((item) => {
                const isClient = item.sender === 'client'
                return (
                  <div
                    key={item.id}
                    className={clsx(
                      'w-full flex items-center px-2 h-full',
                      item.sender === 'client' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {!isClient ? (
                      <div className='flex items-center gap-2'>
                        <img src='/assets/icons/chatgpt.svg' alt='' className='w-4 h-4 rounded-full' />
                        <span className='text-xs text-neutral-600 py-1 px-2 bg-neutral-50 rounded-[4px]'>
                          {item.content}
                        </span>
                      </div>
                    ) : (
                      <div className='flex items-center gap-2'>
                        <span className='text-xs text-neutral-600 py-1 px-2 bg-neutral-50 rounded-[4px]'>
                          {item.content}
                        </span>
                        <img src='/assets/avatars/nicole.svg' alt='' className='w-4 h-4 rounded-full' />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className='bg-neutral-25 border-t-1 border-neutral-300'>
              <div className='relative flex items-center'>
                <textarea
                  name=''
                  className='p-2.5 w-full h-15 text-sm text-neutral-600 focus:outline-none overflow-y-auto pr-14 resize-none scrollbar-hide'
                  placeholder='メッセージを入力し、Enterキーを押して送信します'
                />
                <div className='absolute right-3 flex items-center gap-2 text-neutral-500'>
                  <div className='relative'>
                    <input ref={fileInputRef} type='file' onChange={handleFileChange} className='hidden' />
                    <Paperclip2 size='16' className='cursor-pointer' onClick={handleClickIcon} />
                  </div>
                  <EmojiHappy size='16' />
                </div>
              </div>
            </div>
          </div>
        )}
        <Button
          background='primary'
          variant='contained'
          className='w-12 h-12 rounded-full flex items-center justify-center'
          onClick={() => setOpenChatBox(!openChatBox)}
        >
          <Message2 size='24' color='#FFFFFF' />
        </Button>
      </div>
    </div>
  )
}

export default ChatBox
