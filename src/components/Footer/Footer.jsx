import Logo from '../../images/Logo-footer.png'
import './style.footer.css'
export default function Footer() {

    return <footer>
      <img className='footer-logo' src={Logo} alt="Logo"/>
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  }