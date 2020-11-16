import React from "react";

function Profile() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <span className="block">
                <img src="http://lorempixel.com/75/75/" alt="abstract"></img>
              </span>
              <blockquote className="blockquote">
                <p>Alex Goodwin</p>
                <h4>Tweets</h4>
                <h4>Following</h4>
                <h4>Fololowers</h4>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
