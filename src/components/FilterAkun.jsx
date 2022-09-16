import React from 'react'

const FilterAkun = () => {
  return (
    <div className="mt-[24px] pl-[32px]">
        <h3 className=" text-[20px] leading-[24.2px] text-[#616161] font-[600px]">
          {" "}
          Tipe Akun{" "}
        </h3>
     <form id="form" className="pt-[24px]">
          <select className="text-[#BDBDBD] ml-0 w-[475px] h-[52px] px-[16px] ">
            <option> Filter by : </option>
            <option value="Nama">Nama</option>
            <option value="Email">Email</option>
            <option value="Waktu">Waktu terakhir donasi</option>
          </select>
        </form>
           </div>
  )
}

export default FilterAkun
