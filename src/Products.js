import React, { Component } from "react";
 
class Products extends Component {
  render() {
    return (
      <div>
        <img 
            src='https://fotos.subefotos.com/3a71d866c3a6ee1f3fef15567f6758d6o.jpg' 
            alt="Logo"
            className='img1'
        />
        <img 
            src='https://fotos.subefotos.com/823c38887f9a847345b56b1344241975o.jpg' 
            alt="Logo"
            className='img2'
        />
        <img 
            src='https://fotos.subefotos.com/c7520e892b6270a8b0c41df5aa9d7475o.jpg' 
            alt="Logo"
            className='img3'
        />
      </div>
    );
  }
}
 
export default Products;