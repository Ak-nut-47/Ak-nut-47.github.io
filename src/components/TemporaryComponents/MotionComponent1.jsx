import { motion } from "framer-motion";
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import image from "../../Images/Recovery.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import reactIcons from "../ProjectsSectionComponents/Icons/react icons.svg";
import chakraUi from "../ProjectsSectionComponents/Icons/chakraui.png";
import react from "../ProjectsSectionComponents/Icons/React.png";
import reactRouterDom from "../ProjectsSectionComponents/Icons/React router dom.png";
import axios from "../ProjectsSectionComponents/Icons/axios.jpg";
import styledComponents from "../ProjectsSectionComponents/Icons/styled-components.png";
import SmallCard from "../ProjectsSectionComponents/SmallCard";
const MotionComponent1 = () => {
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
      className="project-card"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
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
                <Text
                  color="#fc5130"
                  fontSize="1.2xl"
                  fontWeight="extrabold"
                  letterSpacing="1px"
                  className="project-title"
                >
                  <u>RECOVERY</u>
                </Text>
                <Text
                  color="white"
                  fontSize="1xl"
                  className="project-description"
                >
                  A web application that provides educational content and
                  resources related to mental health.
                </Text>
              </Box>
              <Flex justifyContent={"center"}>
                <Text
                  color="#fc5130"
                  fontWeight="bold"
                  className="project-tech-stack"
                >
                  TECH STACK USED
                </Text>
              </Flex>
              <Flex mt={"2%"} p={"2%"} borderRadius="md" color="white">
                <SmallCard imageUrl={reactIcons} />
                <SmallCard imageUrl={chakraUi} />
                <SmallCard imageUrl={react} />
                <SmallCard imageUrl={reactRouterDom} />
                <SmallCard imageUrl={styledComponents} />
                <SmallCard imageUrl={axios} />
              </Flex>
              <Flex mt={4} justifyContent="center">
                <Flex mr="10%">
                  <Link
                    href="https://github.com/anagpure28/adhesive-caption-1992/tree/main/imind"
                    className="project-github-link"
                    isExternal
                  >
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
                    className="project-deployed-link"
                    href="https://imind.vercel.app/"
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

export default MotionComponent1;
