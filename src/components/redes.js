import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faImages} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faFlickr, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import "./redes.scss"
const Redes = () => {
    return (
        <div className="redes">
            <div className="socialItems">
                <FontAwesomeIcon 
                        size="2x" 
                        icon={faFlickr} />
            </div>
            <div className="socialItems">
                <FontAwesomeIcon 
                        size="2x"  
                        icon={faVimeoV} />
            </div>
            <div className="socialItems">
                <FontAwesomeIcon 
                        size="2x" 
                        icon={faLinkedinIn} />
            </div>
        </div>
    );
}

export default Redes;
