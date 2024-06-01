
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from './components/HeroSection';
import AppBox from './components/AppBox';
import AboutUs from './components/AboutUs';
import Tokeonomics from './components/Tokeonomics';
import Utility from './components/Utility';
import Place from './components/Place';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import LatestNews from './components/LatestNews';
import Socialmedia from './components/Socialmedia';

function App() {
  return (
    <div className='overflow-hidden' >
    <HeroSection/>
    <AppBox/>
    <AboutUs/>
    <Tokeonomics/>
    <Utility/>
    <Place/>
    <Ecosystem/>
    <Roadmap/>
    <LatestNews/>
   <Socialmedia/>
    </div>
  );
}

export default App;
