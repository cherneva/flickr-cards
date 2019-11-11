import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Image from './Image';
import Author from './Author';
import Description from './Description';
import Tags from './Tags';
import '../styles/Cards.scss';

const Card = (props) => 
    <LazyLoad height={450} offset={-200}>
      <li>
          <Image item={props.item}/>
          <Author item={props.item}/>
          <Description item={props.item}/>
          <Tags item={props.item}/>
      </li>
    </LazyLoad>
 

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
`

export { Card, List };