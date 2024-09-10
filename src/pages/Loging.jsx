import Slideshow from "../components/Slideshow";
import logements from "../data/logements.json";
import Info from "../components/Info/index";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Loging() {
  const { id } = useParams();
  const data = logements.find((logement) => logement.id === id);
  const {pictures, tags, location, description, title, equipments, rating, host} = data || {};
  const navigate = useNavigate();
    useEffect(() => (!data ? navigate("/*") : undefined));
  return (
    <>
      { !data ? (
        
        <h1>redirect</h1>
      ) : ( 
        <>
      <Slideshow image={pictures} />
      <Info tags={tags} location={location} rating={rating} title={title} host={host} description={description} equipments={equipments}/>
      </>
      )}
      </>
    
  )
}
