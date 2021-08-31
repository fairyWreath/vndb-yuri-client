import React from "react";
import { Link } from "react-router-dom";

interface NavDropdownLinkItemProps {
  target: string;
  children?: React.ReactNode;
}

const NavDropdownLinkItem = (props: NavDropdownLinkItemProps) => {
  return (
    <Link
      to={props.target}
      className="flex flex-row justify-between items-center rounded-md py-2
      w-full px-1 md:px-3 text-base text-dark transition-all duration-300 ease-in-out 
  hover:bg-accentPrimary font-overlock"
    >
      {props.children}
    </Link>
  );
};

export default NavDropdownLinkItem;
