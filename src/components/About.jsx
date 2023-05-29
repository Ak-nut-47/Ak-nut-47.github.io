import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CallToActionWithVideo from "./AboutSectionComponents/About1";
import MyModal from "./AboutSectionComponents/CustomModal";
import DummyGrid from "./AboutSectionComponents/DummyGrid";
import HeadingComponent from "./AboutSectionComponents/HeadingComponent";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} id="about" class="about section">
      <Flex bgColor="#41474e" minH="100vh" direction={"column"}>
        <CallToActionWithVideo />
        <HeadingComponent />
        <DummyGrid />
      </Flex>
    </div>
  );
};

export default About;
