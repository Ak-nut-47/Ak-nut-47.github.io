import { Box } from "@chakra-ui/react";
import AnimatedMail from "./AnimatedMail";

const LetterImage = () => (
  <Box
    position="relative"
    top="20%"
    left="20%"
    width="200px"
    height="200px"
    transform="translate(-50%, -50%)"
    cursor="pointer"
    className="letter-image"
  >
    <AnimatedMail />
    <Box
      position="absolute"
      top="200px"
      left="50%"
      width="400px"
      height="30px"
      transition=".4s"
      transform="translateX(-50%)"
      borderRadius="100%"
      bgGradient="radial(rgba(0,0,0,0.5), rgba(0,0,0,0.0), rgba(0,0,0,0.0))"
      className="shadow"
    />
  </Box>
);
export default LetterImage;
