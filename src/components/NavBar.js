import React from "react";

function NavBar() {
  return (
    <React.Fragment>
      <div class='nav'>
      <button class='btn btn-primary'>Home</button>
      <button class='btn btn-primary'>Notifications</button>
      <button class='btn btn-primary'>Messages</button>                 <input type="text"></input>
      <button class='btn btn-success'>Tweet</button>
    </div>
    </React.Fragment>
  );
}

export default NavBar;
