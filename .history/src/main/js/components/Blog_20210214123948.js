import React, { useState, useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import mermaid from "mermaid";

const renderers = {
    code: ({ children, language, value }) => {
      if (language.toLocaleLowerCase() === "mermaid") {
        const Elm = document.createElement("div");
        Elm.id = "demo";
        const svg = mermaid.render("demo", value);
        return (
          <pre>
            <code dangerouslySetInnerHTML={{ __html: svg }} />
          </pre>
        );
      }
      return children;
    }
  };
  
  export default function Blog() {
    return (
      <MDEditor
        height={500}
        value={mdMermaid || ""}
        previewOptions={{ renderers: renderers }}
      />
    );
  }

export default Blog;