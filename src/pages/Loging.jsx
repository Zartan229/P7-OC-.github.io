import Header from "../components/Header/Header";
import Banner from "../components/Banner-about/index";
import Footer from "../components/Footer/Footer";
import img from "../images/about-pres-mobile.png";
import Slideshow from "../components/Carrousel";
import logements from "../data/logements.json";
import CollapseLoging from "../components/Collapse-loging";
import Tag from "../components/Tag/index";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// let urlRequest = new URL(window.location.href);

// const id = urlRequest.toString().split('/')[4];
// let data;

export default function Loging() {
  const { id } = useParams();
  console.log(id);

  const data = logements.find((logement) => logement.id === id);
  console.log(data);
  
  const {pictures, tags, location, description, title, equipments, ratings} = data

  const navigate = useNavigate();
  
  useEffect(() => (!data ? navigate("/*") : undefined));
  //   if (!data) {
  //     navigate("/*");
  //   }
  // }, []);

  return (
    <>
      { !data ? (
        <h1>redirect</h1>
      ) : (
        <>
      <Header />
      <Slideshow image={pictures} />
      <Tag tags={tags} location={location} ratings={ratings} title={title} />
      <CollapseLoging description={description} equipments={equipments} />
      <Footer />
      </>
      )}
      </>
    
  )
}
