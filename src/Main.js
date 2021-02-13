import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Network from "./Network";
import Courses from "./Courses";
import Products from "./Products.js";
import Contact from "./Contact";
import Subscriptions from "./Subscriptions.js";
import Avatar from "./galery/Avatar";
import Vangogh from "./galery/Vangogh";

class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="title">
              <h1>Ro Cejas</h1>
              <h2>Makeup</h2>
            </div>
          <div className="navbar">
            <img 
              src='https://i.ibb.co/GkS58z1/LOGO-FONDO-BLANCO.png' 
              alt="Logo"
              className='logo'
            />
            <ul className="header">
              <li><NavLink exact to="/">Galeria</NavLink></li>
              <li><NavLink to="/network">Redes</NavLink></li>
              <li><NavLink to="/courses">Cursos</NavLink></li>
              <li><NavLink to="/products">Productos</NavLink></li>
              <li><NavLink to="/contact">Contactame</NavLink></li>
              <li><NavLink to="/subscriptions">Si te gustó, hacé click acá</NavLink></li>
            </ul>          
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/network" component={Network}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/subscriptions" component={Subscriptions}/>
            <Route path="/avatar" component={Avatar}/>
            <Route path="/vangogh" component={Vangogh}/>
            
          </div>
            <div className="youTubeMain">
              <iframe 
                title="youtube"
                width="800" 
                height="600"  
                src="https://www.youtube.com/embed/DnUst6Hz5h0" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </HashRouter>
    );
  }
}
 
export default Main;