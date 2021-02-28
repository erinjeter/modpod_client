import React from "react";

const FavoritesDisplay = () => {

    const showFaves = (id) => {
        fetch("https://localhost:3000/favorites/mine", {
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
          .then(res => { console.log(res) })
          .catch(err => console.log(err))
    }

  return (console.log("Faves go here"));
};

export default FavoritesDisplay;
