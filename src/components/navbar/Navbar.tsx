import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinkItem from "./NavLinkItem";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) {
        setHideOnScroll(isShow);
      }
    },
    [hideOnScroll],
    undefined,
    false,
    100,
    undefined
  );

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <>
      <motion.nav
        variants={variants}
        animate={hideOnScroll ? "visible" : "hidden"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
        className="h-14 bg-primary flex items-center justify-center transition-all
        fixed top-0 z-50 shadow-md w-full "
      >
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
      </motion.nav>

      <div
        className="md:hidden fixed bottom-7 right-7 w-10 h-10 bg-accentPrimary rounded-lg
    flex justify-center items-center cursor-pointer text-light z-50"
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
        }}
      >
        {openMobileMenu ? <FaTimes size="25px" /> : <FaBars size="25px" />}
      </div>
    </>
  );
};

export default Navbar;
