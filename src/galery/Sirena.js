import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Sirena extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/fdrg2dQ/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/6BNfdSy/sirena.jpg'
    
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
                    title="sirena" 
                    src="https://player.vimeo.com/video/518854526" 
                    width="640" 
                    height="1000" 
                    frameborder="0" 
                    allowfullscreen
                >
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default Sirena;