import React, { useState } from "react";
import { motion } from "framer-motion";

const Statistics = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: {
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      borderRadius: 0,
    },
    animate: {
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      borderRadius: isHovered ? "50%" : 0,
      transition: {
        duration: 2,
      },
    },
  };

  const overlayVariants = {
    initial: {
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      borderRadius: "50%",
    },
    animate: {
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      borderRadius: isHovered ? 0 : "50%",
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      color="red"
      initial="initial"
      animate="animate"
      variants={containerVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          color="green"
          initial="initial"
          animate="animate"
          variants={overlayVariants}
        />
      )}
    </motion.div>
  );
};

export default Statistics;
