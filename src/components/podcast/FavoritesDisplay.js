import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardFooter,
  CardBody,
  Collapse,
  Col,
  Row,
  Container,
} from "reactstrap";
import FavoritesFetch from "./FavoritesFetch";
import { useEffect, useState } from "react";
import ReviewIndex from "./reviews/ReviewIndex";
// import FavoritesCard from "./FavoritesCard";

const baseURL = "https://listen-api.listennotes.com/api/v2";


const FavoritesDisplay = (props) => {

    const [fPodcasts, setFPodcasts] = useState([]);


    var myHeaders = new Headers();
    myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };


    const apiFetch = () => {
      fetch(`${baseURL}/podcasts/${props.podcast}`, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          setFPodcasts(json);
          console.log(json)
        });
    };

    useEffect(() => {
      apiFetch();
    }, []);

    return (
      <Card>
        <CardBody>
          <CardTitle>{fPodcasts?.title}</CardTitle>
        <ReviewIndex />
        </CardBody>
      </Card>
    );
  };

  export default FavoritesDisplay;