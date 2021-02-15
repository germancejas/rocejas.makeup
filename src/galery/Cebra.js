import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Cebra extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/7v7CHrr/PORTADA-8.jpg'
        var imageTwo = 'https://i.ibb.co/NKP93dj/Cebra1.jpg'
    
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
           </div>
        )
    }
}
 
export default Cebra;