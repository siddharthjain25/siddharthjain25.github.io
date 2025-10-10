"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Bar = ({ delay }: { delay: number }) => {
  const [height, setHeight] = useState(5);

  useEffect(() => {
    let mounted = true;

    const loop = () => {
      if (!mounted) return;
      // Random height between 10px and 50px
      const newHeight = 5 + Math.random() * 30;

      setHeight(newHeight);

      // Random duration for realism
      const duration = 400 + Math.random() * 400;

      setTimeout(loop, duration);
    };

    const timer = setTimeout(loop, delay);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <motion.span
      animate={{ height }}
      className="flex-1 bg-gray-300 mx-[1px] rounded-full"
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    />
  );
};

const WaveBars = () => {
  return (
    <div className="flex items-end h-7 mt-3 flex-1">
      {[...Array(30)].map((_, i) => (
        <Bar key={i} delay={i * 80} />
      ))}
    </div>
  );
};

export default WaveBars;
