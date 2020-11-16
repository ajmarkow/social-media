import React from "react";

function TweetList() {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="http://lorempixel.com/240/80/abstract/1"
        alt="painting"
      ></img>
      <div className="card-body">
        <h4 className="card-title">Tweets</h4>
        <p className="card-text">Lorem ipsum</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum luctus metus, eu interdum ante congue nec. Praesent
          condimentum lorem id turpis congue, sit amet convallis enim egestas.
          Ut suscipit nulla id elit dictum, vitae varius tellus eleifend. Etiam
          vel faucibus libero. Curabitur nec maximus augue.
        </li>
        <li className="list-group-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum luctus metus, eu interdum ante congue nec. Praesent
          condimentum lorem id turpis congue, sit amet convallis enim egestas.
          Ut suscipit nulla id elit dictum, vitae varius tellus eleifend. Etiam
          vel faucibus libero. Curabitur nec maximus augue.
        </li>
        <li className="list-group-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum luctus metus, eu interdum ante congue nec. Praesent
          condimentum lorem id turpis congue, sit amet convallis enim egestas.
          Ut suscipit nulla id elit dictum, vitae varius tellus eleifend. Etiam
          vel faucibus libero. Curabitur nec maximus augue.
        </li>
      </ul>
    </div>
  );
}

export default TweetList;
