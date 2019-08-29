import React from 'react';
import { Alert, Form, Icon } from 'antd';
import { useFormik } from 'formik';
import { Spinner } from './lib';
import { loginSchema } from '../utils/schema.validation';

// Elements
import Input from '../elements/InputField';
import Button from '../elements/Button';
import useCallbackStatus from '../utils/use-callback-status'

const LoginForm = ({ onSubmit, buttonText }: any): any => {
  const { error, run } = useCallbackStatus();
  const doLogin = (values: any, { setSubmitting }: any) => {
    run(onSubmit(values));
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: doLogin,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {error ? <Alert message={error.message} type="error" /> : null}
      <Input label="Username" formik={formik} id="username" name="username" prefix={<Icon type="user" />} />
      <Input label="Password" formik={formik} type="password" id="password" name="password" prefix={<Icon type="key" />} />
      <Form.Item>
        <Button disabled={formik.isSubmitting} type="submit">
          {buttonText} {formik.isSubmitting ? <Spinner /> : null}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;