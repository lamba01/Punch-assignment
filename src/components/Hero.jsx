import React, { useState } from 'react';
import image from '../assets/images/zwilt-tba-1-01 2.png';
import submitIcon from '../assets/images/Vector.png';
import '../styles/hero.css';

function Hero() {
  const [activeHeader, setActiveHeader] = useState('IT & Development');
  const [activeGridItem, setActiveGridItem] = useState('');

  return (
    <div className='hero'>
    <div className='main-hero-container'>
      <h1 className='hero-header-text'>
        Finding the right fit <img src={image} alt="Right Fit " /> has never been easier
      </h1>
      <p className='hero-paragraph'>
        With our rigorous pre-vetting process, 
        you'll never have to worry about finding the ideal candidate ever again.
      </p>
      <div>
        <input type="text" name="search"  className='hero-input' id="" />
        <button className='submit-btn' type='submit'><img src={submitIcon} alt="" /></button>
      </div>     
      <div className="hero-container">
        <div className="hero-header">
          <h3 
            className={activeHeader === 'IT & Development' ? 'active-header' : ''} 
            onClick={() => setActiveHeader('IT & Development')}
          >
            IT & Development
          </h3>
          <h3
            className={activeHeader === 'Design and Creative' ? 'active-header' : ''} 
            onClick={() => setActiveHeader('Design and Creative')}
          >
            Design and Creative
          </h3>
        </div>
        <div className="grid-container">
          {['Python Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer', 'Data Scientist', 'UI/UX Designer', 'Graphic Designer', 'Web Designer', 'Product Designer', 'Illustrator', 'Animator'].map((item, index) => (
            <div
              key={index}
              className={`grid-item ${activeGridItem === item ? 'active-grid-item' : ''}`}
              onClick={() => setActiveGridItem(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;


