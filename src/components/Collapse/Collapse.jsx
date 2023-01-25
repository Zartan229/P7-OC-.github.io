import '../../styles/_Collapse.css'
import ArrowUp from '../../images/arrow-up.png'
import ArrowDown from '../../images/arrow-down.png'
import { useState } from 'react'

// export default function Collapse() {
//     const [isOpen, setOpen] = useState(false)
//     return <button className='styleCollapse'>
//         <div className='textCollapse'>ERIHJZEOIF</div>
//         <img className='imageCollapse' src={ArrowDown} />

    

//     </button>
//   }




  const Collapse = ({ collapsed, children, }) => {
    const [imgSrc, setImgSrc] = useState(ArrowDown);
    const [isCollapsed, setIsCollapsed] = useState(!collapsed);
    let img = ArrowDown;

    if (isCollapsed && img == ArrowDown)
    {
        img = ArrowUp
    }
// {isCollapsed ? imgSrc : setImgSrc(ArrowUp)} {children[0].className="titleCollapse"}


    return (
      <>
        <button
          className="collapse-button styleCollapse"
          onClick={() => setIsCollapsed(!isCollapsed)}

        >
          {/* {isCollapsed ? 'Show' : 'Hide'} content */}
          {children[0]} 
          
          <img className='imageCollapse' src={img}  alt="Arrow" />
        </button>
        <div
          className={`textCollapse collapse-content ${isCollapsed ? 'collapsed' : 'expanded'} `}
          aria-expanded={isCollapsed}
        >
          {children[1]}
        </div>
        
      </>
    );
  };
  export default Collapse;