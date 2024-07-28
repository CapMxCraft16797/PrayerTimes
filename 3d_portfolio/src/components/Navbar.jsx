// import React, { useState, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
      style={{
        display: "flex",
        position: "fixed",
        top: "0",
        zIndex: 20,
        paddingTop: "1.25rem",
        paddingBottom: "1.25rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        width: "100%",
        "@media (min-width: 640px)": {
          paddingLeft: "4rem",
          paddingRight: "4rem",
        },
      }}
    >
      <div
        className="w-full flex justify-between item-center max-w-7x1 mx-auto"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <p className="titlename">
            Mostafa <span className="titlletitle">| JavaScript Mastery</span>
          </p>
        </Link>
        <p className="text-red-500" style={{ color: "#EF4444" }}>
          asdsa
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
