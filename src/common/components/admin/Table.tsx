import React from 'react'

export type Align = 'left' | 'center' | 'right'

export type Column<T> = {
  key: string
  title: React.ReactNode
  render?: (row: T, rowIndex: number) => React.ReactNode
  dataIndex?: keyof T
  align?: Align
  className?: string
}

type TableProps<T> = {
  columns: Column<T>[]
  data: T[]
  rowKey: (row: T, index: number) => string | number
  className?: string
  emptyText?: React.ReactNode
}

const alignClass = (a?: Align) => (a === 'right' ? 'text-right' : a === 'center' ? 'text-center' : 'text-left')

export default function Table<T>({
  columns,
  data,
  rowKey,
  className = '',
  emptyText = 'データがありません'
}: TableProps<T>) {
  return (
    <div className={`overflow-hidden rounded-xl border border-[#E9EAEB] bg-white ${className}`}>
      <table className='w-full table-fixed'>
        <thead className='bg-[#FAFAFA]'>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-3 text-sm font-medium text-neutral-600 ${alignClass(col.align)} ${
                  col.className ?? ''
                }`}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className='divide-y divide-[#E9EAEB]'>
          {data.length === 0 ? (
            <tr>
              <td className='px-4 py-6 text-center text-sm text-neutral-500' colSpan={columns.length}>
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={rowKey(row, i)} className='hover:bg-neutral-50'>
                {columns.map((col) => {
                  const content = col.render ? col.render(row, i) : col.dataIndex ? (row as any)[col.dataIndex] : null
                  return (
                    <td
                      key={col.key}
                      className={`px-4 py-3 text-sm text-neutral-900 ${alignClass(col.align)} ${col.className ?? ''}`}
                    >
                      {content}
                    </td>
                  )
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
