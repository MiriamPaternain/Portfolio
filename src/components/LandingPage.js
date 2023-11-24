import logo from '../img/logoPortfolio.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <nav className='mainNav'>
        <div className='mainNav_logo'>
          <a href='/'>
            <img
              src={logo}
              alt='logo de la pagina'
              className='mainNav_logo--img'
            />
          </a>
        </div>
        <div className='mainNav_links'>
          <ul className='mainNav_links--ul'>
            <li className='mainNav_links--ulli'>
              <Link to='/about'>About</Link>
            </li>
            <li className='mainNav_links--ulli'>
              <Link to='/works'>Works</Link>
            </li>
            <li className='mainNav_links--ulli'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default LandingPage;
