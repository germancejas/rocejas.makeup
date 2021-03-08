import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class CadaverdelaNovia extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/BqBZkQP/PORTADA-2.jpg'
        var imageTwo = 'https://i.ibb.co/vZcFRjN/noviacadaver.jpg'
   
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
                    title="cadaverdelanovia"
                    src="https://www.youtube.com/embed/Y_7IW8A45WA" 
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
 
export default CadaverdelaNovia;