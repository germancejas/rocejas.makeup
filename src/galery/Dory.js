import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Dory extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/qybrVfg/PORTADA-3.jpg'
        var imageTwo = 'https://i.ibb.co/VL35mZZ/dory2.jpg'
        var imageThree ='https://i.ibb.co/jzWX8wK/dory.jpg'        
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
                    title="dory"
                    src="https://player.vimeo.com/video/511591348" 
                    width="640" 
                    height="1138" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen 
                    align="center">
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default Dory;