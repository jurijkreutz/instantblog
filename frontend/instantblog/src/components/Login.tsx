import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react';
import { login } from '../fetch';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    setUserLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export default function Login({ setUserLoggedIn }: LoginProps) {

    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        email: "",
        password: ""
      });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event
        if (target) {
            const value = target.value;
            setInputData({
                ...inputData,
                [target.name]: value
            });
        }
    };

    async function loginHandler(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        event.preventDefault();
        const result = await login(inputData.email, inputData.password)
        if (result.status == 200) {
          console.log(result);
          console.log('Successfully logged in on server!');
          localStorage.setItem('token', result.data.jwt);
          setUserLoggedIn(true);
          navigate("/");
        }
    }


  return (
      <Box sx={{ width: '100%', mt: 5 }}>
        <Typography variant="h4" component="h4" gutterBottom sx={{ mb: 3 }}>
            Login Page
         </Typography>
         <Typography component="p" gutterBottom sx={{ mb: 3 }}>
            Login as a blogger to start adding blogposts.
         </Typography>
         <form>
          <label htmlFor="email">E-Mail:</label><br/>
          <input type="text" id="email" name="email" value={inputData.email} onChange={handleChange}></input>
          <br/><br/>
          <label htmlFor="password">Password:</label><br/>
          <input type="text" id="password" name="password" value={inputData.password} onChange={handleChange}></input>
          <br></br><br></br>
          <input type="submit" onClick={loginHandler}></input>
        </form>
      </Box>
  )
}