import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  value: string | number;
  height?: number;
  duration?: number;
}

const AnimateNumber = ({ value, height = 30, duration = 0.8 }: Props) => {
  return (
    <div style={{ position: "relative", height: height, overflow: "hidden" }}>
      <AnimatePresence initial={false}>
        <motion.span
          key={value}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: duration, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimateNumber;
