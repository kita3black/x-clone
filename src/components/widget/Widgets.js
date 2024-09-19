import { Search } from '@mui/icons-material'
import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId={"1747512579566776510"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="northern_horse" options={ { height: 400 } } />
        <TwitterShareButton url={"https://x.com/northern_horse"} options={{text:"#React勉強中",via:"testaccount"}} />
      </div>
    </div>
  )
}

export default Widgets
