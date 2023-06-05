import React from 'react';
import { Blogpost } from '../fetch';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Post(post: Blogpost) {
  return (
    <Grid item xs={6} sx={{ mb: 5 }}>
        <Typography variant="h4" component="h4" gutterBottom>
            {post.title}
        </Typography>
        <Typography component="p" gutterBottom>
            {post.content}
        </Typography>
    </Grid>
  )
}
