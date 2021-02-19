import React, { useState, useEffect } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";

const Blog = () => {

    const [markdown, setMarkdown] = useState('');
    const handleInput = ()=> {
        console.log(markdown);
    }
    return(
        <div>
            <SimpleMDE onChange={(e) => setMarkdown(e)}/>
            <div id="body" >
                <span dangerouslySetInnerHTML={{ __html: marked(markdown)}}/>
            </div>
            <button onClick={()=> handleInput()} value="submit" />
        </div>
    )
}
export default Blog;