import { useClickOutside } from '@/common/hooks/useClickOutside'
import clsx from 'clsx'
import { CloseCircle, More, TickCircle } from 'iconsax-reactjs'
import { useRef, useState } from 'react'

export type ChatMessage = {
  id: string | number
  content: string
  sentAt: string
  sender: 'client' | 'assistant'
}

type Props = {
  messages: ChatMessage[]
  onEdit?: (msg: ChatMessage) => void
  onDelete?: (msg: ChatMessage) => void
}

export default function ChatThread({ messages, onEdit, onDelete }: Props) {
  return (
    <ul>
      {messages.map((m) => (
        <MessageRow key={m.id} msg={m} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  )
}

function MessageRow({
  msg,
  onEdit,
  onDelete
}: {
  msg: ChatMessage
  onEdit?: (m: ChatMessage) => void
  onDelete?: (m: ChatMessage) => void
}) {
  const [open, setOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(msg.content)

  const isClient = msg.sender === 'client'

  const actionsRef = useRef<HTMLDivElement>(null)

  useClickOutside(actionsRef, () => setOpen(false))

  const handleEditClick = () => {
    setOpen(false)
    setIsEditing(true)
  }

  const handleSaveEdit = () => {
    onEdit?.({ ...msg, content: editedContent })
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  return (
    <li className='relative'>
      <div className='flex items-center bg-[#FAFAFA]'>
        {/* Timeline */}
        <div className='hidden md:flex text-xs text-neutral-600  items-center justify-center py-4 max-w-[250px] w-full border-b border-neutral-300'>
          {msg.sentAt}
        </div>
        {/* List chat */}
        <div className={clsx('w-full flex items-center p-4 h-full', isClient ? 'justify-start' : 'justify-end')}>
          {isClient ? (
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <img src='/assets/avatars/nicole.svg' alt='' className='w-4 h-4 rounded-full' />
                {isEditing ? (
                  <div className='flex items-center gap-2'>
                    <div className='relative flex items-center'>
                      <input
                        type='text'
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveEdit()
                          if (e.key === 'Escape') handleCancelEdit()
                        }}
                        className='text-xs text-neutral-600 py-1 px-2 rounded-[4px] border border-neutral-300 focus:outline-none'
                      />
                    </div>
                    <TickCircle size='20' color='#1c9c8c' className='cursor-pointer' onClick={handleSaveEdit} />
                    <CloseCircle size='20' color='#818898' className='cursor-pointer' onClick={handleCancelEdit} />
                  </div>
                ) : (
                  <span className='text-xs text-neutral-600 py-1 px-2 bg-neutral-50 rounded-[4px]'>{msg.content}</span>
                )}
              </div>
              <p className='md:hidden text-[8px] text-neutral-600 text-end mt-1'>{msg.sentAt}</p>
            </div>
          ) : (
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                {isEditing ? (
                  <div className='flex items-center gap-2'>
                    <TickCircle size='20' color='#1c9c8c' className='cursor-pointer' onClick={handleSaveEdit} />
                    <CloseCircle size='20' color='#818898' className='cursor-pointer' onClick={handleCancelEdit} />
                    <div className='relative flex items-center'>
                      <input
                        type='text'
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveEdit()
                          if (e.key === 'Escape') handleCancelEdit()
                        }}
                        className='text-xs text-neutral-600 py-1 px-2 rounded-[4px] border border-neutral-300 focus:outline-none'
                      />
                    </div>
                  </div>
                ) : (
                  <span className='text-xs text-neutral-600 py-1 px-2 bg-neutral-50 rounded-[4px]'>{msg.content}</span>
                )}
                <img src='/assets/icons/chatgpt.svg' alt='' className='w-4 h-4 rounded-full' />
              </div>
              <p className='md:hidden text-[8px] text-neutral-600 text-start mt-1'>{msg.sentAt}</p>
            </div>
          )}
        </div>
        {/* Actions */}
        <div
          ref={actionsRef}
          className='relative flex justify-center items-center max-w-14 w-full border-b border-neutral-300'
          style={{ height: '-webkit-fill-available' }}
        >
          <button
            type='button'
            onClick={(e) => {
              e.stopPropagation()
              setOpen((v) => !v)
            }}
            className='cursor-pointer hover:text-salmon'
            aria-haspopup='menu'
          >
            <More size='20' />
          </button>
          {open && (
            <div className='absolute right-0 top-10 z-10 overflow-hidden rounded-md bg-white shadow-lg'>
              <button
                className='cursor-pointer block w-full px-3 py-2 text-left text-sm hover:bg-neutral-50'
                onClick={handleEditClick}
              >
                Edit
              </button>
              <button
                className='cursor-pointer block w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50'
                onClick={() => {
                  setOpen(false)
                  onDelete?.(msg)
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
