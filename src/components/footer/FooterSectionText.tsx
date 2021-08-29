import React from "react";

interface FooterSectionTextProps {
  children?: React.ReactNode;
}

const FooterSectionText = (props: FooterSectionTextProps) => {
  return <div className="mb-6 text-xl">{props.children}</div>;
};

export default FooterSectionText;
