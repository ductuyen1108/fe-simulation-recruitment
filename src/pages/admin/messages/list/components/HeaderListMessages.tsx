import SelectField, { type SelectOption } from '@/common/components/form/Select'
import TextField from '@/common/components/form/TextField'
import { SearchNormal1 } from 'iconsax-reactjs'
import React from 'react'
import { useForm } from 'react-hook-form'

const genderOptions: SelectOption[] = [
  { label: '男性', value: 'male' },
  { label: '女性', value: 'female' },
  { label: 'その他', value: 'other' }
]

const HeaderListMessages = () => {
  const { control } = useForm<any>({
    defaultValues: { gender: '' }
  })
  return (
    <div className='space-y-6'>
      <h2 className='text-3xl font-heading font-semibold text-neutral-600'>メッセージ</h2>
      <div className='p-5 flex flex-col md:flex-row w-full gap-4'>
        <div className='space-y-1 text-xs text-neutral-600 font-sans w-full md:w-[50%]'>
          <p>顧客名</p>
          <TextField
            className='w-full'
            name='searchText'
            placeholder='検索'
            startIcon={<SearchNormal1 size='20' color='#36394A' />}
          />
        </div>
        <SelectField
          containerClassName='w-full md:w-[50%]'
          name='gender'
          control={control}
          label='私は'
          options={genderOptions}
        />
      </div>
    </div>
  )
}

export default HeaderListMessages
