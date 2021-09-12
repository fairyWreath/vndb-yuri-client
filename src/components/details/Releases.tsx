import React from "react";
import VnReleaseCard from "../cards/VnReleaseCard";
import { VnRelease } from "../../vndb/VnTypes";

interface Props {
  releases: VnRelease[];
}

const Releases = (props: Props) => {
  return (
    <div
      className="grid grid-cols-2 gap-y-6 w-full mr-auto"
      style={{ direction: "rtl" }}
    >
      {props.releases.map((release) => {
        return <VnReleaseCard release={release} key={release.id} />;
      })}
    </div>
  );
};

export default Releases;
