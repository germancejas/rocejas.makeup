import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Enredados extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/56n9tgk/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/yX0brpz/enredadosa.jpg'
        var imageThree ='https://i.ibb.co/0YdNPqB/enredados.jpg'        
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
                title="enredados1"
                src="https://player.vimeo.com/video/511591348" 
                width="640" 
                height="1138" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen 
                align="center"></iframe>
            <iframe 
                title="enredados2"
                src="https://player.vimeo.com/video/511591348" 
                width="640" 
                height="1138" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen 
                align="center"></iframe>  
              </div>
           </div>
        )
    }
}
 
export default Enredados;