import React from 'react';
// import Alphabet from '../../animation/showName/Alphabet';

import './Intro.css';

const content = {
  head: {
    text: "Hi, I'm Yibang",
    css: 'cracked'
  },
  desc: {
    text: 'This is my personal website. It is still under construction. Please come back later'
  },
  profile: {
    url: 'https://www.instagram.com/p/BwP75tpBqYQ/media/?size=l',
    css: 'profile-picture-container'
  }
}

const Intro = props => (
  <div className="container intro-container">
    <div className={ content.head.css }>
      <span>{ content.head.text }</span>
      <span>{ content.head.text }</span>
      <span>{ content.head.text }</span>
    </div>
    <p>{ content.desc.text }</p>    
  {/*

    <div className={ content.profile.css }>
      <img src={ content.profile.url } alt="profile-pic"/>
    </div>

        <svg width="800" height="600">
          <Alphabet x="32" y="300" />
        </svg> 
    */}
  </div>

);

export default Intro;