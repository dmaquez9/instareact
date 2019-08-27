import React from 'react';
import { Form, Icon } from 'antd';
import { useFormik } from 'formik';
import { Spinner } from './lib';

// Elements
import Input from '../elements/InputField';
import Button from '../elements/Button';


const SignupForm = ({ onSubmit, buttonText }: any): any => {
  const doRegister = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: { email: '', name: '', username: '', password: '' },
    onSubmit: doRegister,
  });
//      {isRejected ? <Alert message={error ? error.message : null} type="error" /> : null}

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input label="Email" formik={formik} id="email" name="email" prefix={<Icon type="mail" />} />
      <Input label="Fullname" formik={formik} id="name" name="name" prefix={<Icon type="user" />} />
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

export default SignupForm;