import React from "react";
import {
  VnRelation,
  VnRelease,
  VnCharacter,
  VnStaff,
} from "../../vndb/VnTypes";
import VnRelationCard from "../cards/VnRelationCard";
import Characters from "./Characters";
import Releases from "./Releases";
import Staff from "./Staff";

interface OverviewProps {
  relations: VnRelation[];
  releases: VnRelease[];
  characters: VnCharacter[];
  staff: VnStaff[];
}

const Overview = (props: OverviewProps) => {
  const relationCards = props.relations
    .filter((vn) => {
      return vn.official;
    })
    .map((vn) => {
      return <VnRelationCard vn={vn} key={vn.vid} />;
    });

  return (
    <div className="w-full mr-auto">
      {relationCards.length > 0 && (
        <div className="pb-7 w-full md:pb-4">
          <div className="text-darkAccent pb-3 text-xl text-right">
            Relations
          </div>
          <div
            className="w-full grid grid-cols-3 lg:grid-cols-2 md1s:grid-cols-1 gap-x-5 xs:gap-y-5 gap-y-6 "
            style={{ direction: "rtl" }}
          >
            {relationCards}
          </div>
        </div>
      )}

      {props.releases.length > 0 && (
        <div className="releases text-right pb-7 md:pb-4">
          <div className="text-darkAccent pb-3 text-xl align-text-top w-full">
            Releases
          </div>
          <Releases releases={props.releases.slice(0, 6)} />
        </div>
      )}

      {props.characters.length > 0 && (
        <div className="w-full pb-7 md:pb-4">
          <div className="text-darkAccent pb-3 text-xl text-right">
            Characters
          </div>
          <Characters characters={props.characters.slice(0, 8)} />
        </div>
      )}

      {props.staff.length > 0 && (
        <div className="w-full">
          <div className="text-darkAccent pb-3 text-xl text-right">Staff</div>
          <Staff staff={props.staff.slice(0, 6)} />
        </div>
      )}
    </div>
  );
};

export default Overview;
