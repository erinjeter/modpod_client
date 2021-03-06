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

const baseURL = "https://listen-api.listennotes.com/api/v2";

const FavoritesFetch = () => {
  //FETCH FROM FAVORITES TABLE
  const [allFaves, setAllFaves] = useState([]);

  let testFaves = async () => {await fetch("http://localhost:3000/favorites/mine", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })};


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
        .then(res => res.json())
        .then((logFave) => {
          setAllFaves(logFave);
        });
      // .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFaves();
  }, []);

  return (
    <div>
          {allFaves.map((podcast) => (
            <FavoritesDisplay podcast={podcast.podcastid}/>
          ))}
    </div>
  );
};

export default FavoritesFetch;
