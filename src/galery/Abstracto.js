import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Abstracto extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/6RZWwjY/PORTADA-1.jpg'
        var imageTwo = 'https://i.ibb.co/ZGv0sdg/Abstracto.jpg'      
        return (
            <div className="galery">
             <div className="galerycarousel">
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
 
export default Abstracto;