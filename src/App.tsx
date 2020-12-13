import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import TimerView from "./pages/TimerView"
import CreateTimerView from "./pages/CreateTimerView"

function App() {
  return (
    <Router>
      <div className={"timerContainer"}>
        <Switch>
          <Route exact path="/">
            <CreateTimerView />
          </Route>
          <Route exact path="/:timerId" component={TimerView} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
