/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "./navbar";

import Footer from "./footer";
import { IncrementNumber } from "../../Context/Actions";
import { DecrementNumber } from "../../Context/Actions";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  debugger;
  const changeNumber = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch;
  console.log(changeNumber);
  return (
    <>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <br />

        <div className="main-div">
          <div class="container1">
            <h1>Increment/Decrement counter</h1>
            <h4>using React and Redux</h4>
            <div className="quantity">
              <Link
                className="quantity__minus"
                title="Decrement"
                onClick={() => dispatch(DecrementNumber())}
              >
                <span>-</span>
              </Link>
              <input
                name="quantity"
                type="text"
                className="quantity__input"
                value={changeNumber}
              />
              <Link
                className="quantity__plus"
                title="Increment"
                onClick={() => dispatch(IncrementNumber(5))}
              >
                <span>+</span>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Home;
