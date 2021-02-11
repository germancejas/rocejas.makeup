import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Link } from 'react-router-dom';

class Home extends Component {
   render() {
    const imageOne = 'https://fotos.subefotos.com/3a71d866c3a6ee1f3fef15567f6758d6o.jpg'
    const imageTwo = 'https://fotos.subefotos.com/823c38887f9a847345b56b1344241975o.jpg'
    const imageThree ='https://fotos.subefotos.com/c7520e892b6270a8b0c41df5aa9d7475o.jpg'
    const imageFour = "https://fotos.subefotos.com/826c93ac2409f320549f66a950120346o.jpg"
    const imageFive = "https://fotos.subefotos.com/269255f036739c2ef790a0a40461c86eo.jpg"
    const imageSix ="https://fotos.subefotos.com/ea5e9b5b1a7f7f37a8c142c8cdfed46bo.jpg"
    const imageSeven ="https://fotos.subefotos.com/6dd853b5cbb77f5c2863b5f443d8e5c0o.jpg"
    const imageEight ="https://fotos.subefotos.com/8f791e5f6d76691e47572a897f2f9025o.jpg"
    const imageNine ="https://fotos.subefotos.com/16d9f2324634bc216a51d75af31570cao.jpg"
    const imageTen ="https://fotos.subefotos.com/59522530a4e7a8007e690376ea6d948bo.jpg"
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
    <Link to="/Network">
      <img src={imageOne}  className="imageOne" alt-text="Galeria" />
    </Link>
    <Link to="/Network">
      <img src={imageTwo} className="imageTwo" alt="Galeria" /> 
    </Link>  
    <Link to="/Network">
      <img src={imageThree} className="imageThree" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageFour} className="imageFour" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageFive} className="imageFive" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageSix} className="imageSix" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageSeven} className="imageSeven" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageEight} className="imageEight" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageNine} className="imageNine" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageTen} className="imageTen" alt="Galeria" />
    </Link>  
    </Carousel>
    );
  }
}

export default Home;