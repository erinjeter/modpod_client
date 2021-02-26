import React,{ useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const Favorites = (props) => {
    const [saveFave, setSaveFave] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://localhost:3000/favorite', {
            method: 'POST',
            body: {/*this will be podcast id from the API*/} ,
            headers: new Header({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
        })
    }


return(
    //not sure what needs to go here?
)
}

export default Favorites;