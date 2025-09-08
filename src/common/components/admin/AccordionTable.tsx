import React, { useMemo, useState } from 'react'
import Button from '../Button'
import { ArrowDown2 } from 'iconsax-reactjs'

export type Align = 'left' | 'center' | 'right'

export type Column<T> = {
  key: string
  title: React.ReactNode
  render?: (row: T, rowIndex: number) => React.ReactNode
  dataIndex?: keyof T
  align?: Align
  className?: string
}

type Expandable<T> = {
  expandedRowRender: (row: T) => React.ReactNode
  rowExpandable?: (row: T) => boolean
  defaultExpandedKeys?: Array<string | number>
}

type Props<T> = {
  columns: Column<T>[]
  data: T[]
  rowKey: (row: T, index: number) => string | number
  className?: string
  emptyText?: React.ReactNode
  expandable: Expandable<T>
}

const alignClass = (a?: Align) => (a === 'right' ? 'text-right' : a === 'center' ? 'text-center' : 'text-left')

export default function AccordionTable<T>({
  columns,
  data,
  rowKey,
  className = '',
  emptyText = 'データがありません',
  expandable
}: Props<T>) {
  const [openKeys, setOpenKeys] = useState<Set<string | number>>(() => new Set(expandable.defaultExpandedKeys ?? []))

  const colCount = useMemo(() => columns.length + 1, [columns.length])

  const toggle = (key: string | number) => {
    setOpenKeys((prev) => {
      const next = new Set(prev)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  const canExpand = expandable?.expandedRowRender

  return (
    <>
      <div className={`overflow-hidden rounded-xl border border-[#E9EAEB] bg-white ${className}`}>
        <div className='overflow-x-auto'>
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
                <th className='px-2 py-3 text-sm font-medium text-neutral-600 text-right w-[48px]'></th>
              </tr>
            </thead>

            <tbody className='divide-y divide-[#E9EAEB]'>
              {data.length === 0 && (
                <tr>
                  <td colSpan={colCount} className='px-4 py-6 text-center text-sm text-neutral-500'>
                    {emptyText}
                  </td>
                </tr>
              )}

              {data.map((row, i) => {
                const key = rowKey(row, i)
                const expanded = openKeys.has(key)
                const allow = expandable.rowExpandable ? expandable.rowExpandable(row) : true
                return (
                  <React.Fragment key={key}>
                    <tr>
                      {columns.map((col) => {
                        const content = col.render
                          ? col.render(row, i)
                          : col.dataIndex
                          ? (row as any)[col.dataIndex]
                          : null
                        return (
                          <td
                            key={col.key}
                            className={`px-4 py-3 text-sm text-neutral-600 ${alignClass(col.align)} ${
                              col.className ?? ''
                            }`}
                          >
                            {content}
                          </td>
                        )
                      })}
                      <td className='px-2 py-2 text-right w-[48px]'>
                        <div className='flex justify-end'>
                          <button
                            type='button'
                            disabled={!allow || !canExpand}
                            onClick={() => toggle(key)}
                            className={[
                              'inline-flex items-center justify-center',
                              allow ? 'hover:cursor-pointer' : 'opacity-40 cursor-not-allowed'
                            ].join(' ')}
                            aria-expanded={expanded}
                          >
                            <ArrowDown2 size={20} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {expanded && (
                      <tr className='bg-neutral-25/40'>
                        <td colSpan={colCount} className='px-0'>
                          <div className='px-4 pb-4 pt-2'>{expandable.expandedRowRender(row)}</div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex items-center justify-between p-6'>
        <p className='text-[14px] text-neutral-600 font-sans'>10ページ中1ページ目</p>
        <div className='flex items-center gap-3'>
          <Button variant='outlined' className='bg-neutral-100 px-3 py-1 rounded-md'>
            前に
          </Button>
          <Button variant='outlined' className='rounded-md px-3 py-1'>
            後
          </Button>
        </div>
      </div>
    </>
  )
}
