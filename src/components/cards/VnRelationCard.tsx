import { VnRelation } from "../../vndb/VnTypes";
import * as VNDBHelper from "../../vndb/VndbHelpers";
import { Link } from "react-router-dom";

interface Props {
  vn: VnRelation;
  update?: boolean;
}

const VnRelationCard = (props: Props) => {
  return (
    <Link
      to={`/vns/${props.vn.vid}`}
      className="flex flex-row justify-end items-center h-36 w-100 bg-accentPrimary 
    rounded-md shadow-md"
      style={{ direction: "ltr" }}
    >
      <div className="text-right mr-3 flex flex-col justify-between h-24 py-2">
        <div className="text-lg text-darkAccent">{props.vn.title}</div>
        <div className="text-base text-dark">
          {VNDBHelper.getRelationName(props.vn.relation)}
        </div>
      </div>
      <img
        src={VNDBHelper.getImageUrlFromId(props.vn.image)}
        className="h-full w-28"
      />
    </Link>
  );
};

export default VnRelationCard;
