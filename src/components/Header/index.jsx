import classes from "./style.module.css";
import Logo from "../../images/LOGO.png";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const Accueil = location.pathname === "/";
  const APropos = location.pathname === "/about";
  return (
    <header>
      <img className={classes.headerLogo} src={Logo} alt="Logo" />
      <nav>
        <Link to="/">
          <h2
            className={`${classes.nav_text} ${
              Accueil ? classes.nav_textLink : ""
            }`}
          >
            Accueil
          </h2>
        </Link>
        <Link to="/about">
          <h2
            className={`${classes.nav_text} ${
              APropos ? classes.nav_textLink : ""
            }`}
          >
            A propos
          </h2>
        </Link>
      </nav>
    </header>
  );
}
