import React from 'react';

function PostTweet(){
  return(
    <div class="form-group">
      <label for="">Post a Tweet</label>
      <textarea class="form-control" name="" id="" rows="3"></textarea>
      <br></br>
      <button class='btn btn-danger'>Tweet!</button>
    </div>
  );
}

export default PostTweet;