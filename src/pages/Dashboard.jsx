import React from "react";
import CardDonatur from "../components/CardDonatur";
import DonaturContent from "../components/DonaturContent";
import imgTotal from "../assets/img/photo_cardTotalDonatur.png";

const Dashboard = () => {
  return (
    <div className="bg-[#F6F9FC] flex flex-row">
      <div>
        <CardDonatur title="Total Donatur" imgCard={imgTotal} textCard="1231" />
        <DonaturContent />
      </div>
    </div>
  );
};

export default Dashboard;
