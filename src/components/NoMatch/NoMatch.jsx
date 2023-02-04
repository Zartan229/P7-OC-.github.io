import classes from './style.module.css'
import image from '../../images/404.png'

export default function NoMatch() {
  return (
    <section className={classes.section404}>
      <div className={classes.div404}>
      <img src={image} className={classes.title404} alt="Erreur 404"/>
      <h3 className={classes.text404}>Oups! La page que vous demandez n'existe pas.</h3>
      </div>
      <a href="./" className={classes.link404}>Retourner sur la page d’accueil</a>
    </section>
  );
}
