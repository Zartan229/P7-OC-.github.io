import classes from "./style.module.css";
import Star from '../Star/index'
import Tag from "../Tag/index";

export default function Info({ tags, location, rating, title, host }) {

  return (
    <section className={classes.sectionTags}>
      <div className={classes.titleTags}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.location}>{location}</p>
        <Tag tags={tags} />
      </div>
      <div className={classes.starInfo}>
      <Star rating={rating}/>
      <div className={classes.userInfo}><h5>{host.name}</h5><img className={classes.infoImage} src={host.picture}/></div>
      </div>
    </section>
  );
}
