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

const baseURL = "https://listen-api.listennotes.com/api/v2";

const FavoritesFetch = (props) => {
  //FETCH FROM FAVORITES TABLE
  const [allFaves, setAllFaves] = useState([]);

  const fetchFaves = () => {
    fetch("http://localhost:3000/favorites/mine", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }
    })
      .then((res) => res.json())
      .then ((logFave) => {
        setAllFaves(logFave)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFaves();
  }, []);

  console.log(allFaves);

  return (
  <div>
    <Button onClick={() => {
      console.log({allFaves})
    }}>See faves
    </Button>
    </div>);
}   

export default FavoritesFetch;
