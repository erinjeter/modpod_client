import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import APIURL from "../../../helpers/environment";

const ReviewCreate = (props) => {
  const [review, setReview] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/favorites/`, {
      method: "POST",
      body: JSON.stringify({ favorites: { review: review } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((favoritesData) => {
        console.log(favoritesData);
        setReview("");
        props.fetchPodcasts();
      });
  };

  return (
    <>
      <h3>Log a Review</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="review" />
          <Input
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default ReviewCreate;
