import Logo from '../../images/Logo-footer.png'
import '../../styles/_Footer-m.css'
export default function Body() {

    return <footer>
      <img className='footer-logo' src={Logo} alt="Logo"/>
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  }