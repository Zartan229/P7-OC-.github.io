import classes from "./style.module.css";

export default function Card({ id, title, cover }) {
  return (
    <a href={"./loging/" + id}>
      <div key={id} value={id} className={classes.card}>
        <img className={classes.cardImage} src={cover} alt={title} />
        <h3 className={classes.title}>{title}</h3>
      </div>
    </a>
  );
}
