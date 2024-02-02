import React from "react";
import MemberCard from "./components/MemberCard";
import DataMember from "./components/dataMember";

const MembersTeam = () => {
  return (
    <div className="MembersTeam col-12   p-3   ">
      <div className="col-12  titleMembers">
        <h1 className="pb-2">اعضا تیم</h1>
      </div>
      <div className="d-flex pt-3 justify-content-evenly  align-items-center flex-wrap   ">
        {DataMember.map((item, index) => {
          return <MemberCard key={index} props={item}></MemberCard>;
        })}
      </div>
    </div>
  );
};

export default MembersTeam;
