import { useContext, useEffect, useState } from "react";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ComponentsContext } from "../context/ComponentsContext";
const PreviewCards = ({ item }) => {
  const { dark } = useContext(ComponentsContext);

  const [showCode, setShowCode] = useState(false);
  const [copyCode, setCopyCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code);
    setCopyCode(true);
    console.log("handle copy");
  };

  useEffect(() => {
    if (!copyCode) return;
    console.log("Copy code if function");

    const timer = setTimeout(() => {
      setCopyCode(false);
      console.log("Copy code false");
    }, 1500);
    return () => clearTimeout(timer);
  }, [copyCode]);

  return (
    <div
      className={`border  border-black p-2 w-full h-[60vh] ${dark ? "bg-[#1e1e1e] text-white hover:bg-[#121212] " : "hover:bg-zinc-200  text-black bg-[white]"} shadow-lg hover:shadow-2xl  rounded-md   hover:-translate-y-1.25 transition-all duration-500 flex flex-col  gap-2 overflow-hidden `}
    >
      <div
        className={` p-1 w-full mb-3 h-[50vh] translate-0  rounded-md ${dark ? "bg-[#2a2a2a] " : " bg-[#E8E8E8]"} flex items-center justify-center`}
      >
        {showCode ? (
          <>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              wrapLongLines={true}
              customStyle={{
                margin: 0,
                height: "40vh",
                borderRadius: "8px",
                fontSize: "13px",
                overflow: "scroll",
                maxHeight: "50vh",
                width: "100%",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {item.code}
            </SyntaxHighlighter>
          </>
        ) : (
          <iframe
            key={item.id}
            sandbox="allow-scripts"
            className="w-full h-full"
            srcDoc={`<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center  justify-center min-h-screen ">
<div class="flex justify-center border-md items-center">
${item.code}
</div>
</body>
</html>`}
          />
        )}
      </div>
      {
        <>
          <div
            className={`font-semibold   ${dark ? "text-gray-300" : "text-gray-600"} text-sm`}
          >
            <p>{item.name}</p>
            <p className="text-gray-600 text-xs">{item.category}</p>
          </div>
          <div className="flex gap-2 w-full text-sm text-gray-400">
            <button
              onClick={() => setShowCode(!showCode)}
              className="border bg-zinc-700 font-semibold px-2 py-1 rounded-md hover:bg-zinc-800 cursor-pointer hover:shadow active:scale-98 transition-all duration-200 text-sm w-full"
            >
              {showCode ? "Show Preview" : "Show Code"}
            </button>
            <button
              onClick={() => handleCopy()}
              className="border bg-zinc-700 font-semibold px-2 py-1 rounded-md hover:bg-zinc-800 cursor-pointer hover:shadow active:scale-98 transition-all duration-200 text-sm w-full"
            >
              {copyCode ? "Copied!" : "Copy"}
            </button>
          </div>
        </>
      }
    </div>
  );
};

export default PreviewCards;
