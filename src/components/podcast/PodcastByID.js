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

const baseURL = "https://listen-api.listennotes.com/api/v2";
const id = "b8f6fc673eed46b89f6c2d9439c11757";

const IdFetch = () => {
  fetch(`${baseURL}/podcasts/${id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
  return console.log("results");
};

export default IdFetch;
