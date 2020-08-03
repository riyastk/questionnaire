import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from '../src/assets/logo.png'
import QuestionnairePage from './pages/QuestionnairePage'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'

const Wrapper = styled.div`
  .navbar {
    padding: 65px 10%;
  }
`

function App() {
  return (
    <Wrapper>
      <Router>
        <ScrollToTop />
        <div className="navbar">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" height={'40px'}/>
            </div>
          </Link>
        </div>
        <Switch>
          <Route path="/questionnaire">
            <QuestionnairePage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
