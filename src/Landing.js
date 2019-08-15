import React, { Component } from 'react';
// import { HashRouter, Route, Link } from "react-router-dom";

const bgStyle = {
  position: 'fixed',
  padding:0,
  margin:0,
  top:0,
  left:0,
  width: '100%',
  height: '100%',
  backgroundColor: 'tomato',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const contentStyle = {
  textAlign: 'center',
  height: '300px',
  display: 'table-cell',
  verticalAlign: 'middle'
}

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/6bbd633df1.js";
    script.async = true;
    document.body.appendChild(script);
}

  render () {
    return (
      <div style={ bgStyle }>
        <div style={ contentStyle }>
          <h1>Hi, I'm Yibang</h1>
          <i className="fas fa-wrench fa-spin fa-2x"></i>
          <h1>site under construction</h1>
          <h1>please come back later</h1>
        </div>
      </div>
     );
  }
}

export default Landing;
