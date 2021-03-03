import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Up extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/LrL7JtR/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/vB0cYsv/up.jpg'

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
                    title="up" 
                    src="https://player.vimeo.com/video/518798666" 
                    width="640" 
                    height="803" 
                    frameborder="0" 
                    allowfullscreen
                    >
                    </iframe>  
                <iframe 
                    title="up1" 
                    src="https://player.vimeo.com/video/518797529" 
                    width="640" height="1137" 
                    frameborder="0" 
                    allowfullscreen
                >
                </iframe>   
              </div>
           </div>
        )
    }
}
 
export default Up;