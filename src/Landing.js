import React, { Component } from 'react'
// import { Router, Route, hashHistory } from 'react-router'
// import { Link } from 'react-router'

import './reset.css'
import './Landing.css'
// import logo from '../public/Zen-Bamboo-Staff-white.png'

export default class Landing extends Component {

  // <a href="mailto:matthew.leo.kaufman@gmail.com?Subject=Hi+Matt" target="_blank"><img src="./lib/imgs/icons/mail.svg" alt="mail" /></a>
  // <Link to="/learnmore">Learn More</Link>

  render() {
    return (
      <div className="app">

        <section className="hero">
          <h1 className="title">Kensho Coaching</h1>
          <h3 className="tagline">ancient and cutting-edge tools for modern times</h3>
        </section>

        <section className="footer">
          <ul>
          </ul>
        </section>

      </div>
    )
  }

}

// {/* <footer>
//   <img src={logo} className="kensho-logo" alt="logo" />
// </footer> */}

export default Landing
