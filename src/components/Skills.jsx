import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";

import { SiRedux } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  AiFillApi,
  AiFillDatabase,
  AiOutlineDeploymentUnit,
  AiOutlinePartition,
} from "react-icons/ai";
import { BiNetworkChart, BiLink, BiCube, BiTestTube } from "react-icons/bi";
import { IoMdCodeWorking, IoMdRocket } from "react-icons/io";
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiJavascript1,
} from "react-icons/di";
import { GrFormSubtract } from "react-icons/gr";
import ProjectsHeading from "./ProjectsSectionComponents/ProjectsHeading";
const Skills = ({ skillsRef }) => {
  const skills = [
    "Started With HTML",
    "CSS - Selectors,Media query, Flexbox, Grid",
    "DOM, Local Storage",
    "Asynchronous programming",
    "DSA - Strings, Arrays",
    "Two Pointer,Sliding Window",
    "Object creation, Prototypical inheritance",
    "CRUD, Authentication",
    "Advanced JS",
    "REACT- State,prop",
    "Events, Effects",
    "Routing",
    "Deployment",
    "Axios",
    "Chakra UI",
    "Redux",
    "Custom Hooks",
    "Typescript, Testing, Cypress",
    "NODE",
    "Express",
    "Mongo DB",
    "Hashing, JWT",
    "Mongo Atlas",
  ];

  const images = [
    FaHtml5,
    FaCss3Alt,
    FaDatabase,
    FaCode,
    BiNetworkChart,
    BiCube,
    BiLink,
    BiTestTube,
    IoMdCodeWorking,
    DiReact,
    IoMdRocket,
    AiOutlinePartition,
    AiOutlineDeploymentUnit,
    AiFillApi,
    AiFillDatabase,
    SiRedux,
    GrFormSubtract,
    DiJavascript1,
    DiNodejsSmall,
    DiMongodb,
    FaLaptopCode,
    BiNetworkChart,
    BiLink,
  ];

  return (
    <Box minH="100vh" ref={skillsRef} pt="60px" id="skills" bgColor={"#42484F"}>
      <Flex mb={10}>
        <ProjectsHeading text={"Skills"} />
      </Flex>
      <Flex
        wrap="wrap"
        justify="center"
        alignItems="center"
        gap={4}
        className="skills-card"
      >
        {skills.map((skill, index) => (
          <Flex
            p={5}
            key={index}
            direction="column"
            justify="center"
            alignItems="center"
            w="150px"
            h="150px"
            borderRadius="md"
            fontWeight="bold"
            textAlign="center"
            boxShadow="md"
            color={"white"}
            // bgColor={"#42484F"}
            bgGradient="linear(to-r, #303036, #bf3d22)"
          >
            {/* <Image
              src={images[index]}
              alt={`Skill ${index}`}
              objectFit={"contain"}
            /> */}
            <Icon
              className="skills-card-img"
              as={images[index]}
              boxSize={50}
              mb="2"
            />
            <Text fontSize="sm" className="skills-card-name">
              {skill}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
