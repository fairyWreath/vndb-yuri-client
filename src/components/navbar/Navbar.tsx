import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinkItem from "./NavLinkItem";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="h-14 bg-primary flex items-center justify-center sticky top-0 z-50 shadow-md">
      <div className="select-none h-full w-full max-w-4xl 2xl:max-w-6xl px-10 flex justify-between z-10 font-overlock box-border">
        <Link
          to="/"
          className="text-light text-3xl flex flex-row items-center cursor-pointer italic"
        >
          VNList
        </Link>

        <ul className="hidden md:flex items-center text-center h-full list-none">
          <NavLinkItem target="/vns" label="Visual Novels" />
          <NavLinkItem target="/chars" label="Characters" />
        </ul>
      </div>

      <div
        className="md:hidden fixed bottom-7 right-7 w-10 h-10 bg-accentPrimary rounded-lg
      flex justify-center items-center cursor-pointer text-light"
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
        }}
      >
        {openMobileMenu ? <FaTimes size="25px" /> : <FaBars size="25px" />}
      </div>
    </div>
  );
};

export default Navbar;
