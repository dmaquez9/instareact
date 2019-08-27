import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const style = {
  input: {
    backgroundColor: '#f8f8f8 !important',
  }
};

const InputBox = styled(Input)(style);
const Password = styled(Input.Password)(style);
const Textarea = styled(Input.TextArea)(style);

const InputType = (type, props, field) => {
  switch(type) {
    // case 'password': 
    //   return <Password size="large" {...props} {...field} />
    case 'textarea':
      return <Textarea {...props} {...field} />
    default: 
      return <InputBox type={type} size="large" {...props} {...field} />
  }
}
const InputField = ({ formik, type = 'text', ...props}) => {
  const [field, meta] = formik.getFieldProps(props);
  return (
    <>
      {InputType(type, props, field)}
      {meta.touched && meta.error && (
        <div>{meta.error}</div>
      )}
    </>
  )
};

export default InputField;