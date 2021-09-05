import React from "react";
import styled from "styled-components";

interface BannerImageProps {
  src: string;
}

const Banner = styled.div<BannerImageProps>`
  background-image: url(${(props) => props.src});
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* filter: blur(5px);
  -webkit-filter: blur(5px); */
`;

const BannerImage = (props: BannerImageProps) => {
  return <Banner className="" src={props.src}></Banner>;
};

export default BannerImage;
