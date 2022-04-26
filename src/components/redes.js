import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faImages} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faFlickr, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import "./redes.scss"
const Redes = () => {
    return (
        <div className="redes">
            <div className="socialItems">
                <a href="https://www.flickr.com/photos/lamaquinademirar/">
                <FontAwesomeIcon 
                        size="2x" 
                        icon={faFlickr} />
                </a>
            </div>
            <div className="socialItems">
                <a href="https://vimeo.com/user4848314">
                    <FontAwesomeIcon 
                        size="2x"  
                        icon={faVimeoV} />
                </a>
            </div>
            <div className="socialItems">
                <a href="https://www.linkedin.com/in/florencia-muriel-45102033/">
                <FontAwesomeIcon 
                        size="2x" 
                        icon={faLinkedinIn} />
                </a>
            </div>
        </div>
    );
}

export default Redes;
