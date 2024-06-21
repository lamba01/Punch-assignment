import './App.css';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Union from './assets/icons/Union';
import FindTalent from './components/FindTalent';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Union />
      <FindTalent />
      <Articles />
    </div>
  );
}

export default App;
