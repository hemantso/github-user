import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard, Login, Error } from './pages'

function App() {
  return (
   <Router>
     <Switch>
     <Route path="/" exact={true}>
       <Dashboard></Dashboard>
     </Route>
     <Route path="/login">
       <Login></Login>
     </Route>
     <Route path="*">
       <Error></Error>
     </Route>
     </Switch>
   </Router>
    
  )
}

export default App
