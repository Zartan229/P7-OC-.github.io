import './style.banner-about.css'

export default function BannerAbout({image}) {

    return<> 
    <section className='section1-about'>
        <img className='body_presentation-about' src={image} alt="Présentation"/>
    </section>
    </>
}