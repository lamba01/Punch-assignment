import React from 'react'
import { ReactComponent as One } from '../assets/icons/one.svg';
import { ReactComponent as Devs } from '../assets/icons/developers.svg';
import { ReactComponent as Two } from '../assets/icons/two.svg';
import { ReactComponent as Eva } from '../assets/icons/evaluate.svg';
import { ReactComponent as Three } from '../assets/icons/three.svg';
import { ReactComponent as Build } from '../assets/icons/building.svg';
import '../styles/joinus.css'

import ForwardButton from './Common/Button/ForwardButton';

function JoinUs() {
  return (
    <div className='joinus-main'>
        <h2>
            Start your journey today.
        </h2>
        <div className='one'>
            <One  className='one-icon'/>     
            <div>
                <h3 className='one-header'>Find your next star performer.</h3>
                <p className='one-paragraph'>Explore the vast Zwilt marketplace 
                  to find the candidate that meets your needs.</p>
                <button className='join-btn'><ForwardButton /> Join Now</button>
            </div>
              <Devs className='developers'/>          
        </div>
        <div className='two'>
            <Two className='two-icon'/>
            <div>
                <h3 className='two-header'>Evaluate to your heart’s content.</h3>
                <p className='two-paragraph'>Assess the candidate through work history, 
                  transparent tests and video interviews.</p>
                <button className='join-btn'><ForwardButton />Browse More</button>
            </div>
              <Eva className='content'/>          
        </div>
        <div className='three'>
            <Three className='three-icon'/>
            <div>
                <h3 className='three-header'>Evaluate to your heart’s content.</h3>
                <p className='three-paragraph'>Assess the candidate through work history, 
                  transparent tests and video interviews.</p>
                <button className='join-btn'><ForwardButton />Browse More</button>
            </div>
              <Build className='build'/>          
        </div>
    </div>
  )
}

export default JoinUs