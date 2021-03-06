import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/md";
import APIURL from "../../helpers/environment";

const SendFave = ({ podcastid }) => {
  const [faves, setFaves] = useState([]);

  const getFave = () => {
    fetch(`${APIURL}/favorites/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        favorites: {
          podcastid: podcastid,
          review: "",
          rating: "",
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFaves(json.results);
      });
  };

  return (
    <div>
      <Button onClick={() => getFave()}>Save Favorite</Button>
    </div>
  );
};
export default SendFave;
