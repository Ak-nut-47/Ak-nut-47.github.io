import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import GitHubTopLanguage from "./GithubComponents/GithubTopLanguages";
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
    <Flex direction={"column"}>
      <GitHubTopLanguage />
      <GitHubCalendar username="ak-nut-47" />
    </Flex>
  );
};

export default Statistics;
