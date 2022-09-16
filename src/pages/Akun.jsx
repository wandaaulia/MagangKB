import React, { useState, useRef } from "react";
import CardAkunVerifikasi from "../components/CardAkunVerifikasi";
import FilterAkun from "../components/FilterAkun";
import FormUserWithPhoto from "../components/FormUserWithPhoto";

const Akun = () => {

  return (
    <div className="bg-[#F6F9FC] w-full">
      <CardAkunVerifikasi />
       <FilterAkun />
      <FormUserWithPhoto />
    </div>
  );
};

export default Akun;
