import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Simba extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/3CJ4XSc/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/vHXNGhY/simba.jpg'
       
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
                    title="Simba1" 
                    src="https://player.vimeo.com/video/518855770" 
                    width="720" 
                    height="730"  
                    frameborder="0" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="Simba2"                    
                    src="https://player.vimeo.com/video/518856458" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    title="simba3"
                    src="https://player.vimeo.com/video/518857419" 
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
 
export default Simba;