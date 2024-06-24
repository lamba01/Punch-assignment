import React, { Suspense, lazy } from 'react';
import './App.css';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Union = lazy(() => import('./assets/icons/Union'));
const FindTalent = lazy(() => import('./components/FindTalent'));
const Articles = lazy(() => import('./components/Articles'));
const TrustSection = lazy(() => import('./components/TrustSection'));
const JoinUs = lazy(() => import('./components/JoinUs'));
const Faq = lazy(() => import('./components/Faq'));
const Footer = lazy(() => import('./components/Footer'));
const Carousel = lazy(() => import('./components/Carousel'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <Union />
        <FindTalent />
        <Articles />
        <TrustSection />
        <JoinUs />
        <Carousel />
        <Faq />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

