import React, { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language="python"
        style={vscDarkPlus}
        showLineNumbers
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
