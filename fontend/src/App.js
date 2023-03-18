import './App.css';
import './index.css';
import HeroSection from "./Components/HeroSection/HeroSection";
import DetailsSection from "./Components/DetailsSection";
import ImgDiagramSection from "./Components/ImgDiagramSection";
import Footer from "./Components/Footer";




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
