import classes from './style.module.css'

export default function BannerAbout({image}) {

    return<> 
    <section className={classes.section12}>
        <img className={classes.body_presentation12} src={image} alt="Présentation"/>
    </section>
    </>
}