import Collapse from "../Collapse/index";
import classes from "./style.module.css";

export default function CollapseLoging({ description, equipments }) {
  return (
    <section className={classes.sectionCollapse}>
      <div className={classes.divCollapse}>
        <Collapse title="Description" description={description} />
      </div>
      <div className={classes.divCollapse}>
        <Collapse title="Equipements" equipments={equipments} />
      </div>
    </section>
  );
}
