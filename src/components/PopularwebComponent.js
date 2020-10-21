import React, { Component, useEffect } from 'react';
import FrameMotionComponent from './FrameMotionComponent';
import { useCycle } from "framer-motion";
import Main from './BlogPopularcomponent';
import "../App.css";
import "./popularweb.css";

import {motion1Scene, motion2Scene, motion3Scene} from './Scenes'; 
  

const SLIDE_CHANGE_TIME_MS = 5000;

function Popular() {
    const [currentScene, setCurrentScene] = useCycle(
      motion1Scene,
      motion2Scene,
      motion3Scene
    );
  
    useEffect(() => {
      const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
      return () => clearTimeout(timeOut);
    }, [currentScene, setCurrentScene]);
  
    return (
        <>
      <div className="back">
      <Main />
      <div className="hero back">
          <FrameMotionComponent
            img={currentScene.image1}
            className="animal-image animal-image__one"
          />
          <FrameMotionComponent
            img={currentScene.image2}
            className="animal-image animal-image__two"
          />
          <FrameMotionComponent
            img={currentScene.image3}
            className="animal-image animal-image__three"
          />
      </div>
      </div>
      </>
    );
  }
  
  export default Popular;