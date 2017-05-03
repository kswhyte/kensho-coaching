import React from 'react'
import { Router, Route } from 'react-router'

import App from './App'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

const Routes = (props) => {
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
}

export default Routes
