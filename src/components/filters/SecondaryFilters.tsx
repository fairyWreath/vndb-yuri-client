import React, { useState, useRef } from "react";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaSortAlphaUpAlt } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

import { useClickOutside } from "../../hooks/useClickOutside";

interface SecondaryFiltersProps {
  setSortBy: (arg: any) => void;
  setSortOrder: (arg: any) => void;
  setNSFW: (arg: any) => void;
}

const SecondaryFilters = (props: SecondaryFiltersProps) => {
  const [sortBy, setSortBy] = useState("Popularity");
  const [sortOrderDesc, setSortOrderDesc] = useState(true);
  const [NSFW, setNSFW] = useState(false);

  const [openDropDown, setOpenDropDown] = useState(false);

  const wrapperRef = useRef(null);
  useClickOutside(() => {
    setOpenDropDown(false);
  }, wrapperRef);

  const sortOptions = [
    "Popularity",
    "Rating",
    "Date Published",
    "Recent Release",
  ];

  const items = sortOptions.map((sort) => {
    return (
      <div
        className="px-2  py-1 rounded-md flex flex-row items-center hover:bg-accentPrimary
  justify-between w-full text-sm text-dark m-auto cursor-pointer"
        onClick={() => {
          setSortBy(sort);
          props.setSortBy(sort);
          setOpenDropDown(false);
        }}
        key={sort}
      >
        {sort}
      </div>
    );
  });

  return (
    <div className="relative sm1s:hidden">
      <div className="flex flex-row justify-end items-center mb-1 text-dark text-sm">
        <div
          className="hover:text-darkAccent cursor-pointer ml-2 select-none flex flex-row
        items-center"
          onClick={() => {
            const setTo = !NSFW;
            setNSFW(setTo);
            props.setNSFW(setTo);
          }}
        >
          <div className="mx-2">NSFW</div>
          {NSFW ? <IoIosEye size="16px" /> : <IoIosEyeOff size="16px" />}
        </div>
        <AiOutlineMinus style={{ transform: "rotate(-90deg)" }} size="26px" />
        <div
          className="hover:text-darkAccent cursor-pointer mr-2 select-none"
          onClick={() => {
            setOpenDropDown(!openDropDown);
          }}
          ref={wrapperRef}
        >
          {sortBy}
        </div>
        <div
          className=" text-dark hover:text-darkAccent cursor-pointer select-none"
          onClick={() => {
            setSortOrderDesc(!sortOrderDesc);
            props.setSortOrder(!sortOrderDesc);
          }}
        >
          {sortOrderDesc ? <FaSortAlphaDownAlt /> : <FaSortAlphaUpAlt />}
        </div>
      </div>
      {openDropDown && (
        <div
          className="absolute bg-accentSecondary shadow-2xl px-3 py-4 z-20 transition-all min-w-sortDropdown
        rounded-lg right-0"
        >
          {/* right-0 here to position the absolute dropdown to the relative div parent */}
          {items}
        </div>
      )}
    </div>
  );
};

export default SecondaryFilters;
