import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Stitch extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/FbYC3ZL/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/PT7RhDL/stitch.jpg'     
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
                    title="Stitch" 
                    src="https://player.vimeo.com/video/518804254" 
                    width="640" 
                    height="800" 
                    frameborder="0" 
                    allowfullscreen
                >  
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default Stitch;