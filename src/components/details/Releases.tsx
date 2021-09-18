import React from "react";
import VnReleaseCard from "../cards/VnReleaseCard";
import { VnRelease } from "../../vndb/VnTypes";

interface Props {
  releases: VnRelease[];
}

const Releases = (props: Props) => {
  return (
    <div
      className="grid sm1s:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 grid-cols-3 sm:gap-x-2 gap-x-4 gap-y-6 w-full mr-auto "
      style={{ direction: "rtl" }}
    >
      {props.releases.map((release) => {
        return <VnReleaseCard release={release} key={release.id} />;
      })}
    </div>
  );
};

export default Releases;
