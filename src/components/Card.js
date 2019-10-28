import React, { useState } from "react";
import parse from 'html-react-parser';
import '../styles/Cards.scss';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Card = (props) => {
  const flickrURL = "https://www.flickr.com/photos/";
  const author = props.item.author.replace('nobody@flickr.com ("', '').replace('")', '');
  const authorURL = flickrURL+props.item.author_id;
  const hasTags = (props.item.tags !== "") ? true : false;
  const itemTitle = (props.item.title !== " ") ? props.item.title : "Photo";
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const toggle = () => setIsTagsOpen(!isTagsOpen);

  const getInfo = parse(props.item.description);

  const descr = getInfo.filter(item => {
    if(item.type === "p" && 
      item.key === "5" && 
      typeof item.props.children === 'string' && 
      item.props.children !== ' ') {
        return item.props.children;
    } else {
      return "";
   }
  })

  const hasDescr = (descr !== undefined && descr.length !== 0) ? true : false; 

  return (
    <LazyLoad height={450} offset={-200}>
      <li>
          <p className="image">
              <a href={props.item.link} title={itemTitle}>
                  <img alt={itemTitle} src={props.item.media.m} /> 
              </a>
          </p>
          <p className="author">
            <a href={props.item.link} title={itemTitle}>
                {itemTitle} 
            </a> <span>by</span> <a href={authorURL}>{author}</a>
          </p>
          { hasDescr ? (
            <>
            <strong> Description: </strong> {descr}
            </>
          )
          : null
          }
          
          { hasTags ? 
            <Tags onClick={toggle} className={isTagsOpen ? "tags-open" : ""}>
              <span className="tags-h"> Tags </span>
              <span className="tags">{props.item.tags.replace(/(^|\s+)/g, "$1#")}</span>
            </Tags>
          : null
          }
      </li>
    </LazyLoad>
  )
}

const List = styled.ul`
  display: block;
`

const Tags = styled.div`
  display: block;
  text-align: left;
`
export {Card, List, Tags};