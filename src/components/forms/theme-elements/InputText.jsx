import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const InputTextField = styled((props) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
    boxShadow: "5",
    width: '8rem',
    height: '5rem',
    bgcolor: '#fff',
    color: "grey.800",
    p: 1,
    m: 1,
    borderRadius: 2,
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: '700', 
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
    boxShadow: "5",
    width: '8rem',
    height: '5rem',
    bgcolor: '#fff',
    color: "grey.800",
    p: 1,
    m: 1,
    borderRadius: 2,
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: '700', 
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
    boxShadow: "5",
    width: '8rem',
    height: '5rem',
    bgcolor: '#fff',
    color: "grey.800",
    p: 1,
    m: 1,
    borderRadius: 2,
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: '700', 
  },
}));

export default InputTextField;
