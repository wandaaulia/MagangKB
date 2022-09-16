import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ContentTableDonatur from "./ContentTableDonatur";
import ContentTableTransaksi from "./ContentTableTransaksi";

const DonaturTable = ({ headerTable, dataTable, title }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(dataTable.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataTable.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, dataTable]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataTable.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <table
        className="ml-0 border border-solid border-[#E0E0E0] mt-[52px] "
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <thead>
          <tr
            className="text-left"
            style={{
              background: "linear-gradient(0deg, #95E4D2 0%, #C2EEE4 100%)",
            }}
          >
            {headerTable.map((item, index) => (
              <th
                key={index}
                className=" text-mulish font-medium py-[14px] px-[16px] w-[300px] text-[#404040] text-[14px] leading-[20px]"
              >
                {" "}
                {item}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border border-solid border-[#E0E0E0]">
          {currentItems &&
            currentItems.map((item, index) => {
              if (title === "Transaksi") {
                return <ContentTableTransaksi item={item} key={index} />;
              } else {
                return <ContentTableDonatur item={item} key={index} />;
              }
            })}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="justify-end flex flex-row gap-[10px] mt-[24px]"
        pageLinkClassName="rounded-[4px] border border-solid border-[#38AA90] p-[10px] text-[#38AA90]"
        previousLinkClassName="rounded-[4px] border border-solid border-[#38AA90] p-[10px] text-[#38AA90]"
        breakLinkClassName="rounded-[4px] border border-solid border-[#38AA90] p-[10px] text-[#38AA90]"
        nextLinkClassName="rounded-[4px] border border-solid border-[#38AA90] p-[10px] text-[#38AA90]"
      />
    </>
  );
};

export default DonaturTable;
