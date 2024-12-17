import React, { useState } from 'react';
import { AppContainer, HeadingOne, HeadingTwo, SignInButton } from '../styles/appStyles';
import SignIn from './SignInForm';

const App = () => {
  const [signinClick, setSigninClick] = useState(false);

  const handleSigninClick = () => {
    setSigninClick(true);
  };

  return (
    <>
    {/* this is the only way i could find to remove the white outline, lmk if theres a better way <3 */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            height: 100%;
            width: 100%;
            overflow-x: hidden;
            background-color: #1c1c1c;
          }
        `}
      </style>
      <AppContainer>
        {signinClick ? (
          <SignIn /> 
        ) : (
          <>
            <HeadingOne>Hello and welcome to the time tracker,</HeadingOne>
            <HeadingTwo>Manage and track your hours efficiently!</HeadingTwo>
            <SignInButton onClick={handleSigninClick}>Sign In!</SignInButton>
          </>
        )}
      </AppContainer>
    </>
  );
};

export default App;
