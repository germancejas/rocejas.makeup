import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Grinch extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/gd7MY5L/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/ry0c7by/grinch.jpg'
    
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
                    title="grinch2" 
                    src="https://player.vimeo.com/video/512553115" 
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>  
                <iframe 
                    title="grinch"
                    src="https://player.vimeo.com/video/512552529" 
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
 
export default Grinch;