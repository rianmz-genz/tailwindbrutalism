import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyButton from "./CopyButton";
import ResponsiveButton from "./ResponsiveButton";
import PreviewCodeButton from "./PreviewCodeButton";

const CodeBlock = ({ code, language, Component }) => {
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language, showPreview]);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <PreviewCodeButton
            onToggle={togglePreview}
            isPreviewing={showPreview}
          />
          <CopyButton />
        </div>
        <ResponsiveButton />
      </div>

      {showPreview ? (
        <>
          <div className="h-[70vh] mt-10 border-2 border-b-4 border-r-4 border-slate-800 rounded-xl overflow-hidden">
            <Component />
          </div>
        </>
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
  );
};

export default CodeBlock;
