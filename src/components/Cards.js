import React, { useState, useEffect } from "react";
import '../styles/Cards.scss';
import {List, Card} from './Card';
import Spinner from './Spinner';

const Cards = () => {
    const apiURL = '/services/rest/?method=flickr.photos.search&api_key=40cc493960d2ee8399a7081c94b750e9&tags=lakes%2C+forest%2C+leaves%2C+trees%2C+macro&extras=description%2C%C2%A0owner_name%2C+tags%2C%C2%A0machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_s%2C+url_mdescription%2C%C2%A0owner_name%2C+tags%2C%C2%A0url_m&format=json&nojsoncallback=1&api_sig=84068a060fe1d7b603f89f7ed8d047c8';
    const [data, setData] = useState({photos: []});
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

    if (!hasError && (data.photos.photo !== undefined)) {
        showData = [...data.photos.photo].map((item, index) => <Card key={index} item={item} />);
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