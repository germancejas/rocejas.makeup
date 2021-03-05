import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Enredados extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/56n9tgk/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/yX0brpz/enredadosa.jpg'
        var imageThree ='https://i.ibb.co/0YdNPqB/enredados.jpg'        
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
                title="enredados1"
                src="https://www.youtube.com/embed/xK3MdRKg7MA" 
                width="720" 
                height="730" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen 
                align="center"></iframe>
            <iframe 
                title="enredados2"
                src="https://www.youtube.com/embed/toBFzxrBC5M" 
                width="720" 
                height="730" 
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