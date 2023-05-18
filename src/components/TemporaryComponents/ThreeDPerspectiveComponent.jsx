import { Box, Flex, VStack } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";

const slideIn = keyframes`
  0% {
    transform: translateX(-299px);
  }
  100% {
    transform: translateX(0);
  }
`;
const ThreeDPerspectiveComponent = () => {
  return (
    <Box>
      <Flex h="400px" justifyContent="space-evenly">
        <Flex
          direction="column"
          w="30%"
          //   h="400px"
          transform="perspective(400px)  rotateY(30deg)"
          transition="transform 0.3s ease-in-out"
          _hover={
            {
              // transform: "perspective(500px) rotateX(-30deg) rotateY(-30deg)",
            }
          }
        >
          {/* --------------------Shelves----------------------------------- */}
          <Box
            position="absolute"
            top="20%"
            left="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
          />
          <Box
            position="absolute"
            top="40%"
            left="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
          />
          <Box
            position="absolute"
            top="60%"
            left="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
          />
          <Box
            position="absolute"
            top="80%"
            left="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
          />
          {/* --------------------------------------------------------- */}
          <Box
            bg="#d0c5b9"
            bgImage="https://img.freepik.com/free-photo/wooden-plank-textured-background-material_53876-31378.jpg?w=900&t=st=1684268808~exp=1684269408~hmac=ab25d4dcae098f142f38f7161f28c72ada866990c3c8add936007f5ed1b4740f"
            h="90%"
            borderBottom="2px solid #e2dce2"
          ></Box>
          <Box bg=" #dcc9b0" h="10%"></Box>
        </Flex>
        <Flex w="27.4%"></Flex>
        <Flex
          direction="column"
          w="30%"
          //   h="400px"
          transform="perspective(400px)  rotateY(-30deg)"
          transition="transform 0.3s ease-in-out"
          _hover={
            {
              // transform: "perspective(500px) rotateX(-30deg) rotateY(-30deg)"
            }
          }
        >
          {/* --------------------Shelves----------------------------------- */}
          <Box
            position="absolute"
            top="20%"
            right="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
            box-shadow=" rgba(233, 14, 14, 0.24) 10px 3px 8px;"
          />
          <Box
            position="absolute"
            top="40%"
            right="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
          />
          <Box
            position="absolute"
            top="60%"
            right="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
          />
          <Box
            position="absolute"
            top="80%"
            right="20%"
            w="80%"
            h="5px"
            bgColor="#826f64"
          />
          {/* --------------------------------------------------------- */}
          <Box
            bg="#d0c5b9"
            h="90%"
            borderBottom="2px solid #e2dce2"
            bgImage="https://img.freepik.com/free-photo/wooden-plank-textured-background-material_53876-31378.jpg?w=900&t=st=1684268808~exp=1684269408~hmac=ab25d4dcae098f142f38f7161f28c72ada866990c3c8add936007f5ed1b4740f"
          ></Box>
          <Box bg=" #dcc9b0" h="10%"></Box>
        </Flex>
      </Flex>
      <Flex>
        <Box
          w="300px"
          h="300px"
          bg="#303036"
          border="1px solid #fc5130"
          boxShadow="0 0 10px rgba(252, 81, 48, 0.8)"
          animation={`${slideIn} 1s forwards`}
          transition="box-shadow 0.3s ease"
          _hover={{
            boxShadow: "0 0 10px rgba(252, 81, 48, 0.8)",
          }}
          className="box"
        ></Box>
      </Flex>
    </Box>
  );
};

export default ThreeDPerspectiveComponent;
