import React, { useState } from "react";

import { GiTrefoilLily } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

import NavLinkItem from "./NavLinkItem";
import NavDropdownLinkItem from "./NavDropdownLinkItem";

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="h-20 bg-primary flex items-center justify-center sticky">
      <div className="h-full w-full max-w-4xl 2xl:max-w-6xl px-10 flex justify-between z-10 font-overlock box-border">
        <div className="text-white text-3xl flex flex-row items-center">
          <div className="m-2">
            <GiTrefoilLily />
          </div>
          Fairy
        </div>

        {/* breakpoint goes above */}
        <ul className="hidden md:flex items-center text-center h-full list-none">
          <NavLinkItem target="/vns" label="Visual Novels" />
          <NavLinkItem target="/tags" label="Tags" />
          <NavLinkItem target="/characters" label="Characters" />
          <NavLinkItem target="/traits" label="Traits" />
        </ul>
        {isLoggedIn ? (
          <div
            className="flex flex-row justify-center items-center h-full list-none px-4 mx-2h-full border-b-4 border-transparent
          hover:border-white"
            onMouseEnter={() => {
              setOpenDropdown(true);
            }}
            onMouseLeave={() => {
              setOpenDropdown(false);
            }}
          >
            <img
              className="h-14 w-14 max-h-14 max-w-14 mr-2"
              src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b823204-p8pRSBsVGYBM.png"
            />
            <AiFillCaretDown
              className="text-white"
              size="18px"
              style={openDropdown ? { transform: "rotate(-180deg)" } : {}}
            />

            {openDropdown && (
              <div
                className="flex flex-col absolute top-16 border-primary border-2 rounded-md
              bg-accentSecondary px-4 py-4"
              >
                <NavDropdownLinkItem target="/profile">
                  <IoPerson />
                  Profile
                </NavDropdownLinkItem>
                <NavDropdownLinkItem target="/mylists">
                  <AiOutlineUnorderedList />
                  My Lists
                </NavDropdownLinkItem>
                <NavDropdownLinkItem target="/notifications">
                  <IoIosNotifications />
                  Notifications
                </NavDropdownLinkItem>
                <NavDropdownLinkItem target="/settings">
                  <MdSettings />
                  Settings
                </NavDropdownLinkItem>
                <NavDropdownLinkItem target="/logout">
                  <RiLogoutBoxFill />
                  Logout
                </NavDropdownLinkItem>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* mobile icon */}
      <div
        className="md:hidden fixed bottom-7 right-7 w-14 h-14 bg-accentPrimary rounded-lg
      flex justify-center items-center cursor-pointer text-light"
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
        }}
      >
        {openMobileMenu ? <FaTimes size="40px" /> : <FaBars size="40px" />}
      </div>
    </div>
  );
};

export default Navbar;
