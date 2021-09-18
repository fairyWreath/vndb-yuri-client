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
      className=" shadow-md rounded-md w-full px-2 py-2 text-dark font-overlock text-sm bg-accentPrimary
    text-center"
    >
      <div className="flex flex-col items-center text-center w-full pb-2">
        <div className="text-darkAccent pb-2">{props.release.title}</div>
        <div>{props.release.producers[0].name}</div>
        {/* <div className="text-xs">
          {props.release.official ? "Official" : "Not Official"}
        </div> */}
      </div>
      <div
        className="flex flex-row items-center justify-between "
        style={{ direction: "ltr" }}
      >
        <div className="text-base w-6 ">
          {props.release.minage !== 0 && props.release.minage
            ? `${props.release.minage}+`
            : "All"}
        </div>
        <div className="px-2">
          {VNDBHelper.parseDate(props.release.released)}
        </div>
        {props.release.languages.length > 0 && (
          <div className="flex flex-col items-center justify-center pr-2">
            {props.release.languages.map((lang) => {
              return (
                <div key={lang}>{VNDBHelper.getFullLanguageName(lang)}</div>
              );
            })}
          </div>
        )}
        <div className="px-1">{freeware()}</div>
        <div className="px-1">{animated()}</div>
        <div className="px-1">{voiced()}</div>
        {props.release.platforms.length > 0 && (
          <img
            className="w-7"
            alt="plat"
            src={VNDBHelper.getPlatformImage(props.release.platforms[0])}
          />
        )}
      </div>
    </div>
  );
};

export default VnReleaseCard;
