import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddForm from './Components/AddForm'
import Header from './Components/Header'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import Yimages from './Components/Yimages'
import Yaudios from './Components/Yaudios'
import Yvideos from './Components/Yvideos'
import { ContextProvider } from './Context'

export default function App() {
  return (

    <div>
      <ContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/addform"><AddForm /></Route>
            <Route path="/images"><Yimages /></Route>
            <Route path="/audios"><Yaudios /></Route>
            <Route path="/videos"><Yvideos /></Route>
            <Route path="/*"><NotFound /></Route>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  )
}
