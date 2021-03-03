import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class GatoSonriente extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/2kRLjHw/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/N6b69Wg/gatosonriente.jpg'
        var gatosonriente2 = "https://i.ibb.co/vX8SYdG/gatosonriente2.jpg"
    
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
                  <img src={gatosonriente2} className="gatosonriente2" alt="Gato Sonriente 2" /> 
              </Carousel>   
            </div>
              <div className="video-section">
                <iframe 
                    title="gatosonriente"
                    src="https://www.youtube.com/embed/8KkvItGD86M" 
                    width="640" 
                    height="950" 
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
 
export default GatoSonriente;