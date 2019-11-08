import React, { useState, useEffect } from "react";
import { SEARCHAPI, EXCLUDE_TAGS } from '../constants';
import { List, Card } from './Card';
import Spinner from './Spinner';
import '../styles/Cards.scss';

const Cards = () => {
    const [data, setData] = useState({photos: []});
    const [hasError, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let showData;

    const fetchData = async () => {
      const result = await fetch(SEARCHAPI);
      result.json()
          .then(result => setData(result))
          .catch(err => setErrors(err))
      setIsLoading(false);
    };

    useEffect(() => {
      setIsLoading(true);
      fetchData();
    }, []);

    if (!hasError && data.photos.photo !== undefined) {
        
        showData = [...data.photos.photo]
            .filter(item => {
                let itemTags = item.tags.split(' ');
                return itemTags.filter(item => EXCLUDE_TAGS.includes(item)).length === 0
            })
            .filter(item => {
                return (item.url_m !== undefined && item.url_l !== undefined)
            })
            .map((item, index) =>  <Card key={index} item={item} /> );
    } else {
        showData = "Something went wrong";
    }
    
    
    return (   
        <>
            {isLoading ? (
                <Spinner>
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </Spinner>
            ) : (  
                <List>
                    {showData}
                </List>
            )}
        </>
    );
    
};

export default Cards;