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
import SendFave from "./Favorites";
//import CardDeck from 'react-bootstrap/CardDeck';
// import { CardColumns, CardDeck } from 'reactstrap';
import "./search.css";

const SearchResult = ({ podcast }) => {
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

export default SearchResult;
