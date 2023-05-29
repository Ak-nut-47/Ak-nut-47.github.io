import React, { useState } from "react";

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
  Link,
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
  const linkColor = useColorModeValue("#FFFAFF", "gray.200");
  const bg = useColorModeValue("#303036", "gray.800");
  const color = useColorModeValue("white", "white");
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1iyMsm1_oPvMdpdoD_4pi8J1oELLerkh4";

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
            <Box onClick={scrollToHome}>
              <NavLink to="/" className="nav-link.home">
                Home
              </NavLink>
            </Box>
            <Box onClick={scrollToSection}>
              <NavLink className="nav-link.about" to="/about">
                About Me
              </NavLink>
            </Box>

            <Box onClick={scrollToSkills}>
              <NavLink className="nav-link.skills" to="/skills">
                Skills
              </NavLink>
            </Box>
            <Box onClick={scrollToProject} className="nav-link.projects">
              <NavLink to="/projects">Projects</NavLink>
            </Box>
            <Box onClick={scrollToContact} className="nav-link.contact">
              <Link to="/contact" exact activeClassName="active">
                <Text px={2} py={1} fontWeight="bold" color={linkColor}>
                  Contact
                </Text>
              </Link>
            </Box>
            <Link
              className="nav-link.resume"
              id="resume-button-1"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Text px={2} py={1} fontWeight="bold" color={linkColor}>
                Resume
              </Text>
            </Link>
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <Link
              className="nav-link.resume"
              id="resume-button-2"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button
                colorScheme="black"
                variant="outline"
                _hover={{
                  color: "white",
                }}
              >
                Resume
              </Button>
            </Link>
          </Box>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Box onClick={scrollToHome}>
              <NavLinkMobile to="/">Home</NavLinkMobile>
            </Box>
            <NavLinkMobile to="/about">About Me</NavLinkMobile>
            <NavLinkMobile to="/skills">Skills</NavLinkMobile>
            <Box onClick={scrollToProject}>
              <NavLinkMobile to="/projects">Projects</NavLinkMobile>
            </Box>
            <NavLinkMobile to="/contact">Contact</NavLinkMobile>
            <NavLinkMobile to="/resume">Resume</NavLinkMobile>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
