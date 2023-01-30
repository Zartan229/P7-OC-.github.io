import "./style.NoMatch.css";
import image from '../../images/404.png'

export default function NoMatch() {
  return (
    <section className="section404">
      <div className="div404">
      <img src={image} className="title404" alt="Erreur 404"/>
      <h3 className="text404">Oups! La page que vous demandez n'existe pas.</h3>
      </div>
      <a href="./" className="link404">Retourner sur la page d’accueil</a>
    </section>
  );
}
