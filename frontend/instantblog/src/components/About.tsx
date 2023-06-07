import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
      <Box sx={{ width: '100%', mt: 5 }}>
        <Typography variant="h4" component="h4" gutterBottom sx={{ mb: 3 }}>
            This is the "About Page".
         </Typography>
         <Typography component="p" gutterBottom>
            InstantBlog is a platform for blogs.<br/>
            We strive to be fast and simple.
         </Typography>
      </Box>
  )
}
