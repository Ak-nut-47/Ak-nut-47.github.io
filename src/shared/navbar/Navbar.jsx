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
      boxShadow="0px 2px 10px rgba(51, 50, 50, 0.8), 0px 4px 20px rgba(147, 144, 144, 0.6), 0px 8px 40px rgba(209, 208, 208, 0.4), 0px 16px 80px rgba(251, 250, 250, 0.2), 0px 32px 160px rgba(247, 245, 245, 0.1)" // Update the boxShadow property
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
            <Box onClick={scrollToHome} className="nav-link.home">
              <NavLink to="/" className="nav-link.home">
                Home
              </NavLink>
            </Box>
            <Box onClick={scrollToSection} className="nav-link.about">
              <NavLink className="nav-link.about" to="/about">
                About Me
              </NavLink>
            </Box>

            <Box onClick={scrollToSkills} className="nav-link.skills">
              <NavLink className="nav-link.skills" to="/skills">
                Skills
              </NavLink>
            </Box>
            <Box onClick={scrollToProject} className="nav-link.projects">
              <NavLink to="/projects" className="nav-link.projects">
                Projects
              </NavLink>
            </Box>
            <Box onClick={scrollToContact} className="nav-link.contact">
              <NavLink to="/contact" className="nav-link.contact">
                Contact
              </NavLink>
            </Box>
            <NavLink to="/resume" className="nav-link.resume">
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
            <Box onClick={scrollToHome}>
              <NavLinkMobile className="nav-link.home" to="/">
                Home
              </NavLinkMobile>
            </Box>
            <NavLinkMobile className="nav-link.about" to="/about">
              About Me
            </NavLinkMobile>
            <NavLinkMobile className="nav-link.skills" to="/skills">
              Skills
            </NavLinkMobile>
            <Box onClick={scrollToProject}>
              <NavLinkMobile className="nav-link.projects" to="/projects">
                Projects
              </NavLinkMobile>
            </Box>
            <NavLinkMobile className="nav-link.contact" to="/contact">
              Contact
            </NavLinkMobile>
            <NavLinkMobile className="nav-link.resume" to="/resume">
              Resume
            </NavLinkMobile>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
