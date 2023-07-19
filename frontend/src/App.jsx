import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header exact path="/" />
      <Switch>
        <Route path="/shop" component={Shop} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
