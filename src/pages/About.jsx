import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutPage from "../components/Body/Body-about";
import Banner from "../components/Banner-about/index";
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
