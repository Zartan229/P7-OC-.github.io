import '../../styles/_Header-m.css'
import Logo from '../../images/LOGO.png'
export default function Banner() {
    return <header>
        <img src={Logo} alt="image restau" />
        <nav>
            <h2 class="nav_text">Accueil</h2>
            <h2 class="nav_text">A propos</h2>
        </nav>







    </header>;
  }