import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class EsqueletoDiaYNoche extends Component {
    render() {
        var imageOne = "https://i.ibb.co/WcJWZnC/PORTADA-5.jpg"
        var imageTwo = 'https://i.ibb.co/C1DT1Rk/diaynoche2.jpg'
        var imageThree = 'https://i.ibb.co/fHkdJm7/diaynoche.jpg'        
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
                    title="esqueletodiaynoche"
                    src="https://www.youtube.com/embed/a4AlTotouPU" 
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
 
export default EsqueletoDiaYNoche;