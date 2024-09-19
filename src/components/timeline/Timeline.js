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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
