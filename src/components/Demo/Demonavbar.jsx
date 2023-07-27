import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  IconButton,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Demonavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navLinksSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box bg="teal.500" px={4}>
      <Flex
        h={{ base: 16, md: 20, lg: 24 }}
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        <Box>
          {/* Your Logo/Image */}
          <Link href="/" fontSize="xl" fontWeight="bold" color="white">
            My Logo
          </Link>
        </Box>
        <Box mt={{ base: 2, md: 0 }}>
          {/* Color Mode Toggle */}
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            variant="ghost"
            color="white"
          />
        </Box>
        <Box mt={{ base: 2, md: 0 }}>
          {/* Your Navigation Links */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "center" }}
            justify={{ base: "center", md: "flex-end" }}
          >
            <Link href="/" color="white" mr={4} fontSize={navLinksSize}>
              Home
            </Link>
            <Link href="/about" color="white" mr={4} fontSize={navLinksSize}>
              About
            </Link>
            <Link href="/contact" color="white" fontSize={navLinksSize}>
              Contact
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Demonavbar;
