import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';

class Avatar extends Component {
    render() {
        var imageOne = 'https://fotos.subefotos.com/3a71d866c3a6ee1f3fef15567f6758d6o.jpg'
        var imageTwo = 'https://fotos.subefotos.com/823c38887f9a847345b56b1344241975o.jpg'
        var imageThree ='https://fotos.subefotos.com/c7520e892b6270a8b0c41df5aa9d7475o.jpg'
        var imageFive = "https://fotos.subefotos.com/269255f036739c2ef790a0a40461c86eo.jpg"
        var imageSix ="https://fotos.subefotos.com/ea5e9b5b1a7f7f37a8c142c8cdfed46bo.jpg"
        var imageSeven ="https://fotos.subefotos.com/6dd853b5cbb77f5c2863b5f443d8e5c0o.jpg"
        var imageEight ="https://fotos.subefotos.com/8f791e5f6d76691e47572a897f2f9025o.jpg"
        var imageNine ="https://fotos.subefotos.com/16d9f2324634bc216a51d75af31570cao.jpg"
        var imageTen ="https://fotos.subefotos.com/59522530a4e7a8007e690376ea6d948bo.jpg"
        
        return (
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
            <img src={imageFive} className="imageFive" alt="Galeria" />
            <img src={imageSix} className="imageSix" alt="Galeria" />
            <img src={imageSeven} className="imageSeven" alt="Galeria" />
            <img src={imageEight} className="imageEight" alt="Galeria" />
            <img src={imageNine} className="imageNine" alt="Galeria" />
            <img src={imageTen} className="imageTen" alt="Galeria" />
          </Carousel>   
        )
    }
}
 
export default Avatar;