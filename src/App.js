import React from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Components/HomeLayout/Contact";
import Blog from "./Components/HomeLayout/Blogs";
import Service from "./Components/HomeLayout/Services";
import About from "./Components/HomeLayout/About";
import ProductDetails from "./fakeShopComponent/ProductDetails";
import Product from "./Components/Pages/Product";
// import ImageZoom from "react-image-zoom";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={ContactUs}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/service" component={Service}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/productlist" component={Product}></Route>
          <Route path="/product/:productId" component={ProductDetails}></Route>

          <Route component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
