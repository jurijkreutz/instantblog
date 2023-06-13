import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import { addPost } from '../fetch';
import LinearProgress from '@mui/material/LinearProgress';

export default function Editor() {

    const maxCharacters = 320;

    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        title: "",
        content: "",
        imageUrl: ""
      });

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputData({
            ...inputData,
            [event.target.name]: value
        });
    };

    async function addNewPost(event: React.MouseEvent) {
        event.preventDefault();
        const result = await addPost(inputData.title, inputData.content, inputData.imageUrl)
        if (result == 200) {
          console.log('Successfully saved on server!');
          navigate("/");
        }
    }

    const [charCount, setCharCount] = useState<number>(0);

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        handleChange(event);
        setCharCount(event.target.value.length);
    };

    const normalise = (value: number) => (value * 100) / maxCharacters;

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
        <Typography variant="h4" component="h4" gutterBottom sx={{ mb: 3 }}>
            Editor Page
         </Typography>
         {localStorage.getItem('roles')?.includes('ROLE_BLOGGER') ? 
            <div>
                <Typography component="p" gutterBottom sx={{ mb: 3 }}>
                Add a new Blogpost here.<br />
                In a future version, you will also be able to edit old posts here.
                </Typography>
                <form>
                <label htmlFor="title">Title:</label><br/>
                <input type="text" id="title" name="title" value={inputData.title} onChange={handleChange}></input>
                <br/><br/>
                <label htmlFor="content">Content:</label><br/>
                <textarea name="content" cols={40} rows={5} value={inputData.content} onChange={handleTextAreaChange} maxLength={maxCharacters}></textarea>
                    <Box sx={{ width: '50%', mt: 2, ml: "auto", mr: "auto" }}>
                        {charCount} / {maxCharacters}
                        <LinearProgress variant="determinate" value={normalise(charCount)} />
                    </Box>
                <br/><br/>
                <label htmlFor="imageUrl">Image URL:<br/><i>leave empty if no image</i></label><br/>
                <input type="text" id="imageUrl" name="imageUrl" value={inputData.imageUrl} onChange={handleChange}></input>
                <br/><br/>
                <input type="submit" onClick={addNewPost}></input>
                </form> 
            </div>
         : 
            <Typography component="p" gutterBottom sx={{ mb: 3 }}>
                This is the Editor Page.<br />
                Only Users with the Role "Blogger" are able to see this page.
            </Typography>}
      </Box>
  )
}
