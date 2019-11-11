import React from 'react';
import Toggle from './Toggle';
import Modal from './Modal';
import '../styles/Cards.scss';

const Image = (props) => {
  const itemTitle = (props.item.title && props.item.title !== " ") ? props.item.title : "Photo";

  return (
    <p className="image">
        <Toggle toggle={show => 
          <span onClick={show}>
            <img alt={itemTitle} src={props.item.url_m} /> 
          </span>
          }content={hide => (
            <Modal>
              <div onClick={hide} className="modal">
                <img alt={itemTitle} src={props.item.url_l} /> 
              </div>
            </Modal> )}
          />
        
    </p>
  )
}

export default Image;