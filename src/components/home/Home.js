import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Navbar from './Navbar';
import NavbarItems from './NavbarItems';
// import Fireworks from '../animation/Fireworks';
import Alphabet from '../animation/showName/Alphabet';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScroll: 0, currentSection: "" };
    }

    componentWillMount = () => {      
    }

    componentDidMount = () => {      
    }

    componentWillUnmount = () => {      
    }

    handleScroll = e => {
    }

    scrollToSelection = selectName => {
    }

    _updateCurrentScroll = () => {}
    _getCurrentScroll = () => {}
    _updateCurrentSelection = () => {}
    _isScrollBottom = () => {}
    _onEnterSection = () => {}
    _getNavBarHeight = () => {}
    _getPageElementFromKey = () => {}

    render = () => {
      const { currentSection, currentScroll } = this.state;

      return (
        <div className="root-home">
          <div ref={ el => this.navbar = el }>
            <Navbar 
              items = { NavbarItems }
              onItemClick = {()=>{}}
              currentSection = {()=>{}}
              currentScroll = {()=>{}}
             />
          </div>
          <div className="container">
            <h2>Hi, I'm Yibang!</h2>
            <p>This is my personal website. It is still under construction. Please come back later</p>
            <svg width="800" height="600">
                <Alphabet x="32" y="300" />
            </svg>
          </div>
        </div>
      );
    }
}

// const mapStateToProps = store => ({
//   projects: store.projects
// })

// const mapDispatchToProps = dispatch => ({

// })

export default withRouter(Home);