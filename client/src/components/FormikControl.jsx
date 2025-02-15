import React from 'react'
import Input from './input'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
import DatePicker from './DatePicker'

function FormikControl(props) {
  const {control, ...rest} = props
  switch (control) {
    case 'input': return <Input {...rest}/>
    case 'textarea': return <Textarea {...rest}/>
    case 'select': return <Select {...rest}/>
    case 'radio': return <RadioButtons {...rest}/>
    case 'checkbox': return <CheckboxGroup {...rest} />
    case 'date': return <DatePicker {...rest}/>
    default: return null
  }

}

export default FormikControl
