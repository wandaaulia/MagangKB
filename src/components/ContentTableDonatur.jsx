import React from "react";

const ContentTableDonatur = ({ item }) => {
  return (
    <tr
      key={item.idTable}
      className="border border-solid border-[#E0E0E0] text-[#616161] text-sm h-[48px] even:bg-[#F5FFFD]"
    >
      <td className="pl-[16px] "> {item.name} </td>
      <td className="pl-[16px]"> {item.email} </td>
      <td className="pl-[16px]"> {item.time} </td>
      <td className="text-[#16B364] pl-[16px]"> +Rp{item.lastDonation} </td>
      <td className="pl-[16px]"> Rp{item.totalDonation} </td>
      <td className="pl-[16px]"> {item.city} </td>
    </tr>
  );
};

export default ContentTableDonatur;
