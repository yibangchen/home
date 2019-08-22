import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Navbar from './Navbar';
import NavbarItems from './NavbarItems';
import Background from './background/Background';
// import Fireworks from '../animation/Fireworks';
import Intro from './intro/Intro';

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
      // const { currentSection, currentScroll } = this.state;

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
          <Intro />
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