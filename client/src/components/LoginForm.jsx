import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm() {
  const initialValues={
    email:'',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('required')
  })

  const onSubmit= values => {
    console.log('Form Data', values)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik => {
          return (
            <Form>
              <FormikControl 
                control='input'
                type='email'
                label='email'
                name='email'
              />
              <FormikControl
                control='input'
                type='password'
                label='password'
                name='password'
              />
              <button type='submit' disabled={!formik.isValid}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default LoginForm
