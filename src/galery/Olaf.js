import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Olaf extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/4V30bdF/PORTADA-1.jpg'
        var imageTwo = 'https://i.ibb.co/k8PvLLb/olaf.jpg'
        var imageThree ='https://i.ibb.co/bsqvvqt/olaf2.jpg'        
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
                    src="https://streamable.com/e/63owty" 
                    frameborder="0" 
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
 
export default Olaf;