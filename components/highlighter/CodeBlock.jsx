import React from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Import the desired theme or your custom one.

class CodeBlock extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { code, language } = this.props;
    return (
      <>
        <div className=" mt-20 mx-auto  rounded-xl relative w-[1000px] h-[400px] bg-slate-800">
          <div className="absolute -top-3 -left-2 w-full h-full ">
            <pre
              className={`language-${language} h-full rounded-xl overflow-hidden border-1 border-slate-800`}
            >
              <code className={`language-${language}`}>{code}</code>
            </pre>
          </div>
        </div>
      </>
    );
  }
}

export default CodeBlock;
