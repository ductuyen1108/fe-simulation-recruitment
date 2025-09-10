import React, { useMemo, useState } from 'react'
import { ArrowDown2 } from 'iconsax-reactjs'
import clsx from 'clsx'
import Button from '../Button'

type Align = 'left' | 'center' | 'right'

export type Column<T> = {
  header: string
  accessor?: keyof T
  render?: (row: T, rowIndex: number) => React.ReactNode
  align?: Align
  cellClassName?: string
  headerClassName?: string
  width?: string | number
}

type ListMessageTableProps<T> = {
  columns: Column<T>[]
  rows: T[]
  renderExpand?: (row: T, rowIndex: number) => React.ReactNode
  defaultExpandedKeys?: Array<string | number>
  getRowKey?: (row: T, rowIndex: number) => string | number
  className?: string
  stickyHeader?: boolean
  rowsPerPage?: number
}

const alignToClass: Record<Align, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

function ListMessageTable<T>({
  columns,
  rows,
  renderExpand,
  defaultExpandedKeys = [],
  getRowKey = (_row, i) => i,
  stickyHeader = false,
  rowsPerPage = 7
}: ListMessageTableProps<T>) {
  const [expanded, setExpanded] = useState<Set<string | number>>(() => new Set(defaultExpandedKeys))
  const [currentPage, setCurrentPage] = useState(1)

  const colCount = columns.length + (renderExpand ? 1 : 0)

  const totalPages = Math.ceil(rows.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage

  const visibleRows = useMemo(() => rows.slice(startIndex, endIndex), [endIndex, rows, startIndex])

  const toggle = (key: string | number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const [firstColumn, ...restColumns] = columns

  const headers = useMemo(
    () =>
      columns.map((c, idx) => (
        <th
          key={idx}
          className={clsx(
            'p-3 text-xs leading-4 text-[#717680] bg-[#FAFAFA]',
            alignToClass[c.align ?? 'left'],
            c.headerClassName,
            stickyHeader && 'sticky top-0 z-10'
          )}
          style={{ width: c.width }}
        >
          {c.header}
        </th>
      )),
    [columns, stickyHeader]
  )

  return (
    <div>
      <div className='scroll-stable scrollbar-thin overflow-x-auto overflow-y-auto max-h-[50vh] overscroll-y-auto'>
        <div className={'bg-white rounded-lg shadow min-h-fit'}>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                {headers}
                {renderExpand && (
                  <th
                    className={clsx(
                      'p-3 text-center bg-[#FAFAFA] text-[#717680] text-xs leading-4 w-[56px]',
                      stickyHeader && 'sticky top-0 z-10'
                    )}
                  >
                    詳細
                  </th>
                )}
              </tr>
            </thead>
            <tbody className='text-gray-600 text-sm'>
              {visibleRows.map((row, rowIndex) => {
                const key = getRowKey(row, rowIndex)
                const isOpen = expanded.has(key)

                return (
                  <React.Fragment key={key}>
                    <tr className='border-b border-[#E9EAEB] hover:bg-gray-50'>
                      <td className={clsx('p-3')}>
                        <div className='w-5 h-5 flex items-center justify-center text-white rounded-full bg-gradient-to-r from-salmon to-yellow'>
                          {firstColumn.render
                            ? firstColumn.render(row, rowIndex)
                            : firstColumn.accessor
                            ? (row[firstColumn.accessor] as any)
                            : null}
                        </div>
                      </td>
                      {restColumns.map((column, index) => (
                        <td
                          key={index}
                          className={clsx('p-3', alignToClass[column.align ?? 'left'], column.cellClassName)}
                        >
                          {column.render
                            ? column.render(row, rowIndex)
                            : column.accessor
                            ? (row[column.accessor] as any)
                            : null}
                        </td>
                      ))}
                      {renderExpand && (
                        <td className='py-3 px-6'>
                          <div className='relative flex items-center justify-center'>
                            <button
                              onClick={() => toggle(key)}
                              className={clsx(
                                'w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer',
                                'hover:bg-neutral-100'
                              )}
                              aria-expanded={isOpen}
                              aria-label='Toggle row'
                            >
                              <ArrowDown2
                                size='20'
                                className={clsx(
                                  'transition-transform duration-200',
                                  isOpen ? 'rotate-180' : 'rotate-0'
                                )}
                                color='#717680'
                              />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                    {renderExpand && (
                      <tr className='border-b border-[#E9EAEB]'>
                        <td colSpan={colCount} className='py-0'>
                          <div
                            className={clsx(
                              'overflow-y-auto scrollbar-hide transition-[max-height,opacity] duration-300 ease-in-out',
                              isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            )}
                          >
                            <div className=''>{renderExpand(row, rowIndex)}</div>
                          </div>
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
      <div className='flex items-center justify-between px-4 mt-5'>
        <p>{`${totalPages}ページ中${currentPage}ページ目`}</p>
        <div className='flex items-center gap-2'>
          <Button
            variant='outlined'
            className={clsx(
              'py-2 px-3 rounded-md text-[14px] leading-5 text-neutral-500',
              currentPage === 1 && 'bg-neutral-100'
            )}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            前に
          </Button>
          <Button
            variant='outlined'
            className={clsx(
              'py-2 px-3 rounded-md text-[14px] leading-5 text-neutral-500',
              currentPage === totalPages && 'bg-neutral-100'
            )}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            後
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ListMessageTable
