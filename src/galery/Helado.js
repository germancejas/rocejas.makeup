import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Helado extends Component {
    render() {
        var helado = 'https://i.ibb.co/Yjbf2Jt/PORTADA.jpg'
        var helado1 = 'https://i.ibb.co/sm89m6D/helado.jpg'       
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
                  <img src={helado}  className="helado" alt="Helado" />
                  <img src={helado1} className="helado1" alt="Helado1" /> 

              </Carousel>   
            </div>
              <div className="video-section">
              <iframe 
                    title="helado"
                    src="https://www.youtube.com/embed/ybZT_d3_ugk"
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
 
export default Helado;