
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeroSection from './components/HeroSection';
import AppBox from './components/AppBox';
import AboutUs from './components/AboutUs';
import Tokeonomics from './components/Tokeonomics';
import Utility from './components/Utility';
import Place from './components/Place';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div >
     <HeroSection/>
    <AppBox/>
    <AboutUs/>
    <Tokeonomics/>
    <Utility/>
    <Place/>
    <Ecosystem/>
  <Roadmap/>
    </div>
  );
}

export default App;
