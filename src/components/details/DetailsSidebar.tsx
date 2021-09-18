import React from "react";

interface DetailsSidebarProps {
  children?: React.ReactNode;
}

const DetailsSidebar = (props: DetailsSidebarProps) => {
  return (
    <div
      className="flex flex-col sm:w-full sm:items-center sm:justify-center sm:text-center
     px-6  py-2 text-left w-52 bg-accentPrimary rounded-md  shadow-md"
    >
      {props.children}
    </div>
  );
};

export default DetailsSidebar;
