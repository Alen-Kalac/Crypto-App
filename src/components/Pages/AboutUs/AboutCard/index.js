import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import './index.scss';


import js from '../assets/js.png'
import scss from '../assets/scss.png'
import html from '../assets/html.png'

const AboutCard = ({ img, name, location, description, githubLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`container ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="content">
        <div className='upper-content'>
          <img src={img} alt={name} />
          <h3 className="name">{name}</h3>
          <p className='location'>{location}</p>
        </div>

        <div className="bottom-content">
          <p className='description'>{description}</p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="back-content">
        <div className='js'>JS <span><img src={js} alt="" /></span></div>
        <div className='scss'>SCSS <span><img src={scss} alt="" /></span></div>
        <div className='html'>HTML <span><img src={html} alt="" /></span></div>
      </div>
    </div>
  );
};

export default AboutCard;
