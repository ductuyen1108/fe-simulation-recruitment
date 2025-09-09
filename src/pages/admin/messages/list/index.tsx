import HeaderListMessages from './components/HeaderListMessages'
import CollapsibleTable, { type Column } from '@/common/components/admin/CollapsibleTable'
import ChatThread, { type ChatMessage } from '@/common/components/admin/ChatThread'

type Row = {
  numberNoti: number
  name: string
  email: string
  thread: ChatMessage[]
}

type User = {
  numberNoti: number
  name: string
  email: string
}

const columns: Column<User>[] = [
  { header: '通知', accessor: 'numberNoti', align: 'left', width: '80px' },
  { header: '顧客名', accessor: 'name', align: 'left', width: '650px' },
  { header: 'Email', accessor: 'email', align: 'left' }
]

const rows: Row[] = [
  {
    numberNoti: 1,
    name: 'Demi Wikinson',
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
  },
  {
    numberNoti: 2,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 6,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 5,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 7,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 6,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 5,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 7,
    name: 'Mina Demi Wikinson',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 7,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 7,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 7,
    name: 'Mina',
    email: 'mina@example.com',
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
  },
  {
    numberNoti: 7,
    name: 'Mina',
    email: 'mina@example.com',
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
  return (
    <div>
      <HeaderListMessages />
      <CollapsibleTable
        columns={columns}
        rows={rows}
        stickyHeader={true}
        renderExpand={(row) => <ChatThread messages={row.thread} />}
      />
    </div>
  )
}

export default ListMessages
