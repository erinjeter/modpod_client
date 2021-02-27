import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';


const SearchResult = ({ podcast }) => {
  return (
    <div>
       <CardDeck style={{width:"30%", height:"60%"}}  >
      <Card key={podcast.id} >
        <CardImg top width="30%" src={podcast.image} alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h5">{podcast.title_original}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{podcast.description_original}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </CardDeck>
    </div>
  );
};


export default SearchResult;
