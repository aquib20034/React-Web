import logo from '../images/react-logo.png';

function Header(){
    return (
        <nav className="nav">
            <img src={logo}  className="nav-icon" /> 
            <h2 className='nav-logo-text'>ReactFact</h2>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
    )
}

export default Header