import React from "react";

const MemberCard = ({ props }) => {
  return (
    <div className="col-sm-5 h-100  col-md-3 p-3 col-7 mb-5 cardMember ">
      <div>
        <div className="col-12">
          <img className="w-175 rounded rounded-3 " src={props.srcImg} alt="" />
        </div>
        <div className="titleCard fw-bolder  pt-3 ">{props.name}</div>
      </div>
    </div>
  );
};

export default MemberCard;
