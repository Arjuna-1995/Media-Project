import React from "react";
import "./topbar.css";



export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"> Chatdue</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <i class="fa-solid fa-magnifying-glass searchIcon" ></i>
          <input
            placeholder="search for friends,post or videos"
            className="searchInput"
          />
          
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
            <i class="fa-regular fa-user" ></i>
            <span className="topbarIconBadge">11</span>
            </div>
            <div className="topbarIconItem">
            <i class="fa-thin fa-message"></i>
            <span className="topbarIconBadge">11</span>
            </div>
            <div className="topbarIconItem">
            <i class="fa-solid fa-bell"></i>
            <span className="topbarIconBadge">11</span>
            </div>
            <img src="./tools/post/1.avif" className="topbarImg"/>
        </div>
      </div>
 
    </div>
  );
}
