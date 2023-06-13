import { Blogpost } from '../fetch';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Post(post: Blogpost) {

    function changeTimestampToDate(timestamp: number): string {
        let time: Date = new Date(timestamp*1000);
        console.log()
        return time.toDateString() + ' ' + time.toLocaleTimeString();
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
                    {{ backgroundImage: `url(${post.imageUrl}`}}>
                </Box>
            : 
            '' }
            <Typography component="p" gutterBottom sx={{ marginTop: 2 }}>
                {post.content}
            </Typography>
        </Box>
    </Box>
  )
}
