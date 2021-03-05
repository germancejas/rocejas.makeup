import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Ola extends Component {
    render() {
        var ola = 'https://i.ibb.co/cCjLDrJ/PORTADA.jpg'
        var ola2 = 'https://i.ibb.co/vQtWq5m/laola.jpg'
        var ola3 ='https://i.ibb.co/HPk56LR/laola2.jpg'        
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
                  <img src={ola}  className="ola" alt="ola" />
                  <img src={ola2} className="ola2" alt="Ola2" /> 
                  <img src={ola3} className="ola3" alt="Ola3" />
              </Carousel>   
            </div>
              <div className="video-section">
              <iframe 
                    title="ola"
                    src="https://www.youtube.com/embed/fcCKENOqa5w" 
                    width="720" 
                    height="730"  
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="ola1"
                    src="https://www.youtube.com/embed/oJ0m2sYb5Pc"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default Ola;