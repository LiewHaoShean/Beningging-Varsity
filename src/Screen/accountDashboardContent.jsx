import React, { useState } from "react";
import "../Styles/forumAccountContent.css";
import {
  PostContent,
  SubContent,
  MentionContent,
} from "../Components/accountContentSelection";
import { MdLocalPostOffice, MdAttachMoney } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";

const ForumAccountContent = () => {
  const [activeContent, setActiveContent] = useState("post");

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
      <div className="optionBar">
        <button onClick={() => handleContentChange("post")}>
          <MdLocalPostOffice className="text-[#66D3FA] text-xl" />
        </button>
        <button onClick={() => handleContentChange("sub")}>
          <MdAttachMoney className="text-[#FFFF60] text-xl" />
        </button>
        <button onClick={() => handleContentChange("mention")}>
          <FaHashtag className="text-xl" />
        </button>
      </div>
      <div>
        {activeContent === "post" && <PostContent />}
        {activeContent === "sub" && <SubContent />}
        {activeContent === "mention" && <MentionContent />}
      </div>
    </div>
  );
};

export default ForumAccountContent;
