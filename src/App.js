
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeroSection from './components/HeroSection';
import AppBox from './components/AppBox';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div >
     <HeroSection/>
    <AppBox/>
    <AboutUs/>
    </div>
  );
}

export default App;
