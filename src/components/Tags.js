import React, { useState } from 'react';
import { FLICKPHOTOS } from '../constants';
import parse from 'html-react-parser';
import styled from 'styled-components';
import '../styles/Cards.scss';

const Tags = (props) => {
  const tagsData = (props.item.tags) && (props.item.tags !== '') ? props.item.tags : "";
  const hasTags = (tagsData !== '') ? true : false;
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const toggle = () => setIsTagsOpen(!isTagsOpen);
  const tagArr = tagsData.split(' ');
  
  let newTags = tagArr
    .filter(item => {return item.length > -1})
    .map(item => {
      const tagURL = FLICKPHOTOS + 'tags/' + item;
      item = `<a href='${tagURL}'>${item}</a>  `
      return parse(item);
    });
  
  return (
    <Tag className={isTagsOpen ? 'tags-wrp tags-open' : 'tags-wrp'}>
        { hasTags ? 
          <>
            <span className='tags-h' onClick={toggle}> Tags </span>
            <span className='tags'>{newTags}</span>
          </>
            : null
          }
    </Tag>
  )
}

const Tag = styled.p`
  display: block;
  text-align: center;
`
export default Tags;