import { useColorModeValue, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinkMobile = ({ to, children }) => {
  const [show, setShow] = useState(false);
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const activeLinkColor = useColorModeValue("teal.500", "teal.200");

  return (
    <Link
      to={to}
      exact
      activeClassName="active"
      _hover={{
        textDecoration: "none",
        color: activeLinkColor,
      }}
      onClick={() => setShow(false)}
    >
      <Text display="block" p={2} fontWeight="bold" color={linkColor}>
        {children}
      </Text>
    </Link>
  );
};

export default NavLinkMobile;
