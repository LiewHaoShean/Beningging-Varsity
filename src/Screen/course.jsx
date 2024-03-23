import React from "react";
import Navbar from "../Components/Navbar";
import HeadTitle from "../Components/HeadTitle";
import "../index.css";
import SearchBar from "../Components/SearchBar";
import PageNavigator from "../Components/PageNavigator";
import SponserShip from "../Components/SponsershipSlot";
import CourseContent from "../Components/CourseContent2";

function Course() {
  return (
    <React.Fragment>
      <HeadTitle></HeadTitle>
      <SponserShip></SponserShip>
      <SearchBar></SearchBar>
      <CourseContent></CourseContent>
      <PageNavigator></PageNavigator>
    </React.Fragment>
  );
}

export default Course;
