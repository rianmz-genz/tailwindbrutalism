import React from "react";
import CodeBlock from "@/components/highlighter/CodeBlock";

const MyComponent = () => {
  const myCodeString = `
  <div className="mt-10 ">
  <div className=" bg-slate-800 w-56 relative h-10 rounded-lg  ">
    <div className="absolute text-lg justify-startflex items-center bg-white border rounded-lg border-slate-800">
      <p>Simple but impactful</p>
    
    </div>
  </div>
</div>
`;

  return (
    <div>
      <CodeBlock code={myCodeString} language="html" />
    </div>
  );
};

export default MyComponent;
