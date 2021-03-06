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

    const favesFetch = () => {
      fetch(`${baseURL}/podcasts/${props.podcastid} `, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setFPodcasts(json.results);
          console.log(props.podcastid)
        });
    };

    useEffect(() => {
      favesFetch();
    }, []);

    return (
      <Card>
        <CardBody>
          <CardTitle>{setFPodcasts.title}</CardTitle>
        </CardBody>
      </Card>
    );
  };

  export default FavoritesDisplay;