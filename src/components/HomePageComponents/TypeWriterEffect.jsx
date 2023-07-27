import React, { useEffect, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    typewriterRef.current && typewriterRef.current.start();
  }, []);

  return (
    <Box
      bg="#111111"
      p={6}
      color="white"
      fontFamily="Poppins, sans-serif"
      textAlign="center"
      borderRadius="md"
      boxShadow="none"
    >
      <Text
        fontSize={{
          base: "sm",
          sm: "md",
          md: "lg",
          lg: "2xl",
          xl: "3xl",
        }}
        fontWeight="bold"
        mb={2}
      >
        <Text> Hi There !</Text>
        <Text
          fontSize={{
            base: "md",
            sm: "lg",
            md: "xl",
            lg: "4xl",
            xl: "6xl",
          }}
        >
          I AM{" "}
          <span id="user-detail-name" style={{ color: "#30bced" }}>
            ANIMESH KALITA
          </span>
        </Text>
      </Text>

      <Text
        fontSize={{
          base: "sm",
          sm: "md",
          md: "lg",
          lg: "2xl",
          xl: "3xl",
        }}
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)" // Adjust the shadow properties here
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
