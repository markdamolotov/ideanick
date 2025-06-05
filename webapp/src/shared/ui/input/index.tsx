import type { Dispatch } from 'react'

export const Input = ({
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
      <input
        id={name}
        name={name}
        onChange={(event) => {
          setState({ ...state, [name]: event.target.value })
        }}
        type='text'
        value={state[name]}
      />
    </div>
  )
}
