import { motion } from "motion/react";


const WordsPullUp = ({children}) => {
  // const heading = "";

  return (
    <h1 className="   text-center">
      {children.split("").map((word, idx) => {
       
       return <motion.span
          key={idx}
          className="inline-block "
          initial={{ opacity: 0, y: 20 ,filter:"blur(5px)" }}
          animate={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: idx * 0.03,
          }}
        >
          {word===" "?"\u00A0":word}
        </motion.span>
      })}
    </h1>
  );
};

export default WordsPullUp;
