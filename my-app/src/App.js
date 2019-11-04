import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StartPage from './views/StartPage'
import FormPage from './views/FormPage'

import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={StartPage} />
              <Route exact path="/FormPage" component={FormPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
