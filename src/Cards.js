import React, { useState, useEffect } from "react";
import './Cards.scss';
import Card from './Card';

const Cards = () => {
    const [data, setData] = useState({items: []});
    const [hasError, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let showData = "Something went wrong";

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(
          '/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tagmode=all&language=en-us'
        )

        if(!result.ok) Promise.reject({ status: result.status, statusText: result.statusText });

        // setData(result.data);
        result.json()
            .then(result => setData(result))
            .catch(err => setErrors(true))
        
        setIsLoading(false);
      };
      setIsLoading(true);
      fetchData();
      
    }, []);

    console.log(hasError);

    if (!hasError) {
        showData = data.items.map((item, index) => <Card key={index} item={item} />);
    } 

    return (   
        <>
        {isLoading ? (
            <div className="spinner">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        ) : (  
            <ul>
                {showData}
            </ul>
        )}
        
       </>
    );
    
};

export default Cards;