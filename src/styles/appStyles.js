import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

const backgroundColor = '#2e2e2e';
const headingColor = '#f2f2f2';
const buttonColor = '#6e7f92';
const buttonHoverColor = '#5a6b7c';

export const AppContainer = styled(Box)(({ theme }) => ({
  backgroundColor: backgroundColor,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: headingColor,
}));

export const HeadingOne = styled(Typography)(({ theme }) => ({
  fontSize: '4vw',
  fontWeight: 'bold',
  marginBottom: '2vh',
  textAlign: 'center',
}));

export const HeadingTwo = styled(Typography)(({ theme }) => ({
  fontSize: '2.5vw',
  marginBottom: '4vh',
  textAlign: 'center',
}));

export const SignInButton = styled(Button)(({ theme }) => ({
  backgroundColor: buttonColor,
  color: headingColor,
  fontWeight: 'bold',
  fontSize: '2.5vw',
  padding: '2vh 4vw',
  borderRadius: '50vw',
  '&:hover': {
    backgroundColor: buttonHoverColor,
  },
}));
