import classes from './style.module.css'
import ArrowUp from "../../images/arrow-up.png";
import ArrowDown from "../../images/arrow-down.png";
import { useState } from "react";

// export default function Collapse() {
//     const [isOpen, setOpen] = useState(false)
//     return <button className='styleCollapse'>
//         <div className='textCollapse'>ERIHJZEOIF</div>
//         <img className='imageCollapse' src={ArrowDown} />

//     </button>
//   }

export default function Collapse ({title, description}) {


  
  const [isCollapsed, setIsCollapsed] = useState(true);


  return (
    <>
      <button className={classes.styleCollapse} onClick={() => setIsCollapsed(!isCollapsed)}>

        {title}

        <img className={classes.imageCollapse} src={isCollapsed ? ArrowDown : ArrowUp} alt="Arrow" />
      </button>
      <div className={`${classes.textCollapse} ${isCollapsed ? classes.collapsedContentcollapsed : classes.collapsedContentexpanded}`} aria-expanded={!isCollapsed}>
      {description}
      </div>
    </>
  );
};
