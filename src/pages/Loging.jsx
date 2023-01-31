import Header from "../components/Header/Header";
import Banner from "../components/Banner-about/index";
import Footer from "../components/Footer/Footer";
import img from '../images/about-pres-mobile.png'
import Carrousel from "../components/Carrousel";
import Logements from '../data/logements.json'

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
        <Carrousel image={data.pictures} />
        <Footer />
      </>
    );
  }