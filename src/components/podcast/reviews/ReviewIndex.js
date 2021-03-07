import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import ReviewCreate from "./ReviewCreate";
import ReviewEdit from "./ReviewEdit";

const ReviewIndex = (props) => {
  const [reviews, setReviews] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [reviewToUpdate, setReviewToUpdate] = useState({});

  const fetchReviews = () => {
    fetch(`http://localhost:3000/favorites/1`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setReviews(json.results);
      });
  };

  const editUpdateReview = (review) => {
    setReviewToUpdate(review);
    console.log(review);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Container>
      {/* <ReviewTable reviews={reviews} editUpdateReview={editUpdateReview}
                   updateOn={updateOn} fetchReviews={fetchReviews} token={props.token}/> */}
      <Form onSubmit={fetchReviews}>
        <FormGroup>
          <Label htmlFor="reviews">Add a review:</Label>
          <Input
            name="reviews"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" color="success" onClick={() => setReviews()}>
          submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewIndex;
