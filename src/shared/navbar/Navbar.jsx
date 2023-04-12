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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const bg = useColorModeValue("#30BCED", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} px={4} boxShadow="md" color={color}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: !isOpen ? "none" : "inherit" }}
          onClick={isOpen ? onClose : onOpen}
          bg={bg}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              My Portfolio
            </Text>
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </Box>
        </HStack>
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
