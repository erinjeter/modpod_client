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
  CardGroup,
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
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
      <>
      <CardGroup
        body
        inverse
        style={{ backgroundColor: "darkorange", borderColor: "#333", fontSize: "10px "}}
        className="p-2 col-2"
        key={fPodcasts.id}
        id="searchCardCss"
      >
        <CardImg src={fPodcasts?.image} top width="100%"/>
        <CardBody>
          <CardTitle id="cardTitle" tag="h6">
            {fPodcasts?.title}
          </CardTitle>
          <CardText id="cardText">{fPodcasts?.description}</CardText>
          {/* <Button color="info" size="lg" block>More Info</Button> */}

          <Button
            color="primary"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
           More Info
          </Button>
          <Collapse isOpen={isOpen}>
            <Card id="toggleCard">
              <CardBody>{fPodcasts?.description}</CardBody>
            </Card>
            <Button href={fPodcasts?.website} target="_blank">
              Listen Here
            </Button>
          </Collapse>
        </CardBody>
      </CardGroup>
    </>

    
    );
  };

  export default FavoritesDisplay;