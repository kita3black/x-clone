import React from 'react'
import "./Timeline.css"
import PostBox from './PostBox'
import Post from './Post'

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      <PostBox />
      <Post
        displayName="ここに名前が入る"
        username="testid"
        verified={true}
        text="はじめてのツイート"
        avatar="https://picsum.photos/100" 
        image="https://picsum.photos/500"
      />

    </div>
  )
}
