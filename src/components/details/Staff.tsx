import React from "react";
import { VnStaff } from "../../vndb/VnTypes";
import VnStaffCard from "../cards/VnStaffCard";

interface Props {
  staff: VnStaff[];
}

const Staff = (props: Props) => {
  const staffCards = props.staff.map((staff) => {
    return <VnStaffCard staff={staff} />;
  });

  return (
    <div>
      {props.staff.length > 0 ? (
        <div className="w-full pb-7">
          <div
            className="grid grid-cols-2 gap-y-6 gap-x-8 "
            style={{ direction: "rtl" }}
          >
            {staffCards}
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

export default Staff;
