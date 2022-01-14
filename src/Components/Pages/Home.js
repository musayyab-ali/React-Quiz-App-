/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { incNumber } from "../../redux/actions/productsActions";
import { decNumber } from "../../redux/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
// import ImageZoom from "react-image-zoom";
// import Zoom from "./image";
import Index from "./image";

const Home = () => {
  const num = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <br />
      <br />
      <Index />
      <br />
      <div className="main-div">
        <div class="container1">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a
              class="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={num}
            />
            <a
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(5))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
