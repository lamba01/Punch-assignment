import './App.css';
// import Navbar from './components/Navbar';
import Hero from './components//Hero';
import Union from './assets/icons/Union';
import FindTalent from './components//FindTalent';
import Articles from './components//Articles';
import TrustSection from './components//TrustSection';
import JoinUs from './components//JoinUs';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Union />
      <FindTalent />
      <Articles />
      <TrustSection />
      <JoinUs />
      <Carousel />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
