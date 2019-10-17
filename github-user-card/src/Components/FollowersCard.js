import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from "axios";

const FollowersCard = props => 
<div className="card">
<Card className="ui card">
{<Image className="image" src={props.FollowersCard.avatar_url} wrapped ui={false}/>}
    <Card.Content className="content">
    <Card.Header className="header">{props.FollowersCard.login}</Card.Header>
    <Card.Meta className="meta">{props.FollowersCard.html_url}</Card.Meta>
    <Card.Description className="description">ID: {props.FollowersCard.id}</Card.Description>
    </Card.Content>
    <Card.Content className="extra content">
        <a >
            <Icon className="user icon" name='user' />
             Following: {props.FollowersCard.following}
        </a>
        <a>
            <Icon className="user icon" name='user' />
            Followers: {props.FollowersCard.followers} 
        </a>
    </Card.Content> 
</Card>
</div>

export default FollowersCard;