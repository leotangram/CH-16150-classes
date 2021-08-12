import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Categories from "../components/Categories";
import Counter from "../components/Counter";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/cart" component={Cart} />
        <Route path="/categories/" component={Categories} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
