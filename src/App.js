import './App.css';
// import Navbar from './components/Navbar';
import Hero from './components//Hero';
import Union from './assets/icons/Union';
import FindTalent from './components//FindTalent';
import Articles from './components//Articles';
import TrustSection from './components//TrustSection';
import JoinUs from './components//JoinUs';

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
    </div>
  );
}

export default App;
