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
        className="p-3 col-2"
        key={podcast.id}
        id="searchCardCss"
        style={{
          fontSize: "12px ",
        }}
      >
        <CardImg variant="top" src={podcast.image} />
        <CardBody>
          <CardTitle
            id="cardTitle"
            tag="h6"
            style={{ color: "rgb(51, 51, 51)" }}
          >
            {podcast.title_original}
          </CardTitle>

          <CardText id="cardText" style={{ color: "rgb(51, 51, 51)" }}>
            {podcast.description_highlighted}{" "}
          </CardText>

          <Button
            style={{ backgroundColor: "rgb(2, 120, 180)" }}
            // color="primary"

            onClick={toggle}
            style={{ marginBottom: "1rem" }}
            style={{ marginTop: "2rem" }}
          >
            More Info
          </Button>
          <Collapse isOpen={isOpen}>
            <Card id="toggleCard" style={{ marginTop: "1rem" }}>
              <CardBody style={{ marginTop: "1rem" }}>
                {podcast.description_original}
              </CardBody>
            </Card>
            <Button
              href={podcast.website}
              target="_blank"
              style={{ marginBottom: "1rem" }}
            >
              Listen Here
            </Button>
          </Collapse>
          <SendFave podcastid={podcast.id} style={{ marginTop: "1rem" }} />
        </CardBody>
      </Card>
    </>
  );
};

export default SearchResult;
