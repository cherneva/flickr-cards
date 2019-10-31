import React from "react";
import { FLICKPHOTOS } from '../constants';
import '../styles/Cards.scss';

const Author = (props) => {
  const itemTitle = ((props.item.title) && (props.item.title !== " ")) ? props.item.title : "Photo";
  const author = props.item.pathalias !== null ? props.item.pathalias : props.item.owner;
  const itemURL = FLICKPHOTOS + author + "/" + props.item.id;
  
  return (
    <p className="author">
      <a href={itemURL} title={itemTitle} rel="nofollow, norefferer">
          {itemTitle} 
      </a> <span>by</span> <a href={FLICKPHOTOS + author} rel="nofollow, norefferer">{author}</a>
    </p>
  )
}

export default Author;