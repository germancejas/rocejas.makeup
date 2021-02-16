import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Olaf2 extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/YDR0g6v/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/vYwWsWz/frozen.jpg'
   
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
              </div>
           </div>
        )
    }
}
 
export default Olaf2;