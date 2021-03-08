import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Avatar extends Component {
    render() {
        var avatar1 = 'https://i.ibb.co/1QMx9k6/PORTADa-2.jpg';
        var avatar2 = 'https://i.ibb.co/5Kyqz19/Avatar3.jpg';
        var avatar3 ='https://i.ibb.co/jDD3j7s/Avatar2.jpg';    
        var avatar4 ='https://i.ibb.co/jDD3j7s/Avatar2.jpg';       
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
                  <img src={avatar1}  className="avatar1" alt="avatar1" />
                  <img src={avatar2} className="avatar2" alt="avatar2" /> 
                  <img src={avatar3} className="avatar3" alt="avatar3" />
                  <img src={avatar4} className="avatar4" alt="avatar4" />
              </Carousel>   
            </div>
            <div className="video-section">
                <iframe 
                    title="avatar"
                    src="https://player.vimeo.com/video/512540274" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                > 
                </iframe>
                <iframe 
                    title="avatar1"
                    src="https://player.vimeo.com/video/512540113" 
                    width="720" 
                    height="730" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                >  
                </iframe>
                <iframe 
                    title="avatar2"
                    src="https://player.vimeo.com/video/512539902" 
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
 
export default Avatar;