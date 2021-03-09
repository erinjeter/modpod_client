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
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import FavoritesFetch from "./FavoritesFetch";
import { useEffect, useState } from "react";
import ReviewIndex from "./reviews/ReviewIndex";
// import FavoritesCard from "./FavoritesCard";

const baseURL = "https://listen-api.listennotes.com/api/v2";

const FavoritesDisplay = (props) => {
  const [fPodcasts, setFPodcasts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editReview, setEditReview] = useState(props.cast.review);

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
        console.log(json);
      });
  };

  const reviewUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/favorites/update/${props.id}`, {
      method: "PUT",
      body: JSON.stringify({ favorites: { review: editReview } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    }).then((res) => {
      console.log(props.id, props.cast.review, editReview);
      // props.review();
      // props.updateOff();
    });
  };

  useEffect(() => {
    apiFetch();
    console.log("test");
  }, []);

  const deleteFave = (event) => {
    // event.preventDefault();
    fetch(`http://localhost:3000/favorites/delete/${props.id}`, {
      method: "DELETE",
      // body: JSON.stringify({favorites: {review: editReview}}),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fave Deleted", data);
      });
  };
  return (
    <>
      <Card
        body
        inverse
        style={{
          backgroundColor: "darkorange",
          borderColor: "#333",
          fontSize: "10px ",
        }}
        className="p-3 col-2"
        key={fPodcasts.id}
        id="searchCardCss"
      >
        <CardImg src={fPodcasts?.image} top width="100%" />
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
            {/* <ReviewIndex /> */}
            <Form onSubmit={reviewUpdate}>
              <FormGroup>
                <Label htmlFor="review"> Edit Review:</Label>
                <Input
                  name="review"
                  value={editReview}
                  onChange={(e) => setEditReview(e.target.value)}
                />
              </FormGroup>
              <Button
                type="submit"
                color="success"
                style={{ marginBottom: "1rem" }}
              >
                Submit Review
              </Button>
            </Form>
          </Collapse>
          <Button
            color="danger"
            onClick={() => {
              deleteFave(props.id);
            }}
          >
            Remove Favorite
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default FavoritesDisplay;
