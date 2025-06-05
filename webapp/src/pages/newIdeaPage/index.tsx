import { type SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '@/shared/ui/input'
import { Segment } from '@/shared/ui/segment'
import { Textarea } from '@/shared/ui/textarea'

import css from './index.module.scss'

type FormInputs = {
  description: string
  name: string
  nick: string
  text: string
}

const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

export const NewIdeaPage = () => {
  const { handleSubmit, register } = useForm<FormInputs>()

  return (
    <Segment title='New Idea'>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.container}>
          <Input label='Name' name='name' register={register} />
          <Input label='Nick' name='nick' register={register} />
          <Input label='Description' name='description' register={register} />
          <Textarea label='Text' name='text' register={register} />
        </div>
        <button className={css.button} type='submit'>
          Create Idea
        </button>
      </form>
    </Segment>
  )
}
