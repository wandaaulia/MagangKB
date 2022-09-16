import React from 'react'
import imgClose from "../assets/img/closeAccount.png";

const CardAkunVerifikasi = () => {
  return (
    <div className="pl-[32px] pt-[80px]">
        <h2 className="text-[32px] leading-[38.73px] font-[600px]"> Akun </h2>
       <div className="justify-center items-start flex flex-row gap-[16px] w-[475px] bg-white  p-[16px] mt-[16px]">
          <div>
            <img src={imgClose} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className=" text-[20px] leading-[25px]">
              Akun Kamu Belum Terverifikasi
            </p>
            <p className="text-[#6D7D8B] text-[14px] leading-[24px]">
              Verifikasi akun Kamu dengan menekan tombol “ubah profil”
            </p>
          </div>
        </div>
            </div>
  )
}

export default CardAkunVerifikasi
