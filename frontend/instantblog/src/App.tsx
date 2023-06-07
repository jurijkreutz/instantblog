import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { ButtonGroup, Button } from '@mui/material'
import './App.css'
import { fetchBlogposts } from './fetch'
import { Blogpost } from './fetch'
import Post from './components/Post'
import Box from '@mui/material/Box'

function App() {
  const [posts, setPosts] = useState<Blogpost[]>([]);

  useEffect(() => fetchPosts(), []);

  function fetchPosts(): void {
    fetchBlogposts()
    .then(value => setPosts(value.reverse()));
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
          {posts.map((post) => (
              <Post key={post.id} id={post.id} title={post.title} content={post.content} date={post.date} />
          ))}
      </Box>
    </>
  )
}

export default App
