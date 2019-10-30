import React from "react";
import { FLICKPHOTOS } from '../constants';
import '../styles/Cards.scss';

const Image = (props) => {
  const itemTitle = (props.item.title !== " ") ? props.item.title : "Photo";
  const itemURL = FLICKPHOTOS + props.item.pathalias + "/" + props.item.id;

  return (
    <p className="image">
        <a href={itemURL} title={itemTitle}>
            <img alt={itemTitle} src={props.item.url_s} /> 
        </a>
    </p>
  )
}

export default Image;