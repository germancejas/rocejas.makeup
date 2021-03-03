import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Esqueleto extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/HGF9YCD/PORTADA-1.jpg'
        var imageTwo = 'https://i.ibb.co/yNH2K82/esqueleto.jpg'
        var imageThree ='https://i.ibb.co/D9qWPjv/esqueleto2.jpg'        
        return (
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
            <div className="video-section">
                <iframe 
                    title="esqueleto"
                    src="https://www.youtube.com/embed/6HmPNEAZQqY"
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                        title="esqueleto1"
                        src="https://www.youtube.com/embed/uV2PyX26zP4"
                        width="640" 
                        height="950" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen
                >
                </iframe>
                <iframe 
                        title="esqueleto2"
                        src="https://www.youtube.com/embed/vUCk_vXDKaY"
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
 
export default Esqueleto;