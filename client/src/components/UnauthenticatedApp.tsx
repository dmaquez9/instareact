/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Row, Col } from 'antd';
import { useAuth } from '../context/auth.context';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

// Assets
import SignPNG from '../assets/images/sign.png';

const SignImage = styled(Col)`
  background-image: url(${SignPNG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  height: 100vh;
  padding: 2rem !important;
  text-align: right;
`;

const SignForm = styled(Col)`
  padding-right: 2rem !important;
  padding-left: 2rem !important;
`;

const TitleForm = styled.h2`
  &::after {
    content: '.';
    color: #e32e7f;
    font-size: 3.4rem;
  }
`;

const Link = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  padding-right: 18px;
  padding-left: 18px;
  &:hover, &:focus {
    outline: 0;
  }
  &.active {
    color: #e32e7f;
  }
  & + & {
    border-left: 1px solid #fff;
  }
`;

const UnauthenticatedApp: React.FC = (): React.ReactElement => {
  const { login, register } = useAuth();
  const [tab, setTab] = React.useState(0);
  const TitleText = tab === 0 ? 'Sign in and discover' : 'Sign Up';
  const activeTab = (active:number) => active === tab ? 'active' : '';
  return (
    <div>
      <Row type="flex" justify="space-around" align="middle">
        <SignForm span={10}>
          <TitleForm>{TitleText}</TitleForm>
          {tab === 0 ? (
            <LoginForm onSubmit={login} buttonText="Login" />
          ) : <SignupForm onSubmit={register} buttonText="Register" />}
        </SignForm>
        <SignImage span={14}>
          <Link className={activeTab(0)} onClick={() => setTab(0)}>Sign In</Link>
          <Link className={activeTab(1)} onClick={() => setTab(1)}>Sign Up</Link>
        </SignImage>
      </Row>
    </div>
  );
};

export default UnauthenticatedApp;
