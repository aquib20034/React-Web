import About from './About';
import './Card.css';
import Footer from './Footer';
import Info from './Info';
import Interests from './Interests';

function Card(){
    return(
        <div className='main-card'>
            <div className="card">
               <Info />
               <About />
               <Interests />
               <Footer />
            </div>
        </div>
    )
}

export default Card;