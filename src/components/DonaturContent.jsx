import React from "react";
import dataTableDonation from "../data/dataTableDummy.json";
import DonaturTable from "./DonaturTable";
import { AiOutlineSearch } from "react-icons/ai";

const headerTable = [
  "Nama",
  "Email",
  "Waktu Terakhir Donasi",
  "Donasi  Terakhir",
  "Total Donasi",
  "Domisili",
];

const DonaturContent = () => {
  return (
    <div
      className="pl-[50px] pr-[38px] mt-[24px] bg-white ml-[38px] mb-[206px] mr-[18px] pb-[69px]"
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1) " }}
    >
      <div className="headerDonatur flex flex-row pt-[62px] items-center">
        <h2 className="text-4xl leading-[45px] text-[#616161]"> Donatur </h2>
        <form id="form">
          <div className="flex flex-row justify-center items-center w-full">
            <div className=" h-[36px] py-auto items-center flex flex-row ml-[150px] px-[8px] w-[300px] border border-solid rounded-sm border-[#E0E0E0]">
              <input
                type="text"
                id="search"
                name="search"
                className="flex-grow mr-2"
              />
              <span>
                {" "}
                <AiOutlineSearch />{" "}
              </span>
            </div>
            <div>
              <select className=" h-[36px] py-auto px-[16px] border border-solid border-[#E0E0E0] ml-[48px] w-[140px]">
                <option> Filter by : </option>
                <option value="Nama">Nama</option>
                <option value="Email">Email</option>
                <option value="Waktu">Waktu terakhir donasi</option>
              </select>
            </div>
          </div>
        </form>
        <button className=" h-[36px] py-auto bg-[#38AA90] text-white  px-[20px] rounded-[8px] ml-[40px]">
          <span className="text-[14px] leading-[16px]"> Download Table </span>
        </button>
      </div>
      <DonaturTable
        headerTable={headerTable}
        dataTable={dataTableDonation}
        title="Donatur"
      />
    </div>
  );
};

export default DonaturContent;
