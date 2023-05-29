import React from "react";
import { Box, Grid, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import MyModal from "./CustomModal";

const DummyGrid = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
    xl: "repeat(5, 1fr)",
  });
  return (
    <Flex direction="column">
      <Grid templateColumns={gridTemplateColumns} autoRows="50px" gap={4}>
        <Box gridColumn="1 / span 3" gridRow="1 / span 2" borderRadius="md">
          <MyModal text="Started With HTML" />
        </Box>
        <Box
          gridColumn="1"
          gridRow="3 / span 2"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="CSS - Selectors,Media query, Flexbox, Grid" />
        </Box>
        <Box
          gridColumn="2"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="DOM, Local Storage" />
        </Box>
        <Box
          gridColumn="3"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="Asynchronous programming " />
        </Box>
        <Box
          gridColumn="1"
          gridRow="5"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="DSA - Strings, Arrays" />
        </Box>
        <Box bgGradient="linear(to-b, white, lightgray)" borderRadius="md">
          <MyModal text="Two Pointer,Sliding Window" />
        </Box>
        <Box bgGradient="linear(to-b, white, lightgray)" borderRadius="md">
          <MyModal text="Object creation, Prototypical inheritance" />
        </Box>
        <Box
          gridColumn="4"
          gridRow="5/span 3"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="CRUD, Authentication" />
        </Box>
        <Box bgGradient="linear(to-b, white, lightgray)" borderRadius="md">
          <MyModal text="Advanced JS" />
        </Box>
        <Box bgGradient="linear(to-b, white, lightgray)" borderRadius="md">
          <MyModal text="REACT- State,prop" />
        </Box>
        {/* Add 10 more divs */}
      </Grid>
      <Grid templateColumns={gridTemplateColumns} autoRows="50px" gap={4}>
        <Box gridColumn="1 / span 3" gridRow="1 / span 2" borderRadius="md">
          <MyModal text="Events, Effects" />
        </Box>
        <Box
          gridColumn="1"
          gridRow="3 / span 2"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="Routing" />
        </Box>
        <Box
          gridColumn="2"
          gridRow="5 / span 2"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="Deployment" />
        </Box>
        <Box
          gridColumn="3"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="Axios" />
        </Box>
        <Box gridColumn="1" gridRow="2" borderRadius="md">
          <MyModal />
        </Box>
        <Box
          gridColumn="5"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="Chakra UI" />
        </Box>
        <Box
          gridColumn="3"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="Redux" />
        </Box>
        <Box bgGradient="linear(to-b, white, lightgray)" borderRadius="md">
          <MyModal text="Custom Hooks" />
        </Box>
        <Box
          gridColumn="6"
          gridRow="2"
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text="Typescript,Testing,Cypress" />
        </Box>
        <Box
          gridColumn="6 "
          bgGradient="linear(to-b, white, lightgray)"
          borderRadius="md"
        >
          <MyModal text={"NODE"} />
        </Box>
        <Box borderRadius="sm">
          <MyModal text="Express" />
        </Box>
        <Box>
          {" "}
          <MyModal text="Mongo DB" />
        </Box>
        <Box>
          {" "}
          <MyModal text="Hashing,JWT" />
        </Box>
        <Box>
          {" "}
          <MyModal text="Mongo Atlas" />
        </Box>
        {/* Add 10 more divs */}
      </Grid>
    </Flex>
  );
};

export default DummyGrid;
