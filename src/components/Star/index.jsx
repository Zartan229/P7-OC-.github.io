import classes from "./style.module.css";
import StarGray from '../../images/Star.png'
import StarColor from '../../images/StarColor.png'


export default function Star({rating}) {

    return <div>
        <img className={classes.StarStyle} src={1 <= rating ? StarColor : StarGray} alt="Star"/>
        <img className={classes.StarStyle} src={2 <= rating ? StarColor : StarGray} alt="Star"/>
        <img className={classes.StarStyle} src={3 <= rating ? StarColor : StarGray} alt="Star"/>
        <img className={classes.StarStyle} src={4 <= rating ? StarColor : StarGray} alt="Star"/>
        <img className={classes.StarStyle} src={5 <= rating ? StarColor : StarGray} alt="Star"/>
        </div>
}
