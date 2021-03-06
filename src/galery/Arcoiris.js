import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Arcoiris extends Component {
    render() {
        var imageOne = 'https://fotos.subefotos.com/3a71d866c3a6ee1f3fef15567f6758d6o.jpg'
        var imageTwo = 'https://fotos.subefotos.com/823c38887f9a847345b56b1344241975o.jpg'
        var imageThree ='https://fotos.subefotos.com/c7520e892b6270a8b0c41df5aa9d7475o.jpg'        
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
              <div className="video-section">
                <iframe 
                    src="https://player.vimeo.com/video/511591348" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen 
                    align="center"
                >
                </iframe>
            </div>
           </div>
        )
    }
}
 
export default Arcoiris;