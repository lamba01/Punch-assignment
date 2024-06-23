import React from 'react'
import Jason from '../assets/images/image 6.png'
import Groove from '..//assets/images/Groove.png'
import { ReactComponent as Whitegroove } from '../assets/icons/groove.svg'
import { ReactComponent as Quote } from '../assets/icons/quote.svg'
import Icon from '../assets/images/Vector.png';

import '../styles/article.css'

function Articles() {
  return (
    <main>
        <Quote className='quote'/>
        <div className='sub-containers'>
            <h2 className='article-header'>How it worked for Jason <img className='jason' src={Jason} alt="Jason" /> at <img src={Groove} className='groove' alt="" /> </h2>
            <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.</p>
            <div className='buttons'>
            <button className='arrow-container'><img src={Icon} className='rotated-img' alt="" /></button>
            <button className='arrow-container'><img src={Icon} alt="" /></button>
            </div>  
        </div>
        <div className='sub-container2'>
            <div className='profile'>
                <div className='groove-container'>
                    <Whitegroove />
                </div>
                <div>
                    <h1>Jason Makki</h1>
                    <p>Engineer at Groove</p>
                    <p>San Francisco</p>
                </div>
            </div>
            <p>
                Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. 
                Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.
                Zwilt enabled us to deliver on time and they’ve been heavy hitters.
            </p>
        </div>
    </main>
  )
}

export default Articles