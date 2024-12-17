import { styled } from '@mui/system';
import { Box, Typography, TextField, Button } from '@mui/material';

const backgroundColor = '#2e2e2e';
const backgroundBtnColor = '#6e7f92';
const textLightColor = '#f2f2f2';
const textDarkColor = '#e0e0e0';
const buttonHoverColor = '#5a6b7c';

export const SignInContainer = styled(Box)(({ theme }) => ({
  backgroundColor: backgroundColor,
  borderRadius: '1.5vh',
  padding: '6vh 4vw',
  width: '80vw',
  maxWidth: '40vw',
  margin: '10vh auto',
  boxShadow: '0 2vh 5vh rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

export const SignInHeading = styled(Typography)(({ theme }) => ({
  color: textLightColor,
  fontSize: '4vw',
  fontWeight: 'bold',
  marginBottom: '4vh',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '2vh',
  width: '70%',
  '& .MuiInputBase-root': {
    fontSize: '1.5vw',
    borderRadius: '3vh',
    backgroundColor: '#3336',
    color: textDarkColor,
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '3vh',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: backgroundBtnColor,
    },
  },
  '& .MuiInputLabel-root': {
    color: '#aaa',
    transform: 'translate(0, 1.2vh) scale(1)',
    left: '1vh',
    transition: 'transform 0.2s ease, color 0.2s ease',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: textDarkColor,
    transform: 'translate(0, -1.5vh) scale(0.75)',
    left: '1vh',
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: '60%',
  height: '6vh',
  backgroundColor: backgroundBtnColor,
  color: textLightColor,
  fontWeight: '600',
  fontSize: '2.5vw',
  borderRadius: '4vw',
  textTransform: 'uppercase',
  marginTop: '2.5vh',
  '&:hover': {
    backgroundColor: buttonHoverColor,
  },
}));
