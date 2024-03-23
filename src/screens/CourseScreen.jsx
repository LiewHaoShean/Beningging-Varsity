import React from "react";
import { Link } from "react-router-dom";

const CourseScreen = () => {
  return (
    <>
      <Link to="/course/2" className="btn btn-light my-3">
        Go to course details
      </Link>
      <br></br>
      <Link to="/course/2/video" className="btn btn-light my-3">
        Go to course video
      </Link>
    </>
  );
};

export default CourseScreen;
