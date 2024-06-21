import './App.css';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Union from './assets/icons/Union';
import FindTalent from './components/FindTalent';
import Articles from './components/Articles';
import TrustSection from './components/TrustSection';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Union />
      <FindTalent />
      <Articles />
      <TrustSection />
    </div>
  );
}

export default App;
