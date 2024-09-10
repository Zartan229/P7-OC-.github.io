import classes from "./style.module.css";
import Logements from "../../data/logements.json";
import Card from "../Card/index";

export default function Housing() {
  return (
    <>
      <section className={classes.section2}>
        {Logements.map((logement, key) => {
          return (
            <Card
              key={key}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          );
        })}
      </section>
    </>
  );
}
