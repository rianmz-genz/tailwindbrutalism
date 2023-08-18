import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Import the desired theme
import CopyButton from "./CopyButton";
import ResponsiveButton from "./ResponsiveButton";
import PreviewCode from "./PreviewCode";

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <PreviewCode />
          <CopyButton />
        </div>
        <ResponsiveButton />
      </div>
      <pre className={`language-${language}`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </>
  );
};

export default CodeBlock;
