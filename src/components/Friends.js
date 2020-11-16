import React from "react";

const masterFriendList = [
  {
    name: "George Washington"
  },
  {
    name: "Elon Musk"
  },
  {
    name: "Nikola Tesla"
  }
];

function Friends() {
  return (
    <React.Fragment>
          {masterFriendList.map((friends, index) => 
            <Friends names={friends.name} 
                key={index} />
          )}
    </React.Fragment>
  );
}

export default Friends;
