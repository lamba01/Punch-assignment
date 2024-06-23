import React from 'react'
import '../styles/findtalent.css'
import { ReactComponent as Skills } from '../assets/icons/ft-skills.svg';
import { ReactComponent as SubCategory} from '../assets/icons/ft-subcategories.svg'
import { ReactComponent as Profile } from '../assets/icons/ft-profiles.svg'
import { ReactComponent as Vector } from '../assets/icons/vector.svg'
import ArrowIcon from './Common/It-Icon/ArrowIcon';
import Icon from './Common/Design-Icon/Icon'

function FindTalent() {
      const items = [
        { src: require('../assets/images/pexels-christina-morillo-1181424-removebg-preview 1.png'), text: 'Shopify Developer' },  
        { src: require('../assets/images/pexels-puwadon-sangngern-13419240-removebg-preview 1.png'), text: 'Magento Developer' },
        { src: require('../assets/images/image 244.png'), text: 'Data Scientist' },
        { src: require('../assets/images/image 247.png'), text: 'Webflow Developer' },
        { src: require('../assets/images/image 246.png'), text: 'Dot Net Developer' },
      ];

      const items2 = [
        { src: require('../assets/images/image 248.png'), text: 'Ux Designer' },  
        { src: require('../assets/images/image 249.png'), text: 'Graphics Designer' },
        { src: require('../assets/images/image 24.png'), text: 'Illustration Artist' },
        { src: require('../assets/images/image 250.png'), text: 'Unreal Engine' },
        { src: require('../assets/images/image 251.png'), text: 'Cinema 4D' },
      ];
  return (
    <div className='find-talent-container'>
        <h1 className='ft-header'>
            Your one-stop marketplace for finding the talent your business needs
        </h1>
        <div className="talent-container">
        <div className="it-container">
        <div className='text-container'>
            <h4 className='text'>
                Find Dev and IT professionals to scale your business.
            </h4>
            <div className="it-subtexts">
            <p> <Skills />  989 skills</p>
            <p><SubCategory /> 45 Sub-Categories</p>
            <p> <Profile /> 1011 Profiles</p>
            </div>
        </div>
        <div className='it-icons'>
            <h6>IT & Development</h6>
            <div className='icon-board'>
                {items.map((item, index) => (
                    <div key={index} className="icon-wrapper">
                        <div className="icon-container">
                            <img src={item.src} alt={`icon-${index + 1}`} className="icon" />
                        </div>
                        <p className="icon-text">{item.text}</p>
                    </div>
                ))}
                <ArrowIcon />
            </div>
        </div>
        </div>
        <div className="design-container">
        <div className='text-container'>
            <h4 className='text'>
                Explore Creative individuals with a keen eye for detail.
            </h4>
            <div className="it-subtexts">
                <p><Skills /> 989 skills</p>
                <p><SubCategory /> 45 Sub-Categories</p>
                <p><Profile /> 1011 Profiles</p>
            </div>
        </div>
        <div className='it-icons'>
            <h6>Design and Creative</h6>
            <div className='icon-board'>
            <Icon />
                {items2.map((item, index) => (
                    <div key={index} className="icon-wrapper">
                        <div className="icon-container">
                            <img src={item.src} alt={`icon-${index + 1}`} className="icon" />
                        </div>
                        <p className="icon-text">{item.text}</p>
                    </div>
                ))}
            </div>  
        </div>
        </div>
        <div className="extra">
        <div className='explore-container'>
            <div className="explore"><Vector /></div>
            <span>Explore More</span>
        </div>
        <p><strong>30 more</strong> to explore</p>
        </div>
        </div>
    </div>
  )
}

export default FindTalent