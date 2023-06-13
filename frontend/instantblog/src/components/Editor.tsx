import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import { addPost } from '../fetch';

export default function Editor() {

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

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
        <Typography variant="h4" component="h4" gutterBottom sx={{ mb: 3 }}>
            Editor Page
         </Typography>
         <Typography component="p" gutterBottom sx={{ mb: 3 }}>
            Add a new Blogpost here.<br />
            In a future version, you will also be able to edit old posts here.
         </Typography>
        <form>
          <label htmlFor="title">Title:</label><br/>
          <input type="text" id="title" name="title" value={inputData.title} onChange={handleChange}></input>
          <br/><br/>
          <label htmlFor="content">Content:</label><br/>
          <textarea name="content" cols={40} rows={5} value={inputData.content} onChange={handleChange}></textarea>
          <br/><br/>
          <label htmlFor="imageUrl">Image URL:<br/><i>leave empty if no image</i></label><br/>
          <input type="text" id="imageUrl" name="imageUrl" value={inputData.imageUrl} onChange={handleChange}></input>
          <br/><br/>
          <input type="submit" onClick={addNewPost}></input>
        </form> 
      </Box>
  )
}
