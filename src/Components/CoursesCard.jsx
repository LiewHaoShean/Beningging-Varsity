import React from "react";
import "../Styles/CoursesCard.css";
import investing101 from "../assets/Investing101.webp";
import DebtFree from "../assets/DebtFree.jpg";
import { Link } from "react-router-dom";

function CoursesCard() {
  // This array should be populated with actual degree information
  const degrees = [
    {
      university: "Investing in Stocks The Complete Course!(17+Hours)",
      program: "Cikgu Hor",
      imageSrc: investing101,
    },
    {
      university: "Debt-Free Journey: Strategies to Eliminate Debt",
      program: "Cikgu Hor",
      imageSrc: DebtFree,
    },
    // ... add more degree objects as needed
  ];

  return (
    <section className="courses-section">
      <div className="courses-header">
        <h2>My courses</h2>
        <button className="show-more">Show All</button>
      </div>
      <div className="courses-container">
        {degrees.map((degree, index) => (
          <div className="course-card" key={index}>
            <div className="card-image">
              <img src={degree.imageSrc} alt={`${degree.university} Campus`} />
            </div>
            <div className="card-info">
              <h3>{degree.university}</h3>
              <p>{degree.program}</p>
              <Link className="button" to="/course/1/video">
                Continue
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesCard;
