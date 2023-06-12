import { SetStateAction, Dispatch } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ButtonGroup, Button } from '@mui/material'

interface LayoutProps {
    userLoggedIn: boolean;
    setUserLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export default function Layout({ userLoggedIn, setUserLoggedIn }: LayoutProps) {

    const logoutUser = () => {
        console.log("Logout clicked");
        setUserLoggedIn(false);
        localStorage.removeItem('token');
      }

  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom>
        InstantBlog
      </Typography>
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/about">About</Button>
        {!userLoggedIn ? <Button component={Link} to="/login">Login</Button> : <Button component={"a"} onClick={logoutUser}>Logout</Button>}
      </ButtonGroup>
      <Outlet />

    </div>
  )
}
