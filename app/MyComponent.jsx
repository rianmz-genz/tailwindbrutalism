import React from "react";
import CodeBlock from "@/components/highlighter/CodeBlock";
import HeroSection from "@/components/sections/HeroSection";
import ReactDOMServer from "react-dom/server";
import beautify from 'html';

const MyComponent = () => {
  const rawCode = ReactDOMServer.renderToString(<HeroSection title="My Title" />);
  const myCodeString = beautify.prettyPrint(rawCode, { indent_size: 2 }); // Beautify with 2-space indentation


  return (
    <div className="p-5">
      <CodeBlock
        code={myCodeString}
        language="html"
        
      />
    </div>
  );
};

export default MyComponent;
