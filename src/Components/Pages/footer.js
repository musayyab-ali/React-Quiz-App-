import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>hhhh</h2>
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="#">NotFound</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>support</h2>
                  <ul>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Contact</Link>
                    </li>
                    <li>
                      <Link to="#">NotFound</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <Link
                        to="https://www.instagram.com/thapatechnical/"
                        target="_thapa"
                      >
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </Link>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 Crunch&&Munch. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
