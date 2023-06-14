import React from 'react'
import Post from './Post'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { fetchBlogposts } from '../fetch'
import { Blogpost } from '../fetch'

export default function Blog() {

  const [posts, setPosts] = useState<Blogpost[]>([]);

  useEffect(() => fetchPosts(), []);

  function fetchPosts(): void {
    fetchBlogposts()
    .then((value: Blogpost[]) => setPosts(value.reverse()));
  }


  return (
    <Box sx={{ width: '100%', mt: 5 }}>
        {posts.map((post) => (
            <Post key={post.id}
                  id={post.id} 
                  title={post.title}
                  content={post.content}
                  date={post.date}
                  imageUrl={post.imageUrl}
                  likes = {post.likes} />
        ))}
    </Box>
  )
}
