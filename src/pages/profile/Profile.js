import React from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="/tools/profile/pro3.jpg"
                />
                <img className="profileUserImg" src="/tools/post/4.jpg" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">hiiiiiii</h4>
                <span className="profileInfoDesc">hloooo</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
