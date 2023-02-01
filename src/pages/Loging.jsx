import Header from "../components/Header/Header";
import Banner from "../components/Banner-about/index";
import Footer from "../components/Footer/Footer";
import img from '../images/about-pres-mobile.png'
import Slideshow from "../components/Carrousel";
import Logements from '../data/logements.json'
import CollapseLoging from "../components/Collapse-loging";

let urlRequest = new URL(window.location.href);

const id = urlRequest.toString().split('/')[4];
let data;

Logements.map(logement => { 
    if (logement.id == id)
    {
        data = logement
    }
})

console.log(data)

export default function Loging() {
    return (
      <>
        <Header/>
        <Slideshow image={data.pictures} />
        <CollapseLoging description={data.description} equipements={data.equipments}/>
        <Footer />
      </>
    );
  }