import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const DiamondImage = () => {
  const linkColor = "white";
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1iyMsm1_oPvMdpdoD_4pi8J1oELLerkh4";
  const imageUrl =
    "https://dsm01pap005files.storage.live.com/y4mFnvrjI3b__W8h8jiASJeU-1DZOcotd3oGEpV16J00nJJ7fjWK5y2IdTPnUmx30nrJ7H0HzE--8J5R6uU1Y3xCZO1zYNX01kOtusoJeLLoJphJTlpqyLwRymQI7VPHVxSwdaGv-NH3K6Sv7mHwadfH2PWjdseAQVOUTz3g8P1LiVY_5mWhemFZEFOnyLwtwSt?width=1200&height=1599&cropmode=none";
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={5}
      flexDirection={"column"}
    >
      <Box
        display="flex"
        boxShadow="10px 12px 15px  rgba(48, 188, 237, 0.6)"
        border="5px solid #303036 "
        borderRadius="md"
        width="25%"
        mb={10}
      >
        <Image className="home-img" src={imageUrl} height="fit-content" />
      </Box>
      <Link
        p={2}
        borderRadius={"md"}
        boxShadow="0px 12px 15px 10px rgba(48, 188, 237, 0.6)"
        className="nav-link resume"
        id="resume-button-1"
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        color={"white"}
        download
        bgColor={"#c3bbbb941"}
      >
        <Text px={2} py={1} fontWeight="bold" color={linkColor}>
          Resume
        </Text>
      </Link>
    </Flex>
  );
};

export default DiamondImage;
