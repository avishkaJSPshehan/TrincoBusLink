import React, { useEffect, useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const u = sessionStorage.getItem("username");
    if (u) setUsername(u);
  }, []);

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> TrincoBusLink.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            {/* <li className="navItem">
              <Link to={"/"}>Home</Link>
            </li> */}
            {username ? (
              <>
                <h1>Hello, {username}</h1>
                <button
                  className="btn"
                  onClick={() => {
                    sessionStorage.clear();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn">
                  <Link to={"/login"}>SIGN IN</Link>
                </button>
              </>
            )}
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
