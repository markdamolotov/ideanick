import type { Dispatch } from 'react'

export const Textarea = ({
  label,
  name,
  setState,
  state
}: {
  label: string
  name: string
  setState: Dispatch<React.SetStateAction<Record<string, string>>>
  state: Record<string, string>
}) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        id={name}
        name={name}
        onChange={(event) => {
          setState({ ...state, [name]: event.target.value })
        }}
        value={state[name]}
      />
    </div>
  )
}
