import React from "react";

function PreviewCodeButton({ onToggle, isPreviewing }) {
  return (
    <button
      onClick={onToggle}
      className="bg-slate-800 w-32 relative h-10 rounded-lg"
    >
      <span className="absolute justify-center gap-3 text-lg font-bold hover:-top-0 transition-all duration-200 hover:bg-slate-400 hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-300 border w-53 rounded-lg border-slate-800">
        {isPreviewing ? "Code" : "View"}
      </span>
    </button>
  );
}

export default PreviewCodeButton;
