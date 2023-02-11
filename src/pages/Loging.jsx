import Header from "../components/Header";
import Footer from "../components/Footer";

import Slideshow from "../components/Slideshow";
import logements from "../data/logements.json";
import CollapseLoging from "../components/Collapse-loging";
import Info from "../components/Info/index";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// let urlRequest = new URL(window.location.href);

// const id = urlRequest.toString().split('/')[4];
// let data;

export default function Loging() {
  const { id } = useParams();
 // console.log(id);

  const data = logements.find((logement) => logement.id === id);
//  console.log(data);
  
  const {pictures, tags, location, description, title, equipments, rating, host} = data || {};

  const navigate = useNavigate();
  
  useEffect(() => (!data ? navigate("/*") : undefined));

  return (
    <>
      { !data ? (
        
        <h1>redirect</h1>
      ) : ( 
        <>
      <Header />
      <Slideshow image={pictures} />
      <Info tags={tags} location={location} rating={rating} title={title} host={host}/>
      <CollapseLoging description={description} equipments={equipments} />
      <Footer />
      </>
      )}
      </>
    
  )
}
