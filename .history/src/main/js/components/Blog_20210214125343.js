import React, { useState, useEffect } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const Blog = () => {

    const [markdown, setMarkdown] = useState('');

    return(
        <SimpleMDE onChange={(e) => setMarkdown(e)}/>
    )
}
export default Blog;