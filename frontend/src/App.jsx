import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Item from "./components/Shop/Item";
import Coloboration from "./components/Coloboration/Coloboration";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header exact path="/" />
      <Switch>
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/shop/item/:id" component={Item} />
        </Switch>
        <Route path="/collaboration" component={Coloboration} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
