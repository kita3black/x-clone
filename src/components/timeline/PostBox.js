import React, { useState } from "react";
import "./PostBox.css"
import { Avatar,Button } from '@mui/material'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

export default function PostBox() {
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
    //firebaseのデータベースにデータを追加
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "テスト名前",
      username: "Test_X_id",
      verified: true,
      text: postMessage,
      avatar: "https://picsum.photos/200",
      image: postImage,
      timestamp: serverTimestamp(),
    });

    setPostMessage("");
    setPostImage("");
  };

  return (
    <div className="postBox">
      <form>
      <div className="postBox--input">
        <Avatar />
        <input
            value={postMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setPostMessage(e.target.value)}
          ></input>
      </div>
      <input
          value={postImage}
          className="postBox--imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setPostImage(e.target.value)}
        ></input>
        <Button
          className="postBox--postButton"
          type="submit"
          onClick={sendPost}>ポストする
        </Button>
      </form>
    </div>
  )
}
