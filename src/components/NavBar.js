import React from "react";

function NavBar() {
  return (
    <React.Fragment>
      <div className="nav">
        <button className="btn btn-primary">Home</button>
        <button className="btn btn-primary">Notifications</button>
        <button className="btn btn-primary">Messages</button>{" "}
        <input type="text"></input>
        <button className="btn btn-success">Tweet</button>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
