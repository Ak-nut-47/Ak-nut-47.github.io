import React from "react";
import RoomComponent from "./Roomcomponent";
import ThreeDPerspectiveComponent from "./TemporaryComponents/ThreeDPerspectiveComponent";
import GlassEffectComponent from "./TemporaryComponents/GlassEffectComponent";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef}>
      <RoomComponent />
    </div>
  );
};

export default About;
