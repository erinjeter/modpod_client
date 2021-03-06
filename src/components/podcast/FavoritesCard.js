import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardLink,
  CardDeck,
  CardFooter,
  CardBody,
  Col,
  Row,
  Container,
  Collapse,
} from "reactstrap";
import "./search.css";

const FavoritesCard = ({ podcast }) => {
  return (
    <>
      <Card
        body
        inverse
        style={{ backgroundColor: "darkorange", borderColor: "#333" }}
        className="p-3 col-2"
        key={podcast.id}
        id="searchCardCss"
      >
        <CardImg variant="top" src={podcast.image} />
        <CardBody>
          <CardTitle id="cardTitle" tag="h6">
            {podcast.title_original}
          </CardTitle>
          <CardText id="cardText">{podcast.description_highlighted}</CardText>
          {/* <Button color="info" size="lg" block>More Info</Button> */}

          <Button
            color="primary"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            Toggle
          </Button>
          <Collapse isOpen={isOpen}>
            <Card id="toggleCard">
              <CardBody>{podcast.description_original}</CardBody>
            </Card>
            <Button href={podcast.website} target="_blank">
              Listen Here
            </Button>
            <SendFave podcastid={podcast.id} />
          </Collapse>
        </CardBody>
      </Card>
    </>
  );
};

export default FavoritesCard;
