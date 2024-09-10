
import Housing from "../components/Housing";
import Banner from "../components/Banner/index";
import image from "../images/pres.png"

export default function Home() {
  return (
    <>
      <Banner image={image}/>
      <Housing />
    </>
  );
}
