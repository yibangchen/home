import React, { Component } from 'react';

import bgPic from '../../../assets/images/dark.jpg'
// import { start } from '../../../api/background';
import './Background.css';

class Background extends Component {

  constructor(props) {
    super(props);
    this.state= {}
  }

  // componentDidMount() {
  //   start();
  // }

  loadEffect() {

  }

  render() {
    return (
      <div className='bg-area'>
        <canvas id="dark">
          <img src={ bgPic } alt='background-pic'/>
        </canvas>
        <h1 id="title">DARK</h1>
      </div>
    );
  }
}

export default Background;