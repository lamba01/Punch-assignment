// import React from 'react'
// import { ReactComponent as Car1 } from '../assets/icons/carousel1.svg'
// import { ReactComponent as Car2 } from '../assets/icons/carousel2.svg'
// import { ReactComponent as Car3 } from '../assets/icons/carousel3.svg'

// import '../styles/carousel.css'

// function Carousel() {
//   return (
//     <div className='carousel'>
//         <div>
//             <h1>Why choose Zwilt</h1>
//             <p>We take complex hiring processes - 
//                and simplify them. Connecting you to the world’s highly qualified talent pool.
//             </p>
//         </div>
//         <div className='carousel_1'>
//             <Car1 className='t'/>
//             <Car2 className='t'/>
//             <Car3 className='t'/>
//         </div>
//     </div>
//   )
// }

// export default Carousel

import React from 'react';
// import Car1 from './Car1'; 
// import Car2 from './Car2';
// import Car3 from './Car3';
import { ReactComponent as Car1 } from '../assets/icons/carousel1.svg'
import { ReactComponent as Car2 } from '../assets/icons/carousel2.svg'
import { ReactComponent as Car3 } from '../assets/icons/carousel3.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../styles/carousel.css'

const Carousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
    //   cssEase: 'linear',
    };
  
    return (
      <div className='carousel'>
        <div className='carousel-text'>
          <h1>Why choose Zwilt</h1>
          <p>
            We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
          </p>
        </div>
        <Slider {...settings} className='carousel-slider'>
          <div className='carousel-item'>
            <Car1 className='car' />
          </div>
          <div className='carousel-item'>
            <Car2 className='car' />
          </div>
          <div className='carousel-item'>
            <Car3 className='car' />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Carousel;