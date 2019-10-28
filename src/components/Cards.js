import React, { useState, useEffect } from "react";
import '../styles/Cards.scss';
import {List, Card} from './Card';
import Spinner from './Spinner';

const Cards = () => {
    const apiURL = '/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tagmode=all&lang=en-us';
    const [data, setData] = useState({items: []});
    const [hasError, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let showData = "Something went wrong";

    const fetchData = async () => {
      const result = await fetch(apiURL)
      result.json()
          .then(result => setData(result))
          .catch(err => setErrors(err))
      
      setIsLoading(false);
    };

    useEffect(() => {
      setIsLoading(true);
      fetchData();
    }, []);

    if (!hasError) {
        showData = data.items.map((item, index) => <Card key={index} item={item} />);
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