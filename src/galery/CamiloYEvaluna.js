import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class CamiloYEvaluna extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/RpyHm34/PORTADA-9.jpg'
        var imageTwo = 'https://i.ibb.co/LnGfSvk/Camilo1.jpg'
        var imageThree ='https://i.ibb.co/FY5wf7q/Camilo2.jpg'        
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
                  <img src={imageOne}  className="imageOne" alt="Galeria" />
                  <img src={imageTwo} className="imageTwo" alt="Galeria" /> 
                  <img src={imageThree} className="imageThree" alt="Galeria" />
              </Carousel>   
            </div>
           </div>
        )
    }
}
 
export default CamiloYEvaluna;