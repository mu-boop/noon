import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://k.nooncdn.com/mon/1624077414314-ckq39rd0q0ncgrvr0uvpyk8qc.jpg',
  'https://k.nooncdn.com/mon/1623874312404-ckpzwu6l004cyxqqtjj0dkmre.png',
  'https://k.nooncdn.com/cms/pages/20210617/eea586c5b3ebba2bdb906fad7d20440e/en_banner-01.gif'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;