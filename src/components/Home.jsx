import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LetterImage from "./HomePageComponents/LetterImage";
import DiamondImage from "./HomePageComponents/DiamondImage";
import TypewriterEffect from "./HomePageComponents/TypeWriterEffect";
import wallpaper from "../asset/wallpaper.jpg";
const Home = () => {
  return (
    <Flex
      id="home"
      width="100%"
      bg="#46464a"
      height="100vh"
      bgImage={wallpaper}
      // backgroundSize="cover"
    >
      <Flex w="50%" direction={"column"}>
        <TypewriterEffect />
        <LetterImage />
      </Flex>
      <Flex>
        <DiamondImage />
      </Flex>
    </Flex>
  );
};

export default Home;
