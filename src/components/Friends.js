import React from "react";
import Person from "./Person"

const masterFriendList = [
  {
    name: 'George Washington'
  },
  {
    name: 'Elon Musk'
  },
  {
    name: 'Nikola Tesla'
  }
];

function Friends() {
  return (
    <React.Fragment>
          {masterFriendList.map((person, index) => 
            <Person name={person.name} 
                key={index} />
          )}
    </React.Fragment>
  );
}

export default Friends;
