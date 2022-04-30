import React, {useState, useEffect} from 'react';
import SketchLoader from "./sketchLoader"
import "./loaderContainer.scss"

const Loadercontainer = () => {
    var [active, setActive] = useState(false)
      const viewStyle = {
        display: 'none'
    }

    const notView = {
        display: 'flex'
    }

    function handleClick(){
        console.log("inner")
        setActive(true)
    }
    
    return (
        <div 
        style={notView}
        id="sketch_holder"  
        onClick={handleClick}
         >
            <SketchLoader/>
        </div>
    );
}

export default Loadercontainer;
