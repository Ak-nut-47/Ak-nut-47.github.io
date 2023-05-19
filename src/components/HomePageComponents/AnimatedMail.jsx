import { Box, Image, Text } from "@chakra-ui/react";
import image from "./thank.png";
const AnimatedMail = () => (
  <Box
    position="absolute"
    height="150px"
    width="200px"
    transition=".4s"
    _hover={{
      transform: "translateY(50px)",
      ".top-fold": {
        transform: "rotateX(180deg)",
        transition: "transform .4s, z-index .2s",
        zIndex: 0,
      },
      ".letter": {
        height: "180px",
      },
      ".shadow": {
        width: "250px",
      },
    }}
  >
    <Box
      position="absolute"
      bottom="0"
      width="0"
      height="0"
      borderStyle="solid"
      borderWidth="0 0 100px 200px"
      borderColor="transparent transparent #e95f55 transparent"
      zIndex={2}
      className="body"
    />
    <Box
      position="absolute"
      top="50px"
      width="0"
      height="0"
      borderStyle="solid"
      borderWidth="50px 100px 0 100px"
      transformOrigin="50% 0%"
      transition="transform .4s .4s, z-index .2s .4s"
      borderColor="#cf4a43 transparent transparent transparent"
      zIndex={2}
      className="top-fold"
    />

    <Box
      position="absolute"
      bottom="0"
      width="200px"
      height="100px"
      background="#cf4a43"
      zIndex={0}
      className="back-fold"
    />
    <Box
      position="absolute"
      bottom="0"
      width="0"
      height="0"
      borderStyle="solid"
      borderWidth="50px 0 50px 100px"
      borderColor="transparent transparent transparent #e15349"
      zIndex={2}
      className="left-fold"
    />

    <Box
      left="20px"
      bottom="0"
      position="absolute"
      width="160px"
      height="60px"
      background="white"
      zIndex={1}
      overflow="hidden"
      transition=".4s .2s"
      className="letter"
    >
      <Box
        height="10px"
        width="100%"
        background="repeating-linear-gradient(-45deg, #cb5a5e, #cb5a5e 8px, transparent 8px, transparent 18px)"
        className="letter-border"
      />

      <Box>
        <Image src={image} />
      </Box>
    </Box>
  </Box>
);

export default AnimatedMail;
