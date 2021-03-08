import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Sirena extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/fdrg2dQ/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/6BNfdSy/sirena.jpg'
    
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
                    title="sirena" 
                    src="https://player.vimeo.com/video/518854526" 
                    width="720" 
                    height="730" 
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