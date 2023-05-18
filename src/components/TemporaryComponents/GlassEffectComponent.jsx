import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const GlassEffectComponent = () => {
  const [showPicture, setShowPicture] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPicture(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      w="300px"
      h="300px"
      position="relative"
      overflow="hidden"
      borderRadius="10px"
      boxShadow="0 0 20px rgba(209, 18, 18, 0.5)"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(48, 216, 93, 0.5)"
        opacity={showPicture ? 0 : 1}
        transition="opacity 0.5s ease-in-out"
      />
      {showPicture && (
        <Box
          position="relative"
          zIndex="1"
          w="100%"
          h="100%"
          backgroundImage="url(https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=MB1-O5fjps0hVPd97fMIiEaisPMEn4XqVvQoJFKLRrQ=)"
          backgroundSize="cover"
          backgroundPosition="center"
          opacity={showPicture ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
        />
      )}
    </Box>
  );
};

export default GlassEffectComponent;
