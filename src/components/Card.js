import React, { useState } from "react";
import parse from 'html-react-parser';
import '../styles/Cards.scss';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Card = (props) => {
  const flickrURL = "https://www.flickr.com/photos/";
  const hasTags = (props.item.tags !== "") ? true : false;
  const itemTitle = (props.item.title !== " ") ? props.item.title : "Photo";
  const itemURL = flickrURL + props.item.pathalias + "/" + props.item.id;
  const author = props.item.pathalias !== null ? props.item.pathalias : props.item.owner;
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const toggle = () => setIsTagsOpen(!isTagsOpen);

  const hasDescr = props.item.description._content.trim('') ? true : false; 

  const tagArr = props.item.tags.split(' ');
  
  let newTags = tagArr
    .filter(item => {return item.length > -1})
    .map(item => {
      const tagURL = flickrURL + 'tags/' + item;
      item = `<a href="${tagURL}">#${item}</a>  `
      return parse(item);
    });
  
  return (
    <LazyLoad height={450} offset={-200}>
      <li>
          <p className="image">
              <a href={itemURL} title={itemTitle}>
                  <img alt={itemTitle} src={props.item.url_s} /> 
              </a>
          </p>
          <p className="author">
            <a href={itemURL} title={itemTitle}>
                {itemTitle} 
            </a> <span>by</span> <a href={flickrURL + author}>{author}</a>
          </p>
          <p className="descr-wrp">
            { hasDescr ? (
              <>
              <strong> Description: </strong> {props.item.description._content}
              </>
            )
            : null
            }
          </p>
          
          { hasTags ? 
            <Tags className={isTagsOpen ? "tags-open" : ""}>
              <span className="tags-h" onClick={toggle}> Tags </span>
              <span className="tags">{newTags}</span>
            </Tags>
          : null
          }
      </li>
    </LazyLoad>
  )
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
`

const Tags = styled.p`
  display: block;
  text-align: center;
`
export {Card, List, Tags};