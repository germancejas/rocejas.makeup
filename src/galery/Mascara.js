import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Mascara extends Component {
    render() {
        var mascara = 'https://i.ibb.co/RCzV65L/PORTADA-1.jpg';
        var mascara2 = 'https://i.ibb.co/XkwwYph/mascara.jpg';
        var mascara3 = "https://i.ibb.co/yFmX0C7/mascara2.jpg"
     
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
                  <img src={mascara}  className="mascara" alt="Mascara" />
                  <img src={mascara2} className="mascara2" alt="Mascara2" /> 
                  <img src={mascara3} className="mascara3" alt="mascara3" /> 

              </Carousel>   
            </div>
              <div className="video-section">
              </div>
           </div>
        )
    }
}
 
export default Mascara;