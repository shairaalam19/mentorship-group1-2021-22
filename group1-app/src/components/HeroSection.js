import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

export function HeroSection() {
  return (
    <div className='hero-container'>
        <video src ='/videos/video-3.mp4' autoPlay loop muted />  
        <h1>HELLO WORLD</h1>
        <p> Pursue your happiness</p>
          <div className='hero-btns'>
           <Button className = 'btn' buttonStyle = 'btn--outline' 
            buttonSize='btn--large'> GET STARTED </Button> 
        
       <Button className = 'btn' buttonStyle = 'btn--primary' 
             buttonSize='btn--large'> WATCH TRAILER <i className = 'far fa-play-circle' />
            
            </Button>  
        </div>  
    </div>
  );
}

export default HeroSection;