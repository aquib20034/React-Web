import './Card.css';

import avatar from '../images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Info(){
    return(
        <div>
            <img src={avatar} className="card-image"></img>
            <h2 className='person-title'>Laura Smith</h2>
            <h4 className='person-designation'>Frontend  Developer</h4>
            <h5 className='person-email'>laurasmith.website</h5>

            <div className='card-buttons'>
                <button  id='email-btn'> <FontAwesomeIcon className= "ico" icon={faEnvelope} />
                Email</button>
                <button id='linkedin-btn'> <FontAwesomeIcon className= "ico" icon={faLinkedin} />LinkedIn</button>

            </div>
        </div>
    )
}

export default Info;
