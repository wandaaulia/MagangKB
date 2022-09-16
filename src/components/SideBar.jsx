import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { RiHomeLine, RiHandHeartLine } from "react-icons/ri";
import { BsCalendar4 } from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const navigate = useNavigate();

  const handleClick = async (name) => {
    await setActiveMenu(name);
    await navigate(`/${name}`);
  };

  const toggleActiveStyles = (name) => {
    if (name == activeMenu) {
      return "bg-[#F5FFFD] text-[#38AA90] cursor-pointer flex gap-[16px] flex-row h-[37.61px]";
    } else {
      return "text-[#A7B2C9] cursor-pointer flex gap-[16px] flex-row h-[37.61px]";
    }
  };

  return (
    <div
      className="w-[250px] min-h-screen bg-white relative"
      style={{ filter: "dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} >

      <div className=" pt-[56.42px] mx-auto w-[110px]">
        <img src={logo} />
      </div>
      <ul className="pt-[60.18px] px-[24px] grid gap-[16px]">
        <li
          className={toggleActiveStyles("dashboard")}
          onClick={() => handleClick("dashboard")} >
          <div className="w-[24px]  flex justify-center items-center">
            <RiHomeLine />
          </div>
          <span className="text-lg flex justify-center items-center leading-[18px]">
            Dashboard
          </span>
        </li>

        <li className="cursor-pointer flex gap-[16px] flex-row h-[37.61px] ">
          <div className="w-[24px]  flex justify-center items-center text-[#A7B2C9]">
            <BsCalendar4 />
          </div>
          <span className="text-lg w-[120px]  flex justify-start items-center leading-[18px] text-[#A7B2C9]">
            Galang Dana
          </span>
          <div className="w-[24px]  text-xl flex justify-center items-center text-[#A7B2C9]">
            <MdKeyboardArrowUp />
          </div>
        </li>

        <li className=" cursor-pointer flex gap-[16px] flex-row h-[37.61px] py-[8px]">
          <div className="w-[24px]  flex justify-center items-center text-[#A7B2C9]">
          </div>
          <span className="text-lg  flex justify-center items-center leading-[18px] text-[#A7B2C9]">
            Campaign
          </span>
        </li>
        <li className="cursor-pointer flex gap-[16px] flex-row h-[37.61px] py-[8px]">
          <div className="w-[24px]  flex justify-center items-center text-[#A7B2C9]">
       </div>
          <span className="text-lg  flex justify-center items-center leading-[18px] text-[#A7B2C9]">
            LamanBantu
          </span>
        </li>

        <li className={toggleActiveStyles("donatur")} onClick={() => handleClick("donatur")}>
          <div className="w-[24px] flex justify-center items-center">
            <RiHandHeartLine />
          </div>
          <span className="text-lg  flex justify-center items-center leading-[18px] ">
            Donatur
          </span>
        </li>

        <li className={toggleActiveStyles("saldodonasi")} onClick={() => handleClick("saldodonasi")} >
          <div className="w-[24px] flex justify-center items-center">
           <MdAccountBalanceWallet />
          </div>
          <span className="text-lg  flex justify-center items-center leading-[18px] ">
            Saldo Donasi
          </span>
        </li>

        <li className={toggleActiveStyles("akun")} onClick={() => handleClick("akun")} >
          <div className="w-[24px] flex justify-center items-center">
            <VscAccount />
          </div>
          <span className="text-lg  flex justify-center items-center leading-[18px] ">
            Akun
          </span>
        </li>
      </ul>
      <button className="cursor-pointer absolute bottom-[16px] left-[24px] right-[24px] py-[4px] gap-[10px] flex flex-row justify-center items-center border rounded-[8px] border-solid border-[#A7B2C9]">
        <div className="w-[24px] h-[24px] flex justify-center items-center text-[#A7B2C9]">
          <AiOutlineCloseCircle />
        </div>
        <span className="text-[#A7B2C9] flex justify-center items-center text-lg leading-[24px]">
          Keluar
        </span>
      </button>
    </div>
  );
};

export default SideBar;
