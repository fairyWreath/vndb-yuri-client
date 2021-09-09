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
      className="flex flex-row justify-end items-center w-100 bg-accentPrimary 
    rounded-md shadow-md"
      style={{ direction: "ltr" }}
    >
      <div className="text-right mr-3 flex flex-col justify-between py-2">
        <div className="text-lg text-darkAccent">{props.vn.title}</div>
        <div className="text-base text-dark">
          {VNDBHelper.getRelationName(props.vn.relation)}
        </div>
      </div>
      <img
        src={VNDBHelper.getImageUrlFromId(props.vn.image)}
        className="h-full w-20"
        alt="vn_rel_card_img"
      />
    </Link>
  );
};

export default VnRelationCard;
