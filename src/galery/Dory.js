import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Dory extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/qybrVfg/PORTADA-3.jpg'
        var imageTwo = 'https://i.ibb.co/VL35mZZ/dory2.jpg'
        var imageThree ='https://i.ibb.co/jzWX8wK/dory.jpg'        
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
                    title="dory"
                    src="https://player.vimeo.com/video/511591348" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen 
                    align="center"
                >
                </iframe>    
                <iframe 
                    title="dory1"
                    src="https://www.youtube.com/embed/lwfjaaKb-wM" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen 
                    align="center"
                >
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default Dory;