import { motion, Variant, Transition, useAnimate, stagger, animate } from "framer-motion";
import { useEffect } from "react";


const textAnimations:{[key: string]: {initial: Variant, animate: Variant, exit: Variant, transition: Transition}} = {
  "rise-up" : {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: { type: "spring", bounce: 0.25, },
    exit: {
      y: 100,
      opacity: 0
    }
  }
}


interface AnimateTextPropeTypes {
  children: string;
  identifier: string
  inView: boolean;
  animation: string;
}

export default function AnimateText({ children: text, animation, inView, identifier }: AnimateTextPropeTypes) {


  useEffect(() => {
    if(inView) {
      animate(`.${identifier}-word`, textAnimations[animation].animate as any, { delay: stagger(0.05) })
    } else{
      animate(`.${identifier}-word`, textAnimations[animation].initial as any, { delay: stagger(0.05) })
    }
  }, [animation, inView, identifier]);

  return (
    <>
      {text.split(" ").map((word, idx) => (
        <span className={`inline-block ${identifier}-word`}  key={word}>
          {word.split("").map((char, idx) => (
            <span key={char+idx}>{char}</span>
          ))}
          &nbsp;
        </span>
      ))}
    </>
  );
}
