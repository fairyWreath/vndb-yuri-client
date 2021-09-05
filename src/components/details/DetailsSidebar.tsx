import React from "react";

interface DetailsSidebarProps {
  children?: React.ReactNode;
}

const DetailsSidebar = (props: DetailsSidebarProps) => {
  return (
    <div className="flex flex-col px-6 py-2 text-left w-64 bg-accentPrimary rounded-md  shadow-md">
      {props.children}
    </div>
  );
};

export default DetailsSidebar;
