import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Leon extends Component {
    render() {
        var leon = 'https://i.ibb.co/ZgfMW9W/PORTADA-1.jpg'
        var leon2 = 'https://i.ibb.co/8bgKqc0/Leon.jpg'    

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
                  <img src={leon}  className="leon" alt="Leon" />
                  <img src={leon2} className="leon2" alt="Leon 2" /> 

              </Carousel>   
            </div>
              <div className="video-section">
              </div>
           </div>
        )
    }
}
 
export default Leon;