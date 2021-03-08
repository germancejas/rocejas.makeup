import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Demogorgon extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/8XJDPSX/PORTADA-6.jpg'
        var imageTwo = 'https://i.ibb.co/qnRdTKp/demogorgon.jpg'       
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
                  <img src={imageOne}  className="demogorgon1" alt="Demogorgon1" />
                  <img src={imageTwo} className="demogorgon2" alt="Demogorgon2" /> 
              </Carousel>   
            </div>
              <div className="video-section">
                <iframe 
                    title="demogorgon"
                    src="https://player.vimeo.com/video/512542602" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="demogorgon2"
                    src="https://player.vimeo.com/video/512542731" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                    >
                    </iframe>
              </div>
           </div>
        )
    }
}
 
export default Demogorgon;