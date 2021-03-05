import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Netflix extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/fSGjZVD/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/hd8cG8w/netflix.jpg'
     
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
                    title="netflix3"
                    src="https://www.youtube.com/embed/uez5Z9DeU28"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix1"
                    src="https://www.youtube.com/embed/L4So28aCL4Y"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix2"
                    src="https://www.youtube.com/embed/6Wshrk7M2yc"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
              </div>  
            <div className="video-section">
              <iframe 
                    title="netflix3"
                    src="https://www.youtube.com/embed/uez5Z9DeU28"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix4"
                    src="https://www.youtube.com/embed/RmRdq1FVCfI"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix5"
                    src="https://www.youtube.com/embed/AzZawMn1Jw4"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
              </div>  
            <div className="video-section">
              <iframe 
                    title="netflix6"
                    src="https://www.youtube.com/embed/h8peULFiAOQ" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix7"
                    src="https://www.youtube.com/embed/l8oGWrbCJ4Q"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix8"
                    src="https://www.youtube.com/embed/5yoNuWc5nb8"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
              </div>  
              <div className="video-section">
              <iframe 
                    title="netflix9"
                    src="https://www.youtube.com/embed/3nMQgo_qCjc" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix10"
                    src="https://www.youtube.com/embed/BxH11qDFNUA"
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
              <iframe 
                    title="netflix11"
                    src="https://www.youtube.com/embed/SApNuxbZVxA" 
                    width="720" 
                    height="730" 
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
 
export default Netflix;