import { Box, VStack, HStack } from "@chakra-ui/react";

const Bookshelf = () => {
  return (
    <Box
      w="400px"
      h="500px"
      bg="brown"
      p="20px"
      overflow="hidden"
      position="relative"
    >
      <VStack spacing="4">
        <HStack spacing="4">
          <Book />
          <Book />
          <Book />
        </HStack>
        <HStack spacing="4">
          <Book />
          <Book />
          <Book />
        </HStack>
        <HStack spacing="4">
          <Book />
          <Book />
          <Book />
        </HStack>
      </VStack>
    </Box>
  );
};

const Book = () => {
  return <Box w="80px" h="120px" bg="beige" />;
};

export default Bookshelf;
