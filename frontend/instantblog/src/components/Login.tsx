import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function Login() {
  return (
      <Box sx={{ width: '100%', mt: 5 }}>
        <Typography variant="h4" component="h4" gutterBottom sx={{ mb: 3 }}>
            This is the "Login Page".
         </Typography>
         <Typography component="p" gutterBottom>
            Soon, administrators will be able to login and manage their blog here.
         </Typography>
      </Box>
  )
}