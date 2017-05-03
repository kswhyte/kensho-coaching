import React, { Component } from 'react'
import logo from '../public/Zen-Bamboo-Staff-white.png'
import './App.css'
// import { Link } from 'react-router'

// import ReactDOM from 'react-dom'
// import { Router, Route, hashHistory } from 'react-router'
// import { BrowserRouter, Match } from 'react-router'


export default class App extends Component {

  // <a href="mailto:matthew.leo.kaufman@gmail.com?Subject=Hi+Matt" target="_blank"><img src="./lib/imgs/icons/mail.svg" alt="mail" /></a>
  // <Link to="/learnmore">Learn More</Link>

//   <BrowserRouter>
//     <div className="app">
//       <Match exactly pattern='/' component={Landing} />
//     </div>
//   </BrowserRouter>
// )

// {/* <div>
//   <Link to="/">Home</Link>
//   <Link to="/">Contact</Link>
//   <Link to="/">NotFound</Link>
//
//   {this.props.children}
// </div> */}

  render() {
    return (
      <div>
        <section className="hero">
          <h1 className="title">Kensho Coaching</h1>
          <h3 className="tagline">ancient and cutting-edge tools for modern times</h3>
        </section>

        <footer className="footer">
          <img src={logo} className="kensho-logo" alt="logo" />
          <ul className="link-container">
            <li className="link">About</li>
            <li className="link">Services</li>
            <li className="link">Contact</li>
          </ul>
        </footer>
      </div>
    )
  }

}


// export default App

// ReactDOM.render(<App />, document.getElementById('root'))
