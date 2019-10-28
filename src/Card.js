import React from "react";
// import parse from 'html-react-parser';
import './Cards.scss';
import LazyLoad from 'react-lazyload';

const Card = (props) => {
  const flickrURL = "https://www.flickr.com/photos/";
  const author = props.item.author.replace('nobody@flickr.com ("', '').replace('")', '');
  const authorURL = flickrURL+props.item.author_id;
  const hasTags = (props.item.tags !== "") ? true : false;
  const itemTitle = (props.item.title !== " ") ? props.item.title : "Photo";
  return (
    <LazyLoad height={650} offset={100}>
      <li className="card">
          <p className="image">
              <a href={props.item.link} title={itemTitle}>
                  <img alt={itemTitle} src={props.item.media.m} /> 
              </a>
          </p>
          <p className="author">
              <a href={props.item.link} title={itemTitle}>
                  {itemTitle} 
              </a> by <a href={authorURL}>{author}</a>
          </p>
          {/* {parse(props.item.description)} */}
          { hasTags ? 
          <span className="tags">Tags: {props.item.tags}</span>
          : null
          }
      </li>
    </LazyLoad>
  )
}

export default Card;