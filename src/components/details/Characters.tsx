import React from "react";
import VnCharacterCard from "../cards/VnCharacterCard";
import { VnCharacter } from "../../vndb/VnTypes";

interface Props {
  characters: VnCharacter[];
}

const Characters = (props: Props) => {
  const characterCards = props.characters.map((char) => {
    return <VnCharacterCard character={char} key={char.id + char.role} />;
  });

  return (
    <div>
      {characterCards.length > 0 ? (
        <div className="w-full">
          <div
            className="grid sm:grid-cols-3 lg1s:grid-cols-3 grid-cols-4 gap-x-8 gap-y-6 "
            style={{ direction: "rtl" }}
          >
            {characterCards}
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center text-primary text-xl">
          Nothing here (⌯˃̶᷄ ﹏ ˂̶᷄⌯)ﾟ
        </div>
      )}
    </div>
  );
};

export default Characters;
