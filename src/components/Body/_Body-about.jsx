import img from '../../images/about-pres-mobile.png'
import '../../styles/_Body-about.css'
import Collapse from '../Collapse/Collapse'



export default function BodyAbout() {

    return<> 
    <section className='section1-about'>
        <img className='body_presentation-about' src={img} alt="Présentation"/>
    </section>
    <section className='section2-about'>
    <Collapse>
    <h4 className='titleCollapse'>Fiabilité</h4>
    <p>Hello world!</p>
  </Collapse>
  <Collapse>
    <h4 className='titleCollapse'>Am banana</h4>
    <p>Hello world!</p>
  </Collapse>
  <Collapse>
    <h4 className='titleCollapse'>Fiabilité</h4>
    <p>Hello world!</p>
  </Collapse>
  <Collapse>
    <h4 className='titleCollapse'>Am banana</h4>
    <p>Hello world!</p>
  </Collapse>
  <Collapse>
    <h4 className='titleCollapse'>Fiabilité</h4>
    <p>Hello world!</p>
  </Collapse>
  <Collapse>
    <h4 className='titleCollapse'>Am banana</h4>
    <p>Hello world!</p>
  </Collapse>
    </section>
    </>
  }