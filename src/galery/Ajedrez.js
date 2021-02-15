import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Ajedrez extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/fpRPCw5/PORTADA-1.jpg'
        var imageTwo = 'https://i.ibb.co/1RjW0pX/Ajedrez1.jpg'
        var imageThree ='https://i.ibb.co/xSTzVdg/Ajedrez2.jpg'        
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
           </div>
        )
    }
}
 
export default Ajedrez;