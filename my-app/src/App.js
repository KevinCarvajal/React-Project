import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// View
import StartPage from "./views/StartPage";
import FormPage from "./views/FormPage";

const App = () => {
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
  );
};

export default App;
