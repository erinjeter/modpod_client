import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardFooter,
  CardBody,
  Col,
  Row,
  Container,
} from "reactstrap";

const baseURL = "https://listen-api.listennotes.com/api/v2";


const getFaves = ({podcast}) => {

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

    return (
      <>
        <Card
          body
          inverse
          style={{ backgroundColor: "darkorange", borderColor: "#333" }}
          className="p-5 col-2"
          key={podcast.id}
          id="searchCardCss"
        >
          <CardImg variant="top" src={podcast.image} />
          <CardBody>
            <CardTitle id="cardTitle" tag="h5">
              {podcast.title_original}
            </CardTitle>
            <CardText id="cardText">{podcast.description_original}</CardText>
            <Button color="info" size="lg" block>
              More Info
            </Button>
            <SendFave podcastid={podcast.id} />
          </CardBody>
        </Card>
      </>
    );
  };