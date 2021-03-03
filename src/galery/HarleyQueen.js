import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class HarleyQueen extends Component {
    render() {
        var harleyqueen = 'https://i.ibb.co/3sPTZd6/PORTADA.jpg'
        var harleyqueen1 = 'https://i.ibb.co/vkQk32h/harley.jpg' 
        var harleyqueen2 = 'https://i.ibb.co/JymjD2q/harley2.jpg'      
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
                  <img src={harleyqueen}  className="harleyqueen" alt="Harley Queen" />
                  <img src={harleyqueen1} className="harleyqueen1" alt="Harley Queen 1" /> 
                  <img src={harleyqueen2} className="harleyqueen2" alt="Harley Queen 2" />
              </Carousel>   
            </div>
              <div className="video-section">
              <iframe 
                    title="harleyqueen"
                    src="https://player.vimeo.com/video/512931836"
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="harleyqueen1"
                    src="https://www.youtube.com/embed/Qs_l_NZ9ALA"
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
              </div>
           </div>
        )
    }
}
 
export default HarleyQueen;