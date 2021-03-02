import React from "react";
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

const sendFave = (id) => {
  fetch("https://localhost:3000/favorites/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      favorites: {
        podcastid: id,
      },
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const SearchResult = ({ podcast }) => {
  return (
    <div>
      <CardDeck style={{ width: "30%", height: "60%" }}>
        <Card key={podcast.id}>
          <CardImg top width="30%" src={podcast.image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{podcast.title_original}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>{podcast.description_original}</CardText>
            <Button>Submit</Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                sendFave(podcast.id);
              }}
            >
              Save Favorite
            </Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default SearchResult;
