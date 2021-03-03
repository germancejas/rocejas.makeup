import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Link } from 'react-router-dom';


class Home extends Component {
   render() {
    var leon = 'https://i.ibb.co/ZgfMW9W/PORTADA-1.jpg';
    var robot = 'https://i.ibb.co/swNcND3/PORTADA-3.jpg';
    var avatar ='https://i.ibb.co/1QMx9k6/PORTADa-2.jpg';
    var gatosonriente = "https://i.ibb.co/2kRLjHw/PORTADA.jpg";
    var esqueletoMariposa = "https://i.ibb.co/cLqKNcw/PORTADA.jpg";
    var dragon = "https://i.ibb.co/fxy52nM/PORTADA-2.jpg";
    var mariposa = "https://i.ibb.co/Gnpk44z/PORTADA-2.jpg";
    var simba = "https://i.ibb.co/3CJ4XSc/PORTADA.jpg";
    var mascara = "https://i.ibb.co/RCzV65L/PORTADA-1.jpg";
    var esqueletoDiaYNoche = "https://i.ibb.co/WcJWZnC/PORTADA-5.jpg";
    var enredados = "https://i.ibb.co/56n9tgk/PORTADA.jpg";
    var dory = "https://i.ibb.co/qybrVfg/PORTADA-3.jpg";
    var dobby = "https://i.ibb.co/nBmVkLp/PORTADA-4.jpg";
    var esqueleto = "https://i.ibb.co/HGF9YCD/PORTADA-1.jpg"
    var abstracto = "https://i.ibb.co/6RZWwjY/PORTADA-1.jpg";
    var ajedrez = "https://i.ibb.co/fpRPCw5/PORTADA-1.jpg";
    var araña = "https://i.ibb.co/FHCdTjD/PORTADA.jpg";
    var brillos = "https://i.ibb.co/8XRmJxr/IMG-9915-Facetune-26-05-2020-22-47-13-Original.jpg";
    var camiloyevaluna = "https://i.ibb.co/RpyHm34/PORTADA-9.jpg";
    var cebra = "https://i.ibb.co/7v7CHrr/PORTADA-8.jpg";
    var conejoblanco = "https://i.ibb.co/QXRnXMr/PORTADA-7.jpg";
    var demogorgon = "https://i.ibb.co/8XJDPSX/PORTADA-6.jpg";
    var grinch = "https://i.ibb.co/gd7MY5L/PORTADA.jpg";
    var olaf = "https://i.ibb.co/4V30bdF/PORTADA-1.jpg";
    var olaf2 = "https://i.ibb.co/YDR0g6v/PORTADA.jpg"
    var payaso = "https://i.ibb.co/4SYw3jf/PORTADA.jpg";
    var sirena = "https://i.ibb.co/fdrg2dQ/PORTADA.jpg";
    var social = "https://i.ibb.co/NZzCLR3/PORTADA.jpg";
    var stitch = "https://i.ibb.co/FbYC3ZL/PORTADA.jpg";
    var tigre = "https://i.ibb.co/yPX72hK/PORTADA.jpg";
    var up = "https://i.ibb.co/LrL7JtR/PORTADA.jpg";
    var groot = "https://i.ibb.co/yh3H9B5/PORTADA.jpg";
    var cosmoywanda = "https://i.ibb.co/CQx3wRZ/PORTADA-1.jpg";
    var vangogh = "https://i.ibb.co/gmrZGx1/PORTADA.jpg";
    var paisaje = "https://i.ibb.co/rZYPV6n/PORTADA.jpg";
    var cadaverdelanovia = "https://i.ibb.co/BqBZkQP/PORTADA-2.jpg"
    var netflix = "https://i.ibb.co/fSGjZVD/PORTADA.jpg";
    var liloystitch = "https://i.ibb.co/zbF2nkB/PORTADA.jpg";
    var ola = "https://i.ibb.co/cCjLDrJ/PORTADA.jpg";
    var helado = "https://i.ibb.co/Yjbf2Jt/PORTADA.jpg";
    var harrystyles = "https://i.ibb.co/bsMZ0tB/PORTADA.jpg"
    var harleyqueen = "https://i.ibb.co/3sPTZd6/PORTADA.jpg"

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
    <Link to="/Ola">
      <img src={ola} className="Ola" alt="Ola" />
    </Link>    
    <Link to="/Leon">
      <img src={leon} className="Leon" alt="Leon" />
    </Link>
    <Link to="/Robot">
      <img src={robot} className="robot" alt="Robot" /> 
    </Link>  
    <Link to="/Avatar">
      <img src={avatar} className="avatar" alt="Avatar" />
    </Link>  
    <Link to="/HarryStyles">
      <img src={harrystyles} className="HarryStyles" alt="HarryStyles" />
    </Link>  
    <Link to="/EsqueletoMariposa">
      <img src={esqueletoMariposa} className="EsqueletoMariposa" alt="Esqueleto Mariposa" />
    </Link>  
    <Link to="/dragon">
      <img src={dragon} className="dragon" alt="dragon" />
    </Link>  
    <Link to="/Mariposa">
      <img src={mariposa} className="mariposa" alt="Mariposa" />
    </Link>  
    <Link to="/Simba">
      <img src={simba} className="simba" alt="Simba" />
    </Link>  
    <Link to="/Mascara">
      <img src={mascara} className="mascara" alt="Mascara" />
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
    <Link to="/Groot">
      <img src={groot} className="groot" alt="Groot" />
    </Link> 
    <Link to="/VanGogh">
      <img src={vangogh} className="Vangogh" alt="Vangogh" />
    </Link>
    <Link to="/Paisaje">
      <img src={paisaje} className="Paisaje" alt="Paisaje" />
    </Link> 
    <Link to="/LiloYStitch">
      <img src={liloystitch} className="LiloYStitch" alt="LiloYStitch" />
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
        <Link to="/Netflix">
        <img src={netflix} className="Netflix" alt="Netflix" />
        </Link> 
        <Link to="/Araña">
        <img src={araña} className="araña" alt="Araña" />
        </Link>
        <Link to="/HarleyQueen">
        <img src={harleyqueen} className="HarleyQueen" alt="Harley Queen" />
        </Link>
        <Link to="/GatoSonriente">
        <img src={gatosonriente} className="gatosonriente" alt="Gato Sonriente" />
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
        <Link to="/Grinch">
        <img src={grinch} className="grinch" alt="Grinch" />
        </Link>              
        <Link to="/Olaf">
        <img src={olaf} className="olaf" alt="Olaf" />
        </Link>
        <Link to="/Olaf2">
        <img src={olaf2} className="olaf2" alt="Olaf2" />
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
        <Link to="/CadaverdelaNovia">
        <img src={cadaverdelanovia} className="cadaverdelanovia" alt="Cadaver de la Novia" />
        </Link>
        <Link to="/Helado">
        <img src={helado} className="helado" alt="Helado" />
        </Link>       
    </Carousel>   
</div>    
    );
  }
}

export default Home;