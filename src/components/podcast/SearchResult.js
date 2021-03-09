import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Collapse,
} from "reactstrap";
import SendFave from "./Favorites";

//import CardDeck from 'react-bootstrap/CardDeck';
import { useState } from "react";
import "./search.css";

const SearchResult = ({ podcast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Card
        body
        inverse
        style={{ backgroundColor: "darkorange", borderColor: "#333" }}
        className="p-3 col-2"
        key={podcast.id}
        id="searchCardCss"
      >
        <CardImg variant="top" src={podcast.image} />
        <CardBody>
          <CardTitle id="cardTitle" tag="h6">
            {podcast.title_original}
          </CardTitle>
          <CardText id="cardText">{podcast.description_highlighted}</CardText>

          <Button
            color="primary"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            More Info
          </Button>
          <Collapse isOpen={isOpen}>
            <Card id="toggleCard">
              <CardBody>{podcast.description_original}</CardBody>
            </Card>
            <Button href={podcast.website} target="_blank">
              Listen Here
            </Button>
          </Collapse>
          <SendFave podcastid={podcast.id} />
        </CardBody>
      </Card>
    </>
  );
};

export default SearchResult;
