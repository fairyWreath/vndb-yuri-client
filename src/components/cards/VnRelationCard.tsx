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
      to={`/vn/${props.vn.vid}`}
      className="flex flex-row justify-end items-center w-full bg-accentPrimary 
    rounded-md shadow-md lg:h-24 h-28"
      style={{ direction: "ltr" }}
    >
      <div className="text-right mr-3 flex flex-col justify-between py-2 xs:py-1 w-full h-full">
        <div className="text-lg text-darkAccent w-full">{props.vn.title}</div>
        <div className="text-base text-dark w-full">
          {VNDBHelper.getRelationName(props.vn.relation)}
        </div>
      </div>
      {/* need max/min w for this one */}
      <img
        src={VNDBHelper.getImageUrlFromId(props.vn.image)}
        className="h-full max-w-24 min-w-24 object-cover"
        alt="vn_rel_card_img"
      />
    </Link>
  );
};

export default VnRelationCard;
