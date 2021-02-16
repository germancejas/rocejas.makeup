import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class LiloYStitch extends Component {
    render() {
        var liloystitch = 'https://i.ibb.co/zbF2nkB/PORTADA.jpg'
        var liloystitch2 = 'https://i.ibb.co/z645Jvc/lilo.jpg'    
        var liloystitch3 = "https://i.ibb.co/xXw8739/lilo2.jpg" 
        
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
                  <img src={liloystitch}  className="liloystitch" alt="Lilo Y Stitch" />
                  <img src={liloystitch2} className="liloystitch2" alt="Lilo Y Stitch 2" /> 
                  <img src={liloystitch3} className="liloystitch3" alt="Lilo Y Stitch 3" /> 

              </Carousel>   
            </div>
              <div className="video-section">
              </div>
           </div>
        )
    }
}
 
export default LiloYStitch;