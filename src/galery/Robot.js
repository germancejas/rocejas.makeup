import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Robot extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/swNcND3/PORTADA-3.jpg'
        var imageTwo = 'https://i.ibb.co/59mHByr/robot.jpg'
        var imageThree ='https://i.ibb.co/Yy34n4j/robot2.jpg'        
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
                  <img src={imageOne}  className="imageOne" alt="Galeria" />
                  <img src={imageTwo} className="imageTwo" alt="Galeria" /> 
                  <img src={imageThree} className="imageThree" alt="Galeria" />
              </Carousel>   
            </div>
            <div className="video-section">
                <iframe 
                    title="robot1"
                    src="https://player.vimeo.com/video/518858376" 
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>    
                <iframe 
                    title="robot2" 
                    src="https://player.vimeo.com/video/518858764" 
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allowfullscreen
                >
                </iframe>
                <iframe 
                    title="robot3"
                    src="https://player.vimeo.com/video/518862492" 
                    width="640" 
                    height="950" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
                <iframe
                    title="robot4" 
                    src="https://player.vimeo.com/video/518870966" 
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
 
export default Robot;