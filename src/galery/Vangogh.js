import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';


class Vangogh extends Component {
    render() {
        var imageOne = 'https://i.ibb.co/gmrZGx1/PORTADA.jpg'
        var imageTwo = 'https://i.ibb.co/XtHCZLr/IMG-2317-Facetune-16-07-2020-19-26-43-Original.jpg'
        var imageThree ='https://i.ibb.co/4JbXBhY/IMG-2297-Facetune-16-07-2020-19-24-31-Original.jpg'
        
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
                title="tiktokvideos"
                src="https://player.vimeo.com/video/518778964"
                width="720" 
                height="730" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen 
                align="center">
            </iframe>
            <iframe 
                src="https://player.vimeo.com/video/518624584" 
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
 
export default Vangogh;