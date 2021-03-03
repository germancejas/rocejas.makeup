import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Groot extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/yh3H9B5/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/StPCNWD/groot.jpg'
        var imageThree ='https://i.ibb.co/wWF12NC/groot2.jpg'        
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
                    title="groot"
                    src="https://www.youtube.com/embed/D21HaWI_90s"
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                    >
                </iframe>
                <iframe 
                    title="groot2"
                    src="https://www.youtube.com/embed/y7JHaTjgHSo" 
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="groot3"
                    src="https://player.vimeo.com/video/512552143" 
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
 
export default Groot;







