import { Box, Flex, Image } from "@chakra-ui/react";

const DiamondImage = () => {
  const imageUrl =
    "https://dsm01pap005files.storage.live.com/y4mFnvrjI3b__W8h8jiASJeU-1DZOcotd3oGEpV16J00nJJ7fjWK5y2IdTPnUmx30nrJ7H0HzE--8J5R6uU1Y3xCZO1zYNX01kOtusoJeLLoJphJTlpqyLwRymQI7VPHVxSwdaGv-NH3K6Sv7mHwadfH2PWjdseAQVOUTz3g8P1LiVY_5mWhemFZEFOnyLwtwSt?width=1200&height=1599&cropmode=none";
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        display="flex"
        boxShadow="0px 4px 10px rgba(48, 188, 237, 0.6)"
        border="5px solid #303036 "
        borderRadius="md"
        width="25%"
      >
        <Image className=".home-img" src={imageUrl} height="fit-content" />
      </Box>
    </Flex>
  );
};

export default DiamondImage;
