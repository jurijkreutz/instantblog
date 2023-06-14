import { Blogpost } from '../fetch';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { addLike } from '../fetch';
import { useState } from 'react';

export default function Post(post: Blogpost) {

    const [likes, setLikes] = useState(post.likes);

    function changeTimestampToDate(timestamp: number): string {
        let time: Date = new Date(timestamp*1000);
        console.log()
        return time.toDateString() + ' ' + time.toLocaleTimeString();
    }

    async function likeButtonHandler(event: React.MouseEvent) {
        if (await addLike(post.id) === 200) {
            setLikes(likes + 1);
        }
    }


  return (
    <Box sx={{ m: 6, border: '1px solid #e8e8e8' }}>
        <Box sx={{ m: 6 }}>
            <Typography variant="h4" component="h4" gutterBottom>
                {post.title}
            </Typography>
            <Typography component="i" gutterBottom sx={{ color: 'grey' }}>
                {changeTimestampToDate(post.date)}
            </Typography>
            {post.imageUrl != null ? 
                <Box className="postImage" sx=
                    {{ backgroundImage: `url(${post.imageUrl})` }}>
                </Box>
            : 
            '' }
            <Typography component="p" gutterBottom sx={{ marginTop: 2 }}>
                {post.content}
            </Typography>
            <Button aria-label="Like" variant="outlined" color="neutral" onClick={likeButtonHandler} sx={{ marginTop: 2 }}>
                <ThumbUp /> &nbsp;&nbsp; {likes}
            </Button>
        </Box>
    </Box>
  )
}
