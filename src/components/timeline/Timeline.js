import React, { useState, useEffect } from "react"
import "./Timeline.css"
import PostBox from './PostBox'
import Post from './Post'
import db from "../../firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";
import FlipMove from "react-flip-move";

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //post取得
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));

    //リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      <PostBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}
