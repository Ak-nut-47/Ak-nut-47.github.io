import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import MotionComponent1 from "./TemporaryComponents/MotionComponent1";
import MotionComponent2 from "./TemporaryComponents/MotionComponent2";
import MotionComponent3 from "./TemporaryComponents/MotionComponent3";
import MotionComponent4 from "./TemporaryComponents/MotionComponent4";
import ProjectsHeading from "./ProjectsSectionComponents/ProjectsHeading";

const Projects = ({ projectRef }) => {
  return (
    <Flex direction="column" ref={projectRef} id="projects" paddingTop="30px">
      <ProjectsHeading text={"Projects"} />
      <MotionComponent1 />
      <MotionComponent2 />
      <MotionComponent3 />
      <MotionComponent4 />
    </Flex>
  );
};

export default Projects;
