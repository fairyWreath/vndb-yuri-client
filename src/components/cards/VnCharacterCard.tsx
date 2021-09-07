import React from "react";
import { VnCharacter } from "../../vndb/VnTypes";
import * as VNDBHelper from "../../vndb/VndbHelpers";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";

interface Props {
  character: VnCharacter;
}

const VnCharacterCard = (props: Props) => {
  const genderIcon = () => {
    if (props.character.gender === "f") {
      return (
        <div className="text-red-700">
          <CgGenderFemale size="28px" />
        </div>
      );
    } else if (props.character.gender === "m") {
      return (
        <div className="text-blue-800">
          <CgGenderMale size="28px" />
        </div>
      );
    } else return <></>;
  };

  return (
    <div
      className="flex flex-col h-98 bg-accentPrimary w-48
      shadow-md rounded-md relative"
      style={{ direction: "ltr" }}
    >
      <img
        className="w-full h-64"
        style={{ borderRadius: "6px 6px 0px 0px" }}
        src={VNDBHelper.getImageUrlFromId(props.character.image)}
      />
      <div className="absolute right-2 py-2">{genderIcon()}</div>
      <div
        className="flex flex-col py-2 px-4 justify-between font-overlock items-center
      text-dark"
      >
        <div className="text-darkAccent">{props.character.name}</div>
        <div>{props.character.role}</div>
        {props.character.seiyuu_name && (
          <div className="my-3 text-sm">CV. {props.character.seiyuu_name}</div>
        )}
      </div>
    </div>
  );
};

export default VnCharacterCard;
