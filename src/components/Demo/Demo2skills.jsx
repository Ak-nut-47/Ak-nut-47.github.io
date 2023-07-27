import React from "react";
import {
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Demo2skills = () => {
  const skills = [
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit",
  ];
  return (
    <Wrap spacing={2}>
      {skills.map((skill) => (
        <WrapItem key={skill}>
          <Tag size="md" borderRadius="full" variant="solid" colorScheme="teal">
            <TagLabel>{skill}</TagLabel>
            <TagCloseButton onClick={() => {}} />
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Demo2skills;
