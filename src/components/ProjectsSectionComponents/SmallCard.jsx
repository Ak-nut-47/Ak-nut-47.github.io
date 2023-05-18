import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const SmallCard = ({ imageUrl }) => {
  return (
    <Flex
      width="15%"
      border="2px solid #fc5130"
      borderRadius="8px"
      padding="1%"
      direction={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      mr={"2%"}
    >
      <Box>
        {" "}
        <Image src={imageUrl} alt="Logo" width="100%" borderRadius="4px" />
      </Box>
    </Flex>
  );
};

export default SmallCard;
