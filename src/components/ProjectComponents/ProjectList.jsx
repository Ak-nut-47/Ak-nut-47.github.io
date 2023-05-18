import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projectRef }) => {
  const summary =
    "A web application that provides educational content and resources related to mental health.";
  const frontendLibraries = [
    "React",
    "React DOM",
    "Chakra UI",
    "Emotion",
    "Material-UI",
    "React Icons",
    "Framer Motion",
    "Styled Components",
  ];

  const stateManagementLibraries = ["React Redux", "Redux", "Redux Thunk"];

  const routingLibraries = ["React Router DOM"];

  const apiLibraries = ["Axios"];

  const formHandlingLibraries = ["Formik", "Yup"];

  const mediaVideoLibraries = ["React Player", "React Video JS Player"];

  const carouselLibraries = ["React Slick", "Slick Carousel"];

  const animationLibraries = ["Framer Motion", "React Spring"];

  const testingLibraries = ["Testing Library (Jest DOM, React, User Event)"];

  const fonts = ["Fontsource Roboto"];

  const otherLibraries = ["AOS", "Web Vitals"];

  const buildDevelopmentLibraries = ["React Scripts"];
  const techStack = [
    "React",
    "React DOM",
    "Chakra UI",
    "Emotion",
    "Material-UI",
    "React Icons",
    "Framer Motion",
    "Styled Components",
  ];
  const githubLink = "www.wwww.com";
  const deployLink = "www.congole.com";

  return (
    <Box ref={projectRef}>
      <ProjectCard
        summary={summary}
        techStack={techStack}
        githubLink={githubLink}
        deployLink={deployLink}
      />
    </Box>
  );
};

export default ProjectList;
