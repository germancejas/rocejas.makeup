import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Cebra extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/7v7CHrr/PORTADA-8.jpg'
        var imageTwo = 'https://i.ibb.co/NKP93dj/Cebra1.jpg'
    
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

              </Carousel>   
            </div>
            <div className="video-section">
                <iframe 
                    title="cebra"
                    width="720" 
                    height="730" 
                    src="https://www.youtube.com/embed/DVBSdaF9iaw" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
            </div>
           </div>
        )
    }
}
 
export default Cebra;