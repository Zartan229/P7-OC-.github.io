import "./style.carrousel.css";

import { useState } from "react";




// export default function Collapse() {
//     const [isOpen, setOpen] = useState(false)
//     return <button className='styleCollapse'>
//         <div className='textCollapse'>ERIHJZEOIF</div>
//         <img className='imageCollapse' src={ArrowDown} />

//     </button>
//   }

export default function Carrousel ({image}) {

    return <img src={image[0]} />

}
