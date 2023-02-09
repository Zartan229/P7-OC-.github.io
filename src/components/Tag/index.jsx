import classes from "./style.module.css";

export default function Tag({ tags }) {

  {
    return <div className={classes.tagStyle}>
    {tags.map((tag, key) => (  
          <div key={key} className={classes.tag}>  
            {tag}  
          </div>  
        ))}  
    </div>
  }
}
