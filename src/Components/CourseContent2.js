import courseImg from "../images/course2.jpg";
import courseImg2 from "../images/course.jpeg";
import courseImg3 from "../images/course2.jpeg";
import courseImg4 from "../images/course3.jpeg";
import courseImg5 from "../images/course4.jpeg";
import courseImg6 from "../images/course5.jpeg";
import lecturer from "../images/yl.jpg";
import { MdStar } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const investVideo = require("../assets/investVideo.MP4");

const courses = [
  {
    image: courseImg,
    video: "path_to_video_1.mp4",
    title: "Become a Product Manager | Learn the Skills & Get the Job",
    description:
      "The most complete course available on Product Management. 13+ hours of videos, activities...",
    price: "RM 69",
    lecturer: "Hor Yuan Li",
    lecturerImg: lecturer,
  },
  {
    image: courseImg2,
    video: "path_to_video_2.mp4",
    title: "Mastering Financial Investments: Strategies for Success",
    description:
      "Unlock the secrets of the financial world and become a savvy investor with our comprehensive course on financial investments...",
    price: "RM 109",
    lecturer: "Hor Yuan Li",
    lecturerImg: lecturer,
  },
  {
    image: courseImg3,
    video: "path_to_video_3.mp4",
    title: "Fundamentals of Investing",
    description:
      "Learn the basics of financial investing, from stocks to bonds, and build a solid foundation for your financial future...",
    price: "RM 119",
    lecturer: "Hor Yuan Li",
    lecturerImg: lecturer,
  },
  {
    image: courseImg4,
    video: "path_to_video_4.mp4",
    title: "Smart Investing: Maximizing Returns, Minimizing Risks",
    description:
      "Learn how to optimize your investment portfolio by balancing risk and reward, mastering diversification, and leveraging market opportunities effectively...",
    price: "RM 129",
    lecturer: "Hor Yuan Li",
    lecturerImg: lecturer,
  },
  {
    image: courseImg5,
    video: "path_to_video_5.mp4",
    title: "Real Estate Investing Essentials",
    description:
      "Explore the lucrative world of real estate investment, covering property valuation, rental income strategies, and wealth-building through real estate assets...",
    price: "RM 59",
    lecturer: "Hor Yuan Li",
    lecturerImg: lecturer,
  },
  {
    image: courseImg6,
    video: "path_to_video_6.mp4",
    title: "Stock Market Mastery: Strategies for Profitable Trading",
    description:
      "Gain a competitive edge in the stock market with proven trading techniques, technical analysis tools, and insights into market psychology for successful trading outcomes...",
    price: "RM 149",
    lecturer: "Hor Yuan Li",
    lecturerImg: lecturer,
  },
];

function CourseContent() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="w-full bg-white h-fit flex justify-center content-center pb-6">
      <ul className="h-fit w-10/12 bg-white grid grid-rows-2 grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <li
            className="relative border-2 border-none h-full bg-white outline-none shadow-2xl shadow-black-500/40 flex-column"
            key={index}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="h-72">
              <img
                src={course.image}
                className="object-contain overflow-hidden h-full w-full"
              />
            </div>
            <div className="flex">
              <div className="h-20 w-full relative">
                <img
                  src={course.lecturerImg}
                  className="object-fit overflow-hidden rounded-full h-20 w-20 absolute bottom-10 left-4 shadow-xl shadow-black-500/40"
                ></img>
                <h1 className="absolute top-1 right-2 font-semibold italic text-lg">
                  {course.lecturer}
                </h1>
              </div>
              <div className="w-full flex flex-full flex-col justify-between content-center flex-wrap">
                <div className="flex justify-center">
                  <div className="flex pt-4 pb-4">
                    <MdStar className="text-yellow-300" />
                    <MdStar className="text-yellow-300" />
                    <MdStar className="text-yellow-300" />
                    <MdStar className="text-yellow-300" />
                    <MdStar className="text-yellow-300" />
                  </div>
                  <p className="pt-3">5 (1)</p>
                </div>
                <div>
                  <div class="mr-14 text-center h-8 pt-1.5 rounded-md w-24 bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Finance
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-gray-300 ">
              <div className="h-32 px-4 py-2 flex flex-wrap content-center justify-center">
                <h1 className="text-center italic font-bold text-3xl">
                  {course.title}
                </h1>
              </div>
              <div className="h-24 p-4 flex flex-wrap content-center justify-center">
                <h2 className="text-center italic font-bold text-medium ">
                  {course.description}
                  <a href="#" className="text-red-700 font-extrabold">
                    Read More
                  </a>
                </h2>
              </div>
            </div>
            <div className="h-20 flex flex-wrap flex-row justify-center content-center text-center space-x-8">
              <Link
                to="/course/1"
                className="mt-3 ml-6 m-1 h-10 w-24  rounded-md bg-indigo-600 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 z-30"
              >
                Enrol Now!
              </Link>
              <h1 className="h-14 mr-12 mt-3 italic text-3xl font-semibold text-red-700">
                {course.price}
              </h1>
            </div>
            {hoveredCard === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-2">
                <video
                  className="max-w-full max-h-[80%]"
                  src={investVideo}
                  autoPlay
                  loop
                  controls
                />
                <Link to="/course/1"></Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseContent;
