import './App.css';
import './index.css';
import HeroSection from "./Components/HeroSection/HeroSection";
import SideMenu from "./Components/SideMenu";
import DetailsSection from "./Components/DetailsSection";
import ImgDiagramSection from "./Components/ImgDiagramSection";
import Footer from "./Components/Footer";
import {Route} from "react-router-dom";





function App() {

  return (
    <div className="App">
      <HeroSection/>
      <DetailsSection/>
      <ImgDiagramSection/>
      <Footer/>
    </div>
  );
}

export default App;
