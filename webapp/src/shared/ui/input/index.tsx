import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

import css from './index.module.scss'

type InputProperties<T extends FieldValues> = {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
}

export const Input = <T extends FieldValues>({
  label,
  name,
  register
}: InputProperties<T>) => {
  return (
    <div className={css.container}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type='text' {...register(name)} className={css.input} />
    </div>
  )
}
