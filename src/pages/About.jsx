import AboutPage from "../components/AboutPage";
import Banner from "../components/BannerAbout/index";
import img from '../images/about-pres-mobile.png'

export default function About() {
  return (
    <>

      <Banner image={img}/>
      <AboutPage />

    </>
  );
}
