import { useState } from 'react'

import { Input } from '@/shared/ui/input'
import { Segment } from '@/shared/ui/segment'
import { Textarea } from '@/shared/ui/textarea'

export const NewIdeaPage = () => {
  const [state, setState] = useState<Record<string, string>>({
    description: '',
    name: '',
    nick: '',
    text: ''
  })

  return (
    <Segment title='New Idea'>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          console.info('Submitted', state)
        }}
      >
        <Input label='Name' name='name' setState={setState} state={state} />
        <Input label='Nick' name='nick' setState={setState} state={state} />
        <Input
          label='Description'
          name='description'
          setState={setState}
          state={state}
        />
        <Textarea label='Text' name='text' setState={setState} state={state} />
        <button type='submit'>Create Idea</button>
      </form>
    </Segment>
  )
}
