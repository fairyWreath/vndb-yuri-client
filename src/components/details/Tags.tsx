import { VnTag } from "../../vndb/VnTypes";

import React, { useState } from "react";
import styled from "styled-components";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";

interface Props {
  tags: VnTag[];
}

interface ScorebarProps {
  scorePercentage: string;
}

export const Scorebar = styled.div<ScorebarProps>`
  /* border-radius: 6px; */
  background-color: #fdc6bf;
  height: 100%;
  width: ${(props) => props.scorePercentage};
  margin: 3px 0px 3px 0px;
  font-size: 0.75rem;
  text-align: center;

  &:hover {
    background-color: #fab5ac;
    color: #748999;
  }
`;

const Tags = (props: Props) => {
  const [tagsToShow, setTagsToShow] = useState(
    props.tags.filter((tag) => {
      return tag.spoiler !== 2;
    })
  );
  const [showSpoilers, setShowSpoilers] = useState(false);

  const bars = tagsToShow.map((tag) => {
    const perc = (tag.score / 3) * 100;
    return (
      <div
        className={
          tag.spoiler === 2
            ? "mb-4 flex flex-row items-center text-red-900 font-semibold"
            : "mb-4 flex flex-row items-center text-dark"
        }
      >
        {tag.score.toFixed(2)}
        <div className="w-12 mx-3 bg-black h-6 flex items-center">
          <Scorebar scorePercentage={`${perc}%`} />
        </div>
        <div className="mx-4">{tag.name}</div>
      </div>
    );
  });

  return (
    <div className="shadow-md rounded-md w-full min-h-96 bg-accentPrimary p-4">
      <div
        className="flex flex-row justify-end items-center px-3 w-full text-right 
   text-base text-dark hover:text-darkAccent cursor-pointer"
        onClick={() => {
          console.log("clicked");
          if (showSpoilers) {
            setTagsToShow(
              props.tags.filter((tag) => {
                return tag.spoiler !== 2;
              })
            );
          } else {
            setTagsToShow(props.tags);
          }
          setShowSpoilers(!showSpoilers);
        }}
      >
        <div className="mx-2">Spoilers</div>
        {showSpoilers ? <IoIosEye size="20px" /> : <IoIosEyeOff size="20px" />}
      </div>
      <div className="w-144">{bars}</div>
    </div>
  );
};

export default Tags;
