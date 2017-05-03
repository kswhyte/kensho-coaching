import React, { Component } from 'react'
// import logo from '../public/Zen-Bamboo-Staff-white.png'
import './App.css'
import { Link } from 'react-router'

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

  render() {
    return (
      <div>
        <p className="app-intro">
          <em>Kensho</em> is a Japanese term from the Zen trandition meaning "seeing one's true nature; perceiving the Self"

          <em>ken</em>seeing
          <em>sho</em>nature, essence
        </p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Contact</Link>
          <Link to="/">NotFound</Link>

          {this.props.children}
        </div>
      </div>
    )
  }

}

// {/* <footer>
//   <img src={logo} className="kensho-logo" alt="logo" />
// </footer> */}

// export default App

// ReactDOM.render(<App />, document.getElementById('root'))
