import { useContext, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useMotionTemplate,
  useTransform,
} from "motion/react";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
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

  const previewRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: previewRef,
    offset: ["start end", "end start"],
  });

  const FadePreview = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3],
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 0.3, 0.1],
  );
  const boxShadow = useMotionTemplate`
0px 20px 60px rgba(0,0,0,${shadowOpacity})
`;
  return (
    <motion.div
      ref={previewRef}
      initial={{
        // scale:0.5,
        y: 20,
      }}
      animate={{
        // scale:1,
        y: 0,
      }}
      style={{
        opacity: FadePreview,

        boxShadow: shadowOpacity.get()
          ? `0px 20px 60px rgba(0,0,0,${shadowOpacity.get()})`
          : "",
      }}
      // transition={{ duration: 0.1 }}
      className={`border  border-black p-2 w-full h-120 max-h-[60vh] ${dark ? "bg-[#171717] text-white hover:bg-[#121212] " : "hover:bg-zinc-200  text-black bg-[white]"} shadow-lg hover:shadow-2xl  rounded-md   hover:-translate-y-1.25 transition-all duration-500 flex flex-col  gap-2 overflow-hidden `}
    >
      <div
        style={{
          backgroundColor: dark ? "#2a2a2a" : "#E8E8E8",
          backgroundImage: `
      radial-gradient( circle at center,
        rgba(139,92,246,0.15) 1px,
        transparent 1px
      )
    `,
          backgroundSize: "12px 12px",
          backgroundPosition: "0px 0px",
        }}
        className={` p-1 w-full mb-3 h-full max-h-[50vh] translate-0 rounded-md ${dark ? "bg-[#2a2a2a] " : " bg-[#E8E8E8]"} flex items-center justify-center`}
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
            loading="lazy"
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
          <div className={`font-semibold    text-sm`}>
            <p>Name: {item.name}</p>
            <p className="">Categery: {item.category}</p>
          </div>
          <div className="flex gap-2 w-full text-sm ">
            <button
              onClick={() => setShowCode(!showCode)}
              className={`border bg-transparent ${dark ? "border-white/40" : "border"}   font-semibold px-2 py-1 rounded-md  cursor-pointer hover:shadow active:scale-98 transition-all hover:-translate-y-0.5 duration-300 text-sm w-full`}
            >
              {showCode ? "Show Preview" : "Show Code"}
            </button>
            <button
              onClick={() => handleCopy()}
              className={`border bg-transparent font-semibold px-2 py-1 rounded-md  cursor-pointer ${dark ? "border-white/40" : "border"} hover:shadow active:scale-98 transition-all hover:-translate-y-0.5 duration-300 text-sm w-full`}
            >
              {copyCode ? "Copied!" : "Copy"}
            </button>
          </div>
        </>
      }
    </motion.div>
  );
};

export default PreviewCards;
