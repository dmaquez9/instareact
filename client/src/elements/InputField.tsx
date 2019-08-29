import React from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

const style = {
  input: {
    backgroundColor: '#f8f8f8 !important',
  }
};

const Label = styled.label`
  font-weight: bold;
  color: #595654;
  margin: 0 !important;
`;

const Item = styled(Form.Item)`
  margin-bottom: 8px !important;
`;

const Error = styled.span`
  font-size: 12px;
  color: red;
`;

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
const InputField = ({ label = '',formik, type = 'text', ...props}) => {
  const [field, meta] = formik.getFieldProps(props);
  return (
    <Item>
      {label !== '' && <Label htmlFor={props.id}>{label}</Label>}
      {InputType(type, props, field)}
      {meta.touched && meta.error && (
        <Error>{meta.error}</Error>
      )}
    </Item>
  )
};

export default InputField;