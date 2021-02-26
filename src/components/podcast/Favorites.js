import React,{ useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Podcasts from './Podcasts';

const SaveFavorite = () => {
    const [fave, setFave] = useState('');

    useEffect(async () => {
        let savedFave = await localStorage.getItem('_Fav');
        if (savedFavorite) {
            setFave(savedFavorite);
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://localhost:3000/favorite', {
            method: 'POST',
            body: podcast,
            headers: new Header({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((setFave) => {
            console.log('fave-data:',fave);
            setFave('true')
        })
    }

return(
    <div>
        <button onClick={() => SaveFavorite}></button>
    </div>
)

export default Favorites;