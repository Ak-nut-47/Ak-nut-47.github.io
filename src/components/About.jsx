import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CallToActionWithVideo from "./AboutSectionComponents/About1";
import MyModal from "./AboutSectionComponents/CustomModal";
import DummyGrid from "./AboutSectionComponents/DummyGrid";
import HeadingComponent from "./AboutSectionComponents/HeadingComponent";
import ProjectsHeading from "./ProjectsSectionComponents/ProjectsHeading";

const About = ({ aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      id="about"
      class="about section"
      style={{
        paddingTop: "30px",
        backgroundColor: "#41474e",
      }}
    >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <ProjectsHeading text={"About"} />
      </Flex>
      <Flex bgColor="#41474e" minH="100vh" direction={"column"}>
        <CallToActionWithVideo />
        <HeadingComponent />
      </Flex>
    </div>
  );
};

export default About;
