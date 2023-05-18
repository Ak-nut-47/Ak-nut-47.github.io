import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

const ContactAnimationComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when it becomes visible
    threshold: 0.1, // Adjust the threshold as needed
  });
  const width = useBreakpointValue({ base: "90%", md: "70%", lg: "60%" });

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -50,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.8,
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box
          ref={ref}
          bgGradient="linear(to-l, #563934,  #303036)"
          height="80vh"
          width={width}
          marginX="auto"
          padding="2rem"
        >
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            color="white"
            mb="4"
          >
            Feel free to connect with me
          </Heading>

          <Flex direction="column" align="flex-start" color="white">
            <Flex align="center" mb="2">
              <RiMapPin2Line size={20} />
              <Text ml="2">Tezpur, Assam</Text>
            </Flex>

            <Flex align="center" mb="2">
              <RiMailLine size={20} />
              <Text ml="2" id="contact-email">
                animesh.kalita22@gmail.com
              </Text>
            </Flex>

            <Flex align="center" mb="2">
              <RiPhoneLine size={20} />
              <Text ml="2" id="contact-phone">
                +91-7002238284
              </Text>
            </Flex>

            <Flex mt="4">
              <Link
                href="https://github.com/Ak-nut-47"
                id="contact-github"
                isExternal
              >
                <Button
                  as={motion.button}
                  variants={buttonVariants}
                  whileHover="hover"
                  bg="transparent"
                  border="2px solid white"
                  color="white"
                  borderRadius="md"
                  mr="2"
                  leftIcon={<AiFillGithub />}
                >
                  GitHub
                </Button>
              </Link>

              <Link
                href="https://www.linkedin.com/in/animesh-kalita-3501b478/"
                id="contact-linkedin"
                isExternal
              >
                <Button
                  as={motion.button}
                  variants={buttonVariants}
                  whileHover="hover"
                  bg="transparent"
                  border="2px solid white"
                  color="white"
                  borderRadius="md"
                  leftIcon={<AiFillLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default ContactAnimationComponent;
