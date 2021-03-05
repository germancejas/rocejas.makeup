import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Olaf extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/4V30bdF/PORTADA-1.jpg'
        var imageTwo = 'https://i.ibb.co/k8PvLLb/olaf.jpg'
        var imageThree ='https://i.ibb.co/bsqvvqt/olaf2.jpg'        
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
                  <img src={imageThree} className="imageThree" alt="Galeria" />
              </Carousel>   
            </div>
              <div className="video-section">
                <iframe 
                    title="olaf1"
                    src="https://streamable.com/e/63owty" 
                    frameborder="0" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    title="olaf2"
                    src="https://streamable.com/e/mt927o" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe> 
                <iframe 
                    title="olaf3"
                    src="https://www.youtube.com/embed/2Up-pr8axF8" 
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
 
export default Olaf;