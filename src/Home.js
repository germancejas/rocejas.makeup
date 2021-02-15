import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Link } from 'react-router-dom';

class Home extends Component {
   render() {
    var imageOne = 'https://fotos.subefotos.com/3a71d866c3a6ee1f3fef15567f6758d6o.jpg';
    var robot = 'https://i.ibb.co/swNcND3/PORTADA-3.jpg';
    var avatar ='https://i.ibb.co/1QMx9k6/PORTADa-2.jpg';
    var imageFour = "https://fotos.subefotos.com/826c93ac2409f320549f66a950120346o.jpg";
    var imageFive = "https://fotos.subefotos.com/269255f036739c2ef790a0a40461c86eo.jpg";
    var dragon = "https://i.ibb.co/fxy52nM/PORTADA-2.jpg";
    var imageSeven = "https://fotos.subefotos.com/6dd853b5cbb77f5c2863b5f443d8e5c0o.jpg";
    var imageEight = "https://fotos.subefotos.com/8f791e5f6d76691e47572a897f2f9025o.jpg";
    var imageNine = "https://fotos.subefotos.com/16d9f2324634bc216a51d75af31570cao.jpg";
    var esqueletoDiaYNoche = "https://i.ibb.co/WcJWZnC/PORTADA-5.jpg";
    var enredados = "https://i.ibb.co/56n9tgk/PORTADA.jpg";
    var dory = "https://i.ibb.co/qybrVfg/PORTADA-3.jpg";
    var dobby = "https://i.ibb.co/nBmVkLp/PORTADA-4.jpg";
    var esqueleto = "https://i.ibb.co/HGF9YCD/PORTADA-1.jpg"
    var abstracto = "https://i.ibb.co/6RZWwjY/PORTADA-1.jpg";
    var ajedrez = "https://i.ibb.co/fpRPCw5/PORTADA-1.jpg";
    var araña = "https://i.ibb.co/FHCdTjD/PORTADA.jpg";
    var arcoiris = "";
    var brillos = "";
    var camiloyevaluna = "https://i.ibb.co/RpyHm34/PORTADA-9.jpg";
    var cebra = "https://i.ibb.co/7v7CHrr/PORTADA-8.jpg";
    var conejoblanco = "https://i.ibb.co/QXRnXMr/PORTADA-7.jpg";
    var demogorgon = "https://i.ibb.co/8XJDPSX/PORTADA-6.jpg";
    var grinch = "";
    var olaf = "";
    var payaso = "";
    var sirena = "";
    var social = "";
    var stitch = "";
    var tigre = "";
    var up = "";
    var cosmoywanda = "https://i.ibb.co/CQx3wRZ/PORTADA-1.jpg";
    return (
      <div>
      <Carousel
        arrows
        className="carousel"
        slidesPerPage={100}
        slidesPerScroll={1}
        animationSpeed={2500}
        autoPlay={1500}
        stopAutoPlayOnHover
        itemWidth={500}
        clickToChange
        centered
      >
    <Link to="/">
      <img src={imageOne}  className="imageOne" alt="Galeria" />
    </Link>
    <Link to="/Robot">
      <img src={robot} className="robot" alt="Robot" /> 
    </Link>  
    <Link to="/Avatar">
      <img src={avatar} className="avatar" alt="Avatar" />
    </Link>  
    <Link to="/Network">
      <img src={imageFour} className="imageFour" alt="Galeria" />
    </Link>  
    <Link to="/Network">
      <img src={imageFive} className="imageFive" alt="Galeria" />
    </Link>  
    <Link to="/dragon">
      <img src={dragon} className="dragon" alt="dragon" />
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
    <Link to="/EsqueletoDiaYNoche">
      <img src={esqueletoDiaYNoche} className="esqueletoDiaYNoche" alt="EsqueletoDiaYNoche" />
    </Link>
    <Link to="/Enredados">
      <img src={enredados} className="enredados" alt="Enredados" />
    </Link>
    <Link to="/Dory">
      <img src={dory} className="dory" alt="Dory" />
    </Link>        
    <Link to="/Dobby">
      <img src={dobby} className="dobby" alt="Dobby" />
    </Link>
    <Link to="/Abstracto">
      <img src={abstracto} className="abstracto" alt="abstracto" />
    </Link>
    <Link to="/Esqueleto">
      <img src={esqueleto} className="esqueleto" alt="Esqueleto" />
    </Link> 
    <Link to="/CamiloYEvaluna">
      <img src={camiloyevaluna} className="camiloyevaluna" alt="Camilo Y Evaluna" />
    </Link> 
    <Link to="/Ajedrez">
      <img src={ajedrez} className="ajedrez" alt="Ajedrez" />
    </Link>     
  </Carousel>
  <Carousel
        arrows
        className="carousel2"
        slidesPerPage={100}
        slidesPerScroll={1}
        animationSpeed={2500}
        autoPlay={1500}
        stopAutoPlayOnHover
        itemWidth={500}
        clickToChange
        centered
      >
        <Link to="/Araña">
        <img src={araña} className="araña" alt="Araña" />
        </Link> 
        <Link to="/Arcoiris">
        <img src={arcoiris} className="arcoiris" alt="Arcoiris" />
        </Link> 
        <Link to="/Brillos">
        <img src={brillos} className="brillos" alt="Brillos" />
        </Link> 
        <Link to="/Cebra">
        <img src={cebra} className="cebra" alt="Cebra" />
        </Link> 
        <Link to="/ConejoBlanco">
        <img src={conejoblanco} className="conejoblanco" alt="Conejo Blanco" />
        </Link> 
        <Link to="/CosmoYWanda">
        <img src={cosmoywanda} className="cosmoywanda" alt="Cosmo Y Wanda" />
        </Link> 
        <Link to="/Demogorgon">
        <img src={demogorgon} className="demogorgon" alt="Demogorgon" />
        </Link>
        <Link to="/Dragon">
        <img src={dragon} className="dragon" alt="Dragon" />
        </Link>     
        <Link to="/Grinch">
        <img src={grinch} className="grinch" alt="Grinch" />
        </Link>              
        <Link to="/Olaf">
        <img src={olaf} className="olaf" alt="Olaf" />
        </Link>     
        <Link to="/Payaso">
        <img src={payaso} className="payaso" alt="Payaso" />
        </Link>     
        <Link to="/Up">
        <img src={up} className="up" alt="Up" />
        </Link>
        <Link to="/Sirena">
        <img src={sirena} className="sirena" alt="Sirena" />
        </Link>
        <Link to="/Social">
        <img src={social} className="social" alt="Social" />
        </Link>
        <Link to="/Stitch">
        <img src={stitch} className="stitch" alt="Stitch" />
        </Link>
        <Link to="/Tigre">
        <img src={tigre} className="tigre" alt="Tigre" />
        </Link>  
    </Carousel>   
</div>    
    );
  }
}

export default Home;