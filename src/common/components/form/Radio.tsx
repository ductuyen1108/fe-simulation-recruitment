import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form'
import clsx from 'clsx'

type Option = { label: string; value: string }

type RadioGroupFieldProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  label?: string
  helperText?: string
  options: Option[]
  className?: string
  labelClassName?: string
  optionClassName?: string
  required?: boolean
}

export default function RadioGroupField<T extends FieldValues>({
  name,
  control,
  helperText,
  options,
  className,
  optionClassName,
  required
}: RadioGroupFieldProps<T>) {
  return (
    <div className={clsx('w-full', className)}>
      <Controller
        control={control}
        name={name}
        rules={required ? { required: true } : undefined}
        render={({ field }) => (
          <div className='flex flex-col gap-2 mt-2'>
            {options.map((opt) => {
              const id = `${name}-${opt.value}`
              return (
                <label
                  key={opt.value}
                  htmlFor={id}
                  className={clsx('flex items-center gap-3 cursor-pointer w-fit', optionClassName)}
                >
                  <input
                    id={id}
                    type='radio'
                    className='custom-radio'
                    name={field.name}
                    value={opt.value}
                    checked={field.value === opt.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                  />
                  <span className='text-[14px] leading-5 font-sans text-neutral-600'>{opt.label}</span>
                </label>
              )
            })}
          </div>
        )}
      />
      {required && <span className='text-rose-500'>*</span>}
      {helperText && <p className='text-[14px] leading-5 text-neutral-600'>{helperText}</p>}
    </div>
  )
}
