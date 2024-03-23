import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseVideoScreen = () => {
  const video = require("../assets/video1.mp4");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const Comment = ({ name, content, replies }) => {
    const [showReplies, setShowReplies] = useState(false);

    return (
      <div className="border border-gray-300 rounded-md p-4 mt-4">
        <p className="font-bold text-lg">{name}</p>
        <p className="mt-2">{content}</p>
        {replies && (
          <div
            className="text-blue-600 mt-2"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? "Hide replies" : `View ${replies.length} replies`}
          </div>
        )}
        {showReplies &&
          replies.map((reply, index) => (
            <>
              <p className="font-bold text-base mt-2" key={index}>
                {reply.name}
              </p>
              <p>{reply.content}</p>
            </>
          ))}
      </div>
    );
  };

  const CommentSection = () => {
    const [comments, setComments] = useState([
      {
        name: "Charles Hor",
        content:
          "Good foundation for investing in stocks. Takes you from beginning through the analysis and how to find stocks and funds to consider investing in.",
        replies: [
          {
            name: "Jack",
            content: "Ya it's a good course and I've been earning 10k from it!",
          },
        ],
      },
      {
        name: "Hao Shean",
        content:
          "Good foundation for investing in stocks. Takes you from beginning through the analysis and how to find stocks and funds to consider investing in.",
      },
    ]);

    return (
      <div className="py-6 px-32">
        <div className="font-bold text-xl underline">Comments</div>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-row border-t-2 border-black">
        <div className="flex flex-col">
          <div className="w-9/10 h-max-[66.67%] bg-[#383838] pl-28 pr-10">
            <ReactPlayer
              url={video}
              playing={true}
              controls={true}
              width="90%"
              height="100%"
              volume={null}
            />
          </div>
          <CommentSection />
        </div>

        <div className="w-1/10 pt-3 bg-white border-t-2 ">
          <div className="font-bold text-xl mb-2 pl-4">Course Content</div>
          <div className="items-start">
            <div
              onClick={() => setIsOpen1(!isOpen1)}
              className="bg-[#F5F5F5] py-3 pl-3 pr-5 w-full items-start flex justify-start font-bold text-base rounded-md tracking-wide border-2 border-grey active:border-black duration-100 ease-linear"
            >
              1. Stock Market Investing and Trading Foundation
              {!isOpen1 ? (
                <FaCaretDown className="h-6 pl-1" />
              ) : (
                <FaCaretUp className="h-6 pl-1" />
              )}
            </div>
          </div>
          {isOpen1 && (
            <div className="flex flex-col items-start border-2 border-t-0 first-line:border-grey rounded-md p-4 w-full space-y-2">
              <div>
                <a
                  href="#"
                  className="text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Welcome to the course
                </a>
              </div>
              <a
                href="#"
                className="text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Glosary of Stock Market Terms and Curriculum Overview
              </a>
              <a
                href="#"
                className="text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Stock Market Returns & Worst Case Scenario
              </a>
              <a
                href="#"
                className="text-black text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                What Really Is Stock
              </a>
            </div>
          )}
          <div>
            <div
              onClick={() => setIsOpen2(!isOpen2)}
              className="bg-[#F5F5F5] p-3 w-full items-center flex justify-between font-bold text-base rounded-md tracking-wide border-2 border-grey active:border-black duration-100 ease-linear"
            >
              2. Key Concepts Investing And Trading In Stock Market
              {!isOpen2 ? (
                <FaCaretDown className="h-6 pl-1" />
              ) : (
                <FaCaretUp className="h-6 pl-1" />
              )}
            </div>
          </div>
          {isOpen2 && (
            <div className="flex flex-col items-start border-2 border-t-0 first-line:border-grey rounded-md p-4 w-full space-y-2">
              <Link
                to="/course/:id/shorts"
                className="text-sm flex flex-row justify-center items-center"
              >
                <SiYoutubeshorts className="mr-4 text-black" />2 Ways Investors
                Make Money In Stocks
              </Link>
              <a
                href="#"
                className="text-black text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Stocks And The Law Of Supply & Demand
              </a>
              <a
                href="#"
                className=" text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Where Do Stocks Fit In A Diversified Portfolio
              </a>
              <a
                href="#"
                className="text-black text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Sample Portfolio Allocation Based On Historical Risk & Return
              </a>
            </div>
          )}
          <div>
            <div
              onClick={() => setIsOpen3(!isOpen3)}
              className="bg-[#F5F5F5] p-3 w-full items-center flex justify-between font-bold text-base rounded-md tracking-wide border-2 border-grey active:border-black duration-100 ease-linear"
            >
              3. Investing And Trading Strategies In Stock Market
              {!isOpen3 ? (
                <FaCaretDown className="h-6 pl-1" />
              ) : (
                <FaCaretUp className="h-6 pl-1" />
              )}
            </div>
          </div>
          {isOpen3 && (
            <div className="flex flex-col items-start border-2 border-t-0 first-line:border-grey rounded-md p-4 w-full space-y-2">
              <div>
                <a
                  href="#"
                  className="text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Two Investing Extremes
                </a>
              </div>
              <a
                href="#"
                className=" text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Investing in Growth stocks
              </a>
              <a
                href="#"
                className="text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Investing in Value Stocks
              </a>
              <a
                href="#"
                className="text-black text-sm flex flex-row justify-center items-center"
              >
                <MdOndemandVideo className="mr-4 text-black" />
                Value Investing Example Case Study
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseVideoScreen;
