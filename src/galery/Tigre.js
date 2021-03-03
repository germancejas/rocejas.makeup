import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Tigre extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/yPX72hK/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/nzcTW7M/tigre.jpg'
      
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
                  <img src={imageOne}  className="imageOne" alt="Galeria" />
                  <img src={imageTwo} className="imageTwo" alt="Galeria" /> 

              </Carousel>   
            </div>
              <div className="video-section">
                <iframe 
                    src="https://player.vimeo.com/video/518799631" 
                    width="640" 
                    height="568" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                    >
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default Tigre;