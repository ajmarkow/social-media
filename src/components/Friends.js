import React from "react";

const masterFriendList = [
  {
    name: "George Washington",
  },
  {
    name: "Elon Musk",
  },
  {
    name: "Nikola Tesla",
  },
];

function Friends() {
  return (
    <React.Fragment>
      <div class="card small">
        <div class="card-body">
          {masterFriendList.map((friends, index) => (
            <Friends names={friends.name} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Friends;
