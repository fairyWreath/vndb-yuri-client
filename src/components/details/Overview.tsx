import React from "react";
import {
  VnRelation,
  VnRelease,
  VnCharacter,
  VnStaff,
} from "../../vndb/VnTypes";
import VnRelationCard from "../cards/VnRelationCard";
import VnCharacterCard from "../cards/VnCharacterCard";
import VnStaffCard from "../cards/VnStaffCard";

interface OverviewProps {
  relations: VnRelation[];
  releases: VnRelease[];
  characters: VnCharacter[];
  staff: VnStaff[];
}

const Overview = (props: OverviewProps) => {
  // const releasesLanguageMap = () => {
  //   const releaseMap = new Map<string, VnRelease[]>();

  //   props.releases.forEach((release) => {
  //     const lang = release.languages[0];
  //     const curr = releaseMap.get(lang);
  //     if (curr !== undefined) {
  //       releaseMap.set(lang, [...curr, release]);
  //     } else {
  //       releaseMap.set(lang, [release]);
  //     }
  //   });

  //   return releaseMap;
  // };

  // const releases = () => {
  //   const releasesMap = releasesLanguageMap();
  //   const elements: JSX.Element[] = [];
  //   releasesMap.forEach((releases: VnRelease[], lang: string) => {
  //     const gridItems = releases.map((release: VnRelease) => {
  //       return (
  //         <div className="grid grid-cols-5 gap-1 w-full text-dark">
  //           <div>{release.released}</div>
  //           <div>{release.minage}+</div>
  //           <div>{release.title}</div>
  //           <div>{release.voiced}</div>
  //           <div>{release.platforms}</div>
  //         </div>
  //       );
  //     });

  //     elements.push(
  //       <div className="py-3">
  //         <div className="text-darkAccent text-lg pb-2">{lang}</div>
  //         {gridItems}
  //       </div>
  //     );
  //   });

  //   return elements;
  // };

  const relationCards = props.relations
    .filter((vn) => {
      return vn.official;
    })
    .map((vn) => {
      return <VnRelationCard vn={vn} />;
    });

  const characterCards = props.characters.slice(0, 12).map((char) => {
    return <VnCharacterCard character={char} />;
  });

  const staffCards = props.staff.slice(0, 8).map((staff) => {
    return <VnStaffCard staff={staff} />;
  });

  return (
    <div className="w-full mr-auto">
      {relationCards.length > 0 && (
        <div className="pb-7">
          <div className="text-darkAccent pb-3 text-xl text-right">
            Relations
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2  gap-x-8 gap-y-6 "
            style={{ direction: "rtl" }}
          >
            {relationCards}
          </div>
        </div>
      )}

      {characterCards.length > 0 && (
        <div className="w-full pb-7">
          <div className="text-darkAccent pb-3 text-xl text-right">
            Characters
          </div>
          <div
            className="grid grid-cols-4 gap-x-5 gap-y-6 "
            style={{ direction: "rtl" }}
          >
            {characterCards}
          </div>
        </div>
      )}

      {props.staff.length > 0 && (
        <div className="w-full pb-7">
          <div className="text-darkAccent pb-3 text-xl text-right">Staff</div>
          <div
            className="grid grid-cols-2 gap-y-6 gap-x-8 "
            style={{ direction: "rtl" }}
          >
            {staffCards}
          </div>
          {/* <VnStaffCard staff={props.staff[0]} /> */}
        </div>
      )}
      {/* <div className="releases text-right">
        <div className="text-darkAccent pb-3 text-xl align-text-top">
          Releases
        </div>
        <div className="bg-accentPrimary rounded-md w-full py-3 pr-8">{}</div>
      </div>


      */}
    </div>
  );
};

export default Overview;
