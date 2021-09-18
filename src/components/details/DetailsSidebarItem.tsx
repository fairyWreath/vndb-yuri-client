import React from "react";

interface DetailsSideBarProps {
  children?: React.ReactNode;
}

const DetailsSidebarItem = (props: DetailsSideBarProps) => {
  return (
    <div className="mb-2 mt-2 text-base text-dark flex flex-col xs:break-words">
      {props.children}
    </div>
  );
};

export default DetailsSidebarItem;
