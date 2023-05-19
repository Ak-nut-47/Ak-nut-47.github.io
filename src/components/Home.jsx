import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LetterImage from "./HomePageComponents/LetterImage";
import DiamondImage from "./HomePageComponents/DiamondImage";
import TypewriterEffect from "./HomePageComponents/TypeWriterEffect";

const Home = () => {
  return (
    <Flex id="home" width="100%" bg="#46464a" height="100vh">
      <Flex w="50%" direction={"column"}>
        <TypewriterEffect />
        <LetterImage />
      </Flex>
      <Flex w="50%">
        <DiamondImage />
      </Flex>
    </Flex>
  );
};

export default Home;
