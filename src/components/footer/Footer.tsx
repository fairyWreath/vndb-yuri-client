import React from "react";
import FooterSection from "./FooterSection";
import FooterSectionText from "./FooterSectionText";
const Footer = () => {
  return (
    <div
      className="bg-primary flex flex-col
  content-center items-center bottom-0 p-10"
    >
      <div className="flex flex-col md:flex-row">
        <FooterSection>
          <FooterSectionText>Github</FooterSectionText>
          <FooterSectionText>API</FooterSectionText>
        </FooterSection>
        <FooterSection>
          <FooterSectionText>Discord</FooterSectionText>
          <FooterSectionText>Twitter</FooterSectionText>
        </FooterSection>
      </div>
      <div className="text-lg text-dark">Made by fairyWreath</div>
    </div>
  );
};

export default Footer;
