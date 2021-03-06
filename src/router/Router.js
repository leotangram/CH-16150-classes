import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Categories from "../components/Categories";
import Counter from "../components/Counter";
import Home from "../components/Home";
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemList";
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
        <Route path="/categories/:categoryId" component={Categories} />
        <Route path="/products" component={ItemList} />
        <Route path="/product/:id" component={ItemDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
