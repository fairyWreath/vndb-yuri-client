import React from "react";

interface FooterSectionProps {
  children?: React.ReactNode;
}

const FooterSection = (props: FooterSectionProps) => {
  return (
    <div
      className="flex flex-col items-start text-left mx-20 my-5
  text-white h-full"
    >
      {props.children}
    </div>
  );
};

export default FooterSection;
