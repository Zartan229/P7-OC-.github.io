import classes from "./style.module.css";
import left from "../../images/Vector-l.png";
import right from "../../images/Vector-r.png";

import { useState } from "react";

let i = 0;

export default function Slideshow({ image }) {
  const [isSlide, setSlide] = useState(image[i]);
  const handleNext = () => {
    if (i > image.length - 1) {
      i = 0;
      setSlide(image[i]);
    } else {
      i++;
      setSlide(image[i]);
      if (i > image.length - 1) {
        i = 0;
        setSlide(image[i]);
      }
    }
  };
  const handlePrevious = () => {
    if (i <= 0) {
      i = image.length - 1;
      setSlide(image[i]);
    } else {
      i--;
      setSlide(image[i]);
      if (i <= 0) {
        i = 0;
        setSlide(image[i]);
      }
    }
    console.log(i);
  };
  return (
    <section className={classes.sectionCarrousel}>
      <img alt="Carrousel" className={classes.imageSlideshow} src={isSlide} />
      <input
        alt="Flêche diriger vers la gauche"
        style={{ display: image.length > 1 ? "block" : "none" }}
        className={classes.SlideshowLeft}
        type="image"
        src={left}
        onClick={handlePrevious}
      />
      <input
        alt="Flêche diriger vers la droite"
        style={{ display: image.length > 1 ? "block" : "none" }}
        className={classes.SlideshowRight}
        type="image"
        src={right}
        onClick={handleNext}
      />
      <p style={{ display: image.length > 1 ? "block" : "none " }} className={classes.SlideshowNumber}>
        {i + 1} / {image.length}
      </p>
    </section>
  );
}
