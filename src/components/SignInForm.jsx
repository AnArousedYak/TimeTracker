import React, { useState } from 'react';
import { SignInContainer, SignInHeading, StyledTextField, SubmitButton } from '../styles/signinForm'; // Adjust the import path to match your file structure

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <SignInContainer>
      <SignInHeading variant="h4">Sign In</SignInHeading>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          label="Username"
          variant="outlined"
          type="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <SubmitButton type="submit">Log In</SubmitButton>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
