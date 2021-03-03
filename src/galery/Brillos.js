import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Brillos extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/8XRmJxr/IMG-9915-Facetune-26-05-2020-22-47-13-Original.jpg'
        var imageTwo = 'https://i.ibb.co/ZXh5b2D/IMG-9942-Facetune-26-05-2020-22-40-35-Original.jpg'      
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
              </Carousel>   
            </div>
            <div className="video-section">
                <iframe 
                    title="brillos"
                    src="https://player.vimeo.com/video/512540911" 
                    width="640" 
                    height="1138" 
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
 
export default Brillos;