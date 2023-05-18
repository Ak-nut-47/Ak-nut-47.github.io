import React from "react";
import RoomComponent from "./Roomcomponent";
import ThreeDPerspectiveComponent from "./TemporaryComponents/ThreeDPerspectiveComponent";
import GlassEffectComponent from "./TemporaryComponents/GlassEffectComponent";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} id="about" class="about section">
      <RoomComponent />
    </div>
  );
};

export default About;
