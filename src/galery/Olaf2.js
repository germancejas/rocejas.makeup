import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Olaf2 extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/YDR0g6v/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/vYwWsWz/frozen.jpg'
   
        return (
            <div className="galery">
             <div className="galerycarousel">
              <Carousel
                  arrows
                  className="carousel"
                  slidesPerPage={1}
                  slidesPerScroll={1}
                  animationSpeed={2500}
                  autoPlay={2000}
                  stopAutoPlayOnHover
                  itemWidth={500}
                  clickToChange
                  centered
              >  
                  <img src={imageOne}  className="imageOne" alt="Galeria" />
                  <img src={imageTwo} className="imageTwo" alt="Galeria" /> 

              </Carousel>   
            </div>
              <div className="video-section">
                <iframe 
                    title="olaf 2"
                    src="https://player.vimeo.com/video/518885484" 
                    width="720" 
                    height="730" 
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
 
export default Olaf2;