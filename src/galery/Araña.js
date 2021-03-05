import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Araña extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/FHCdTjD/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/dQpMw56/Ara-a1.jpg'
        var imageThree ='https://i.ibb.co/5Rh6YyG/Ara-a2.jpg'        
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
                    title="araña"
                    src="https://player.vimeo.com/video/512538925" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen 
                    align="center">
                </iframe>
                <iframe 
                    title="araña2"
                    src="https://player.vimeo.com/video/512538770" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen>
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default Araña;