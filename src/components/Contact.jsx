import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Bookshelf from "./Bookshelf";
import ContactAnimationComponent from "./ContactSectionComponents/ContactAnimationComponent";
import ProjectsHeading from "./ProjectsSectionComponents/ProjectsHeading";

const Contact = ({ contactRef }) => {
  return (
    <Flex direction={"column"} ref={contactRef}>
      <Center mb="20px">
        <ProjectsHeading text={"Contacts"} />
      </Center>
      <ContactAnimationComponent />
    </Flex>
  );
};

export default Contact;
