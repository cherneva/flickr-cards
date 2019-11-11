import React from 'react';
import '../styles/Cards.scss';

const Description = (props) => {
  const descrData = ((props.item.description) && (props.item.description._content !== " ")) ? 
        props.item.description._content : "";
  const hasDescr = descrData.trim("") ? true : false; 
  const content = descrData.replace(/(<([^>]+)>)/ig,"");
  
  return (
    <p className="descr-wrp">
      { hasDescr ? (
        <>
        <strong> Description: </strong> {content}
        </>
      )
      : null
      }
    </p>
  )
}

export default Description;