import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link
              className="navbar-brand titlename"
              to="#"
              style={{ color: "#fff" }}
            >
              Crunch&&Munch
            </Link>
            <button
              className="navbar-toggler titlename"
              style={{ color: "#fff" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item titlename">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{ color: "#fff" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item titlename">
                  <Link
                    className="nav-link "
                    to="/service"
                    style={{ color: "#fff" }}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item titlename">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{ color: "#fff" }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item titlename">
                  <Link
                    className="nav-link "
                    to="/contact"
                    style={{ color: "#fff" }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item titlename">
                  <Link
                    className="nav-link"
                    to="/blog"
                    style={{ color: "#fff" }}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <button
                  className="btn btn-style"
                  type="submit"
                  style={{ color: "#FFF" }}
                >
                  Sign Up
                </button>
                <button
                  className="btn  btn-style btn-style-border"
                  type="submit"
                  style={{ color: "#FFF" }}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
