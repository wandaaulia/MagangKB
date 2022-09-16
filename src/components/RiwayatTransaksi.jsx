import React from "react";
import dataTableTransksi from "../data/dataTableTransaksi.json";
import DonaturTable from "./DonaturTable";

const headerTableTransaksi = [
  "Nama Campaign",
  "Jenis Transaksi",
  "Tanggal Transaksi",
  "Jumlah",
  "Jumlah terpotong fee (2,9%)",
  "Deskripsi",
  "Status",
];

const filterTransaksi = [
  'Nama', 'Email', 'Waktu terakhir donasi'
]

const RiwayatTransaksi = () => {
  return (
    <div
      className="pl-[50px] pr-[38px] mt-[24px] bg-white ml-[38px] mb-[206px] mr-[18px] pb-[69px]"
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1) " }}
    >
      <div className="headerTranskasi flex flex-row pt-[62px] items-center">
        <h2 className="text-4xl leading-[45px] text-[#616161]">
          {" "}
          Riwayat Transaksi{" "}
        </h2>
        <form id="form">
          <div className="flex flex-row justify-center items-center w-full ml-[60px]">
            <div>
              <select className="h-[36px] py-auto px-[16px] border border-solid border-[#E0E0E0] ml-[120px] w-[150px]">
                <option value="0"> Filter by : </option>
                { filterTransaksi.map((item, index) => {
                   <option value={item} key={index}>{item} </option>
                })}
              </select>
            </div>
          </div>
        </form>
        <div className="ml-[16px] flex flex-row">
          <button className="h-[36px] py-auto border border-solid border-[#38AA90] text-[#38AA90]  px-[20px] rounded-[8px] ml-[40px]">
            <span className="text-[14px] leading-[16px]"> Download Table </span>
          </button>
          <button className="h-[36px] w-[132px] flex justify-center bg-[#38AA90] text-white py-auto  px-[20px] rounded-[8px] ml-[16px]">
            <span className="text-[14px] leading-[16px]">
              {" "}
              Permintaan Tarik Saldo{" "}
            </span>
          </button>
        </div>
      </div>
      <DonaturTable
        headerTable={headerTableTransaksi}
        dataTable={dataTableTransksi}
        title="Transaksi"
      />
    </div>
  );
};

export default RiwayatTransaksi;
