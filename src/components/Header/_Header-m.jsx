import '../../styles/_Header-m.css'
import Logo from '../../images/LOGO.png'
export default function Banner() {
    return <header>
        <img className='header-logo' src={Logo} alt="Logo" />
        <nav>
            <h2 className="nav_text">Accueil</h2>
            <h2 className="nav_text">A propos</h2>
        </nav>







    </header>
  }