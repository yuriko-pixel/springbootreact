import React, { useState, useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import mermaid from "mermaid";

const mdMermaid = `The following are some examples of the diagrams, charts and graphs that can be made using Mermaid and the Markdown-inspired text specific to it. 
\`\`\`mermaid
graph TD
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
\`\`\`

\`\`\`mermaid
sequenceDiagram
Alice->>John: Hello John, how are you?
loop Healthcheck
    John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
\`\`\`
`;

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
    const [value, setValue] = useState();
    const handleChange = () => {
        setValue(e.target);
        console.log(value);
    }

    return (
      <MDEditor
        height={500}
        value={mdMermaid || ""}
        onChange={(e) => handleChange(e)}
        previewOptions={{ renderers: renderers }}
      />
    );
  }
