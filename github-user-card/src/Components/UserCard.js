import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';


const UserCard = props => {
    console.log(props)
    return (
      <div className="card">
        <Card className="ui card">
        <Image className="image" src={props.card.avatar_url} wrapped ui={false}/> 
        <Card.Content className="content">
        <Card.Header className="header">{props.card.name}</Card.Header>
        <Card.Meta className="meta">Github: {props.card.html_url}</Card.Meta>
        <Card.Description className="description">Location: {props.card.location}</Card.Description>
        </Card.Content>
        <Card.Content className="extra content">
        <a >
        <Icon className="user icon" name='user' />
        Following: {props.card.following}
      </a>
      <a>
        <Icon className="user icon" name='user' />
        Followers: {props.card.followers} 
      </a>
        </Card.Content>
        </Card>
        </div>
    )
}


export default UserCard;