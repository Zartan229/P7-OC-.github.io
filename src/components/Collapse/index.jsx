import classes from "./style.module.css";
import ArrowDown from "../../images/arrow-down.png";
import { useState } from "react";

export default function Collapse({ title, description, equipments }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <button
        className={classes.styleCollapse}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {title}

        <img
          className={`${classes.imageCollapse} ${
            isCollapsed ? classes.rotateUp : classes.rotateDown
          }`}
          src={ArrowDown}
          alt="Arrow"
        />
      </button>
      <div
        className={`${classes.textCollapse} ${
          isCollapsed
            ? classes.collapsedContentcollapsed
            : classes.collapsedContentexpanded
        }`}
        aria-expanded={!isCollapsed}
      >
        {description ? (
          <>{description}</>
        ) : (
          <ul className={classes.ColEquipments}>
            {equipments.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
}
