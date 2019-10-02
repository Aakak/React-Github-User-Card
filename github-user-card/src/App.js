import React from 'react';
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowersCard from "./Components/FollowersCard";
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      UserCard: {},
      FollowersCards: []
    };
    console.log("Constructor is running!");
  }


componentDidMount () {
  axios 
  .get("https://api.github.com/users/Aakak")
  .then(res => {
    this.setState({
      UserCard: res.data,
      // FollowersCards: this.state.FollowersCards
    });
  })
  .catch(err => console.log(err));
  axios 
  .get("https://api.github.com/users/Aakak/followers?per_page=7&page=4")
  .then(res => {
    console.log("folowers:")
    console.log(res);
    this.setState({
      // UserCard: this.state.UserCard,
      FollowersCards: res.data
    });
  })
  .catch(err => console.log(err));
  console.log("Axios is running")
}

render () {
  console.log("rendering");
  return (
    <div className="App">
     <h1>Github Users</h1>
    <UserCard card={this.state.UserCard} />
    {this.state.FollowersCards.map(function(follower) { 
        return <FollowersCard FollowersCard={follower} />
      }
    )} 
    </div>
  )
}
}
export default App;