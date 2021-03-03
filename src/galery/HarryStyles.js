import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class HarryStyles extends Component {
    render() {
        var harrystyles = 'https://i.ibb.co/bsMZ0tB/PORTADA.jpg'
        var harrystyles1 = 'https://i.ibb.co/Sdq7D2s/harry.jpg'       
        return (
            <div>
             <div>
              <Carousel
                  arrows
                  className="carousel"
                  slidesPerPage={1}
                  slidesPerScroll={1}
                  animationSpeed={2500}
                  autoPlay={1500}
                  stopAutoPlayOnHover
                  itemWidth={500}
                  clickToChange
                  centered
              >  
                  <img src={harrystyles}  className="harrystyles" alt="Harry Styles" />
                  <img src={harrystyles1} className="harrystyles1" alt="Harry Styles 1" /> 
              </Carousel>   
            </div>
              <div className="video-section">
              <iframe 
                    title="harrystyles"
                    src="https://www.youtube.com/embed/zJ9GG9JqOaw"
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="harrystyles1"
                    src="https://www.youtube.com/embed/fHkpD6i4fSg"
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default HarryStyles;