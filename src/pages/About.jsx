import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import AboutPage from "../components/AboutPage";
import Banner from "../components/BannerAbout/index";
import img from '../images/about-pres-mobile.png'

export default function About() {
  return (
    <>
      <Header />
      <Banner image={img}/>
      <AboutPage />
      <Footer />
    </>
  );
}
