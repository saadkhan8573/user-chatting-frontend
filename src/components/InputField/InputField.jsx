import React from 'react';
import { Field, ErrorMessage } from 'formik'
import { InputStyle } from './style';

export const InputField = ({ name, label, placeholder, type }) => {
  return (
    <InputStyle>
      <label htmlFor={name}> {label || ""} </label>
      <Field type={type || "text"} name={name} placeholder={placeholder} id={name} />
      <ErrorMessage name={name} component="span" />
    </InputStyle>
  )
}