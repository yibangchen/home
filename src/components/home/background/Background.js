import React, { Component } from 'react';

import bgPic from '../../../assets/images/dark.jpg'
// import { start } from '../../../api/background';
import './Background.css';

class Background extends Component {

  constructor(props) {
    super(props);
    this.state= {}
  }

  componentDidMount() {
    this.loadEffect();
  }

  loadEffect = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = '';
    }

    window.addEventListener('resize', this.resize.bind(canvas), false);
  }

  resize = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  render() {
    return (
      <div className='bg-area'>
        <canvas ref='canvas' id="dark" />
        <img ref='image' src={bgPic} alt="background" className="hide"/>
      </div>
    );
  }
}

export default Background;