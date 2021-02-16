import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Mariposa extends Component {
    render() {
        var mariposa1 = 'https://i.ibb.co/Gnpk44z/PORTADA-2.jpg';
        var mariposa2 = 'https://i.ibb.co/Cwssk0n/Mariposa.jpg';
  
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
                  <img src={mariposa1}  className="mariposa1" alt="mariposa1" />
                  <img src={mariposa2} className="mariposa2" alt="mariposa2" /> 

              </Carousel>   
            </div>
            <div className="video-section">

            </div>
           </div>
        )
    }
}
 
export default Mariposa;