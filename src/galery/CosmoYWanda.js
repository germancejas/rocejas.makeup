import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class CosmoYWanda extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/CQx3wRZ/PORTADA-1.jpg'
        var imageTwo = 'https://i.ibb.co/0B2xdyj/Wanda.jpg'
        var imageThree ='https://i.ibb.co/L8CMMtZ/Cosmo.jpg'        
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
                  <img src={imageThree} className="imageThree" alt="Galeria" />
              </Carousel>   
            </div>
              <div className="video-section">
                <iframe
                    title="cosmoywanda" 
                    src="https://player.vimeo.com/video/512541989" 
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
                <iframe
                    title="cosmoywanda" 
                    src="https://www.youtube.com/embed/68p48gsxjYw" 
                    width="600" 
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
 
export default CosmoYWanda;