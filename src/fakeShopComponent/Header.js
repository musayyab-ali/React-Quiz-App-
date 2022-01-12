import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "../fakeShopComponent/ProductDetails";
import ProductListing from "../fakeShopComponent/ProductListing";

const Header = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/productlist" component={ProductListing}></Route>
          <Route path="/product/:productId" component={ProductDetails}></Route>

          <Route component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Header;
