import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Social extends Component {
    render() {
        var social1 = 'https://i.ibb.co/NZzCLR3/PORTADA.jpg';
        var social2 = 'https://i.ibb.co/tx0d4S5/social1.jpg';
        var social3 ='https://i.ibb.co/W2DqbPX/PORTADA-1.jpg';    
        var social4 = "https://i.ibb.co/FWWXnZY/social2.jpg";
        var social5 = "https://i.ibb.co/6mXtzPR/social3.jpg";    
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
                  <img src={social1}  className="social1" alt="Social 1" />
                  <img src={social2} className="social2" alt="Social 2" /> 
                  <img src={social3} className="social3" alt="Social 3" />
                  <img src={social4} className="social4" alt="Social 4" />
                  <img src={social5} className="social5" alt="Social 5" />
              </Carousel>   
            </div>
              <div className="video-section">
              
              </div>
           </div>
        )
    }
}
 
export default Social;