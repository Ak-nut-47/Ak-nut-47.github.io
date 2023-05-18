import { motion } from "framer-motion";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import image from "../../Images/BedBath&Beyond.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import SmallCard from "../ProjectsSectionComponents/SmallCard";
import html from "../../components/ProjectsSectionComponents/Icons/html.png";
import css from "../../components/ProjectsSectionComponents/Icons/CSS.png";
import javascript from "../../components/ProjectsSectionComponents/Icons/javascript.png";
const MotionComponent2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when it becomes visible
    threshold: 0.5, // Adjust the threshold as needed
  });

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
      ref={ref}
    >
      <motion.div
        animate={{
          x: inView ? "0%" : "-100%",
        }}
        transition={{ duration: 1 }}
      >
        <Flex
          w="64%"
          bg="#303036"
          p="1%"
          borderRadius="md"
          boxShadow=" rgba(10, 10, 10, 0.5) 10px 5px 15px"
        >
          <Flex w="50%" direction={"column"}>
            <Image src={image} alt="Project Screenshot" borderRadius="md" />
          </Flex>
          <Flex w="50%">
            <Flex
              direction="column"
              ml={15}
              justifyContent="space-evenly"
              w="100%"
            >
              <Box p={2} borderRadius="md">
                <Text color="white" fontSize="1.2xl">
                  <b>BED BATH & BEYOND :</b>E-commerce website, providing
                  high-quality bed mattresses, toiletries, and kitchen
                  accessories.
                </Text>
              </Box>
              <Flex justifyContent={"center"}>
                <Text color="#fc5130" fontWeight="bold">
                  TECH STACK
                </Text>
              </Flex>
              <Flex
                mt={"2%"}
                p={"2%"}
                borderRadius="md"
                color="white"
                justifyContent="center"
              >
                <SmallCard imageUrl={html} />
                <SmallCard imageUrl={css} />
                <SmallCard imageUrl={javascript} />
              </Flex>
              <Flex mt={4} justifyContent="center">
                <Flex mr="10%">
                  <Link
                    href="https://github.com/Ak-nut-47/pacific-clam-4161"
                    isExternal
                  >
                    {" "}
                    <Button
                      leftIcon={<Icon as={FaGithub} />}
                      border="2px solid white"
                      bg="#303036"
                      color="white"
                      variant="solid"
                      _hover={{ color: "black", bg: "white" }}
                    >
                      GitHub
                    </Button>
                  </Link>
                </Flex>

                <Flex>
                  <Link
                    href="https://hilarious-quokka-b627d9.netlify.app/"
                    isExternal
                  >
                    <Button
                      leftIcon={<Icon as={FaExternalLinkAlt} />}
                      bg={"white"}
                      color="#ffaff"
                      variant="solid"
                      _hover={{
                        color: "white",
                        bg: "#303036",
                        border: "2px solid white",
                      }}
                    >
                      Deployed Link
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </div>
  );
};

export default MotionComponent2;
