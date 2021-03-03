import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class ConejoBlanco extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/QXRnXMr/PORTADA-7.jpg'
        var imageTwo = 'https://i.ibb.co/wC5HtRQ/conejo2.jpg'
        var imageThree ='https://i.ibb.co/C57J1kX/conejo1.jpg'        
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
                    title="conejoblanco"
                    src="https://player.vimeo.com/video/512541722" 
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
 
export default ConejoBlanco;