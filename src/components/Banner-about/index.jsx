import classes from './style.module.css'

export default function BannerAbout({image}) {

    return<> 
    <section className={classes.sectionAbout}>
        <img className={classes.body_presentationAbout} src={image} alt="Présentation"/>
    </section>
    </>
}