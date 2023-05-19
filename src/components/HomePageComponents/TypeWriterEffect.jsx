import React, { useEffect, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    typewriterRef.current && typewriterRef.current.start();
  }, []);

  return (
    <Box
      bg="#46464a"
      p={6}
      color="white"
      fontFamily="Poppins, sans-serif"
      textAlign="center"
      borderRadius="md"
      boxShadow="none"
    >
      <Text fontSize="3xl" fontWeight="bold" mb={2}>
        <Text> Hi There !</Text>
        <Text fontSize="6xl">
          I AM{" "}
          <span id="user-detail-name" style={{ color: "#30bced" }}>
            ANIMESH KALITA
          </span>
        </Text>
      </Text>

      <Text
        fontSize="2rem" // Adjust the font size here
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)" // Adjust the shadow properties here
        id="user-detail-intro"
      >
        <Typewriter
          options={{
            strings: ["Full Stack Web Developer..."],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 100,
          }}
          onInit={(typewriter) => {
            typewriterRef.current = typewriter;
          }}
        />
      </Text>
    </Box>
  );
};

export default TypewriterEffect;
