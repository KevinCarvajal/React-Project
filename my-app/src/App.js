import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StartPage from './views/StartPage'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Header /> */}
          <main>
            <Switch>
              <Route exact path="/" component={StartPage} />
            </Switch>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

export default App;
