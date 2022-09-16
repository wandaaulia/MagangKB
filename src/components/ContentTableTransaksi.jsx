import React from "react";

const ContentTableTransaksi = ({ item }) => {
  return (
    <tr
      key={item.idTable}
      className="border border-solid border-[#E0E0E0] text-[#616161] text-sm h-[48px] even:bg-[#F5FFFD]"
    >
      <td className="pl-[16px]  w-[180px] "> {item.name} </td>
      <td className="pl-[16px]"> {item.email} </td>
      <td className="pl-[16px]"> {item.time} </td>
      <td className="text-[#16B364] pl-[16px]"> +Rp{item.lastDonation} </td>
      <td className="pl-[16px] text-[#16B364]"> Rp{item.totalDonation} </td>
      <td className="pl-[16px]"> {item.city} </td>
      <td className="pl-[16px]">
        {" "}
        <span className="bg-[#F7F7F7] rounded-[6px] py-[1px] px-[4px] border border-solid border-[#B8DBCA]">
          {" "}
          {item.status}{" "}
        </span>{" "}
      </td>
    </tr>
  );
};

export default ContentTableTransaksi;
