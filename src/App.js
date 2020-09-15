import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Header from './components/menus/header/Header'
import Sidebar from './components/menus/sidebar/Sidebar'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='sidebar-pages'>
          <Sidebar />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  )
}

export default App
