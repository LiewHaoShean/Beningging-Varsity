import React from "react";
import Navbar from "./Components/Navbar";
import HeadTitle from "./Components/HeadTitle";
import "./index.css";
import CourseContent from "./Components/CourseContent";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";
import PageNavigator from "./Components/PageNavigator";
import SponserShip from "./Components/SponsershipSlot";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <HeadTitle></HeadTitle>
      <SearchBar></SearchBar>
      <CourseContent></CourseContent>
      <PageNavigator></PageNavigator>
      <SponserShip></SponserShip>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;