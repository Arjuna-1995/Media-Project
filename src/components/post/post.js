import React, { useState } from 'react'
import './Post.css'
import { Users } from '../../dummyData'
export default function Post({post}) {
    const[like,setLike]=useState(post.like)
    const[isLiked,setIsLiked]=useState(false)


    const likeHandeler=()=>{
        setLike(isLiked?like-1:like+1 )
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src= {Users.filter((u)=>u.id===post?.userId)[0].profilePicture}
                    className='postProfileImg' alt=''/>
                    <span className='postUsername'>
                        {Users.filter((u)=>u.id===post?.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopRight'></div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post?.desc} </span>
                <img className='postImg' src={post.photo}/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon'  src='tools/tump.jpg' onClick={likeHandeler}/>
                    <img className='likeIcon'  src='tools/profile/heart.jpg'onClick={likeHandeler}/>
                    <span className='postLikeCounter'>{like}people like it</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'>{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
