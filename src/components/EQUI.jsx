import React from "react";
import Sketch from "react-p5";
import Wave from "../models/wave"

const EQUI = (props) => {


	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(700, 500).parent(canvasParentRef);
       
    };

	const draw = (p5) => {
        
    };

	return <Sketch setup={setup} draw={draw} />;
};

export default EQUI