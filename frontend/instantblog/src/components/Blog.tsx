import React from 'react'
import Post from './Post'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { fetchBlogposts } from '../fetch'
import { Blogpost } from '../fetch'
import { CircularProgress } from '@mui/material'

export default function Blog() {

  const loadFrequency:number = 10000; 

  const [posts, setPosts] = useState<Blogpost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => fetchPosts(), []);

  function fetchPosts(): void {
    fetchBlogposts()
    .then(
      (value: Blogpost[]) => {
        setPosts(value.reverse());
        setTimeout(() => setLoading(false), 2000);
      });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(true);
      fetchPosts();
    }, loadFrequency);
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      {loading ? <CircularProgress sx={{ position: "fixed", top: 20, right: 20 }}/> : ''}
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
