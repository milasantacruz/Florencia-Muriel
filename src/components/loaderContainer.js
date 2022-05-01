import React, {useState, useEffect} from 'react';
//import SketchLoader from "./sketchLoader"
import loadable from "@loadable/component"
import "./loaderContainer.scss"

const Loadercontainer = () => {
    
    var [isBrowser, setBrowser] = useState(false)
    let DynamicModule = null;
    const windowGlobal = typeof window !== 'undefined' && window;
    if (windowGlobal){
        DynamicModule = loadable((props) => loadable(() => import("./sketchLoader"),{ssr:true}));
    }

    useEffect(()=>{
        if(DynamicModule){
            setBrowser(true);
        }
    },[])

    var [active, setActive] = useState(false)
      const viewStyle = {
        display: 'none'
    }

    const notView = {
        display: 'flex'
    }

    function handleClick(){
        setActive(true)
    }
    
    return (
        <div 
        style={notView}
        id="sketch_holder"  
        onClick={handleClick}
         >
            {isBrowser ?
            <SketchLoader/> :
            <div></div>            
            }
        </div>
    );
}

export default Loadercontainer;
