import './style.header.css'
import Logo from '../../images/LOGO.png'
export default function Header() {
    return <header>
        <img className='header-logo' src={Logo} alt="Logo" />
        <nav>
        <a href="./"><h2 className="nav_text">Accueil</h2></a>
             <a href="/about"><h2 className="nav_text">A propos</h2></a>
        </nav>
    </header>
  }