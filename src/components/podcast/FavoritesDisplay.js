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

const FavoritesDisplay = () => {
  //FETCH FROM FAVORITES TABLE
  const myFaves = (props) => {
    const [allFaves, setAllFaves] = useState([]);

    fetch("https://localhost:3000/favorites/mine", {
      method: "GET",
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  //FETCH FROM THE API
  const getFaves = () => {
    var myHeaders = new Headers();
    myHeaders.append("X-ListenAPI-Key", "d92b6516b8234d67bb4fd1ed4dbdc66c");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const favesFetch = () => {
      fetch(`${baseURL}/podcasts/${myPodcasts}`, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setPodcasts(json.results);
        });
    };
  };

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
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

// export default FavoritesDisplay;
