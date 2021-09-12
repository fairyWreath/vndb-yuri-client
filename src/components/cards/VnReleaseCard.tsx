import React from "react";
import { VnRelease } from "../../vndb/VnTypes";
import * as VNDBHelper from "../../vndb/VndbHelpers";
import { release } from "os";

interface Props {
  release: VnRelease;
}

const VnReleaseCard = (props: Props) => {
  const freeware = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <img
          src={
            props.release.freeware
              ? VNDBHelper.getFreewareSvg()
              : VNDBHelper.getNonFreeSvg()
          }
          alt="freeware"
          className="w-5"
        />
        <div className="text-center text-xs">
          {props.release.freeware ? "Free" : "NonFree"}
        </div>
      </div>
    );
  };

  const voiced = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src={VNDBHelper.getVoicedSvg()} alt="voiced" className="w-5" />

        <div className="text-center text-xs">
          {VNDBHelper.getVoicedString(props.release.voiced)}
        </div>
      </div>
    );
  };

  const animated = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <img
          src={VNDBHelper.getStoryAnimatedSvg()}
          alt="animated"
          className="w-5"
        />

        <div className="text-center text-xs">
          {VNDBHelper.getAnimatedString(props.release.ani_story)}
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-row items-center
  shadow-md rounded-md w-112 px-4 py-2 text-dark font-overlock text-sm bg-accentPrimary
  text-center"
      style={{ direction: "ltr" }}
    >
      <div className="flex flex-col items-center w-28  text-center">
        <div className="text-darkAccent">{props.release.title}</div>
        <div>{props.release.producers[0].name}</div>
        {/* <div className="text-xs">
          {props.release.official ? "Official" : "Not Official"}
        </div> */}
      </div>

      <div className="text-base w-6 ">
        {props.release.minage !== 0 ? `${props.release.minage}+` : "All"}
      </div>

      <div>{VNDBHelper.parseDate(props.release.released)}</div>
      {props.release.languages.length > 0 && (
        <div className="flex flex-col items-center justify-center pr-2">
          {props.release.languages.map((lang) => {
            return <div>{VNDBHelper.getFullLanguageName(lang)}</div>;
          })}
        </div>
      )}

      {freeware()}
      {animated()}
      {voiced()}

      {props.release.platforms.length > 0 && (
        <img
          className="w-7"
          alt="plat"
          src={VNDBHelper.getPlatformImage(props.release.platforms[0])}
        />
      )}
    </div>
  );
};

export default VnReleaseCard;
