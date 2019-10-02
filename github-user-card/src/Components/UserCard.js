import React from "react";

const UserCard = props => {
    console.log(props)
    return (
        <div className="user-card">
        <h1>Github Users</h1>
        <h2>Name{props.card.name} </h2>
        <img src={props.card.avatar_url} /> 
        <p>Github User Name: {props.card.login}</p>
        <p>Location: {props.card.location}</p>
        <p></p>
        </div>
    )
}





export default UserCard;