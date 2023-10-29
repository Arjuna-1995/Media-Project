import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightbar=()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/tools/gift.jpeg" />
          <span className="birthdayText">
            <b>Anime2</b> and <b>3 other friends</b> have a bithday today.
          </span>
        </div>
        <img className="rightbarAd" src="/tools/post/3.jpg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">TamilNadu</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Chennai</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/tools/profile/pro1.jpg" className="rightbarFollowingImg"/>
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/tools/profile/pro2.png" className="rightbarFollowingImg"/>
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/tools/profile/pro3.jpg" className="rightbarFollowingImg"/>
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/tools/profile/pro4.jpeg" className="rightbarFollowingImg"/>
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/tools/profile/pro5.jpg" className="rightbarFollowingImg"/>
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/tools/profile/pro6.jpg" className="rightbarFollowingImg"/>
          <span className="rightbarFollwingName">John Carter</span>
        </div>
      </div>
      </>
      
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ?<ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  );
}
