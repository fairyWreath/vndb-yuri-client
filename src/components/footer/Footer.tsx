import React from "react";
import FooterSection from "./FooterSection";
import FooterSectionText from "./FooterSectionText";
const Footer = () => {
  return (
    <div
      className="bg-primary flex flex-col
  content-center items-center bottom-0 p-10"
    >
      <div className="flex md:flex-col flex-row">
        <FooterSection>
          <FooterSectionText>
            <a href="https://github.com/fairywreath/vnlist" target="_blank">
              Github
            </a>
          </FooterSectionText>
          <FooterSectionText>
            <a
              href="https://github.com/fairywreath/vnlist-server"
              target="_blank"
            >
              API
            </a>
          </FooterSectionText>
        </FooterSection>
        <FooterSection>
          <FooterSectionText>
            <a href="https://discord.gg/JsRfMYrf8z" target="_blank">
              Discord
            </a>
          </FooterSectionText>
          <FooterSectionText>
            <a href="https://twitter.com/NerradW" target="_blank">
              Twitter
            </a>
          </FooterSectionText>
        </FooterSection>
      </div>
      <div className="text-lg text-darkAccent">
        Made by{" "}
        <a
          href="https://github.com/fairywreath"
          target="_blank"
          className="border-b-2 border-transparent hover:border-darkAccent"
        >
          fairywreath
        </a>
      </div>
    </div>
  );
};

export default Footer;
