import React from 'react'
import HeaderListMessages from './components/HeaderListMessages'
import { type Column } from '@/common/components/admin/Table'
import AccordionTable from '@/common/components/admin/AccordionTable'
import ChatThread, { type ChatMessage } from '@/common/components/admin/ChatThread'

type Row = {
  id: string
  orderNo: number
  customerName: string
  email: string
  thread: ChatMessage[]
}

const rows: Row[] = [
  {
    id: 'r1',
    orderNo: 1,
    customerName: 'Demi Wilkinson',
    email: 'olivia@untitledui.com',
    thread: [
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
        content:
          'はい、何かご不明な点がございましたら、お気軽にメッセージをお送りください。良い一日をお過ごしください。',
        sentAt: '05/08/2025 - 07:07',
        sender: 'assistant'
      }
    ]
  }
]

const ListMessages = () => {
  const columns: Column<Row>[] = [
    {
      key: 'notify',
      title: '通知',
      align: 'center',
      className: 'w-[88px]',
      render: (r) => (
        <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-white text-xs font-semibold'>
          {r.orderNo}
        </span>
      )
    },
    { key: 'name', title: '顧客名', dataIndex: 'customerName', className: 'w-[320px]' },
    { key: 'email', title: 'Email', dataIndex: 'email' },
    { key: 'detail', title: '詳細', align: 'center', className: 'w-[80px]' }
  ]

  return (
    <div>
      <HeaderListMessages />
      <AccordionTable<Row>
        columns={columns}
        data={rows}
        rowKey={(r) => r.id}
        expandable={{
          expandedRowRender: (row) => (
            <ChatThread
              messages={row.thread}
              onEdit={(m) => console.log('edit', row.id, m.id)}
              onDelete={(m) => console.log('delete', row.id, m.id)}
            />
          )
        }}
      />
    </div>
  )
}

export default ListMessages
