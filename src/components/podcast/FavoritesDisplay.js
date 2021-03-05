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


const FavoritesDisplay = () => {

    const [fPodcasts, setFPodcasts] = useState([]);

    var myHeaders = new Headers();
    myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const favesFetch = () => {
      fetch(`${baseURL}/podcasts/3fdd0021fa0246c694606ad7ce54a71d`, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setFPodcasts(json.results);
        });
    };

    useEffect(() => {
      favesFetch();
    }, []);

    return (
      <>
      <Card>
        <CardBody>
          <CardTitle>{setFPodcasts.title}</CardTitle>
        </CardBody>
      </Card>
      </>
    );
  };

  export default FavoritesDisplay;