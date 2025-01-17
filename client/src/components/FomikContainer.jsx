import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FomikContainer() {
  const dropdownOptions = [
    { key: 'Select an Option', value: '' },
    { key: 'Option 1', value: 'option 1' },
    { key: 'Option 2', value: 'option 2' },
    { key: 'Option 3', value: 'option 3' },
  ]
  const radioOptions = [
    { key: 'Option 1', value:'roption 1' },
    { key: 'Option 2', value:'roption 2' },
    { key: 'Option 3', value:'roption 3' },
  ]
  const checkboxOptions = [
    { key: 'Option 1', value: 'coption 1' },
    { key: 'Option 2', value: 'coption 2' },
    { key: 'Option 3', value: 'coption 3' },
  ]
const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().min(1, 'Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().min(1, 'Required'),
    birthDate: Yup.date().required('Required').nullable()
  })
  const onSubmit = values => {
    console.log('Form Data', values) 
    console.log('Saved Values', JSON.parse(JSON.stringify(values)))}
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        formik => (
        <Form>
          <FormikControl control='input' type='email' label='Email' name='email'/>
            <FormikControl control='textarea' label='Description' name='Description' />
            <FormikControl control='select' label='slect a topic' name='selectOption' options={dropdownOptions}/>
            <FormikControl control='radio' label='Radio topic' name='radioOption' options={radioOptions} />
            <FormikControl control='checkbox' label='Checkbox topics' name='checkboxOption' options={checkboxOptions} />
            <FormikControl control='date' label='Pick a date' name="birthDate"/>
            <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )

}

export default FomikContainer
