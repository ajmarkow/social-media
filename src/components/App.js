import React from "react";
import NavBar from "./NavBar.js";
import Profile from "./Profile.js";
import Info from "./Info.js";
import TweetList from "./Tweets.js";
import PostTweet from "./PostTweet.js";
import Friends from "./Friends.js";

function App() {
  // const name = "Bob";
  // const tweet = "Lorem Ipsum";
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <Profile />
            </div>
            <div className="row">
              <Info />
            </div>
          </div>
          <div className="col-6">
            <PostTweet />
            <TweetList />
          </div>
          <div className= 'col-3'>
            <Friends />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
