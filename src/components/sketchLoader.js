import React from 'react';
import Sketch from "react-p5";

const Sketchloader = () => {

    let canvas ;
    
    const setup = (p5, canvasParentRef) => {
        canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
        canvas.position(0,0);
        canvas.parent(canvasParentRef);
        p5.noCursor();

        p5.textSize(16);


    }

    const windowResized = (p5) =>{
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    const draw = (p5) =>{
        p5.clear();


        p5.fill(72,95,199);
    
        p5.ellipse(p5.mouseX, p5.mouseY, 50);
    
        var angle = p5.map(p5.mouseX*0.05, 0, p5.windowWidth, -180, 180);
        var r = p5.windowWidth/2.5;
        var x = r * p5.cos(angle);
        var y = r * p5.sin(angle);
        
    
        p5.translate(p5.windowWidth/2, p5.windowHeight/2);
        p5.fill(63, 255, 191, 150);
        p5.noStroke();
        p5.ellipse(x, y, 700);

        p5.fill(72,95,199)
        p5.text("Click to continue!", -100, p5.windowHeight-500)
    }
    return (
        <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
    );
}

export default Sketchloader;
