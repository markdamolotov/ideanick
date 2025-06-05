import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

import css from './index.module.scss'

type TextAreaProperties<T extends FieldValues> = {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
}

export const Textarea = <T extends FieldValues>({
  label,
  name,
  register
}: TextAreaProperties<T>) => {
  return (
    <div className={css.container}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...register(name)} className={css.textarea} />
    </div>
  )
}
