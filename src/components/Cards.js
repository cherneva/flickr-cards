import React, { useState, useEffect } from "react";
import { SEARCHAPI } from '../constants';
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

    if (!hasError && (data.photos.photo !== undefined)) {
        showData = [...data.photos.photo].map((item, index) => <Card key={index} item={item} />);
    } else if (hasError){
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