import React from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Components/HomeLayout/Contact";
import Blog from "./Components/HomeLayout/Blogs";
import Service from "./Components/HomeLayout/Services";
import About from "./Components/HomeLayout/About";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={ContactUs}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/service" component={Service}></Route>
          <Route path="/about" component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
