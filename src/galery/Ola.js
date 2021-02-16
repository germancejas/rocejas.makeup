import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Ola extends Component {
    render() {
        var ola = 'https://i.ibb.co/cCjLDrJ/PORTADA.jpg'
        var ola2 = 'https://i.ibb.co/vQtWq5m/laola.jpg'
        var ola3 ='https://i.ibb.co/HPk56LR/laola2.jpg'        
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
                  <img src={ola}  className="ola" alt="ola" />
                  <img src={ola2} className="ola2" alt="Ola2" /> 
                  <img src={ola3} className="ola3" alt="Ola3" />
              </Carousel>   
            </div>
              <div className="video-section">
              </div>
           </div>
        )
    }
}
 
export default Ola;