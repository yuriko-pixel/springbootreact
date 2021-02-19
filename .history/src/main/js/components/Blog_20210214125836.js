import React, { useState, useEffect } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const Blog = () => {

    const [markdown, setMarkdown] = useState('');
    const handleInput = ()=> {
        console.log(markdown);
    }
    return(
        <div>
            <SimpleMDE onChange={(e) => setMarkdown(e)}/>
            <button onClick={()=> handleInput()} value="submit" />
        </div>
    )
}
export default Blog;