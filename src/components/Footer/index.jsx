import Logo from '../../images/Logo-footer.png'
import classes from './style.module.css'
export default function Footer() {

    return <footer>
      <img className={classes.footerLogo} src={Logo} alt="Logo"/>
      <p className={classes.footerText}>© 2020 Kasa. All rights reserved</p>
    </footer>
  }