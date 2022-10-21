import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare  } from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return(
        <div className='footer'>
            <FontAwesomeIcon className= "footer-ico" icon={faTwitterSquare} />
            <FontAwesomeIcon className= "footer-ico" icon={faFacebookSquare} />
            <FontAwesomeIcon className= "footer-ico" icon={faInstagramSquare} />
            <FontAwesomeIcon className= "footer-ico" icon={faGithubSquare} />
        </div>
    )
}

export default Footer;
