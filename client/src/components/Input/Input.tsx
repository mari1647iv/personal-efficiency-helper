import React, { FC } from 'react'
import "./Input.css";
import { useController, Control, RegisterOptions } from 'react-hook-form'
//import { CategoryInterface } from '../../types'

interface InputProps {
  name: string,
  control: Control<any> | undefined,
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  type: string,
}


const Input: FC<InputProps> = ({ name, control, rules, type, ...rest }) => {
  const { field, fieldState } = useController({ name, control, rules })

  return (
    <div className="Input">
      <input type={type} placeholder={name} {...field} {...rest} />
      {fieldState.error && <p>{fieldState.error.message}</p>}
    </div>
  )
}

export default Input
