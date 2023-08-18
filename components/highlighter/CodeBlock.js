import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyButton from "./CopyButton";
import ResponsiveButton from "./ResponsiveButton";
import PreviewCodeButton from "./PreviewCodeButton";

const CodeBlock = ({ code, language }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [iframeWidth, setIframeWidth] = useState("100%"); 

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language, showPreview]);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleIframeWidthChange = (size) => {
    const sizes = {
      xs: "20%", // or you can use pixels like "320px"
      sm: "40%",
      md: "60%",
      lg: "80%",
      full: "100%",
  };
  setIframeWidth(sizes[size] || "100%");
  };

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <PreviewCodeButton
            onToggle={togglePreview}
            isPreviewing={showPreview}
          />
          <CopyButton code={code}/>
        </div>
        <ResponsiveButton onSizeChange={handleIframeWidthChange} />
      </div>
      <div style={{ transition: "width 0.5s ease-in-out", width: iframeWidth }}>

        {showPreview ? (
          <div className="h-[70vh] mt-10 border-2 border-b-4 border-r-4 border-slate-800 rounded-xl overflow-hidden">
            <iframe
              srcDoc={`
              <!doctype html>
              <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="https://cdn.tailwindcss.com"></script>
              </head>
              <body>
              ${code}
              </body>
              </html>
              `}
              title="Component Preview"
              width="100%"
              height="100%"
              className="border-none w-full aspect-video"
            />
          </div>
        ) : (
          <div className="mt-10">
            <pre
              className={`language-${language}  max-h-[70vh] border-2 border-r-4 border-b-4 border-slate-800 rounded-xl`}
            >
              <code className={`language-${language}`}>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;
