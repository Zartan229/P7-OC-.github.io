import "./style.carrousel.css";
import left from "../../images/Vector-l.png";
import right from "../../images/Vector-r.png";

import { useState } from "react";

// export default function Collapse() {
//     const [isOpen, setOpen] = useState(false)
//     return <button className='styleCollapse'>
//         <div className='textCollapse'>ERIHJZEOIF</div>
//         <img className='imageCollapse' src={ArrowDown} />

//     </button>
//   }
// const HandleNext = () =>{
//     alert("boop")

// }
let i = 0;

export default function Slideshow({ image }) {
//   console.log(image.length);
//   console.log(i);
  const [isSlide, setSlide] = useState(image[i]);

  const handleNext = () => {
    if (i > image.length - 1) {
      i = 0;
      setSlide(image[i]);
    } else {
      i++;
      setSlide(image[i]);
      if (i > image.length  - 1) {
        i = 0;
        setSlide(image[i]);
      }
    }

  };

  const handlePrevious = () => {
    if (i <= 0) {
        i = image.length   - 1;
        setSlide(image[i]);
      } else {
        i--;
        setSlide(image[i]);
        if (i <= 0) {
          i = 0;
          setSlide(image[i]);
        }
      }
      console.log(i)
  };

  return (
    <section className="section-carrousel">
      <img className="image-slideshow" src={isSlide} />
      <input className="Slideshow-left" type="image" src={left} onClick={handleNext} />
      <input className="Slideshow-right" type="image" src={right} onClick={handlePrevious} />
    </section>
  );


}
