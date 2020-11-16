import React from "react";

function PostTweet() {
  return (
    <div className="form-group">
      <label htmlFor="tweet">Post a Tweet</label>
      <textarea className="form-control" name="" id="" rows="3"></textarea>
      <br></br>
      <button className="btn btn-danger">Tweet!</button>
    </div>
  );
}

export default PostTweet;
