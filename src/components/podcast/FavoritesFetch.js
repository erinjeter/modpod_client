import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import FavoritesDisplay from "./FavoritesDisplay";
import ReviewEdit from "./reviews/ReviewEdit";
// import ReviewIndex from "./reviews/ReviewIndex";
const baseURL = "https://listen-api.listennotes.com/api/v2";
const FavoritesFetch = () => {
  //FETCH FROM FAVORITES TABLE
  const [allFaves, setAllFaves] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [reviewToUpdate, setReviewToUpdate] = useState({});

  const fetchFaves = () => {
    fetch("http://localhost:3000/favorites/mine", {
      method: "GET",      
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then(json => { 
        setAllFaves(json);
        })
      .catch((err) => console.log(err));
  };

    useEffect(() => {
    fetchFaves();
  }, []);
  return (
    <div>
          {allFaves.map((podcast) => (
            <FavoritesDisplay podcast={podcast.podcastid} id={podcast.id} cast={podcast}/> 
           
          )) }
          
          {console.log(allFaves)}
          
    </div>
  );
};
export default FavoritesFetch;