import {
  Box,
  Image,
  Text,
  Button,
  Link,
  Flex,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import image from "./Recovery.png";
const ProjectCard = ({ techStack, githubLink, deployLink, summary }) => {
  return (
    <Box borderRadius="lg" boxShadow="xl" bg="#303036" p={4} maxW="50%">
      <Image src={image} alt="Project Screenshot" borderRadius="md" mb={4} />

      <HStack spacing={2} alignItems="flex-start" color={"white"}>
        <Text fontSize="xl" fontWeight="bold">
          Tech Stack:
        </Text>
        {techStack.map((tech) => (
          <Text key={tech}>{tech}</Text>
        ))}
      </HStack>

      <Flex mt={4}>
        <Button
          leftIcon={<Icon as={FaGithub} />}
          colorScheme="blue"
          variant="solid"
          mr={2}
        >
          <Link href={githubLink} isExternal>
            GitHub
          </Link>
        </Button>
        <Button
          leftIcon={<Icon as={FaExternalLinkAlt} />}
          colorScheme="red"
          variant="solid"
        >
          <Link href={deployLink} isExternal>
            Deployed Link
          </Link>
        </Button>
      </Flex>

      <Box mt={4} bg="#fc5130" p={2} borderRadius="md">
        <Text color="white">{summary}</Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
