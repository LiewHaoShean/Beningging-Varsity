import React from "react";
import "../Styles/forumAccount.css";
import ForumAccountContent from "./accountDashboardContent";


const ForumAccount = () => {
  return (
    <div>
      <div className="PageHeader">
        <div className="HeaderImg">
          <img src="/robertKiyosaki.jpg" alt="header-pic" />
        </div>

        <div className="profileInfo">
          <div className="profile-container">
            <img
              src="/Robert-Kiyosaki-Motivation.jpg"
              alt="profile"
              className="profile-img"
            />
          </div>

          <div className="AccountName">
            <span>Robert Kiyosaki</span>
            <span className="lightfont">
              <br />
              Joined since 2024
            </span>
          </div>

          <div className="FlwButton">
            <input type="checkbox" />
          </div>
        </div>
      </div>

      <div className="locator">
        <ForumAccountContent />
      </div>
    </div>
  );
};

export default ForumAccount;
