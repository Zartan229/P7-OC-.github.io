import classes from './style.module.css'

export default function Banner({ image }) {
  return (
    <section className={classes.section1}>
      <img className={classes.body_presentation} src={image} alt="Présentation" />
      <div className={classes.body_presentationText}>Chez vous, partout et ailleurs</div>
    </section>
  );
}
