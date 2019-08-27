import React from 'react';
import { Form, Icon } from 'antd';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { Spinner } from './lib';

// Elements
import Input from '../elements/InputField';

const Label = styled.label`
  font-weight: bold;
  color: #595654;
`;

const LoginForm = ({ onSubmit, buttonText }: any): any => {
  const doLogin = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: doLogin,
  });
//      {isRejected ? <Alert message={error ? error.message : null} type="error" /> : null}

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Item>
        <Label htmlFor="username">Username</Label>
        <Input formik={formik} id="username" name="username" prefix={<Icon type="user" />} />
      </Form.Item>
      <Form.Item>
        <Label htmlFor="password">Password</Label>
        <Input formik={formik} type="password" id="password" name="password" prefix={<Icon type="key" />} />
      </Form.Item>
      <Form.Item>
        <button disabled={formik.isSubmitting} type="submit">
          {buttonText} {formik.isSubmitting ? <Spinner /> : null}
        </button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;