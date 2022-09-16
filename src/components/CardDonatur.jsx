import React from "react";

const CardDonatur = ({ title, imgCard, textCard }) => {
  return (
    <div
      className="rounded-lg ml-[38px] mt-[62px] w-fit gap-[40px] h-[133px] p-[24px] bg-white flex flex-row"
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
      <div className="flex flex-col gap-[16px]">
        <h5 className="text-2xl text-mulish font-normal leading-[30px] text-[#6F7376]">
          {title}
        </h5>
        <h2 className="text-4xl leading-[45px] font-bold"> {textCard} </h2>
      </div>
      <div className="w-[60px]">
        <img src={imgCard} alt="imgTotal" />
      </div>
    </div>
  );
};

export default CardDonatur;
