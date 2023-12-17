import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Aboutus from "./Components/Aboutus/Aboutus";
import Menu from "./Components/Menu/Menu";
import OurChef from "./Components/OurChef/OurChef";
import Contactus from "./Components/Contactus";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Aboutus />
      <Menu />
      <OurChef />
      <Contactus/>
    </>
  );
}
export default App;
