import React from "react";
import { Box } from "@chakra-ui/react";

const RoomComponent = () => {
  const imageUrl =
    "https://dsm01pap005files.storage.live.com/y4mFnvrjI3b__W8h8jiASJeU-1DZOcotd3oGEpV16J00nJJ7fjWK5y2IdTPnUmx30nrJ7H0HzE--8J5R6uU1Y3xCZO1zYNX01kOtusoJeLLoJphJTlpqyLwRymQI7VPHVxSwdaGv-NH3K6Sv7mHwadfH2PWjdseAQVOUTz3g8P1LiVY_5mWhemFZEFOnyLwtwSt?width=1200&height=1599&cropmode=none";
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="#30bced"
    >
      <Box
        width="500px"
        height="600px"
        backgroundColor="#303036"
        borderRadius="20px"
        boxShadow="10px 10px 20px rgba(0, 0, 0, 0.2)"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="80%"
          height="80%"
          border="8px solid #fffaff"
          borderRadius="10px"
          overflow="hidden"
        >
          <Box
            width="100%"
            height="100%"
            backgroundImage={`url(${imageUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            // filter="grayscale(1)"
            // transform="rotate(-10deg)"
            class="home-img"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RoomComponent;
