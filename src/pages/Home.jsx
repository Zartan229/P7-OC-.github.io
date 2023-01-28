import Header from "../components/Header/Header";
import Housing from "../components/Housing";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/index";
import image from "../images/pres.png"

export default function Home() {
  return (
    <>
      <Header/>
      <Banner image={image}/>
      <Housing />
      <Footer />
    </>
  );
}
