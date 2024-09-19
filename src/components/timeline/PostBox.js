import React from 'react'
import "./PostBox.css"
import { Avatar,Button } from '@mui/material'

export default function PostBox() {
  return (
    <div className="postBox">
      <form>
      <div className="postBox--input">
        <Avatar />
        <input placeholder="いまどうしてる？" type="text"></input>
      </div>
      <input
          className="postBox--imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
        ></input>
        <Button className="postBox--postButton" type="submit">ポストする</Button>
      </form>
    </div>
  )
}
