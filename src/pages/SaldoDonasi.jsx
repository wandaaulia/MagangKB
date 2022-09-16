import React from "react";
import CardDonatur from "../components/CardDonatur";
import imgTotal from "../assets/img/give_money.png";
import RiwayatTransaksi from "../components/RiwayatTransaksi";

const SaldoDonasi = () => {
  return (
    <div className="bg-[#F6F9FC] flex flex-row">
      <div>
        <div className="flex flex-row">
          <CardDonatur
            title="Total Donasi"
            imgCard={imgTotal}
            textCard="786.552.000"
          />
          <CardDonatur
            title="Total Donasi"
            imgCard={imgTotal}
            textCard="786.552.000"
          />
        </div>
        <RiwayatTransaksi />
      </div>
    </div>
  );
};

export default SaldoDonasi;
