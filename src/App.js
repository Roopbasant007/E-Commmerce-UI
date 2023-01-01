import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    // the rect fragment is same as <>  </> , used when we don't want to add an extra node to dom tree for rendering the child. here navbar, Route, modal are those childs.
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
