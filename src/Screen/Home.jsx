import React from 'react';
import HeroSection from '../Components/HeroSection';
import CoursesCard from '../Components/CoursesCard';
import CourseCategory from '../Components/CourseCategory';



const Home = () => {
    return (
      <>
        <HeroSection />
        <CoursesCard />
        <CourseCategory />
      </>
    );
  };
  
  export default Home;