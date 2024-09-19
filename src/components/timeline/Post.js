import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
      <div className="post--avatar">
        <Avatar />
      </div>
      <div className="post--body">
        <div className="post--header">
          <div className="post--headerText">
            <h3>名前が入る</h3>
            <span className="post--headerSpecial">
              <VerifiedUser className="post--badge" />
              @testid
            </span>
          </div>
          <div className="post-headerDescription">
            <p>Reactなう。</p>
          </div>
        </div>
        <img src="https://picsum.photos/500" alt="test" />
        <div className="post--footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  )
}
