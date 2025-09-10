import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { type Control, type RegisterOptions, useController } from 'react-hook-form'

export type SelectOption = { label: string; value: string | number; disabled?: boolean }

type Props = {
  name: string
  control: Control<any>
  options: SelectOption[]

  label?: string
  placeholder?: string
  rules?: RegisterOptions
  disabled?: boolean
  requiredMark?: boolean

  containerClassName?: string
  buttonClassName?: string
  menuClassName?: string
}

export default function SelectField({
  name,
  control,
  options,
  label,
  placeholder = '選択してください',
  rules,
  disabled,
  requiredMark,

  containerClassName = 'w-[344px]',
  buttonClassName = '',
  menuClassName = ''
}: Props) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error }
  } = useController({ name, control, rules })

  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const btnRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLUListElement | null>(null)

  const listboxId = useId()
  const selected = useMemo(() => options.find((o) => String(o.value) === String(value)) ?? null, [options, value])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!open) return
      const t = e.target as Node
      if (btnRef.current?.contains(t)) return
      if (menuRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const openMenu = () => {
    if (disabled) return
    setOpen(true)
    const cur = options.findIndex((o) => String(o.value) === String(value))
    const firstEnabled = options.findIndex((o) => !o.disabled)
    setActiveIndex(cur >= 0 ? cur : Math.max(0, firstEnabled))
  }

  const commit = (idx: number) => {
    const opt = options[idx]
    if (!opt || opt.disabled) return
    onChange(opt.value)
    setOpen(false)
    onBlur()
    btnRef.current?.focus()
  }

  const onButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!open) {
      if (['ArrowDown', 'Enter', ' '].includes(e.key)) {
        e.preventDefault()
        openMenu()
      }
      return
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      setOpen(false)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => Math.min(options.length - 1, prev < 0 ? 0 : prev + 1))
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => Math.max(0, prev < 0 ? 0 : prev - 1))
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      commit(activeIndex)
    }
  }

  return (
    <div className={`relative ${containerClassName}`}>
      {label && (
        <div className='mb-1 flex items-center gap-1'>
          <span className='text-xs text-neutral-600'>{label}</span>
          {requiredMark && <span className='text-xs text-red-500'>*</span>}
        </div>
      )}

      <button
        type='button'
        ref={btnRef}
        role='combobox'
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup='listbox'
        aria-invalid={!!error}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onButtonKeyDown}
        className={[
          'flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 text-left text-sm',
          'focus:outline-none focus:ring-1 focus:ring-yellow focus:border-yellow',
          error ? 'border-red-500' : 'border-neutral-300',
          disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
          buttonClassName
        ].join(' ')}
      >
        <span className={selected ? 'text-gray-900' : 'text-neutral-400'}>
          {selected ? selected.label : placeholder}
        </span>

        <svg
          className={`ml-2 h-4 w-4 shrink-0 text-neutral-600 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z' />
        </svg>
      </button>

      {open && (
        <ul
          id={listboxId}
          ref={menuRef}
          role='listbox'
          className={[
            'absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 bg-white shadow-lg',
            menuClassName
          ].join(' ')}
        >
          {options.map((opt, idx) => {
            const isSelected = String(opt.value) === String(value)
            const isActive = idx === activeIndex
            return (
              <li
                key={String(opt.value)}
                role='option'
                aria-selected={isSelected}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => commit(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={[
                  'flex h-10 items-center justify-between px-3 text-sm border-b last:border-0 border-neutral-200',
                  opt.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                  isActive ? 'bg-neutral-50' : '',
                  isSelected ? 'font-medium text-salmon' : 'text-gray-600'
                ].join(' ')}
              >
                <span>{opt.label}</span>
              </li>
            )
          })}
        </ul>
      )}

      <div className='mt-1 min-h-[16px]'>
        {error && <p className='text-[12px] leading-4 text-red-600'>{String(error.message)}</p>}
      </div>
    </div>
  )
}
