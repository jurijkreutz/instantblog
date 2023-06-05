import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { ButtonGroup, Button } from '@mui/material'
import './App.css'
import { fetchBlogposts } from './fetch'
import { Blogpost } from './fetch'
import Post from './components/Post'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

function App() {
  const [posts, setPosts] = useState<Blogpost[]>([]);

  useEffect(() => fetchPosts(), []);

  function fetchPosts(): void {
    fetchBlogposts()
    .then(value => setPosts(value));
  }

  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        InstantBlog
      </Typography>
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Login</Button>
      </ButtonGroup>
      <Box sx={{ width: '100%', mt: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {posts.map((post) => (
              <Post key={post.id} id={post.id} title={post.title} content={post.content} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default App
