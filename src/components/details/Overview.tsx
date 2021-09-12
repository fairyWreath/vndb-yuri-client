import React from "react";
import {
  VnRelation,
  VnRelease,
  VnCharacter,
  VnStaff,
} from "../../vndb/VnTypes";
import VnRelationCard from "../cards/VnRelationCard";
import VnCharacterCard from "../cards/VnCharacterCard";
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
      return <VnRelationCard vn={vn} />;
    });

  const characterCards = props.characters.slice(0, 8).map((char) => {
    return <VnCharacterCard character={char} />;
  });

  return (
    <div className="w-full mr-auto">
      <div className="releases text-right pb-7">
        <div className="text-darkAccent pb-3 text-xl align-text-top">
          Releases
        </div>
        <Releases releases={props.releases.slice(0, 6)} />
      </div>

      {relationCards.length > 0 && (
        <div className="pb-7">
          <div className="text-darkAccent pb-3 text-xl text-right">
            Relations
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-6 "
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
