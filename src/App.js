import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
