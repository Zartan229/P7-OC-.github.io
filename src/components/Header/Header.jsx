import classes from './style.module.css'
import Logo from '../../images/LOGO.png'
export default function Header() {
    return <header>
        <img className={classes.headerLogo} src={Logo} alt="Logo" />
        <nav>
        <a href="/"><h2 className={classes.nav_text}>Accueil</h2></a>
        <a href="/about"><h2 className={classes.nav_text}>A propos</h2></a>
        </nav>
    </header>
  }