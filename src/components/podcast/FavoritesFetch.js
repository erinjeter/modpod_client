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
  CardColumns,
} from "reactstrap";
import FavoritesDisplay from "./FavoritesDisplay";
import APIURL from "../../helpers/environment";
import ReviewEdit from "./reviews/ReviewEdit";
// import ReviewIndex from "./reviews/ReviewIndex";
import APIURL from "../../helpers/environment";

const baseURL = "https://listen-api.listennotes.com/api/v2";
const FavoritesFetch = () => {
  //FETCH FROM FAVORITES TABLE
  const [allFaves, setAllFaves] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [reviewToUpdate, setReviewToUpdate] = useState({});

  const fetchFaves = () => {
    fetch(`${APIURL}/favorites/mine`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAllFaves(json);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFaves();
  }, []);
  return (
    <div>
      <CardColumns
        className="col d-flex align-content-start flex-wrap"
        style={{ marginTop: "2rem" }}
      >
        {allFaves.map((podcast) => (
          <FavoritesDisplay
            podcast={podcast.podcastid}
            id={podcast.id}
            cast={podcast}
          />
        ))}

        {console.log(allFaves)}
      </CardColumns>
    </div>
  );
};
export default FavoritesFetch;
