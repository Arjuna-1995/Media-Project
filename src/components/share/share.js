import React from "react";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="./tools/profile/pro1.jpg" />
          <input placeholder="what's in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <i  class="fa-soild fa-film shareIcon"></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
            <i class="fa-solid fa-tag shareIcon"></i>
              <span className="shareOptionText">Tags</span>
            </div>
            <div className="shareOption">
            <i class="fa-solid fa-location-dot shareIcon"></i>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <i class="fa-regular fa-face-smile shareIcon"></i>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
