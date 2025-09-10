// src/pages/personality-test/components/GenderRadioGroup.tsx
import type { Control, FieldValues, Path } from 'react-hook-form'
import RadioGroupField from '@/components/form/Radio'

type Props<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  required?: boolean
}

export default function GenderRadioGroup<T extends FieldValues>({ name, control, required }: Props<T>) {
  return (
    <RadioGroupField
      name={name}
      control={control}
      required={required}
      label='あなたの性別'
      options={[
        { label: '男', value: 'male' },
        { label: '女性', value: 'female' },
        { label: '他の', value: 'other' }
      ]}
      className='space-y-6'
    />
  )
}
