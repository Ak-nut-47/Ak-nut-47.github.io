import React from "react";
import { Box, Text } from "@chakra-ui/react";

const HeadingComponent = () => {
  return (
    <Box display="inline-block" px={4} py={2} borderRadius="md">
      <Text
        fontSize={["2xl", "3xl", "4xl"]} // Adjust the font size for different screen sizes
        fontWeight="bold"
        color="light.orange"
        p={["10px", "20px", "30px"]}
      >
        <Text as={"span"} borderBottom="2px solid red" color={"black"}>
          The MERN stack :{" "}
        </Text>
        <Text as={"span"} color={"red.400"}>
          {" "}
          what I've learned
        </Text>
      </Text>
    </Box>
  );
};

export default HeadingComponent;
