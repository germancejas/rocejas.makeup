import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class LiloYStitch extends Component {
    render() {
        var liloystitch = 'https://i.ibb.co/zbF2nkB/PORTADA.jpg'
        var liloystitch2 = 'https://i.ibb.co/z645Jvc/lilo.jpg'    
        var liloystitch3 = "https://i.ibb.co/xXw8739/lilo2.jpg" 
        
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
                  <img src={liloystitch}  className="liloystitch" alt="Lilo Y Stitch" />
                  <img src={liloystitch2} className="liloystitch2" alt="Lilo Y Stitch 2" /> 
                  <img src={liloystitch3} className="liloystitch3" alt="Lilo Y Stitch 3" /> 

              </Carousel>   
            </div>
              <div className="video-section">
                <iframe 
                    title="liloystitch"
                    src="https://www.youtube.com/embed/HwxzkeOX-Q8" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="liloystitch1"
                    src="https://www.youtube.com/embed/w7_3JXVDN0U"
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
 
export default LiloYStitch;