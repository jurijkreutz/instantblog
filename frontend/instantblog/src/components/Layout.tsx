import React from 'react'
import { Outlet } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ButtonGroup, Button } from '@mui/material'

export default function Layout() {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom>
        InstantBlog
      </Typography>
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Login</Button>
      </ButtonGroup>
      <Outlet />

    </div>
  )
}
