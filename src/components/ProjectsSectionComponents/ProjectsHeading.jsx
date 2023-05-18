import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

const ProjectsHeading = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when it becomes visible
    threshold: 0.5, // Adjust the threshold as needed
  });
  return (
    <Flex margin="auto" mt="50px">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: inView ? 1 : 0, y: 0, scale: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        ref={ref}
      >
        <Box
          bgGradient="linear(to-r, #303036, #bf3d22)"
          boxShadow="3xl"
          display="inline-block"
          p={4}
          borderRadius="xl"
        >
          <Text
            as={motion.span}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            fontSize="4xl"
            fontWeight="bold"
            color="white"
          >
            {text}
          </Text>
        </Box>
      </motion.div>
    </Flex>
  );
};

export default ProjectsHeading;
