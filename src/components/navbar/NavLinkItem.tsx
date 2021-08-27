import React from "react";
import { Link } from "react-router-dom";

interface NavLinkItemProps {
  target: string;
  label: string;
}

const NavLinkItem = (props: NavLinkItemProps) => {
  return (
    <li
      className="flex flex-row justify-center items-center h-full border-b-4 border-transparent
    hover:border-light text-light text-lg mx-2 px-4 tracking-wide"
    >
      <Link to={props.target}>{props.label}</Link>
    </li>
  );
};

export default NavLinkItem;
