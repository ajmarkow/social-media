import React from 'react'

function TweetList(){
  return(
    <div class="card">
      <img class="card-img-top" src="http://lorempixel.com/240/80/abstract/1" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title">Tweets</h4>
        <p class="card-text">Lorem ipsum</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum luctus metus, eu interdum ante congue nec. Praesent condimentum lorem id turpis congue, sit amet convallis enim egestas. Ut suscipit nulla id elit dictum, vitae varius tellus eleifend. Etiam vel faucibus libero. Curabitur nec maximus augue.</li>
        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum luctus metus, eu interdum ante congue nec. Praesent condimentum lorem id turpis congue, sit amet convallis enim egestas. Ut suscipit nulla id elit dictum, vitae varius tellus eleifend. Etiam vel faucibus libero. Curabitur nec maximus augue.</li>
        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum luctus metus, eu interdum ante congue nec. Praesent condimentum lorem id turpis congue, sit amet convallis enim egestas. Ut suscipit nulla id elit dictum, vitae varius tellus eleifend. Etiam vel faucibus libero. Curabitur nec maximus augue.</li>
      </ul>
  </div>
  );
}

export default TweetList;