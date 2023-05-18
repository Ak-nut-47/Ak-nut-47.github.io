import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import NavLinkMobile from "./NavLinkMobile";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useDisclosure,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";

const Navbar = ({
  scrollToSection,
  scrollToHome,
  scrollToSkills,
  scrollToProject,
  scrollToContact,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const bg = useColorModeValue("#303036", "gray.800");
  const color = useColorModeValue("white", "white");

  return (
    <Box
      bg={bg}
      px={4}
      boxShadow="md"
      color={color}
      position="sticky"
      top="0px"
      left="0px"
      zIndex={100}
      id="nav-menu"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: !isOpen ? "none" : "inherit" }}
          onClick={isOpen ? onClose : onOpen}
          bg={bg}
        />
        <Flex
          spacing={8}
          alignItems={"center"}
          justifyContent="space-evenly"
          w="100%"
        >
          <Box>
            <Text
              fontSize="2xl"
              fontWeight="bolder"
              fontFamily="calligraffitti"
            >
              Animesh
            </Text>
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <Box onClick={scrollToHome}>
              <NavLink to="/" className="nav-link home">
                Home
              </NavLink>
            </Box>
            <Box onClick={scrollToSection}>
              <NavLink className="nav-link about" to="/about">
                About Me
              </NavLink>
            </Box>

            <Box onClick={scrollToSkills}>
              <NavLink className="nav-link skills" to="/skills">
                Skills
              </NavLink>
            </Box>
            <Box onClick={scrollToProject}>
              <NavLink to="/projects" className="nav-link projects">
                Projects
              </NavLink>
            </Box>
            <Box onClick={scrollToContact}>
              <NavLink to="/contact" className="nav-link contact">
                Contact
              </NavLink>
            </Box>
            <NavLink to="/resume" className="nav-link resume">
              Resume
            </NavLink>
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <Button
              colorScheme="black"
              variant="outline"
              _hover={{
                color: "white",
              }}
            >
              Resume
            </Button>
          </Box>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavLinkMobile to="/">Home</NavLinkMobile>
            <NavLinkMobile to="/about">About Me</NavLinkMobile>
            <NavLinkMobile to="/skills">Skills</NavLinkMobile>
            <NavLinkMobile to="/projects">Projects</NavLinkMobile>
            <NavLinkMobile to="/contact">Contact</NavLinkMobile>
            <NavLinkMobile to="/resume">Resume</NavLinkMobile>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
