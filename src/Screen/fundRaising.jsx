import React from "react";
import Navbar from "../Components/Navbar";
import "../index.css";
import Footer from "../Components/Footer";
import FundHeader from "../Components/FundHeader";
import FundContent from "../Components/FundContent";
import FundCrowding from "../Components/FundCrowding";


function FundRaising() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <FundHeader></FundHeader>
      <FundContent></FundContent>
      <FundCrowding></FundCrowding>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default FundRaising;