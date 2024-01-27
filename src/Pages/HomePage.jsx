
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/Carousel";
import Aboutus from "../Components/Aboutus/Aboutus";
import Menu from "../Components/Menu/Menu";
import OurChef from "../Components/OurChef/OurChef";
import Contactus from "../Components/Contactus/Contactus";

const HomePage = () => {
  return (
    <>
         <Navbar/>
      <Carousel />
      <Aboutus />
      <Menu />
      <Contactus />
      <OurChef />
    </>
  )
}

export default HomePage
