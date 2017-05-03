import React from 'react'
import ReactDOM from 'react-dom'
// import { browserHistory } from 'react-router'

import App from './App'

// import Routes from './routes'
import './reset.css'
import './index.css'

// {/* <Route key='code' path="/code" component={Code}/>
// <Route key='projects' path="/code/:projectName" component={MobileShowcase}/>
// <Route key='contact' path="/contact" component={ContactForm}/> */}

// {/*
//   <Route path="/" component={App}>
//   <IndexRoute key='app' component={App}/>
//   <Route key='about' path="/about" component={About}/>
// </Route>
// </Router> */}

ReactDOM.render(
  // <Routes history={ browserHistory } />,
  <App />,
  document.getElementById('root')
)
