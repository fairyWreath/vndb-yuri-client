import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CoverDiv = styled.div`
  :before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: 142.85714%;
  }
`;

const PulseDiv = styled.div`
  animation: pulse 2s infinite;
  animation-direction: alternate;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0s;

  @keyframes pulse {
    0% {
      background-color: #fae7e6;
    }
    100% {
      background-color: #f5d9d8;
    }
  }
`;

const VisualNovelCardSkeleton = () => {
  return (
    <motion.div
      className="w-full
        grid grid-rows-min-content-auto"
      initial={{ scale: 0.97 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <CoverDiv
        className="w-full inline-block h-auto
      relative overflow-hidden z-20 rounded-md"
      >
        <PulseDiv
          className="w-full h-full top-0 left-0 object-cover rounded-md 
          shadow-md absolute align-text-top"
        />
      </CoverDiv>

      <PulseDiv className="h-8 rounded-md mt-4 w-full" />
    </motion.div>
  );
};

export default VisualNovelCardSkeleton;
