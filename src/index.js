import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);