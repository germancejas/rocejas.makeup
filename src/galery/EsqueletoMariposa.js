import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class EsqueletoMariposa extends Component {
    render() {
        var esqueletomariposa1 = 'https://i.ibb.co/cLqKNcw/PORTADA.jpg';
        var esqueletomariposa2 = 'https://i.ibb.co/X5gGfg8/esqmariposa.jpg';
        var esqueletomariposa3 ='https://i.ibb.co/XW0rdvB/esqmariposa2.jpg';    
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
                  <img src={esqueletomariposa1}  className="esqueletomariposa1" alt="esqueletomariposa1" />
                  <img src={esqueletomariposa2} className="esqueletomariposa2" alt="esqueletomariposa2" /> 
                  <img src={esqueletomariposa3} className="esqueletomariposa3" alt="esqueletomariposa3" />
              </Carousel>   
            </div>
            <div className="video-section">
            <iframe 
                title="esqueletomariposa"
                src="https://www.youtube.com/embed/qu0b-5_D7eM"
                width="640" 
                height="950" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen
                >
                </iframe>
                <iframe 
                    title="esqueletomariposa1"
                    src="https://player.vimeo.com/video/512549530"
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
 
export default EsqueletoMariposa;