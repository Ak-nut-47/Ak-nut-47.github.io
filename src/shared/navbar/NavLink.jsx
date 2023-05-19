import { useColorModeValue, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children, className }) => {
  const linkColor = useColorModeValue("#FFFAFF", "gray.200");
  const activeLinkColor = useColorModeValue("#FC5130", "#30BCED");

  return (
    <Link
      to={to}
      className={className}
      exact
      activeClassName="active"
      _hover={{
        textDecoration: "none",
        color: activeLinkColor,
      }}
    >
      <Text px={2} py={1} fontWeight="bold" color={linkColor}>
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
