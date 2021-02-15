import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Dobby extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/nBmVkLp/PORTADA-4.jpg'
        var imageTwo = 'https://i.ibb.co/gtjgmyh/Dobby2.jpg'
        var imageThree ='https://i.ibb.co/dBVS3kW/Dobby.jpg'        
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
              <div className="video-section">
              <iframe src="https://player.vimeo.com/video/511591348" width="640" height="1138" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen align="center"></iframe>
              </div>
           </div>
        )
    }
}
 
export default Dobby;