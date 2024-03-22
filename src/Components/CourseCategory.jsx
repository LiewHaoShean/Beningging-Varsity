import React from 'react';
import '../Styles/CourseCategory.css';
import PersonalFinance from '../assets/PersonalFinance.jpg';
import Investing from '../assets/Investing.png';
import FinancialAnalysis from '../assets/FinancialAnalysis.jpg';
import CorporateFinance from '../assets/CorporateFinance.png';

function CourseCategory() {
  const categories = [
    { name: 'Personal Finance', icon: PersonalFinance, courses: 47 },
    { name: 'Investing', icon: Investing, courses: 11 },
    { name: 'Financial Analysis', icon: FinancialAnalysis, courses: 21 },
    { name: 'Corporate Finance', icon: CorporateFinance, courses: 25 },
    // ... other categories
  ];

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2>Top Categories</h2>
        <button className="all-categories-btn">Show All</button>
      </div>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.icon} alt={`${category.name} Icon`} />
            <h3>{category.name}</h3>
            <p>{category.courses} Courses</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseCategory;
